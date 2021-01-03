import * as express from "express";
const app = express();

import todoRouter from './routes/todo';

const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send(`
    <h1>TypeScript Express</h1>
`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todo', todoRouter);

if(!module.parent) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });
}

export default app;
