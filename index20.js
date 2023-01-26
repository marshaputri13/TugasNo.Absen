const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")
const {json} = require("body-parser")

const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pelangganan"
})

db.connect(error => {
    if (error) {
        console.log(error.message)
    } else {
        console.log("Succesfull")
    }
})

app.get("/pelanggan", (req, res) => {
    let sql = "select * from pelanggan"

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                count: result.length,
                pelanggan: result
            }
        }
        res.json(response)
    })
})

app.get("/pelanggan/:id", (req, res) => {
    let data = {
        id_pelanggan: req.params.id
    }

    let sql = "select * from pelanggan where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                count: result.length,
                pelanggan: result
            }
        }
        res.json(response)
    })
})

app.post("/pelanggan", (req, res) => {
    let data = {
        id_pelanggan: req.body.id_pelanggan,
        nama_pelanggan: req.body.nama_pelanggan
    }

    let sql = "insert into pelanggan set ?"
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) 
    })
})

app.put("/pelanggan", (req,res) =>{
    let data = [
        {
            id_pelanggan: req.body.id_pelanggan,
            nama_pelanggan: req.body.nama_pelanggan
        },

        {
            id_pelanggan: req.body.id_pelanggan
        }
    ]
    let sql = "update pelanggan set ? where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) 
    })
})

app.delete("/pelanggan/:id", (req,res) => {
    let data = {
        id_pelanggan: req.params.id
    }
    let sql = "delete from pelanggan where ?"
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response)
    })

})

// Kasir

app.get("/kasir", (req, res) => {
    let sql = "select * from kasir"

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                count: result.length,
                pelanggan: result
            }
        }
        res.json(response)
    })
})

app.get("/kasir/:id", (req, res) => {
    let data = {
        id_kasir: req.params.id
    }

    let sql = "select * from kasir where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                count: result.length,
                kasir: result
            }
        }
        res.json(response)
    })
})

app.post("/kasir", (req, res) => {
    let data = {
        id_kasir: req.body.id_kasir,
        nama_kasir: req.body.nama_kasir,
        status_kasir: req.body.status_kasir
    }

    let sql = "insert into kasir set ?"
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) 
    })
})

app.put("/kasir", (req,res) =>{
    let data = [
        {
            id_kasir: req.body.id_kasir,
            nama_kasir: req.body.nama_kasir,
            status_kasir: req.body.status_kasir
        },

        {
            id_kasir: req.body.id_kasir
        }
    ]
    let sql = "update kasir set ? where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) 
    })
})

app.delete("/kasir/:id", (req,res) => {
    let data = {
        id_kasir: req.params.id
    }
    let sql = "delete from kasir where ?"
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response)
    })

})

// Menu
app.get("/menu", (req, res) => {
    let sql = "select * from menu"

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                count: result.length,
                pelanggan: result
            }
        }
        res.json(response)
    })
})

app.get("/menu/:id", (req, res) => {
    let data = {
        id_menu: req.params.id
    }

    let sql = "select * from menu where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                count: result.length,
                menu: result
            }
        }
        res.json(response)
    })
})

app.post("/menu", (req, res) => {
    let data = {
        id_menu: req.body.id_menu,
        nama_menu: req.body.nama_menu,
        kategori: req.body.kategori,
        harga_menu: req.body.harga_menu,
        stok: req.body.stok
    }

    let sql = "insert into menu set ?"
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) 
    })
})

app.put("/menu", (req,res) =>{
    let data = [
        {
            id_menu: req.body.id_menu,
            nama_menu: req.body.nama_menu,
            kategori: req.body.kategori,
            harga_menu: req.body.harga_menu,
            stok: req.body.stok
        },

        {
            id_menu: req.body.id_menu
        }
    ]
    let sql = "update menu set ? where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) 
    })
})

app.delete("/menu/:id", (req,res) => {
    let data = {
        id_menu: req.params.id
    }
    let sql = "delete from menu where ?"
    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response)
    })

})
app.listen(7000, () => {
    console.log("sksks")
})