import { defineConfig } from '@prisma/config'
import dotenv from 'dotenv'

dotenv.config() // for .env file

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL!,
  },
})


//shows me where functions are and configures how they work.