const WebSocket = require("ws");
const lineReader = require('line-reader');
const fs = require("fs");
function startServer() {
    const wss = new WebSocket.Server({
        port: 8579,
    });

    wss.on("connection", (ws) => {

        lineReader.eachLine('./ws-messages/onConnect.json', (line) => {
            ws.send(line);
        });

        ws.addEventListener("message", (message) => {
            const msg = JSON.parse(message.data);
            switch (msg.topic) {
                case "bridge/request/networkmap":
                    ws.send(fs.readFileSync('./ws-messages/networkMapRequest.json', 'utf8'));
                    break;
                case "bridge/request/touchlink/scan":
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