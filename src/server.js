/**
 * Created by trungquandev.com's author on 16/10/2019.
 * src/server.js
 */
const express = require("express");
const app = express();
const initAPIs = require("./routes/api");

// Cho phép các api của ứng dụng xử lý dữ liệu từ body của request
app.use(express.json());

// Khởi tạo các routes cho ứng dụng
initAPIs(app);

// chọn một port mà bạn muốn và sử dụng để chạy ứng dụng tại local
let port = 8017;
app.listen(port, () => {
  console.log(`Hello trungquandev.com, I'm running at localhost:${port}/`);
});
