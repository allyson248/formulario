import express from 'express';

const app = express();
const porta = 3000;
const host = '0.0.0.0';


app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send(`
        <h1>Cadastro de Produto</h1>
        <form action="/processar-formulario" method="POST">
            <label for="codigo">Código do Produto:</label>
            <input type="text" id="codigo" name="codigo" required><br>
            
            <label for="nome">Nome do Produto:</label>
            <input type="text" id="nome" name="nome" required><br>
            
            <label for="descricao">Descrição:</label>
            <textarea id="descricao" name="descricao"></textarea><br>
            
            <label for="preco">Preço:</label>
            <input type="number" step="0.01" id="preco" name="preco" required><br>
            
            <button type="submit">Cadastrar Produto</button>
        </form>
    `);
});


app.post('/processar-formulario', (req, res) => {
    const { codigo, nome, descricao, preco } = req.body;
    console.log('Dados do Produto:', { codigo, nome, descricao, preco });
    res.send(`Produto cadastrado com sucesso! <br> 
              Código: ${codigo} <br> 
              Nome: ${nome} <br> 
              Descrição: ${descricao} <br> 
              Preço: R$${preco}`);
});

app.listen(porta, host, () => {
    console.log(`Servidor iniciado e em execução no endereço http://${host}:${porta}`);
});
