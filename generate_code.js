// 定義 generate code 函式
function codeGenerate(codeLength) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const charArray = chars.split("")
  let newCode = ""
  for (let i = 0; i < codeLength; i++) {
    const index = Math.floor(Math.random() * charArray.length)
    newCode += charArray[index]
  }
  return newCode
}

module.exports = codeGenerate