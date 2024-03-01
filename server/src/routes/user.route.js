import express from "express";
import {
  createUser,
  //   getAllUsers,
  //   getOneUser,
  //   updateUser,
  //   deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/createUser", createUser);
// router.get("/users", getAllUsers);
// router.get("/users/:id", getOneUser);
// router.patch("/users/:id", updateUser);
// router.delete("/users/:id", deleteUser);

export default router;
