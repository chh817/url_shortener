// 設定變數
const express = require("express")
const app = express()
const port = 3000

// 引用 mongoose
require("./config/mongoose")

// 設定 port 監聽
app.listen(3000, () => console.log(`App is running on http://localhost:${port}`))