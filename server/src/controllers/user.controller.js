import User from "../models/user.model.js";

export const createUser = async (req, res, next) => {
  try {
    const doc = new User({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    });

    const user = doc.save();

    console.log(user);

    res.status(200).json({ message: "Пользователь создан!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось создать пользователя!",
    });
  }
};
