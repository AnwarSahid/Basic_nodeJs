
const http = require('http');

const requesListener = (request, response) => {
    response.setHeader('Content-type', 'text/html');
    response.statusCode = 200;

    const method = request.method;

    if (method === 'PUT') {

        response.end('halo ini put');
    }

    if (method === 'DELETE') {
        response.end('halo ini delete')
    }

    if (method === 'GET') {
        response.end('halo ini get')
    }


}

const server = http.createServer(requesListener);

const host = 'localhost';
const port = 5000;


server.listen(port, host, () => {
    console.log(`jalan di port ${port}, dan host: ${host}`);
})