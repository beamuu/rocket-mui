const fs = require("fs").promises
const { dirname } = require('path');
const { specialReplacementSign } = require("../utils/quote")
const appDir = dirname(require.main.filename);

const pathPrefix = "/../.."


async function main() {


  const pageName = process.argv[2]
  if (!pageName) return console.log("Require page name. (First letter should be capital letter)")

  const pagesDir = appDir + pathPrefix + "/pages"
  try {
    await fs.mkdir(pagesDir)
  } catch {
    // exists
  }

  let contentToCopy = await fs.readFile(__dirname + "/create.template.txt")
  let str = contentToCopy.toString()
  const params = { "COMPONENT_NAME": pageName }
  const paramList = Object.keys(params)

  for (var i = 0; i < paramList.length; i++) {
    const key = paramList[i]
    const value = params[paramList[i]]
    console.log(key, value)
    str = str.replaceAll(specialReplacementSign(key), value)
  }
  await fs.writeFile(pagesDir + `/${pageName.toLowerCase()}.tsx`, str)
}
main();