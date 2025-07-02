const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Crear
router.post("/", userController.createUser);

// Obtener todos los usuarios
router.get("/", userController.getUsers);

// Obtener un usuario por ID
router.get("/:id", userController.getUserById);

// Actualizar un usuario por ID
router.put("/:id", userController.updateUser);

// Eliminar un usuario por ID
router.delete("/:id", userController.deleteUser);

module.exports = router;
