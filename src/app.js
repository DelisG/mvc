import express, { json } from 'express'; //importando o express
import index from './routes/index.js';

const app = express(); // esta variável recebe o express, e 

app.use(json()); //framework utilizado em formato de json
app.use("/", index); //caminho para o index



export default app; //exportando o app.js