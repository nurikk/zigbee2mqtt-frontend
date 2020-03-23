const WebSocket = require("ws");
const zigbeeMessages = require("./ws-messages/zigbee.json");
const logMessages = require("./ws-messages/log.json");

const wss = new WebSocket.Server({
    port: 8579
});

let messageNum = 0;
let intervalId = 0;
wss.on("connection", (ws) => {

    ws.on("message", (message) => {
        let messages = [];
        const msg = JSON.parse(message);
        switch (msg.category) {
            case "log":
                messages = logMessages;
                break;
            case "zigbee":
                messages = zigbeeMessages;
                break;
            default:
                break;
        }
        clearInterval(intervalId);
        messageNum = 0;
        console.log("Sending message", messageNum);
        ws.send(JSON.stringify(messages[messageNum++]));
        intervalId = setInterval(() => {
            if (messageNum >= messages.length) {
                messageNum = 0;
                clearInterval(intervalId);
            } else {
                console.log("Sending message", messageNum);
                ws.send(JSON.stringify(messages[messageNum++]));
            }
        }, 100);
    });
});