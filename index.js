
const http = require('http');

const requesListener = (request, response) => {
    response.setHeader('Content-type', 'text/html');
    response.statusCode = 200;

    const { method, url } = request;

    // if (method === 'PUT') {

    //     response.end('halo ini put');
    // }
    // if (method === 'POST') {
    //     let body = [];

    //     request.on('data', (chunk) => {
    //         body.push(chunk);
    //     });

    //     request.on('end', () => {
    //         body = Buffer.concat(body).toString();
    //         const { name } = JSON.parse(body)
    //         response.end(`<h1>Hai, ${name}!</h1>`);
    //     });
    // }

    // if (method === 'DELETE') {
    //     response.end('halo ini delete')
    // }

    // if (method === 'GET') {
    //     response.end('halo ini get')
    // }


    if (url === '/') {
        if (method === 'GET') {
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.end(`kamu tidak bisa menggunakan method ${method}`)
        }
    } else if (url === '/about') {
        response.end("halaman about");
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