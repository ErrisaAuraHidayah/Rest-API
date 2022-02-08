//inisialisasi express
const express = require("express")
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//endpoint
app.get("/", (req,res) => {
    res.send("Hallo Selamat Datang di Program Hitung BMI")
})

//endpoint bmi
app.post("/bmi", (req,res) => {
    let t = req.body.tinggi
    let b = req.body.berat
    let bmi = b / (t*t)
    hasil = bmi.toFixed(1);
    let status
    //ini untuk seleksi ke dalam status yang mana
    if(hasil < 18.5){
        status = ("kekurangan berat badan")
    }else if(hasil >= 18.5 && hasil <= 24.9 ){
        status = ("normal (ideal)")
    }else if(hasil >= 25 && hasil <= 29.9){
        status = ("kelebihan berat badan")
    }else if(hasil >= 30){
        status = ("kegemukan (obesitas)")
    }

    res.send({
        tinggi : t,
        berat : b,
        bmi : hasil,
        status : status,

    })
})

//ini untuk port nya
const port = 2910
app.listen(port, () => console.log (`app running ${port}`))