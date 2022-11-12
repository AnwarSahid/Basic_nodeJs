
const http = require('http');

const requesListener = (request, response) => {
    response.setHeader('Content-type', 'application/json');

    const { method, url } = request;


    if (url === '/') {
        if (method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: "ini halaman utama"
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `harus menggunakan get`
            }))
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            response.end(JSON.stringify({
                message: `ini halaman about method ${method} `
            }));
        } else if (method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about`
                }));
                response.statusCode = 200;
            });
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: 'halaman tidak ditemukan'
            }))
        }



    } else {
        response.statusCode = 400;
        response.end(JSON.stringify({
            message: 'halaman tidak ditemukan'
        }))
    }





}

const server = http.createServer(requesListener);

const host = 'localhost';
const port = 5000;


server.listen(port, host, () => {
    console.log(`jalan di port ${port}, dan host: ${host}`);
})