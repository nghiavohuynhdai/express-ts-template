import express, { urlencoded } from 'express'
import cors from 'cors'
import logger from '@configs/log/log.config'
import path from 'path'
import GlobalExceptionMiddleware from '@middlewares/global-exception.middleware'

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  urlencoded({
    extended: true
  })
)
app.use(express.json())

app.use(logger)

/* --- Routes --- */

/* --- End Routes --- */
app.use(GlobalExceptionMiddleware.handle)

export { app }
