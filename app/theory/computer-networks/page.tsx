'use client'

import {
	IconWorld,
	IconHistory,
	IconHierarchy2,
	IconAdjustments,
	IconFileCode,
	IconRocket,
	IconCode,
	IconArrowsShuffle,
	IconBug,
	IconCpu,
	IconLayoutDashboard,
	IconBoxMultiple,
	IconShieldLock,
	IconCirclesRelation,
	IconTableOptions,
	IconHash,
	IconRecycle,
	IconDatabase,
	IconServer,
	IconGitBranch,
	IconListDetails,
	IconBolt,
	IconLink,
	IconGauge,
	IconNetwork,
  IconMessage,
  IconLock,
	IconChartBar,
	IconWiper,
	IconWaveSine,
	IconLayersDifference,
	IconArrowsSplit,
	IconRoute,
	IconGraph,
	IconActivity,
	IconEye,
	IconTool,
	IconCertificate,
	IconUserCheck,
	IconAlertTriangle,
	IconPlug,
	IconMessageCircle,
	IconRefresh,
	IconKey,
	IconExchange,
	IconTransfer,
	IconLanguage,
	IconArrowsMinimize,
	IconTerminal,
	IconSearch,
	IconDeviceDesktop,
} from '@tabler/icons-react'

import { ScrollableFeatureRow } from '@/components/ScrollableRow'

/* ================== INTRODUCTION ================== */

const intro = [
	{ title: 'Introduction', description: 'Basics of computer networking.', icon: <IconWorld />, link: 'computer-networks/introduction' },
	{ title: 'History of Networks', description: 'ARPANET, Internet evolution.', icon: <IconHistory />, link: 'computer-networks/history' },
	{ title: 'Network Types', description: 'LAN, MAN, WAN, PAN.', icon: <IconHierarchy2 />, link: 'networks/3' },
	{ title: 'Network Topologies', description: 'Bus, Star, Ring, Mesh.', icon: <IconAdjustments />, link: 'networks/4' },
	{ title: 'Network Components', description: 'Router, Switch, Hub, Modem.', icon: <IconCpu />, link: 'networks/5' },
	
]

/* ================== FUNDAMENTALS ================== */

const fundamentals = [
	{ title: 'Protocols & Standards', description: 'Rules of communication.', icon: <IconCode />, link: 'networks/7' },
	{ title: 'Bandwidth & Latency', description: 'Network performance metrics.', icon: <IconGauge />, link: 'networks/8' },
	{ title: 'Transmission Modes', description: 'Simplex, Half, Full duplex.', icon: <IconArrowsShuffle />, link: 'networks/9' },
	{ title: 'Error Detection', description: 'Parity, CRC, Checksum.', icon: <IconBug />, link: 'networks/10' },
	{ title: 'Flow Control', description: 'Stop-and-Wait, Sliding Window.', icon: <IconHierarchy2 />, link: 'networks/11' },
	{ title: 'Framing Methods', description: 'Byte, Bit stuffing.', icon: <IconFileCode />, link: 'networks/12' },
	{ title: 'Quality of Service (QoS)', description: 'Traffic prioritization.', icon: <IconGauge />, link: 'networks/55' },
{ title: 'Network Performance Analysis', description: 'Throughput, Jitter.', icon: <IconChartBar />, link: 'networks/56' },
{ title: 'Networking Standards', description: 'IEEE, IETF, ISO.', icon: <IconCertificate />, link: 'networks/62' },


]

/* ================== OSI & TCP/IP ================== */

const models = [
	{ title: 'OSI Model', description: '7-layer architecture.', icon: <IconLayoutDashboard />, link: 'networks/13' },
	{ title: 'TCP/IP Model', description: '4-layer model.', icon: <IconBoxMultiple />, link: 'networks/14' },
	{ title: 'Layer Functions', description: 'Role of each layer.', icon: <IconHierarchy2 />, link: 'networks/15' },
	{ title: 'OSI vs TCP/IP', description: 'Model comparison.', icon: <IconAdjustments />, link: 'networks/16' },
	{ title: 'Encapsulation', description: 'Data packaging.', icon: <IconShieldLock />, link: 'networks/17' },
]

const physicalLayer = [
	{ title: 'Data Communication', description: 'Transmission & signals.', icon: <IconRocket />, link: 'networks/6' },
  { title: 'Transmission Media', description: 'Twisted pair, Fiber, Wireless.', icon: <IconWiper />, link: 'networks/51' },
  { title: 'Signal Encoding', description: 'NRZ, Manchester, 4B/5B.', icon: <IconWaveSine />, link: 'networks/52' },
  { title: 'Multiplexing', description: 'FDM, TDM, WDM.', icon: <IconLayersDifference />, link: 'networks/53' },
  { title: 'Switching Techniques', description: 'Circuit, Packet, Message.', icon: <IconArrowsSplit />, link: 'networks/54' },
]


/* ================== DATA LINK LAYER ================== */

const dataLink = [
	{ title: 'MAC Addressing', description: 'Physical addressing.', icon: <IconHash />, link: 'networks/18' },
	{ title: 'Ethernet', description: 'Wired LAN standard.', icon: <IconServer />, link: 'networks/19' },
	{ title: 'Switching', description: 'Frame forwarding.', icon: <IconCirclesRelation />, link: 'networks/20' },
	{ title: 'ARP Protocol', description: 'IP to MAC mapping.', icon: <IconLink />, link: 'networks/21' },
	{ title: 'VLAN', description: 'Virtual LANs.', icon: <IconDatabase />, link: 'networks/22' },
]

/* ================== NETWORK LAYER ================== */

const networkLayer = [
	{ title: 'IP Addressing', description: 'IPv4 & IPv6.', icon: <IconNetwork />, link: 'networks/23' },
	{ title: 'Subnetting', description: 'Network division.', icon: <IconTableOptions />, link: 'networks/24' },
	{ title: 'Routing Algorithms', description: 'Distance & Link state.', icon: <IconArrowsShuffle />, link: 'networks/25' },
	{ title: 'ICMP', description: 'Error reporting.', icon: <IconBug />, link: 'networks/26' },
	{ title: 'NAT', description: 'Address translation.', icon: <IconRecycle />, link: 'networks/27' },
	{ title: 'RIP, OSPF, BGP', description: 'Routing protocols.', icon: <IconRoute />, link: 'networks/57' },

]

/* ================== TRANSPORT LAYER ================== */

const transport = [
	{ title: 'TCP Protocol', description: 'Reliable transmission.', icon: <IconShieldLock />, link: 'networks/28' },
	{ title: 'UDP Protocol', description: 'Connectionless transfer.', icon: <IconBolt />, link: 'networks/29' },
	{ title: 'Congestion Control', description: 'Traffic management.', icon: <IconGauge />, link: 'networks/30' },
	{ title: 'Port Numbers', description: 'Process addressing.', icon: <IconHash />, link: 'networks/31' },
	{ title: 'Socket Programming', description: 'Client-server model.', icon: <IconFileCode />, link: 'networks/32' },
	{ title: 'TCP Algorithms', description: 'Tahoe, Reno, Vegas.', icon: <IconGraph />, link: 'networks/58' },
]

/* ================== SESSION LAYER ================== */

const sessionLayer = [
  { title: 'Session Management', description: 'Session establishment & termination.', icon: <IconPlug />, link: 'networks/65' },
  { title: 'Dialog Control', description: 'Full & half duplex communication.', icon: <IconMessageCircle />, link: 'networks/66' },
  { title: 'Session Synchronization', description: 'Checkpoints & recovery.', icon: <IconRefresh />, link: 'networks/67' },
  { title: 'Token Management', description: 'Turn-based access control.', icon: <IconKey />, link: 'networks/68' },
  { title: 'RPC Mechanism', description: 'Remote Procedure Calls.', icon: <IconExchange />, link: 'networks/69' },
];

/* ================== PRESENTATION LAYER ================== */

const presentationLayer = [
  { title: 'Data Translation', description: 'Format conversion.', icon: <IconTransfer />, link: 'networks/70' },
  { title: 'Character Encoding', description: 'ASCII, Unicode, UTF-8.', icon: <IconLanguage />, link: 'networks/71' },
  { title: 'Data Compression', description: 'Reduce data size.', icon: <IconArrowsMinimize />, link: 'networks/72' },
  { title: 'Encryption & Decryption', description: 'Secure data.', icon: <IconLock />, link: 'networks/73' },
  { title: 'Serialization', description: 'JSON, XML, Protobuf.', icon: <IconFileCode />, link: 'networks/74' },
];


/* ================== APPLICATION LAYER ================== */

const application = [
  { title: 'Network Services', description: 'User-level network services.', icon: <IconWorld />, link: 'networks/33' },
  { title: 'File Transfer Services', description: 'Remote file access.', icon: <IconDatabase />, link: 'networks/34' },
  { title: 'Email Services', description: 'Electronic mail systems.', icon: <IconMessage />, link: 'networks/35' },
  { title: 'Directory Services', description: 'User & resource lookup.', icon: <IconSearch />, link: 'networks/36' },
  { title: 'Remote Login', description: 'Remote system access.', icon: <IconTerminal />, link: 'networks/37' },
  { title: 'Network Virtual Terminals', description: 'Standard terminal interface.', icon: <IconDeviceDesktop />, link: 'networks/38' },
  { title: 'Application Protocols', description: 'HTTP, FTP, SMTP, DNS.', icon: <IconCode />, link: 'networks/39' },
];


/* ================== SECURITY ================== */

const security = [
	{ title: 'Network Security', description: 'Security fundamentals.', icon: <IconShieldLock />, link: 'networks/38' },
	{ title: 'Firewalls', description: 'Traffic filtering.', icon: <IconBug />, link: 'networks/39' },
	{ title: 'Cryptography', description: 'Encryption basics.', icon: <IconHash />, link: 'networks/40' },
	{ title: 'SSL/TLS', description: 'Secure communication.', icon: <IconLock />, link: 'networks/41' },
	{ title: 'VPN', description: 'Private networks.', icon: <IconWorld />, link: 'networks/42' },
	{ title: 'Authentication Methods', description: 'Kerberos, Tokens.', icon: <IconUserCheck />, link: 'networks/63' },
{ title: 'Network Attacks', description: 'DoS, MITM, Spoofing.', icon: <IconAlertTriangle />, link: 'networks/64' },

]

const management = [
  { title: 'SNMP', description: 'Network monitoring.', icon: <IconActivity />, link: 'networks/59' },
  { title: 'Network Monitoring Tools', description: 'Logs & metrics.', icon: <IconEye />, link: 'networks/60' },
  { title: 'Fault Management', description: 'Troubleshooting.', icon: <IconTool />, link: 'networks/61' },
]

/* ================== WIRELESS & MODERN ================== */

const wireless = [
	{ title: 'Wireless Networks', description: 'Wi-Fi basics.', icon: <IconServer />, link: 'networks/43' },
	{ title: 'Mobile Networks', description: '3G, 4G, 5G.', icon: <IconCpu />, link: 'networks/44' },
	{ title: 'IoT Networks', description: 'Connected devices.', icon: <IconCirclesRelation />, link: 'networks/45' },
	{ title: 'Cloud Networking', description: 'Virtual networks.', icon: <IconDatabase />, link: 'networks/46' },
]

/* ================== TOOLS ================== */

const tools = [
	{ title: 'Packet Tracer', description: 'Cisco simulator.', icon: <IconListDetails />, link: 'networks/47' },
	{ title: 'Wireshark', description: 'Packet analyzer.', icon: <IconBug />, link: 'networks/48' },
	{ title: 'GNS3', description: 'Network emulator.', icon: <IconGitBranch />, link: 'networks/49' },
	{ title: 'Ping & Traceroute', description: 'Network testing.', icon: <IconRocket />, link: 'networks/50' },
]

/* ================== PAGE ================== */

export default function Page() {
	return (
		<div className='bg-black p-10 py-32'>

			<h1 className='text-3xl md:text-5xl max-w-2xl mx-auto font-extrabold text-[#aa00ff] mb-4 flex items-center gap-3'>
				<img src="/icons/theory/network.svg" alt="Networks Logo" className="w-10 h-10" />
				&nbsp;Computer Networks
			</h1>

			<p className='text-neutral-300 max-w-2xl mx-auto text-base md:text-lg'>
				Computer networks allow devices to connect and share data. From home Wi-Fi to global cloud servers, these systems use standard rules to move information. Understanding how they link up is essential for working with modern technology.
			</p>

			<p className="px-10">Introduction</p>
			<ScrollableFeatureRow features={intro} />

			<p className="px-10">Fundamentals</p>
			<ScrollableFeatureRow features={fundamentals} />

			<p className="px-10">OSI & TCP/IP Models</p>
			<ScrollableFeatureRow features={models} />

			<p className="px-10">Physical Layer</p>
			<ScrollableFeatureRow features={physicalLayer} />

			<p className="px-10">Data Link Layer</p>
			<ScrollableFeatureRow features={dataLink} />

			<p className="px-10">Network Layer</p>
			<ScrollableFeatureRow features={networkLayer} />

			<p className="px-10">Transport Layer</p>
			<ScrollableFeatureRow features={transport} />

			<p className="px-10">Session Layer</p>
			<ScrollableFeatureRow features={sessionLayer} />

			<p className="px-10">Presentation Layer</p>
			<ScrollableFeatureRow features={presentationLayer} />

			<p className="px-10">Application Layer</p>
			<ScrollableFeatureRow features={application} />

			<p className="px-10">Security</p>
			<ScrollableFeatureRow features={security} />

			<p className="px-10">Network Management</p>
			<ScrollableFeatureRow features={management} />

			<p className="px-10">Wireless & Modern Networks</p>
			<ScrollableFeatureRow features={wireless} />

			<p className="px-10">Tools & Simulators</p>
			<ScrollableFeatureRow features={tools} />

		</div>
	)
}
