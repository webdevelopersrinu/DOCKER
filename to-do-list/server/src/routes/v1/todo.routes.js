import { Router } from "express";
import {
  listTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../../controllers/todo.controller.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { validate } from "../../middlewares/validate.middleware.js";
import {
  createTodoSchema,
  updateTodoSchema,
  idParamSchema,
} from "../../validations/todo.validation.js";

const router = Router();

router.get("/", asyncHandler(listTodos));
router.post("/", validate({ body: createTodoSchema }), asyncHandler(createTodo));
router.patch(
  "/:id",
  validate({ params: idParamSchema, body: updateTodoSchema }),
  asyncHandler(updateTodo)
);
router.delete("/:id", validate({ params: idParamSchema }), asyncHandler(deleteTodo));

export default router;
