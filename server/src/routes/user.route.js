import express from "express";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getOneUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
