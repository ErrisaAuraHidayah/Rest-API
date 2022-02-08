//inisialisasi aplikasi menggunakan express js
const express = require("express")

const app = express()

app.use(express.json()) //ini untuk menggunakan json
app.use(express.urlencoded({extended: true})) //ini untuk mendapatkan value pada url nya

//data dumy (ini buat array ) (gapake database)
let nextId = 4;
const books = [
    {id: 1, title: "The First", year: 2019},
    {id: 2, title: "The Second", year: 2020},
    {id: 3, title: "The Third", year: 2021},
]
//endpoint endpoint 
//ini untuk selamat datang
app.get("/" , (req,res) => {
    res.send({
        message: "Berhasil melakukan pemanggilan get",
        data: {
            description:
            "Endpoint ini untuk menampilkan data",
        }
    })
})

//ini untuk menampilkan data data bukunya
//ini app.get untuk post nya
app.get("/books", (req,res) => {
    res.send({
        message: "Berhasil menampilkan data buku",
        data : { books }
    })

})

//ini app.get untuk put nya
app.get("/book/:id", (req,res) => {
    const bookIndex = books.findIndex((item) => item.id == req.params.id)
    res.send({
        message: "Berhasil menampilkan perubahan data buku",
        data: { book: books[bookIndex]}
    })
})

//kalau untuk mengisikan data pakai request
app.post("/books", (req,res) => {
    const book = {
        id: nextId++,
        title: req.body.title,
        year: req.body.year,
    }
    books.push(book); //ini untuk ngepush kedalam array books
    res.send({
        message: "Berhasil menambahkan buku",
        data: {
            newBook: book,
            totalBooks: books.length,
        }
    })

})

//ini buat put buku
app.put("/books/:id" , (req,res) => {
    const bookIndex = books.findIndex((item) => item.id == req.params.id);
    books[bookIndex].title = req.body.title;
    books[bookIndex].year = req.body.year;

    res.send({
        message: "Berhasil mengubah buku",
        data: { book: books[bookIndex]}
    })

})

//ini buat delete buku
app.delete("/books/:id", (req,res) => {
    
    const bookIndex = books.findIndex((item) => item.id == req.params.id)
    books.splice(index,1) //ini untuk menghapus data buku pada array 
                          //nilai 1 itu maksudnya menghapus bergantian 1 1 gitu
    res.send({
        message: "Berhasil menghapus 1 data buku",
        data: { book: books[bookIndex]}
    })
    
})

const port = 8000;
app.listen(port, () => console.log (`app running ${port}`))
