import express, {Response, Request} from 'express';
import { sqlite3 } from 'sqlite3';
import jwt from "jsonwebtoken";

const app = express();
app.listen(3333, () => {
    console.log('App on.')
})