import { Router } from 'express';
import bodyParser from 'body-parser';
import * as todo from './todo.js';

export const router = Router();

router.use(bodyParser.json());
router.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "HEAD,OPTIONS,GET,POST,PATCH,DELETE");
  res.set("Access-Control-Allow-Headers", "Content-Type,Content-Length");
  if (req.method == "OPTIONS") {
    res.send("Done");
  }
  else {
    next();
  }
});

router.get('/:userId', todo.getAllItems);
router.post('/:userId', todo.postItem);
router.patch('/:userId/:taskId', todo.patchItem);
router.delete('/:userId/:taskId', todo.deleteItem);

router.use((req, res) => {
  res.status(404);
  res.json({
    message: "Not found"
  });
});

router.use((req, res, next, error) => {
  res.status(500);
  res.send(String(error));
});

export default router;
