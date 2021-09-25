import {ProtocolHandler} from "./protocolClass"

export function ssh(){
    const ssh = ProtocolHandler.getInstance('ssh')
    ProtocolHandler.send('ssh is connected');
    ProtocolHandler.getCurrentConnections();
}

export function telnet(){
    const telnet = ProtocolHandler.getInstance('telnet')
    ProtocolHandler.send('telnet is connected');
    ProtocolHandler.getCurrentConnections();
}

export function http(){
    const http = ProtocolHandler.getInstance('http')
    ProtocolHandler.send('http is connected');
    ProtocolHandler.getCurrentConnections();
}

export function scp(){
    const scp = ProtocolHandler.getInstance('scp')
    ProtocolHandler.send('scp is connected');
    ProtocolHandler.getCurrentConnections();
    ProtocolHandler.release('scp');
    ProtocolHandler.getCurrentConnections();
}

export function ftp(){
    const ftp = ProtocolHandler.getInstance('ftp')
    ProtocolHandler.send('ftp is connected');
    ProtocolHandler.getCurrentConnections();
}