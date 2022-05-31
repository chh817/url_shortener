// 定義 generate code 函式
const generateCode = function (codeLength) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const charArray = string.split(chars)
  const index = Math.floor(Math.random() * charArray.length)
  let code = ""
  for (let i = 0; i < codeLength; i++) {
    code += charArray[index]
  }
  return code
}

module.exports = generateCode