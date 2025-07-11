// Require express and create a router
const express = require('express')
const router = express.Router()

// Require your controller
const db = require('../controllers/dbController')

// Wire each of the following routes to its controller method:
// GET    /tasks         => db.getTasks
router.get('/api/tasks', db.getTasks)

// POST   /tasks         => db.addTask
router.post('/api/tasks', db.addTask)

// PATCH  /tasks/:id     => db.toggleTask
router.patch('/api/tasks/:id', db.toggleTask)

// DELETE /tasks/:id     => db.deleteTask
router.delete('/api/tasks/:id', db.deleteTask)

// Export the router
module.exports = router
