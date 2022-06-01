// 設定變數
const express = require("express")
const app = express()
const port = 3000 || process.env.PORT
const { engine } = require("express-handlebars")
const bodyParser = require("body-parser")
const routes = require("./routes")


// 引用 mongoose
require("./config/mongoose")

// 設定 express-handlebars
app.set("view engine", "hbs")
app.engine("hbs", engine({ defaultLayout: "main", extname: ".hbs" }))

// 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

// 將 request 導入路由器
app.use(routes)


// 使用靜態檔案
app.use(express.static("public"))

// 設定 port 監聽
app.listen(3000, () => console.log(`App is running on http://localhost:${port}`))