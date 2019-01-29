class WebsocketChatClient {
    constructor() {
        this.ws = null
    }

    connect = () => {
        this.ws = new WebSocket('ws://localhost:8000/ws/chat/lobby/')
        this.ws.onopen = () => {
            console.log("Open")
        }

        this.ws.onmessage = (data) => {
            this.recieveMessage(JSON.parse(data.data))
        }

        this.ws.onerror = (error) => {
            console.log(error.message)
        }

        this.ws.onclose = () => {
            console.log("Connection closed")
            this.connect()
        }
    }

    sendMessage(body) {
        this.ws.send(JSON.stringify(body))
    }
}

let ChatClient = new WebsocketChatClient()
export default ChatClient