const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // Cho phép xử lý JSON body

// Route GET
app.get('/', (req, res) => {
  res.send('Xin chào từ Node.js + Express!');
});

// Route POST
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.send(`Xin chào, ${name}!`);
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
