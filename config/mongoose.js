// 設定變數
const mongoose = require("mongoose")

// 設定連線到 mongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on("error", () => console.log("connection error!"))
// 連線成功
db.once("open", () => console.log("MongoDB connected!"))

// 匯出 db 連線模組
module.exports = db