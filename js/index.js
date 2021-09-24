class ProtocolHandler{
    
    getInstance(connectionProtocol){
        if (!ProtocolHandler.instance){
            this.connections = [];
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
     
    send(message){
        console.log("----------");
        console.log(message);
    }

    getCurrentConnections(){
        console.log("----------");
        console.log("The Connections is :");
        console.log(this.connections);
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

function ssh(){
    const ssh = handler.getInstance('ssh')
    ssh.send('ssh is connected');
    ssh.getCurrentConnections();
}

function telnet(){
    const telnet = handler.getInstance('telnet')
    telnet.send('telnet is connected');
    telnet.getCurrentConnections();
}

function http(){
    const http = handler.getInstance('http')
    http.send('http is connected');
    http.getCurrentConnections();
}

function scp(){
    const scp = handler.getInstance('scp')
    scp.send('scp is connected');
    scp.getCurrentConnections();
    scp.release('scp');
    scp.getCurrentConnections();
}

function ftp(){
    const ftp = handler.getInstance('ftp')
    ftp.send('ftp is connected');
    ftp.getCurrentConnections();
}

ssh();
telnet();
http();
scp();
ftp();