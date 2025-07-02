const app = require("./src/app"); // asegúrate de que esta ruta sea correcta

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
