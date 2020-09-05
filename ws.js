const WebSocket = require("ws");
const onConnect = require("./ws-messages/onConnect.json");

const wss = new WebSocket.Server({
    port: 8579
});

wss.on("connection", (ws) => {
    onConnect.forEach(msg => {
        ws.send(JSON.stringify(msg));
    });
});