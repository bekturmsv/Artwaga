import User from "../models/user.model.js";

export const createUser = async (req, res, next) => {
  try {
    const doc = new User({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    });

    const user = await doc.save();

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось создать пользователя!",
    });
  }
};

export const getOneUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const doc = await User.findById(userId);

    if (!doc) {
      return req.status(404).json({
        message: "Пользователь не найден",
      });
    }

    res.json(doc);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить пользователя",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.updateOne(
      {
        _id: userId,
      },
      {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
      }
    );

    res.json({
      message: "Пользователь успешно обновлен",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось создать задачу",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const doc = await User.findByIdAndDelete({ _id: userId });

    if (!doc) {
      res.status(404).json({
        message: "Не удалось найти пользователя",
      });
    }

    return res.status(200).json({
      message: "Пользователь удален успешно!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось удалить пользователя",
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить пользователей",
    });
  }
};
