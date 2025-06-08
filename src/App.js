import express from 'express';
const app = express();
const port = 3000;

app.get('/api/sum', (req,res) => {
    res.send()
})

app.listen(port, ()=> {
    console.log(`listen to port ${port}`);
})