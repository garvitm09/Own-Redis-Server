//Using net package we can create a TCP server
const net = require('net')
const Parser = require('redis-parser');

const server = net.createServer(connection => {
    console.log('Client connected..')

    connection.on('data', data => {
        const parser = new Parser({
            returnReply: (reply) => {
                const command = reply[0];
                switch (command){
                    case 'set': {
                        const key  = reply[1];
                        const value = reply[2];
                    }
                }
            },
            returnError: (err) =>{ 
                console.log('=>', err);
            }
        })
        parser.execute(data);
        connection.write('+OK\r\n')
    })
})

server.listen(5000, () => console.log("Custom Redis Server running on port 5000")) 