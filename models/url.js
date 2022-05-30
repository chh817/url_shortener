// 設定變數
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const urlSchema = new Schema({
  originalUrl: {
    type: String,
    required: true
  },
  shortenUrl: {
    type: String,
    required: true
  }
})

// 匯出 Url model 模組
module.exports = mongoose.model("Url", urlSchema)