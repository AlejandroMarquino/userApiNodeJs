"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.post('/register', (req, res) => {
    console.log(req.body);
    res.send('Registrado con éxito');
});
app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('Logueado con éxito');
});
app.get('/', (req, res) => {
    res.send('Bienvenido al registro. NodeJS + Express + JWT');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
