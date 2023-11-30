import { DeleteItemCommand, DynamoDBClient, PutItemCommand, QueryCommand } from "@aws-sdk/client-dynamodb";

export async function getAllTasks(userId) {
  // TODO
}

export async function getTasksCompleted(userId, completed) {
  // TODO
}

export async function getTask(userId, description) {
  // TODO
}

export async function getTaskById(userId, task_id) {
  // TODO
}

export async function putTask(task) {
  // TODO
}

export async function deleteTask(task) {
  // TODO
}
