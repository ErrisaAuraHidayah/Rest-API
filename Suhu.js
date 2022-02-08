//inisialisasi express js
const express = require("express")

const app = express()

app.use(express.json()) //ini untuk menggunakan jsonnya itu
app.use(express.urlencoded({extended: true})) //ini untuk memdapatkan value dari url nya

//endpoint
app.get("/", (req,res) => {
    res.send("Hallo Selamat Datang di Program Konversi Suhu")
})

//endpoint pertama (Convert celcius)
app.get("/convert/celcius/:celcius", (req,res) => {
    let c = req.params.celcius //kenapa pakai params, karena kita mau mengambil pada url nya 
                               //kalau pake body kita harus mengisi sendiri pada bagian body(postman)

    let r = (c*4)/5;
    let f = (c*9)/5 + 32;
    let k = c*1 + 273.15; //ini mengapa harus dikali 1 dulu biar bisa?

    res.send({
        celcius: c,
        result : {
            reamur : r,
            fahrenheit : f,
            kelvin : k,
        }
    })
})

//endpoint kedua (convert reamur )
app.get("/convert/reamur/:reamur", (req,res) => {
    let r = req.params.reamur

    let c = r / 0.8
    let f = (r*2.25) + 32
    let k = (r/0.8) + 273.15

    res.send ({
        reamur : r,
        result : {
            celcius : c,
            fahrenheit : f,
            kelvin : k,
        }
    })
})

//endpoint ketiga (convert Kelvin )
app.get("/convert/kelvin/:kelvin", (req,res) => {
    let k = req.params.kelvin

    let c = k*1 - 273.15
    let f = k*1.8 - 459.67
    let r = 0.8*(k*1-273)
    

    res.send({
        kelvin: k,
        result : {
            celcius : c,
            fahrenheit : f,
            reamur : r,
        }
    })
})
//endpoint keempat (convert Fahrenheit)
app.get("/convert/fahrenheit/:fahrenheit", (req,res) => {
    let f = req.params.fahrenheit

    let c = (f*1 - 32)/1.8
    let r = (f-32)/2.25
    let k = (f*1+459.67)/1.8

    res.send({
        fahrenheit: f,
        result : {
            celcius : c,
            reamur : r,
            kelvin : k,
        }
    })
})

//ini untuk port nya
const port = 8000;
app.listen(port, () => console.log (`app running ${port}`))