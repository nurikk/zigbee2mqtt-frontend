const WebSocket = require("ws");

const wss = new WebSocket.Server({
    port: 8579
});

wss.on("connection", (ws) => {
    const onConnect = require("./ws-messages/onConnect.json");
    onConnect.forEach(msg => {
        ws.send(JSON.stringify(msg));
    });
    ws.addEventListener("message", (message) => {
        const msg = JSON.parse(message.data);
        let response = [];
        switch (msg.topic) {
            case "bridge/request/networkmap":
                response = require("./ws-messages/networkMapRequest.json");
                break;
            default:
                break;
        }
        response.forEach(r => ws.send(JSON.stringify(r)));

    })
});