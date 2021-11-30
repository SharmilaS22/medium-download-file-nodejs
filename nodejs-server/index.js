const express = require("express")

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello world");
})

// 
// GET http://localhost:3000/download/book.png
// 

app.get("/download/:filename", (req, res) => {

    const filePath = __dirname + "/public/assets/" + req.params.filename;

    res.download(
        filePath, 
        "downloaded-book.png", // Remember to include file extension
        (err) => {

        if (err) {
            res.send({
                error : err,
                msg   : "Problem downloading the file"
            })
        }

    })
})

app.listen( PORT, () => console.log("Server listening to port " + PORT))