import { RootState } from '@/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const lightThemeName: string = 'light';
const darkThemeName: string = 'dark';

export default function ThemeProvider({ children }: any) {
  const { theme } = useSelector((state: RootState) => state.theme);
  const [themeScheme] = useState(theme);
  useEffect(() => {
    document.documentElement.classList.add(
      theme === 'light' ? lightThemeName : darkThemeName,
    );

    document.documentElement.classList.remove(
      theme === 'light' ? darkThemeName : lightThemeName,
    );

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute(
        'content',
        themeScheme === 'light' ? '#ffffff' : '#020817',
      );
  }, [theme]);

  return (
    <div className={theme}>
      <div className="min-h-screen">{children}</div>
    </div>
  );
}
