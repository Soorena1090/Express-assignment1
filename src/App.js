import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

// app.get("/api/sum", (req, res) => {
//   const a = +req.query.a;
//   const b = +req.query.b;
//   const result = a + b;

//   const response = {
//     result: result,
//   };
//   res.send(response);
// });

// app.post("/api/sort", (req, res) => {
//   const numbers = req.body.numbers;
//   const order = req.body.order;
//   const orderNumbers = numbers.sort((a, b) => {
//     if (order === "asc") {
//       return a - b;
//     } else if (order === "desc") {
//       return b - a;
//     } else {
//       return a - b;
//     }
//   });

//   res.send({
//     result: orderNumbers,
//   });
// });

app.post("/api/calculate", (req, res) => {
  const firstNumber = req.body.a;
  const secondNumber = req.body.b;
  const operation = req.body.operation;
  let result;

  switch (operation) {
    case "add":
      result = firstNumber + secondNumber;
      break;
    case "subtract":
      result = firstNumber - secondNumber;
      break;
    case "multiply":
      result = firstNumber * secondNumber;
      break;
    case "divide":
      result = firstNumber / secondNumber;
      break;
    default:
      result = firstNumber + secondNumber;
  }

  res.send({
    result: result,
  });
});

app.listen(port, () => {
  console.log(`listen to port ${port}`);
});
