console.log()

const express = require('express')
const { join } = require('path')

// app
const app = express()

// middleware
app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
