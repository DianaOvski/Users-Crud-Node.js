const User = require("../models/user.model");

// Crear usuario
exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const user = await User.create({ name, email, age });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

// Obtener uno por ID
exports.getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) res.json(user);
  else res.status(404).json({ error: "Usuario no encontrado" });
};

// Actualizar
exports.updateUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

  await user.update(req.body);
  res.json(user);
};

// Eliminar
exports.deleteUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

  await user.destroy();
  res.json({ message: "Usuario eliminado" });
};
