const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS}
})

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const db = new sqlite3.Database(path.join(__dirname, '..', '/data/baleia.db'));
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT, email TEXT UNIQUE, data DATE, curso TEXT, password TEXT)");

});


app.post('/registrar-fiel', (req, res) => {
    const {nome_usuario, email_usuario, date_usuario, curso_usuario, password_usuario} = req.body;

    const sql = "INSERT INTO usuarios (nome, email, data, curso, password) VALUES (?, ?, ?, ?, ?)";

    db.run(sql, [nome_usuario, email_usuario, date_usuario, curso_usuario, password_usuario], function(err){
        if(err) return res.send("Erro no hangar da baleia!");
        res.send(`Bem vindo ao Culto, ${nome_usuario}!`);
        
        const mailOptions = {
            from: 'hangardabaleia@gmail.com',
            to: email_usuario,
            subject: 'UOOON!!! Bem vindo ao Culto da Baleia!',
            html: `
                <div style="font-family: sans-serif; text-align: center; border: 2px solid #000; padding: 20px;">
                    <h1>Bem-vindo, ${nome_usuario}!</h1>
                    <p>Você acaba de se tornar um fiel oficial do Hangar.</p>
                    <p><strong>Curso:</strong> ${curso_usuario}</p>
                    <p>Prepare-se para a decolagem!</p>
                    <p>Abraços de Johnny C!🐋</p>
                </div>
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                console.log("Erro ao enviar email:", error);
            }
            else {
                console.log("Email enviado com sucesso: " + info.response);
            }
        })
    })
})

app.listen(3000, () => {
    console.log("UOOONNNNN A BALEIA ESTÁ VOANDO!!!");

})
