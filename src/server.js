import Express from "express";
import {config} from "dotenv";

config();

const PORT = process.env.PORT;
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get("/", (_, res)=>{
    res.send("Olá, Mundo!")
});

app.listen(PORT, ()=>{
    console.log(`Rodando em: http://localhost:${PORT}`)
});