# url_shortener

## 簡介
使用 Express Handlebars 打造縮短網址產生器

### 功能
- 將輸入的原始網址轉換成格式化後的短網址
- 點擊 `copy` 按鈕複製短網址
- 使用短網址連向原始網址的網站

## 開發工具
- Node.js 16.15.0
- Express 4.18.1
- Express-Handlebars 6.0.6
- Body-Parser 1.20.0
- MongoDB Atlas
- Mongoose 6.3.4
- Bootstrap.js 5.0.2
- Popper.js 2.11.5

## 開始使用
1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地，透過終端機輸入
```zsh
git clone -b main https://github.com/chh817/url_shortener.git
```
3. 進入 url_shortener 資料夾，輸入
```zsh
npm i
```
4. 安裝完畢，設定環境變數
```zsh
export MONGODB_URI="mongodb+srv://使用者名稱:使用者密碼@資料庫位置/資料庫名稱(與下載資料夾名稱相同)?retryWrites=true&w=majority"
``` 
6. 載入完畢，繼續輸入
```zsh
npm run start
```
7. 當出現下列訊息代表連線成功，可進入網址進行測試
```zsh
App is running on http://localhost:3000
Mongodb connected!
```
8. 若要停止連線，使用下列快速鍵
```zsh
Command⌘ + C
```
