class ProtocolHandler{
    constructor(){
        // if(ProtocolHandler.this == null){
         this.connections = [];

            // ProtocolHandler.instance = this;
            
        // }
        // return ProtocolHandler.instance;
    }

    getInstance(connectionProtocol){
        if(this.connections.length == 3){
            console.log(this.connections[0] + " is disconnected");
            this.connections.shift();
        }
        this.release(connectionProtocol);
        this.connections.push(connectionProtocol)
    }
     
    send(message){
        console.log("----------");
        console.log(message);
    }
    getCurrentConnections(){
        console.log("----------");
        console.log("The Connections is :");
        console.log(this.connections);
        // for(let i=0; i< this.connections.length; i++){
        //     console.log((i+1)+": "+this.connections[i]);
        // }
    }
    release(connectionProtocol){
        for(let i=0; i< this.connections.length; i++){
            if(this.connections[i] == connectionProtocol){
                console.log(this.connections[i] + " is released");
                this.connections.splice(i, 1);
            }
    
        }
    }
}

const handler = new ProtocolHandler();
Object.freeze(handler);
handler;


function ssh(){
    handler.getInstance('ssh')
    handler.send('ssh is connected');
    handler.getCurrentConnections();
}

function telnet(){
    handler.getInstance('telnet')
    handler.send('telnet is connected');
    handler.getCurrentConnections();
}
function http(){
    handler.getInstance('http')
    handler.send('http is connected');
    handler.getCurrentConnections();
}
function scp(){
    handler.getInstance('scp')
    handler.send('scp is connected');
    handler.getCurrentConnections();
    handler.release('scp');
    handler.getCurrentConnections();
}
function ftp(){
    handler.getInstance('ftp')
    handler.send('ftp is connected');
    handler.getCurrentConnections();
}



ssh();
telnet();
http();
scp();
ftp();