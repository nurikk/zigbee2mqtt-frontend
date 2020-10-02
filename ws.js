const WebSocket = require("ws");
const lineReader = require('line-reader');

const wss = new WebSocket.Server({
    port: 8579,
});

wss.on("connection", (ws) => {

    lineReader.eachLine('./ws-messages/onConnect.json', (line, last) => {
        ws.send(line);
    });

    ws.addEventListener("message", (message) => {
        const msg = JSON.parse(message.data);
        switch (msg.topic) {
            case "bridge/request/networkmap":
                lineReader.eachLine('./ws-messages/networkMapRequest.json', (line, last) => {
                    ws.send(line);
                });
                break;
            default:
                break;
        }
    });
});
