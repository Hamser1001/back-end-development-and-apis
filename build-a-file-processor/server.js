const fs = require("fs")
const fsPromises = require("fs/promises")

console.log(fs)

const data = fs.readFileSync("assets/poem.txt", { encoding: "utf8" })
console.log(data)

fs.readFile("assets/poem.txt", { encoding: "utf8" }, (err, data) => {
    console.log(data)
})

fs.writeFileSync("assets/output.txt", "Hello, freeCodeCamp!")
fs.appendFileSync("assets/output.txt", "\nSecond line")

const exists = fs.existsSync("assets/output.txt")
console.log(exists)

const entries = fs.readdirSync("assets")
console.log(entries)

async function main() {
    const data = await fsPromises.readFile("assets/poem.txt", { encoding: "utf8" })
    console.log(data)
}

main()