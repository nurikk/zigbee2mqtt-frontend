const WebSocket = require('ws');

const fs = require('fs');
function startServer() {
    const wss = new WebSocket.Server({
        port: 8579,
    });

    wss.on('connection', (ws) => {
        const messages = JSON.parse(fs.readFileSync('./ws-messages/onConnect.json'));

        messages.forEach((message) => {
            ws.send(JSON.stringify(message));
        });

        ws.addEventListener('message', (message) => {
            const msg = JSON.parse(message.data);
            switch (msg.topic) {
                case 'bridge/request/networkmap':
                    ws.send(fs.readFileSync('./ws-messages/networkMapRequest.json', 'utf8'));
                    break;
                case 'bridge/request/touchlink/scan':
                    ws.send(fs.readFileSync('./ws-messages/onTouchlink.json', 'utf8'));
                    break;
                default:
                    break;
            }
        });
    });
    console.log('started ws server');
}

if (require.main === module) {
    startServer();
}

module.exports = { startServer };
