import {ProtocolHandler} from "./protocolClass"

export function ssh(){
    const ssh = ProtocolHandler.getInstance('ssh')
    ssh.send('ssh is connected');
    ssh.getCurrentConnections();
}

export function telnet(){
    const telnet = ProtocolHandler.getInstance('telnet')
    telnet.send('telnet is connected');
    telnet.getCurrentConnections();
}

export function http(){
    const http = ProtocolHandler.getInstance('http')
    http.send('http is connected');
    http.getCurrentConnections();
}

export function scp(){
    const scp = ProtocolHandler.getInstance('scp')
    scp.send('scp is connected');
    scp.getCurrentConnections();
    scp.release('scp');
    scp.getCurrentConnections();
}

export function ftp(){
    const ftp = ProtocolHandler.getInstance('ftp')
    ftp.send('ftp is connected');
    ftp.getCurrentConnections();
}