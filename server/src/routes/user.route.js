import express from "express";
import {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/createUser", createUser);
router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
