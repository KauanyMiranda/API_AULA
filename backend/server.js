const express = require('express'); // loberar a porta do server
const cors = require('cors'); // Segurança da porta
const jwt = require('jsonwebtoken'); // Gera o token para login

const app = express();
const PORT = 3000;
const JWT_SECRET = "1234"; // Senha do segredo


app.use(cors());
app.use(express.json());

// Simula um banco de dados
const CREDENCIAIS_VALIDAS ={
    email: "ka@gmail.com",
    senha: "123"
}

// RECEBE DOIS PARAMETROS => ROTA(STRING), FUNÇÃO ANONIMA
app.post('/login', (req, res) => {
    const {email, senha} = req.body;

    if(email === CREDENCIAIS_VALIDAS.email && senha === CREDENCIAIS_VALIDAS.senha){
        const token = jwt.sign({email: email, iat: Date.now}, JWT_SECRET, {expiresIn: '1h'});
        // retorna o email, a data, o jwt e quando expira 

        console.log("Login bem sucedido, token gerado com sucesso");

        res.json({token});
    }else{
        console.log("Email ou senha incorreto");
        res.status(401).json({erro:'Credencial inválida'});
    } 
}); // http://localhost:3000/login 

app.get('/', (req, res) => {
    res.json({
        mensagem: "API JWT funcionando",
        endpoint: {
            login: "POST/ login"
        }
    });
});

app.get('/api/dados', (req, res) => {
    res.json({status: "Sucesso"});
});

// Fazer o server rodar
app.listen(PORT, () => {
    console.log("Iniciando o servidor . . .");
    console.log(". . .");
    console.log(`API rodando na porta ${PORT}`)
});