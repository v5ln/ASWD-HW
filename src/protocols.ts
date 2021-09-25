import handler from "./protocolClass"

export function ssh(){
    const ssh = handler.getInstance('ssh')
    ssh.send('ssh is connected');
    ssh.getCurrentConnections();
}

export function telnet(){
    const telnet = handler.getInstance('telnet')
    telnet.send('telnet is connected');
    telnet.getCurrentConnections();
}

export function http(){
    const http = handler.getInstance('http')
    http.send('http is connected');
    http.getCurrentConnections();
}

export function scp(){
    const scp = handler.getInstance('scp')
    scp.send('scp is connected');
    scp.getCurrentConnections();
    scp.release('scp');
    scp.getCurrentConnections();
}

export function ftp(){
    const ftp = handler.getInstance('ftp')
    ftp.send('ftp is connected');
    ftp.getCurrentConnections();
}