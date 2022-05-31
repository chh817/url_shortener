// 設定變數
const express = require("express")
const router = express.Router()
const Url = require("../../models/url")
const generateCode = require("././generate_code")


// 設定路由
// URL 首頁
router.get("/", (req, res) => res.render("index"))

// 縮短網址
router.post("/", (req, res) => {
  const urlInput = req.body.url.trim().toLowerCase()
  const host = req.headers.host
  const code = generateCode(5)
  if (urlInput === "") return res.redirect("/")
  Url.findOne({ originalUrl: urlInput })
    .lean()
    .then(urlData => {
      res.render("index", { host, code })
      if (urlData === "") {
        res.render("index", { host, code })
        Url.create(urlInput, code)
      }
    })
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router