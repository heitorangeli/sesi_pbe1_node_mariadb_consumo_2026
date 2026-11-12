const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Importação automática das rotas
const usuarioRoutes = require('./src/routes/usuario.routes');
const consumoRoutes = require('./src/routes/consumo.routes');

app.use(usuarioRoutes);
app.use(consumoRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
