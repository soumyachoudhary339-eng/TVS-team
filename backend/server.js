
const app = require("./app")

require("dotenv").config()
const start = require("./config/db")

const port = process.env.PORT

start()

app.listen(port, () => {
    console.log(`Server running on Port ${port}`);

})