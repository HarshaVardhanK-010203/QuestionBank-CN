import { Module } from '../types';

export const modules: Module[] = [
  { id: 1, title: 'Basics & Physical Layer', description: 'OSI/TCP-IP models, network topologies, transmission media, and physical principles.' },
  { id: 2, title: 'Data Link Layer', description: 'Error detection/correction, flow control, sliding window protocols, and MAC protocols.' },
  { id: 3, title: 'Network Layer', description: 'Routing algorithms, congestion control, IP addressing, and IPv4/IPv6 protocols.' },
  { id: 4, title: 'Transport Layer', description: 'TCP/UDP protocols, connection management, congestion control, and header formats.' },
  { id: 5, title: 'Application Layer', description: 'DNS, HTTP, FTP, Email architecture, and WWW principles.' },
];
