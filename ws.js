const WebSocket = require('ws');
const fs = require('fs');

function mockServer() {
    let startWebserver;
    let wss = null;
    function startServer() {
        wss = new WebSocket.Server({
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

    function stopServer() {
        if (wss) {
            wss.close();
            console.log('stopped ws server');
        }
        wss = null;
    }

    return {
        name: 'vite:mock-server',
        apply: 'serve',
        config(_config, { command, mode }) {
            startWebserver = command === 'serve' && mode !== 'test';
        },
        buildStart: async () => {
            if (startWebserver) {
                startServer();
            }
        },
        buildEnd: async (opts) => {
            stopServer();
        },
    };
}

module.exports = mockServer;
