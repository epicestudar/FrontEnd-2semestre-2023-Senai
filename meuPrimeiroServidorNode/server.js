const http = require('http');
const fs = require('fs');

// Importa os módulos 'http' e 'fs' para criar um servidor web e ler arquivos.

const server = http.createServer((req, res) => {
    // Cria um servidor HTTP utilizando a função 'createServer' do módulo 'http'.
    // A função recebe uma callback que é executada sempre que uma requisição é feita ao servidor.

    if (req.url === '/') {
        // Verifica se a URL da requisição é a raiz ("/").
        fs.readFile('index.html', (err, data) => {
            // Lê o arquivo 'index.html' de forma assíncrona.

            if (err) {
                // Se ocorrer um erro ao ler o arquivo:
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                // Define o código de resposta HTTP como 500 (Erro Interno do Servidor).
                res.end('Erro interno do servidor');
                // Envia uma mensagem de erro para o cliente.
            } else {
                // Se a leitura do arquivo for bem-sucedida:
                res.writeHead(200, { 'Content-Type': 'text/html' });
                // Define o código de resposta HTTP como 200 (OK) e o tipo de conteúdo como HTML.
                res.end(data);
                // Envia o conteúdo do arquivo 'index.html' como resposta para o cliente.
            }
        });
    } else if (req.url === '/sobre') {
        // Verifica se a URL da requisição é "/sobre".
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // Define o código de resposta HTTP como 200 (OK) e o tipo de conteúdo como texto simples.
        res.end('Página Sobre');
        // Envia a mensagem "Página Sobre" como resposta para o cliente.
    } else {
        // Se a URL da requisição não corresponder a nenhuma das condições acima:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        // Define o código de resposta HTTP como 404 (Não Encontrado) e o tipo de conteúdo como texto simples.
        res.end('Página não encontrada');
        // Envia a mensagem "Página não encontrada" como resposta para o cliente.
    }
});

server.listen(3000, () => {
    // Inicia o servidor e o faz ouvir na porta 3000.

    console.log('Servidor está ouvindo na porta 3000');
    // Exibe uma mensagem no console quando o servidor é iniciado com sucesso.
});
