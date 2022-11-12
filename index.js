
const http = require('http');

const requesListener = (request, response) => {
    response.setHeader('Content-type', 'text/html');
    response.statusCode = 200;

    const { method, url } = request;


    if (url === '/') {
        if (method === 'GET') {
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.end(`kamu tidak bisa menggunakan method ${method}`)
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            response.end(`ini halaman about method ${method} `);
        } else if (method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });
        } else {
            response.end(`maap harus pake get`)
        }



    } else {
        response.end("halaman tidak ditemukan");
    }





}

const server = http.createServer(requesListener);

const host = 'localhost';
const port = 5000;


server.listen(port, host, () => {
    console.log(`jalan di port ${port}, dan host: ${host}`);
})