import {http} from './protocolsExtend';
import {scp} from './protocolsExtend';
import {telnet} from './protocolsExtend';
import {ftp} from './protocolsExtend';
import {ssh} from './protocolsExtend';

const ssh1 = ssh.getInstance("ssh1");
ssh1.send('ssh1');

const ssh2 = ssh.getInstance("ssh2");
ssh2.send('ssh2');

const ssh3 = ssh.getInstance("ssh3");
ssh2.send('ssh3');
ssh3.getCurrentConnections();
ssh3.release('ssh3');

const ssh4 = ssh.getInstance("ssh4");
ssh4.send('ssh4');

const http1 = http.getInstance('http1');
http1.send('http');
http1.getCurrentConnections();

const scp1 = scp.getInstance('scp1');
scp1.send('scp1');

const scp2 = scp.getInstance('scp2');
scp2.send('scp2');

scp1.getCurrentConnections();