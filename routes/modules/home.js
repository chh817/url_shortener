// 設定變數
const express = require("express")
const router = express.Router()

// 設定路由
// URL 首頁
router.get("/", (req, res) => res.render("index"))

// 匯出路由模組
module.exports = router