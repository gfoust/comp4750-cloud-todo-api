import * as db from '../../db.js';

export async function getAllItems(req, res) {
  let items = await db.getAllTasks(req.params.userId);
  res.json(items);
}

export async function postItem(req, res) {
  let task = {
    userId: req.params.userId,
    taskId: new Date().getTime(),
    description: req.body.description,
    completed: false
  };

  await db.putTask(task);
  res.json(task);
}

export async function patchItem(req, res) {
  let task = await db.getTaskById(req.params.userId, req.params.taskId);

  if (task) {
    task.completed = req.body.completed ? true : false;
    await db.putTask(task);
    res.json(task);
  }
  else {
    res.status(404);
    res.json({ message: "Item not found" });
  }
}

export async function deleteItem(req, res) {
  let task = await db.getTaskById(req.params.userId, req.params.taskId);

  if (task) {
    await db.deleteTask(task);
    res.json(task);
  }
  else {
    res.status(404);
    res.json({ message: "Item not founc" });
  }
}