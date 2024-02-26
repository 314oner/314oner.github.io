import { Page } from '@playwright/test'
import { readdirSync } from 'fs'
import { join as pathJoin } from 'path'
import config from './config'

export const assets = readdirSync(config.assetsDir, { withFileTypes: true })
  .filter(item => item.isFile() && item.name[0] !== '.')
  .map(item => pathJoin(config.assetsDir, item.name))


export async function login(page: Page) {
  return true;
}

export async function logout(page: Page) {
  return true;
}

export async function validateAttachment(attachment: any, file: string) {
  return true
}
