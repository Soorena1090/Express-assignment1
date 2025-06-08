import express from "express";
const app = express();
const port = 3000;

app.get("/api/sum", (req, res) => {
  const a = +req.query.a;
  const b = +req.query.b;
  const result = a + b;

  const response = {
    result: result,
  };
  res.send(response);
});

app.listen(port, () => {
  console.log(`listen to port ${port}`);
});
