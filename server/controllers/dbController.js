const Task = require('../models/Task')

async function getTasks(req, res) {
   try {
      const tasks = await Task.find()
      res.json(tasks)
   } catch (err) {
      res.status(500).json({ error: 'Failed to get tasks' })
   }
}

async function addTask(req, res) {
   try {
      const { title } = req.body
      const newTask = await Task.create({ title })
      res.status(201).json(newTask)
   } catch (err) {
      res.status(400).json({ error: 'Failed to add task' })
   }
}

async function toggleTask(req, res) {
   try {
      const task = await Task.findById(req.params.id)
      if (!task) return res.status(404).json({ error: 'Task not found' })
      task.done = !task.done
      await task.save()
      res.json(task)
   } catch (err) {
      res.status(500).json({ error: 'Failed to toggle task' })
   }
}

async function deleteTask(req, res) {
   try {
      await Task.findByIdAndDelete(req.params.id)
      res.sendStatus(204)
   } catch (err) {
      res.status(500).json({ error: 'Failed to delete task' })
   }
}

module.exports = {
   getTasks,
   addTask,
   toggleTask,
   deleteTask
}
