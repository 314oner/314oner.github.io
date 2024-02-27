import { NestFactory } from '@nestjs/core'
import { ValidationPipe, Logger } from '@nestjs/common'

import { ApiModule } from './api.module'

import { NestExpressApplication } from '@nestjs/platform-express'
import { HttpExceptionFilter } from './common/filter/http-exception.filter'
import { TransformInterceptor } from './common/interceptor/transformInterceptor'

import { setupSwagger } from './setupSwagger'

import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { mw as requestIpMw } from 'request-ip'
const express = require('express')

import { logger } from './common/libs/log4js/logger.middleware'
import { generateKeys } from './common/utils/rsa'

const GlobalPrefix = process.env.GLOBAL_PREFIX
//generateKeys()
export async function startApi(port: number = 2999) {
  const app = await NestFactory.create<NestExpressApplication>(ApiModule)
  app.setGlobalPrefix(GlobalPrefix)
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(new TransformInterceptor())
  app.useGlobalPipes(new ValidationPipe())
  setupSwagger(app)
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 1000
    })
  )
  app.use(requestIpMw({ attributeName: 'ip' }))
  app.use(helmet())

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(logger)

  await app.listen(process.env.SERVER_PORT, '0.0.0.0')
  const serverUrl = await app.getUrl()
  Logger.log(`api: ${serverUrl}/${GlobalPrefix}`)
  Logger.log(`swagger: ${serverUrl}/${process.env.SWAGGER_PATH}/`)
}
//startApi()
