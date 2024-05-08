import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';


const app = express()

//middleware
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '12345',
    database : 'crud_practice'
})

app.get('/', (req,res)=>{
    const sql = 'SELECT * FROM users';
    db.query(sql, (err,result)=>{
        if(err) return res.json({message:'Error inside server'})
        return res.json(result)
    })
})

app.post('/user', (req,res)=>{
    const sql= 'insert into users (FirstName, LastName, Age, Email, ContactNo) values(?)';
    console.log(req.body);
    const values = [
        req.body.FirstName,
        req.body.LastName,
        req.body.Age,
        req.body.Email,
        req.body.ContactNo
    ]

    db.query(sql, [values], (err, result)=>{
        if(err) return res.json(err)
        return res.json(result)
    })
})

app.put('/update/:id', (req,res)=>{
    const sql = "UPDATE users SET FirstName =?, LastName =?, Age =?, Email =?, ContactNo =? WHERE SrNo = ?";
    const id = req.params.id;

    db.query(sql, [req.body.FirstName, req.body.LastName, req.body.Age, req.body.Email, req.body.ContactNo, id], (err,result) => {
        if(err) return res.json({message: 'Error inside server'});
        return res.json(result);
    })
})

app.get('/read/:id',(req,res)=>{
    const sql = "SELECT * FROM users WHERE SrNo = ?";
    const id = req.params.id;
    db.query(sql,[id], (err, result) =>{
        if(err) return res.json({message: 'Error inside server'});
        return res.json(result);
    })
})

app.delete('/delete/:id',(req,res)=>{
    const sql = 'delete from users where SrNo = ?';
    const id = req.params.id;

    db.query(sql, [id], (err,result)=>{
        if(err) return res.json({message:"Error inside server"})
        return res.json(result)
    })
})

app.listen(5555,()=>{
    console.log('Server starting on port 5555');
})


