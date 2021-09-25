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

        this.release(connectionProtocol);
        this.connections.push(connectionProtocol)
        return ProtocolHandler.instance;
    }
     
    public static send(message: string){
        console.log("----------");
        console.log(message);
    }

    public static getCurrentConnections(){
        console.log("----------");
        console.log("The Connections is :");
        console.log(this.connections);
    }

    public static release(connectionProtocol: string){
        for(let i=0; i< this.connections.length; i++){
            if(this.connections[i] == connectionProtocol){
                console.log(this.connections[i] + " is released");
                this.connections.splice(i, 1);
            }
        }
    }
}


