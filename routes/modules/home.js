// 設定變數
const express = require("express")
const router = express.Router()
const url = require("../../models/url")


// 設定路由
// URL 首頁
router.get("/", (req, res) => res.render("index"))

// 縮短網址
router.post("/", (req, res) => {
  const urlInput = req.body.url.trim().toLowerCase()
  const host = req.headers.host
  if (urlInput === "") return res.redirect("/")
  url.findOne({ originalUrl: urlInput })
    .lean()
    .then(urlData => {
      res.render("index", {})
      if (urlData === "") {
        res.render("index", {})
        url.create(urlInput, shortenUrl)
      }
    })
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router