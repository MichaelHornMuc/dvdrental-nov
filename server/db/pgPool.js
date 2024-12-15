import pg from 'pg'
import 'dotenv/config'

const { Pool } = pg

 const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
})

export default pool