export class ProtocolHandler{
    private static instance: ProtocolHandler;
    private static connections : string [] = [] ;
    private static max : number = 0; 

    public static getInstance(connectionProtocol: string): ProtocolHandler{
        if (!this.instance){
            console.log("-------------");
            console.log('||New instance used||');
            this.instance = new ProtocolHandler();
            ProtocolHandler.max+=1;
            if (ProtocolHandler.max > 3){
                console.log("-------------");
                throw new Error("Instance limit reached : 3");
            }
        }

        ProtocolHandler.connections.push(connectionProtocol);
        return this.instance;
    }
     
    public send(msg: string): void{
        console.log("-------------");
        console.log("new connection : "+msg);
    }

    public getCurrentConnections(): void{
        console.log("----------");
        console.log("The Connections is :");
        console.log(ProtocolHandler.connections);
    }

    public release(connectionProtocol: string){
        for(let i=0; i< ProtocolHandler.connections.length; i++){
            if(ProtocolHandler.connections[i] == connectionProtocol){
                console.log("-------------");
                console.log(ProtocolHandler.connections[i] + " is released");
                ProtocolHandler.connections.splice(i, 1);
            }
        }
    }
}