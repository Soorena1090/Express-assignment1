import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/sum", (req, res) => {
  const a = +req.query.a;
  const b = +req.query.b;
  const result = a + b;

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send({
      error: "a and b must be numbers.",
    });
  }

  const response = {
    result: result,
  };
  res.send(response);
});

app.post("/api/sort", (req, res) => {
  const numbers = req.body.numbers;
  const order = req.body.order;

  if (isNaN(numbers)) {
    return res.status(400).send({
      error: "numbers must be number",
    });
  }
  const orderNumbers = numbers.sort((a, b) => {
    if (order === "asc") {
      return a - b;
    } else if (order === "desc") {
      return b - a;
    } else {
      return res.status(400).send({
        error: "please choose between 'asc' and 'desc' methods",
      });
    }
  });

  res.send({
    result: orderNumbers,
  });
});

app.post("/api/calculate", (req, res) => {
  const firstNumber = req.body.a;
  const secondNumber = req.body.b;
  const operation = req.body.operation;
  let result;

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return res.status(400).send({
      error: "Both 'a' and 'b' must be valid numbers.",
    });
  }

  if (operation === "divide" && secondNumber === 0) {
    return res.status(400).send({
      error: "Divide by zero is not alowed.",
    });
  }

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
