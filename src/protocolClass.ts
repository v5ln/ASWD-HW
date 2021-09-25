class ProtocolHandler{
    private static instance: ProtocolHandler;
    private connections : string [] = [] ;

    public getInstance(connectionProtocol: string){
        if (!ProtocolHandler.instance){
            console.log('new instance');
            ProtocolHandler.instance = this;
        }

        if(this.connections.length == 3){
            console.log(this.connections[0] + " is disconnected");
            this.connections.shift();
        }

        this.release(connectionProtocol);
        this.connections.push(connectionProtocol)
        return ProtocolHandler.instance;
    }
     
    public send(message: string){
        console.log("----------");
        console.log(message);
    }

    public getCurrentConnections(){
        console.log("----------");
        console.log("The Connections is :");
        console.log(this.connections);
    }

    public release(connectionProtocol: string){
        for(let i=0; i< this.connections.length; i++){
            if(this.connections[i] == connectionProtocol){
                console.log(this.connections[i] + " is released");
                this.connections.splice(i, 1);
            }
        }
    }
}
const handler = new ProtocolHandler();
export default handler;
