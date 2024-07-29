import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { ConfigEnv, UserConfig, defineConfig, loadEnv } from 'vite';

export function wrapperEnv(envConf: any): any {
  const ret: any = {};

  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, '\n');
    realName =
      realName === 'true' ? true : realName === 'false' ? false : realName;

    if (envName === 'VITE_PORT') {
      realName = Number(realName);
    }
    if (envName === 'VITE_PROXY') {
      try {
        realName = JSON.parse(realName);
      } catch (error) {
        console.log(error);
      }
    }
    ret[envName] = realName;
    process.env[envName] = realName;
  }
  return ret;
}
export function getEnvConfig(
  match = 'VITE_GLOB_',
  confFiles = ['.env', '.env.production'],
) {
  let envConfig = {};
  confFiles.forEach((item) => {
    try {
      const env = dotenv.parse(
        fs.readFileSync(path.resolve(process.cwd(), item)),
      );
      envConfig = { ...envConfig, ...env };
    } catch (error) {
      console.error(`Ошибка парсинга переменных окружения:  ${item}`, error);
    }
  });

  Object.keys(envConfig).forEach((key) => {
    const reg = new RegExp(`^(${match})`);
    if (!reg.test(key)) {
      Reflect.deleteProperty(envConfig, key);
    }
  });
  return envConfig;
}

export default defineConfig((mode: ConfigEnv): UserConfig => {
  const env = loadEnv(mode.mode, process.cwd());
  const viteEnv = wrapperEnv(env);

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    preview: {
      port: 5001,
    },
    server: {
      host: '0.0.0.0',
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true,
      // https: true,
      proxy: {
        '^/proxy/.*': {
          target: 'http://127.0.0.1:8081',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/proxy/, ''),
        },
        '/uploads': {
          target: 'http://localhost:3001',
          changeOrigin: true,
        },
      },
    },
  };
});
