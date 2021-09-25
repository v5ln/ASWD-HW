export class ProtocolHandler{
    private static instance: ProtocolHandler;
    private static connections : string [] = [] ;
    private constructor() {
        ProtocolHandler;
     }

    public static getInstance(connectionProtocol: string): ProtocolHandler{
        if (!ProtocolHandler.instance){
            console.log('new instance used ');
            ProtocolHandler.instance = new ProtocolHandler;
        }

        if(this.connections.length == 3){
            console.log(this.connections[0] + " is disconnected");
            this.connections.shift();
        }
        this.connections.push(connectionProtocol)
        return ProtocolHandler.instance;
    }
     
    public send(message: string){
        console.log("----------");
        console.log(message);
    }

    public  getCurrentConnections(){
        console.log("----------");
        console.log("The Connections is :");
        console.log(ProtocolHandler.connections);
    }

    public release(connectionProtocol: string){
        for(let i=0; i< ProtocolHandler.connections.length; i++){
            if(ProtocolHandler.connections[i] == connectionProtocol){
                console.log(ProtocolHandler.connections[i] + " is released");
                ProtocolHandler.connections.splice(i, 1);
            }
        }
    }
}




