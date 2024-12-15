import 'dotenv/config'
import express from 'express'
import pool from './db/pgPool.js'
import cors from 'cors'
import bcrypt from 'bcrypt'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8000


app.get('/customers', async (req, res) => {
  try {
    const data = await pool.query('SELECT * FROM customers')
    if (!data) throw new Error('No data found!')
    const consumers = await res.json(data.rows)
    
  } catch (error) {
    console.log(error.message)
  }
})

app.get('/customers/:id', async (req, res) => {
  try {
    const data = await pool.query('SELECT * FROM customers WHERE id = $1', [
      req.params.id,
    ])
    if (!data.rows.length) throw new Error('User not found')

    const singleItem = await res.json(data.rows)
  } catch (error) {
    console.log(error.message)
  }
})

app.post('/customers', async (req, res) => {  
  const {firstname, lastname, password, join_date} = req.body

  const bcryptPass = await bcrypt.hash(password, 10)
  console.log(bcryptPass)
  try {
    const newCustomer = await pool.query(
      'INSERT INTO customers(first_name, last_name, join_date, password) VALUES ($1, $2, $3, $4)',
      [
        firstname,
        lastname,
        join_date,
        bcryptPass,
      ]
    )
  } catch (error) {
    console.log(error)
  }
})

app.put('/customers/:id', async (req, res) => {
  try {
    const toUpdateCustomer = await pool.query(
      'UPDATE customers SET first_name = $1, last_name = $2 WHERE id = $3',
      ['Marvin', 'Horn', req.params.id]
    )
  } catch (error) {
    console.log(error)
  }
})

app.delete('/customers/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM customers WHERE id = $1', [req.params.id])
  } catch (error) {
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`)
})
