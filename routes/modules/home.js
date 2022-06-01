// 設定變數
const express = require("express")
const router = express.Router()
const Url = require("../../models/url")
const codeGenerate = require("../../generate_code")

// 設定路由
// URL 首頁
router.get("/", (req, res) => res.render("index"))

// 縮短網址
router.post("/", (req, res) => {
  const url = req.body.url.trim().toLowerCase()
  const host = req.headers.origin
  const lengthOfCode = 5
  const code = codeGenerate(lengthOfCode)
  Url.findOne({ url })
    .lean()
    .then(urlData => {
      if (urlData) return res.render("index", { host, code: urlData.code })
      res.render("index", { host, code })
      Url.create({ url, code })
    })
    .catch(error => console.log(error))
})

// 導回原網址
router.get("/:code", (req, res) => {
  const code = req.params.code
  Url.findOne({ code })
    .lean()
    .then(urlData => {
      if (urlData) return res.redirect(urlData.url)
      const baseUrl = "http://localhost:3000"
      const wrongUrl = new URL(code, baseUrl)
      res.render("error", { msg: "Page Not Found", wrongUrl })
    })

    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router