import { Question } from '../types';

export const questions: Question[] = [
  // ==========================================
  // MODULE 1: BASICS & PHYSICAL LAYER
  // ==========================================
  
  // 15 MARKS
  {
    id: "m1-15-1",
    moduleId: 1,
    marks: 15,
    question: "Explain OSI reference model and its layers",
    answer: {
      definition: "The Open Systems Interconnection (OSI) model is a conceptual framework that standardizes the functions of a communication system into seven distinct abstraction layers.",
      explanation: "The OSI model consists of seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. The Physical layer handles bitstream transmission over physical media. The Data Link layer ensures error-free transfer of frames. The Network layer manages logical addressing and packet routing. The Transport layer provides end-to-end reliability and flow control. The Session layer manages dialogues between applications. The Presentation layer handles encryption, compression, and data translation. The Application layer serves as the user interface for network services. Each layer interacts with the layers above and below it, facilitating a modular and interoperable design. This separation of concerns allows for easier troubleshooting and the development of new protocols without disrupting the entire system architecture.",
      diagramExplanation: "A vertical stack of seven layers. Data flows down (encapsulation) at the sender and up (decapsulation) at the receiver.",
      example: "TCP/IP layers mapping to OSI layers during a web request.",
      advantages: ["Standardization", "Troubleshooting clarity", "Interoperability", "Modular design"],
      disadvantages: ["High complexity", "High overhead", "Slow convergence"],
      applications: ["Protocol design", "Network education", "Inter-vendor testing"],
      conclusion: "The OSI model remains the foundational theory for all physical and logical network architectures.",
      keyPoints: ["7-layer architecture", "Separation of concerns", "Logical peer communication", "Protocol independence", "Encapsulation process", "Standardized by ISO", "Hierarchical data flow"]
    }
  },
  {
    id: "m1-15-2",
    moduleId: 1,
    marks: 15,
    question: "Explain TCP/IP model with diagram",
    answer: {
      definition: "The TCP/IP model is a concise four-layer suite of communication protocols used to interconnect network devices on the internet.",
      explanation: "TCP/IP was developed for practical use and consists of four layers: Network Access, Internet, Transport, and Application. The Network Access layer combines physical and data link functions. The Internet layer (IP) handles host-to-host routing. The Transport layer (TCP/UDP) manages end-to-end reliability. The Application layer combines the session, presentation, and application layers of the OSI model. It is the dominant model for global networking due to its simplicity and effectiveness. Unlike the theoretical OSI model, TCP/IP is built around the specific protocols that power the web. It prioritizes data integrity and routing efficiency over strict theoretical layer separation. The model is designed to be hardware-agnostic, allowing diverse devices to communicate seamlessly over a shared network fabric using standardized addressing schemes.",
      diagramExplanation: "A 4-layer stack: Link, Internet, Transport, Application. Maps OSI's 1-2 to Link, 3 to Internet, 4 to Transport, and 5-7 to Application.",
      example: "Sending an HTTP request over a TCP socket via an IP address.",
      advantages: ["High scalability", "Widely adopted", "Cross-platform", "Robust error recovery"],
      disadvantages: ["Poor layer separation", "Protocol dependent", "Difficult to update modules"],
      applications: ["Internet backbone", "Corporate LANs", "Remote access"],
      conclusion: "TCP/IP is the practical engine that drives the world's digital communication systems.",
      keyPoints: ["4-layer architecture", "Internet foundation", "Hardware independence", "IP-centric routing", "Application-level protocols", "Practical implementation", "Global scalability"]
    }
  },
  {
    id: "m1-15-3",
    moduleId: 1,
    marks: 15,
    question: "Discuss network topologies with merits and demerits",
    answer: {
      definition: "Network topology is the physical or logical arrangement of nodes and links in a computer network, defining how devices are connected and how data flows.",
      explanation: "Common topologies include Star, Bus, Ring, Mesh, and Tree. In a Star topology, all nodes connect to a central hub, offering easy management but a single point of failure. Bus topology uses a single backbone cable; it is cheap but fails if the cable breaks. Ring topology connects nodes in a closed loop, providing orderly data access. Mesh topology provides multiple connections for every node, offering the highest reliability but at a very high cabling cost. Tree topology is hierarchical, suitable for large organizational structures. Each topology has specific trade-offs between cost, installation difficulty, reliability, and scalability. Modern Local Area Networks (LANs) predominantly use Star or Hybrid topologies because high-speed switches minimize collisions and simplify network maintenance and expansion tasks.",
      diagramExplanation: "Illustrative shapes: Point-to-point (Star), Single Line (Bus), Circle (Ring), and Web (Mesh).",
      example: "A home WiFi network usually functions logically as a Star topology with the router at the center.",
      advantages: ["Star: Easy troubleshooting", "Mesh: High redundancy", "Bus: Low installation cost", "Ring: Better traffic handling"],
      disadvantages: ["Star: Hub dependency", "Mesh: High complexity", "Bus: Cable length limits", "Ring: High latency"],
      applications: ["Office LANs", "Backbone networks", "Industrial loops"],
      conclusion: "Choosing a topology is a balance of cost, reliability, and the physical constraints of the deployment area.",
      keyPoints: ["Geometric arrangement of nodes", "Physical vs Logical types", "Star is most common", "Mesh is most redundant", "Cost-benefit tradeoffs", "Installation complexity", "Scalability factors"]
    }
  },
  {
    id: "m1-15-4",
    moduleId: 1,
    marks: 15,
    question: "Explain transmission media (guided & unguided)",
    answer: {
      definition: "Transmission media refers to the physical path through which data signals travel from a source to a destination. It is divided into Guided (wired) and Unguided (wireless).",
      explanation: "Guided media utilize a physical conductor to carry signals. This includes Twisted Pair cable (cheap, used in telephony), Coaxial cable (higher bandwidth, used in cable TV), and Fiber Optic cable (uses light pulses, offering highest speed and EMI immunity). Unguided media transmit data through air or vacuum using electromagnetic waves. This includes Radio waves (omni-directional), Microwaves (line-of-sight), and Infrared (short-range). Radio waves are ideal for mobile phones and broadcasting. Microwaves are used for point-to-point satellite communication. Infrared is used for household remotes and very short-range data exchange. The choice of medium depends on the required distance, bandwidth, environmental interference, and budget. While guided media offer more security and stability, unguided media provide the mobility and flexibility required for modern mobile and wide-area networking applications.",
      diagramExplanation: "A branching tree: Media -> Guided (Twisted, Coax, Fiber) and Unguided (Radio, Microwave, Infrared).",
      example: "Ethernet cables in an office (Guided) vs a smartphone connecting to 5G (Unguided).",
      advantages: ["Fiber: Secure and fast", "Radio: High mobility", "Coax: Wide bandwidth", "Twisted: Affordable"],
      disadvantages: ["Fiber: Expensive", "Radio: High interference", "Microwave: Line-of-sight needed", "Twisted: Susceptible to noise"],
      applications: ["Backbone cables", "Satellite links", "Home WiFi", "CCTV systems"],
      conclusion: "Modern communication thrives on a hybrid approach of high-performance wired backbones and flexible wireless access points.",
      keyPoints: ["Wired vs Wireless", "Speed and Bandwidth limits", "EMI resistance", "Distance constraints", "Infrastructure costs", "Mobility support", "Propagation methods"]
    }
  },
  {
    id: "m1-15-5",
    moduleId: 1,
    marks: 15,
    question: "Compare OSI and TCP/IP models",
    answer: {
      definition: "OSI and TCP/IP are the two most widely referenced networking models, used to understand and implement communication protocols and architectures.",
      explanation: "The OSI model consists of seven layers and was designed as a theoretical, vendor-neutral standard before protocols were developed. In contrast, TCP/IP has four layers and was developed based on existing protocols already used in the ARPANET. OSI clearly separates services, interfaces, and protocols, whereas TCP/IP does not. OSI's session and presentation layers are absorbed into the TCP/IP application layer. OSI's physical and data link layers are merged into TCP/IP's network access layer. Both models share a hierarchical layered approach and use a similar transport and network layer logic. However, TCP/IP is much more practical and is the actual standard used by the internet today. OSI is primarily used as an educational and diagnostic tool to understand the deep mechanics of data communication. The choice of model often depends on whether one is designing hardware (OSI focus) or software applications (TCP/IP focus).",
      diagramExplanation: "A side-by-side comparison table or stack showing how layers match (Application/Presentation/Session -> Application; Transport -> Transport; Network -> Internet; Data Link/Physical -> Link).",
      example: "Analyzing a network failure using OSI layers vs implementing a web app using TCP/IP logic.",
      advantages: ["OSI: Architectural clarity", "TCP/IP: Practical and simple", "Both support modularity"],
      disadvantages: ["OSI: High complexity", "TCP/IP: Poor layering separation"],
      applications: ["Protocol development", "Network education", "Systems engineering"],
      conclusion: "While OSI is the standard for theory, TCP/IP is the undisputed standard for practical implementation.",
      keyPoints: ["7 layers vs 4 layers", "Theoretical vs Practical", "Vendor neutral vs Protocol specific", "Interface-service separation", "Global internet standard", "Layer mapping logic", "Modularity and scale"]
    }
  },
  {
    id: "m1-15-6",
    moduleId: 1,
    marks: 15,
    question: "Explain architecture of Internet",
    answer: {
      definition: "The architecture of the Internet is a hierarchical and decentralized structure of interconnected networks that facilitates global data exchange using the TCP/IP protocol suite.",
      explanation: "The Internet is organized into three tiers of Internet Service Providers (ISPs). Tier-1 ISPs own the massive high-speed fiber-optic backbones that span continents and peer with each other to exchange traffic globally without cost. Tier-2 ISPs pay Tier-1 providers for access and serve regional or national populations. Tier-3 ISPs (Local ISPs) connect directly to end users, providing the 'last mile' connection using technologies like DSL, Fiber, or Cable. The architecture is decentralized, meaning there is no single point of failure or control. Routers at the edges of these networks use protocols like BGP (Border Gateway Protocol) to determine the most efficient paths for data. This design follows the end-to-end principle, where complex logic is handled by the hosts (computers), while the core network remains simple and focused on efficient packet delivery. This hierarchical yet distributed nature allows the Internet to scale to billions of devices while remaining highly resilient to isolated failures.",
      diagramExplanation: "A cloud-based hierarchy: Tier 1 (Backbone), Tier 2 (Regional), Tier 3 (Local), and End-Users.",
      example: "Accessing a server in London from India via a local ISP through multiple undersea fiber backbones.",
      advantages: ["Extreme scalability", "High resilience", "Decentralized control", "Global reaching"],
      disadvantages: ["Security challenges", "Unequal infrastructure", "Management complexity"],
      applications: ["World Wide Web", "Global communication", "Cloud computing"],
      conclusion: "The Internet's architecture is a testament to distributed engineering, enabling the most significant communication platform in human history.",
      keyPoints: ["3-Tier ISP hierarchy", "Decentralized design", "BGP routing", "End-to-end principle", "Global fiber backbones", "Last-mile connectivity", "Inter-network peering"]
    }
  },
  {
    id: "m1-15-7",
    moduleId: 1,
    marks: 15,
    question: "Explain wireless transmission principles",
    answer: {
      definition: "Wireless transmission is the transfer of information between points that are not connected by an electrical conductor, typically using electromagnetic waves through air or vacuum.",
      explanation: "The principles of wireless transmission involve the modulation and propagation of electromagnetic signals. An antenna converts electrical currents into electromagnetic waves, which travel through space according to their frequency. High-frequency waves like Microwaves travel in a straight line (line-of-sight), while lower frequency waves like Radio waves can penetrate obstacles and follow the Earth's curvature. Modulation techniques like AM (Amplitude), FM (Frequency), and PM (Phase) are used to encode data onto these carrier waves. Modern wireless systems use more complex schemes like QAM (Quadrature Amplitude Modulation) to maximize data rates. Challenges in wireless transmission include signal attenuation (weakening over distance), absorption (by buildings or rain), and multipath fading (signals bouncing off surfaces). To combat this, techniques like MIMO (Multiple Input Multiple Output) and beamforming are used in 5G and modern WiFi. Security is also a critical concern, as signals are broadcast and can be intercepted, necessitating robust encryption protocols like WPA3.",
      diagramExplanation: "Illustration of an antenna radiating waves, showing modulation peaks and troughs, and a receiver capturing the signal.",
      example: "A 4G LTE smartphone communicating with a base station through QAM-modulated radio frequencies.",
      advantages: ["High mobility", "Low infrastructure cost", "Flexible deployment", "Easy scaling"],
      disadvantages: ["Susceptible to interference", "Limited security", "Bandwidth constraints"],
      applications: ["Cellular networks", "Satellite TV", "IoT devices", "Bluetooth"],
      conclusion: "Wireless transmission is the backbone of the mobile revolution, enabling seamless connectivity across the globe without physical constraints.",
      keyPoints: ["Electromagnetic propagation", "Modulation (AM, FM, PM)", "Frequency spectrum usage", "Signal attenuation factors", "Multipath fading", "MIMO and Beamforming", "Transmission security"]
    }
  },
  {
    id: "m1-15-8",
    moduleId: 1,
    marks: 15,
    question: "Explain layered architecture significance",
    answer: {
      definition: "Layered architecture in networking is a design principle where communication tasks are divided into distinct vertical layers with specific responsibilities and standardized interfaces.",
      explanation: "The significance of layered architecture lies in its ability to simplify complex system designs and promote interoperability. By dividing the networking process into layers (like the OSI or TCP/IP models), developers can focus on specific functionalities without knowing the internal details of other layers. For example, a web developer doesn't need to know how fiber optic signals are modulated to build an application. This modularity means that a change in one layer (switching from Copper to Fiber) doesn't require rewriting the computer's software stack. Layering also facilitates standardized testing and debugging, as faults can be isolated to a specific layer. It allows for the co-existence of diverse hardware and software from different vendors, as they all adhere to the same interlayer communication standards. This structure enables massive innovation, as each layer can evolve independently, leading to the rapid advancement of speeds, security, and application features seen in modern networking.",
      diagramExplanation: "A visual showing horizontal communication between peers and vertical service calls between adjacent layers.",
      example: "Updating a network card (Physical/Link) without needing to update the web browser (Application).",
      advantages: ["Modularity", "Simpler troubleshooting", "Ease of development", "Standardization"],
      disadvantages: ["High processing overhead", "Redundant functionality", "Increased latency"],
      applications: ["Protocol design", "Software engineering", "Education"],
      conclusion: "Layered architecture is the essential blueprint that makes the complexity of modern global communication manageable and scalable.",
      keyPoints: ["Modularity and abstraction", "Standardized interfaces", "Independent layer evolution", "Simplified debugging", "Cross-vendor compatibility", "Clear responsibility", "Encapsulation concept"]
    }
  },

  // 8 MARKS
  {
    id: "m1-8-1",
    moduleId: 1,
    marks: 8,
    question: "Packet switching concept",
    answer: {
      definition: "Packet switching is a communication method that divides data into small blocks called packets, which are individually routed through a network to their destination.",
      explanation: "In packet switching, messages are broken down into packets, each containing a header with source and destination addresses. These packets travel independently and can take different paths based on network congestion or link failures. Upon arrival, the destination host reassembles them using sequence numbers. This method is highly efficient as multiple users can share the same network resources simultaneously. It eliminates the need for a dedicated physical path between sender and receiver, prioritizing bandwidth utilization over constant latency. It is the core technology that enables the modern internet.",
      example: "TCP/IP communication across the internet, where emails or web pages are sent as independent packets.",
      keyPoints: ["Data fragmented into packets", "Dynamic routing paths", "Efficient bandwidth sharing", "Store-and-forward logic", "Supports multiple users", "Foundation of the Internet"]
    }
  },
  {
    id: "m1-8-2",
    moduleId: 1,
    marks: 8,
    question: "Circuit vs Packet switching",
    answer: {
      definition: "Circuit and Packet switching are two fundamental methods of routing data, differing in how they allocate network resources for transmission.",
      explanation: "Circuit switching establishes a dedicated, constant-bitrate connection between two nodes for the entire communication session, similar to a traditional telephone call. It guarantees bandwidth and zero jitter but is inefficient if no data is being sent. Packet switching divides data into individual blocks that are routed independently. It uses statistical multiplexing to allow many users to share one link, offering much better efficiency for bursty data. While circuit switching was best for old voice networks, packet switching is the standard for almost all modern digital communication.",
      example: "Landline phone call (Circuit) vs browsing a website (Packet).",
      keyPoints: ["Dedicated vs Dynamic paths", "Fixed vs Shared bandwidth", "High vs Low efficiency", "Constant vs Variable delay", "Guaranteed vs Best-effort", "Voice vs Data networks"]
    }
  },
  {
    id: "m1-8-3",
    moduleId: 1,
    marks: 8,
    question: "Physical layer functions",
    answer: {
      definition: "The Physical Layer is the lowest layer of the OSI model, responsible for the actual transmission and reception of raw unstructured bitstreams over a physical medium.",
      explanation: "Its primary functions include defining physical characteristics of interfaces (like connector shapes), bit representation (how 0s and 1s are signaled), and transmission rates (number of bits per second). It also handles bit synchronization, ensuring sender and receiver clocks are aligned. The layer defines the transmission mode (Simplex, Half-duplex, or Full-duplex) and the physical topology (Star, Bus, Mesh). It essentially converts digital data from the Data Link layer into electrical, optical, or radio signals that can traverse the communication media.",
      example: "Encoding bits into light pulses in a fiber optic cable or voltage levels in an Ethernet wire.",
      keyPoints: ["Raw bit transmission", "Physical interface specs", "Signal encoding/decoding", "Bit synchronization", "Transmission mode control", "Topology definition"]
    }
  },
  {
    id: "m1-8-4",
    moduleId: 1,
    marks: 8,
    question: "Wireless vs wired communication",
    answer: {
      definition: "Wireless and Wired communication refer to whether data is transmitted through a physical conductor or through electromagnetic waves in free space.",
      explanation: "Wired communication (Twisted pair, Fiber) offers high stability, superior bandwidth, and better security as the signal is contained within the medium. However, it requires expensive physical infrastructure and limits mobility. Wireless communication (WiFi, LTE) provides excellent mobility and is easier to deploy in hard-to-reach areas. But it is more susceptible to interference, signal attenuation, and environmental factors like rain or walls. Wireless also has inherently lower security as the signal is broadcast to everyone in range. Modern systems often use wired backbones with wireless access for the end user.",
      example: "An office workstation on Ethernet (Wired) vs a guest using the office WiFi (Wireless).",
      keyPoints: ["Physical cables vs Radio waves", "High vs Low mobility", "Secure vs Vulnerable to interception", "Low vs High interference", "High vs variable bandwidth", "Installation cost differences"]
    }
  },
  {
    id: "m1-8-5",
    moduleId: 1,
    marks: 8,
    question: "Fiber optics vs twisted pair",
    answer: {
      definition: "Fiber optics and Twisted Pair are two primary types of guided transmission media used for carrying digital signals across networks.",
      explanation: "Twisted pair uses copper wires that are twisted together to reduce electromagnetic interference (EMI); it is inexpensive and easy to install but has limited distance and bandwidth. Fiber optics use glass or plastic strands to transmit data as light pulses. Fiber offers significantly higher bandwidth, can transmit over very long distances without repeaters, and is completely immune to EMI and crosstalk. While fiber is more expensive and fragile to handle, it is the standard for high-speed internet backbones, whereas twisted pair remains common for home and office LAN connections.",
      example: "Standard Cat6 LAN cable (Twisted Pair) vs a high-speed metropolitan link (Fiber).",
      keyPoints: ["Copper (electrical) vs Glass (optical)", "Low vs Extremely high bandwidth", "Susceptible vs Immune to EMI", "Short vs Very long distance", "Low vs higher cost", "Rigid vs fragile installation"]
    }
  },
  {
    id: "m1-8-6",
    moduleId: 1,
    marks: 8,
    question: "Microwave transmission advantages",
    answer: {
      definition: "Microwave transmission uses high-frequency radio waves to transmit data via a line-of-sight path between two fixed points.",
      explanation: "Advantages include the ability to transmit large amounts of data over long distances without the need for laying expensive physical cables across difficult terrain like mountains or oceans. It is relatively easy and cheap to install as it only requires towers with dishes. Microwave links provide high bandwidth compared to standard radio and can be set up quickly for temporary or disaster recovery links. Since it is line-of-sight, it avoids the complexities of burying cables in urban areas. It is highly effective for point-to-point communication where a direct fiber link is impractical.",
      example: "Connecting two office towers across a busy city street using a roof-to-roof microwave link.",
      keyPoints: ["Long distance reach", "No physical cabling required", "High bandwidth capacity", "Easy across difficult terrain", "Rapid deployment", "Cost-effective infrastructure"]
    }
  },
  {
    id: "m1-8-7",
    moduleId: 1,
    marks: 8,
    question: "Optical transmission system components",
    answer: {
      definition: "An optical transmission system consists of hardware components that work together to transmit data as light signals through fiber optic cables.",
      explanation: "The key components include the Light Source (Laser or LED) which converts electrical signals into light pulses. The Transmission Medium is the optical fiber (Glass or Plastic) which guides the light using total internal reflection. The Optical Receiver (Photodiode) converts the incoming light signals back into electrical form. Between these, Optical Amplifiers or Repeaters may be used to boost the signal over long distances without converting it back to electrical. Modern systems also use Multiplexers (WDM) to send multiple data streams at different wavelengths over a single fiber, drastically increasing total capacity.",
      example: "A fiber-to-the-home (FTTH) setup consisting of an ONT (Receiver/Source) and miles of fiber cable.",
      keyPoints: ["Light source (LED/Laser)", "Optical fiber medium", "Photodiode receiver", "Optical amplifiers", "Multiplexers (WDM)", "Signal conversion process"]
    }
  },

  // 2 MARKS
  {
    id: "m1-2-1",
    moduleId: 1,
    marks: 2,
    question: "Define computer network",
    answer: {
      definition: "A computer network is a collection of interconnected computing devices that can exchange data and share resources (like printers or files) through a digital communication system using wired or wireless links.",
      keyPoints: []
    }
  },
  {
    id: "m1-2-2",
    moduleId: 1,
    marks: 2,
    question: "Define protocol",
    answer: {
      definition: "A protocol is a set of formal rules and standards that define how data is formatted, transmitted, and received across a network, ensuring different devices can communicate effectively.",
      keyPoints: []
    }
  },
  {
    id: "m1-2-3",
    moduleId: 1,
    marks: 2,
    question: "Types of networks based on size",
    answer: {
      definition: "Commonly classified into: LAN (Local Area Network) for small office/home, MAN (Metropolitan Area Network) for cities, and WAN (Wide Area Network) for countries or global scales like the Internet.",
      keyPoints: []
    }
  },
  {
    id: "m1-2-4",
    moduleId: 1,
    marks: 2,
    question: "Types based on transmission",
    answer: {
      definition: "Networks are typed as: Point-to-Point (one-to-one link), Broadcast (one message addressed to all), and Multicast (one message addressed to a specific group).",
      keyPoints: []
    }
  },
  {
    id: "m1-2-5",
    moduleId: 1,
    marks: 2,
    question: "Broadcasting",
    answer: {
      definition: "Broadcasting is a transmission method where a single station sends data that is received and processed by every other device on the network segment simultaneously.",
      keyPoints: []
    }
  },
  {
    id: "m1-2-6",
    moduleId: 1,
    marks: 2,
    question: "Multicasting",
    answer: {
      definition: "Multicasting is a technique where a single data stream is sent to multiple specific receivers who have expressed interest in receiving it, rather than the entire network.",
      keyPoints: []
    }
  },
  {
    id: "m1-2-7",
    moduleId: 1,
    marks: 2,
    question: "Advantages of fiber optics",
    answer: {
      definition: "Key advantages include extremely high bandwidth, immunity to electromagnetic interference (EMI), low signal attenuation over distance, small size/weight, and high security against signal tapping.",
      keyPoints: []
    }
  },
  {
    id: "m1-2-8",
    moduleId: 1,
    marks: 2,
    question: "LED vs Semiconductor Laser",
    answer: {
      definition: "LEDs are cheaper, simpler, and used for short-range multimode fiber; Semiconductor Lasers provide focused, high-power coherent light used for high-speed, long-distance single-mode fiber links.",
      keyPoints: []
    }
  },
  {
    id: "m1-2-9",
    moduleId: 1,
    marks: 2,
    question: "Twisted pair significance",
    answer: {
      definition: "Twisting the two copper wires in a pair helps cancel out electromagnetic interference and crosstalk from external sources or adjacent pairs, improving the quality of the transmitted signal.",
      keyPoints: []
    }
  },
  {
    id: "m1-2-10",
    moduleId: 1,
    marks: 2,
    question: "Geostationary satellite",
    answer: {
      definition: "A geostationary satellite orbits at approximately 35,786 km directly above the equator, following the Earth's rotation so that it remains fixed relative to a specific location on the ground.",
      keyPoints: []
    }
  },
  {
    id: "m1-2-11",
    moduleId: 1,
    marks: 2,
    question: "Why satellites appear stationary",
    answer: {
      definition: "They appear stationary because their orbital period exactly matches the Earth's rotation period (24 hours), allowing ground antennas to stay pointed at them without complex tracking systems.",
      keyPoints: []
    }
  },
  {
    id: "m1-2-12",
    moduleId: 1,
    marks: 2,
    question: "Social issues in networks",
    answer: {
      definition: "Primary social issues include privacy concerns, copyright infringement, digital divide (inequality), cyberbullying, misinformation spread, and the impact of social media on mental health and democracy.",
      keyPoints: []
    }
  },
  {
    id: "m1-2-13",
    moduleId: 1,
    marks: 2,
    question: "TCP/IP diagram summary",
    answer: {
      directAnswer: "A four-layer conceptual stack: 1. Network Access (Bottom), 2. Internet, 3. Transport, 4. Application (Top). It illustrates the encapsulation of data through successive protocol headers.",
      definition: "A representation of the four functional layers that enable internet communication.",
      keyPoints: []
    }
  },
  {
    id: "m1-2-14",
    moduleId: 1,
    marks: 2,
    question: "Transmission media types",
    answer: {
      definition: "Broadly categorized into Guided Media (Twisted pair, Coaxial, Fiber Optic) and Unguided Media (Radio waves, Microwaves, Infrared pulses).",
      keyPoints: []
    }
  },
  {
    id: "m1-2-15",
    moduleId: 1,
    marks: 2,
    question: "Uses of networks",
    answer: {
      definition: "Primary uses include resource sharing (printers/servers), data communication (email/IM), information access (WWW), social networking, remote computing, and collaborative software development.",
      keyPoints: []
    }
  },

  // ==========================================
  // MODULE 2: DATA LINK LAYER
  // ==========================================
  
  // 15 MARKS
  {
    id: "m2-15-1",
    moduleId: 2,
    marks: 15,
    question: "Hamming code error detection problem",
    answer: {
      definition: "Hamming Code is an error-correcting code developed by Richard Hamming that inserts redundant parity bits at specific positions to enable single-bit error detection and correction.",
      explanation: "The Hamming code works by adding 'r' redundancy bits to 'm' data bits. These bits are placed at positions that are powers of 2 (1, 2, 4, 8...). Each parity bit covers a specific set of data bits based on their binary position representation. For example, in a (7,4) code, there are 4 data bits and 3 parity bits. To solve a problem, one first determines the required parity bits using the formula 2^r >= m + r + 1. The sender calculates the parity bits (Even or Odd) based on the assigned data bits. The receiver re-calculates these parity bits upon arrival. If an error occurred, the decimal sum of the positions with failed parity checks points exactly to the index of the flipped bit. Flipping that bit back corrects the error without retransmission. This method is efficient for single-bit flips but cannot correct multi-bit errors without more complexity.",
      diagramExplanation: "A bit mapping showing positions 1 to 7: P1, P2, D1, P3, D2, D3, D4. Circles show how parity bits overlap with specific data pits.",
      example: "Transmitting '1011' with parity bits computed: [P1][P2]1[P3]011 -> 0110011. If bit 5 flips, receiver calculates syndromes pointing to position 5.",
      advantages: ["Self-correcting", "No retransmission needed", "Reliable for short bursts", "Mathematically simple"],
      disadvantages: ["High overhead", "Only corrects 1-bit", "Limited to low error rates"],
      applications: ["ECC memory (RAM)", "Disk drives", "Satellite communication"],
      conclusion: "Hamming code is a fundamental algorithm in computer safety, ensuring data integrity in critical hardware systems.",
      keyPoints: ["Parity bits at powers of 2", "Single-bit error correction", "Redundancy formula 2^r >= m+r+1", "Pinpoints bit position", "ECC memory usage", "Overhead vs reliability", "Self-healing data"]
    }
  },
  {
    id: "m2-15-2",
    moduleId: 2,
    marks: 15,
    question: "Collision free protocols",
    answer: {
      definition: "Collision-free protocols are a class of Medium Access Control (MAC) protocols that ensure collisions never occur on a shared channel by pre-allocating access to specific stations.",
      explanation: "Unlike random access protocols like ALOHA, collision-free protocols use deterministic mechanisms to control channel access. The Bit-Map Protocol requires each station to broadcast a 1-bit signal during its reserved slot in a contention period; after the period, stations that signaled 1 transmit in order. In Binary Countdown, stations broadcast their addresses bit by bit; stations with a '0' in a position drop out if they hear a '1', leaving the station with the highest address to transmit. Limited-Contention protocols combine these with random access to balance efficiency. These protocols work well under high load because they eliminate the bandwidth wasted by collisions. However, they introduce overhead in the contention or reservation phase, which can be inefficient under low load when only one station wants to transmit. They are essential for systems where predictable performance and high throughput are required.",
      diagramExplanation: "A timeline showing a Contention-slot period followed by a Data-transmission period for various stations.",
      example: "High-speed industrial networks often use reservation-based collision-free protocols to ensure robotic sync.",
      advantages: ["Zero collisions", "High throughput under load", "Predictable latency", "Fair bandwidth sharing"],
      disadvantages: ["Reservation overhead", "Inefficient at low load", "Complex logic"],
      applications: ["Industrial automation", "Real-time systems", "High-load backbones"],
      conclusion: "By eliminating the chaos of random access, collision-free protocols provide stable and high-performance communication for critical environments.",
      keyPoints: ["Deterministic access", "Reservation bit-map", "Binary address countdown", "Efficiency at high load", "No collision bandwidth waste", "Fixed contention period", "Orderly transmission"]
    }
  },
  {
    id: "m2-15-3",
    moduleId: 2,
    marks: 15,
    question: "Bit-map vs Binary Countdown protocol",
    answer: {
      definition: "Bit-map and Binary Countdown are two primary reservation-based collision-free protocols used at the MAC sublayer to manage shared medium access.",
      explanation: "The Bit-map protocol uses a contention period of 'N' slots where each of the 'N' stations can send a single bit to reserve the channel. If station 5 wants to send, it sets the 5th bit to 1. After 'N' slots, all stations know who wants to transmit and they do so in order. Binary Countdown improves this by having stations compete using their binary binary IDs. During each bit-time of the address, stations broadcast their bit; if a station broadcasts 0 but hears 1 from another, it withdraws. The station with the highest ID always wins. Binary Countdown is more efficient as the contention period is only 'log2(N)' bits long, whereas Bit-map is 'N' bits long. However, Binary Countdown can be unfair as higher-numbered stations always get preference, requiring solutions like virtual IDs. Both successfully prevent collisions, making them superior to CSMA under heavy network loads.",
      diagramExplanation: "A comparison showing a long 8-slot contention period (Bit-map) vs a short 3-slot contest based on address bits (Binary Countdown).",
      example: "Station 3 (011) and Station 5 (101) competing in Binary Countdown: 5 wins because it has 1 in the most significant bit.",
      advantages: ["Both: No collisions", "Countdown: Short contention", "Bit-map: Transparent order"],
      disadvantages: ["Bit-map: Inefficient for large N", "Countdown: Unfairness risk"],
      applications: ["Reservation-based LANs", "Bus-based architectures", "Real-time control"],
      conclusion: "Binary Countdown is generally more efficient for large numbers of stations, while Bit-map is simpler for smaller groups.",
      keyPoints: ["N-slot vs log2(N)-slot contention", "Address-based competition", "Reservation signaling", "Heavy load efficiency", "Fairness vs Speed trade-offs", "No collision detection needed", "Deterministic throughput"]
    }
  },
  {
    id: "m2-15-4",
    moduleId: 2,
    marks: 15,
    question: "Sliding window protocols",
    answer: {
      definition: "Sliding window protocols are data link layer mechanisms used for flow control and reliable delivery, allowing multiple frames to be in transit before an acknowledgment is required.",
      explanation: "The core idea is that the sender maintains a window of frames it is allowed to send. As acknowledgements (ACKs) return, the window 'slides' forward, allowing new frames to enter. The protocols include One-bit Sliding Window (simplest), Go-Back-N, and Selective Repeat. Go-Back-N (GBN) allows multiple frames to be sent, but if one is lost, the receiver discards all subsequent frames and the sender re-starts from the failed frame. Selective Repeat (SR) is more efficient; the receiver buffers out-of-order frames and the sender only retransmits the missing one. These protocols significantly improve link utilization over 'stop-and-wait' because they fill the 'pipe' with data. They handle variable delays and packet loss using sequence numbers and timers. The window size balances throughput with the memory required for buffering at both ends. They are fundamental for high-speed, long-distance communication links where the round-trip time is long.",
      diagramExplanation: "A timeline showing 'Sender Window' and 'Receiver Window' moving as packets [0,1,2] are sent and ACKs [0,1,2] are received.",
      example: "Modern reliable transport protocols like TCP use the sliding window concept for global-scale flow control.",
      advantages: ["High link utilization", "Robust flow control", "Pipelined communication", "Scalable speed"],
      disadvantages: ["High memory cost", "Complex implementation", "Overhead on noisy links"],
      applications: ["High-speed LANs", "Satellite links", "Reliable streaming"],
      conclusion: "Sliding window protocols are the indispensable engine behind efficient and reliable packet-switched communication.",
      keyPoints: ["Pipelined transmission", "Sequence number management", "Go-Back-N vs Selective Repeat", "Window size logic", "Buffer management", "Flow control via sliding", "Error recovery mechanisms"]
    }
  },
  {
    id: "m2-15-5",
    moduleId: 2,
    marks: 15,
    question: "CRC error detection with example",
    answer: {
      definition: "Cyclic Redundancy Check (CRC) is a powerful error-detection code based on polynomial division used to detect accidental changes to raw data in digital networks.",
      explanation: "CRC treats a block of data as a binary polynomial M(x). The sender and receiver agree on a generator polynomial G(x). The sender appends a number of '0's (equal to the degree of G(x)) to the end of the data and performs binary division by G(x). The remainder of this division is the CRC Checksum, which replaces the appended zeros. The receiver performs the same division on the incoming message. If the resulting remainder is zero, the data is accepted as error-free; otherwise, it is rejected. CRC is extremely effective at detecting burst errors (multiple flipped bits in a sequence) and is implemented easily in hardware using shift registers. It is much more reliable than simple checksums or parity bits. Common generators include CRC-16 and CRC-32, which have standardized polynomials designed to maximize detection probability for specific data lengths and channel characteristics.",
      diagramExplanation: "A long-division calculation showing the XOR-based binary division of the message by the generator polynomial.",
      example: "Message 1101, Generator 1011 (degree 3). Append '000'. 1101000 / 1011 = Remainder 001. Send 1101001.",
      advantages: ["High detection rate", "Hardware friendly", "Low overhead", "Catches burst errors"],
      disadvantages: ["No error correction", "Mathematical understanding needed"],
      applications: ["Ethernet frames", "Hard disks", "Modem protocols", "ZIP files"],
      conclusion: "CRC is the industry wall of defense against data corruption, ensuring bits remain exactly as intended during transit.",
      keyPoints: ["Polynomial division logic", "XOR binary math", "Generator polynomial", "Burst error detection", "Zero remainder check", "Hardware implementation", "Global industry standard"]
    }
  },
  {
    id: "m2-15-6",
    moduleId: 2,
    marks: 15,
    question: "Stop-and-wait ARQ protocol",
    answer: {
      definition: "Stop-and-wait Automatic Repeat Request (ARQ) is a simple data link protocol that ensures reliable delivery by sending one frame at a time and waiting for an acknowledgment.",
      explanation: "In Stop-and-wait ARQ, the sender sends a frame and starts a timer. It then enters a wait state. The receiver receives the frame, checks for errors using a checksum, and if valid, sends an ACK. If the sender receives the ACK before the timer expires, it sends the next frame. If the ACK is lost or the frame is corrupted, the timer expires, and the sender retransmits the same frame. To handle duplicate frames (caused by a lost ACK), the protocol uses '0' and '1' as sequence numbers for alternating frames. This protocol is extremely easy to implement but highly inefficient for high-bandwidth or long-distance links because the sender is idle for most of the round-trip time. It serves as the foundational concept from which more complex 'sliding window' protocols evolved to improve utilization. Despite its simplicity, it is still used in low-power, primitive communication systems where complex buffering is not feasible.",
      diagramExplanation: "A vertical time chart showing: Sender (F0) -> Receiver (ACK0) -> Sender (F1) -> Receiver (Timeout/Wait).",
      example: "Old dial-up modem protocols or simple serial communication between a sensor and a microcontroller.",
      advantages: ["Simple implementation", "Minimal memory and buffers", "Effective for slow links"],
      disadvantages: ["Extremely low efficiency", "Wasted bandwidth", "High latency"],
      applications: ["Low-power sensors", "Simple serial links", "Foundation for education"],
      conclusion: "Stop-and-wait ARQ is the simplest form of reliability, prioritizing correctness over modern high-speed performance requirements.",
      keyPoints: ["Send-and-wait logic", "Timeout retransmission", "ACK-based delivery", "Alternating sequence numbers", "Reliable delivery", "Idle pipe utilization", "Primitive flow control"]
    }
  },
  {
    id: "m2-15-7",
    moduleId: 2,
    marks: 15,
    question: "Data link layer responsibilities",
    answer: {
      definition: "The Data Link Layer (Layer 2) is responsible for the reliable transfer of data frames across a physical link between two directly connected network nodes.",
      explanation: "Its primary responsibilities include Framing (packaging bits into packets), Physical Addressing (using MAC addresses), and Error Control (detecting and correcting bit errors). It also manages Flow Control to prevent a fast sender from overwhelming a slow receiver. Another crucial task is Access Control (MAC sublayer) in shared-media networks like WiFi, determining which station can transmit when. The layer provides service to the Network layer by hiding the complexities of the physical medium. It essentially turns a raw, potentially unreliable physical connection into a reliable, addressed communication channel. It implements protocols like Ethernet, PPP, and WiFi MAC. It manages hardware specifics like preamble signaling and frame-ending delimiters. By handling these low-level synchronization and reliability tasks, it allows higher layers to focus on abstract routing and application logic without worrying about the specifics of the hardware wires or wireless frequencies.",
      diagramExplanation: "A block diagram showing the two sublayers: LLC (Logical Link Control) and MAC (Medium Access Control) within Layer 2.",
      example: "An Ethernet switch reading the source and destination MAC addresses to forward a frame to the correct port.",
      advantages: ["Hardware abstraction", "Reliable segment comms", "Physical address isolation"],
      disadvantages: ["Adds overhead to every packet", "Limited to local segments"],
      applications: ["Local Area Networking", "Point-to-point links", "Wireless access"],
      conclusion: "The Data Link layer is the vital bridge between abstract networking logic and the physical reality of cables and radio waves.",
      keyPoints: ["Framing and bit packaging", "MAC (Physical) addressing", "Error detection/Control", "Flow control mechanisms", "Medium access management", "Sublayers: LLC & MAC", "Node-to-node reliability"]
    }
  },

  // 8 MARKS
  {
    id: "m2-8-1",
    moduleId: 2,
    marks: 8,
    question: "Selective Repeat protocol",
    answer: {
      definition: "Selective Repeat is an advanced sliding window protocol that only retransmits frames that were actually lost or corrupted, rather than sending an entire window again.",
      explanation: "In Selective Repeat, the receiver maintains a buffer for out-of-order frames that arrive correctly within the window. Instead of discarding frames after a missing one (like Go-Back-N), the receiver stores them and sends a Negative Acknowledgment (NAK) for the missing frame. The sender then retransmits only that specific piece of data. Once the missing frame arrives, the receiver delivers the whole sequence to the higher layer in order. This protocol maximizes efficiency on noisy or high-latency links but requires significantly more memory at the receiver and more complex sequence number logic on both ends of the connection.",
      example: "Efficient file transfers over satellite links where latency is high and errors are occasional.",
      keyPoints: ["Retransmit only lost frames", "Receiver side buffering", "NACK for error signaling", "High efficiency/link utilization", "Complex window management", "Requires more local memory"]
    }
  },
  {
    id: "m2-8-2",
    moduleId: 2,
    marks: 8,
    question: "Go-Back-N vs Selective Repeat",
    answer: {
      definition: "Go-Back-N and Selective Repeat are two variations of sliding window protocols used to handle errors in piplelined data transmission.",
      explanation: "In Go-Back-N (GBN), if one frame is lost, the receiver discards all subsequent frames, and the sender must retransmit the entire window starting from the lost frame. In Selective Repeat (SR), the receiver buffers out-of-order frames, and the sender only retransmits the missing one. GBN is simpler and requires a receiver window size of 1, saving memory. SR is much more efficient on heavy-traffic or error-prone links as it avoids redundant data transfer. SR requires more memory at both ends and more complex logic to handle the out-of-order buffer and sequence numbers. GBN is easier to implement for low-power hardware.",
      example: "GBN in low-cost serial links vs SR in high-speed reliable protocols.",
      keyPoints: ["GBN: retransmit whole window", "SR: retransmit only missing", "GBN: Receiver window is 1", "SR: Large receiver window", "SR is more efficient", "GBN is less complex"]
    }
  },
  {
    id: "m2-8-3",
    moduleId: 2,
    marks: 8,
    question: "Flow control methods",
    answer: {
      definition: "Flow control is a set of procedures used to regulate the data transmission rate between a sender and a receiver to prevent a fast sender from overwhelming a slow receiver.",
      explanation: "There are two primary categories: Feedback-based and Rate-based. Feedback-based flow control includes 'Stop-and-Wait', where the sender waits for an ACK before sending more, and 'Sliding Window', where the receiver provides a 'window size' limit for unacknowledged data. Another common method is 'XON/XOFF' software signaling or hardware flow control using RTS/CTS lines in serial cables. These methods ensure that the receiver's buffers do not overflow, which would otherwise lead to packet loss and wasteful retransmissions. Proper flow control is essential for ensuring stability and efficiency in heterogeneous network environments where devices have vastly different processing speeds.",
      example: "A server slowing down its data output because a shared WiFi client's buffer is filling up.",
      keyPoints: ["Regulates sender transmission rate", "Prevents receiver buffer overflow", "Feedback-based (ACK/Window)", "Rate-based (Fixed limits)", "Stop-and-wait vs Sliding window", "Hard vs Soft signaling"]
    }
  },
  {
    id: "m2-8-4",
    moduleId: 2,
    marks: 8,
    question: "CSMA/CD working",
    answer: {
      definition: "Carrier Sense Multiple Access with Collision Detection (CSMA/CD) is an early Ethernet MAC protocol where stations listen before and during transmission to detect and handle collisions.",
      explanation: "Stations first listen to the medium (Carrier Sense); if busy, they wait. If idle, they start transmitting. Crucially, they continue listening while sending. If two stations send at once, they detect a collision by monitoring the signal voltage. Upon detection, they immediately stop, send a 'jam signal' to notify the whole network, and then each waits for a random period (using Binary Exponential Backoff) before retrying. This randomness reduces the chance of another collision. It was highly effective for shared-bus Ethernet but has become less relevant with the rise of full-duplex Ethernet switches where collisions are physically impossible.",
      example: "Old-style Ethernet networks using a hub or a common coaxial cable (10Base2/10Base5).",
      keyPoints: ["Listen before talk principle", "Monitor while speaking", "Jam signal on collision", "Binary Exponential Backoff", "Shared medium management", "Collision recovery logic"]
    }
  },
  {
    id: "m2-8-5",
    moduleId: 2,
    marks: 8,
    question: "Slotted vs Pure Aloha",
    answer: {
      definition: "Pure ALOHA and Slotted ALOHA are random access protocols developed for satellite and radio networks to manage shared channel access.",
      explanation: "In Pure ALOHA, stations transmit whenever they have a frame to send. If two frames overlap even slightly, a collision occurs and both are lost. Its maximum throughput is only about 18%. Slotted ALOHA improves this by dividing time into discrete slots. A station can only start transmitting at the beginning of a slot. This synchronization reduces the 'vulnerable period' by half, doubling the maximum efficiency to about 37%. While Slotted ALOHA is more efficient, it requires all stations to maintain synchronized clocks, which adds complexity compared to the completely decentralized 'send-at-will' nature of Pure ALOHA.",
      example: "Early digital satellite networks and initial radio-based networking concepts.",
      keyPoints: ["Pure: send anytime", "Slotted: send at slot start", "Vulnerability period diff", "18% vs 37% efficiency", "Synchronization requirement", "Collision recovery logic"]
    }
  },
  {
    id: "m2-8-6",
    moduleId: 2,
    marks: 8,
    question: "Hidden & Exposed terminal problem",
    answer: {
      definition: "These are challenges in wireless networks where stations can't perceive all other stations, leading to unintended collisions or inefficient channel idle time.",
      explanation: "The Hidden Terminal problem occurs when station A and C can see B but not each other; if both send to B, they collide. This is solved using RTS/CTS (Request to Send/Clear to Send) handshakes. The Exposed Terminal problem occurs when a station B is sending to A, and station C hears B and wrongly assumes it can't send to D, even though a transmission to D wouldn't interfere with B to A. These problems highlight the limitations of simple 'carrier sensing' in environments with restricted signal range and obstacles, requiring more complex MAC-layer coordination protocols like IEEE 802.11.",
      example: "Three laptops in different rooms connecting to one central router.",
      keyPoints: ["Hidden: Collision risk", "Exposed: Wasted throughput", "RTS/CTS solution", "Limited signal range issue", "Obstruction interference", "Carrier sense limitations"]
    }
  },
  {
    id: "m2-8-7",
    moduleId: 2,
    marks: 8,
    question: "Checksum and CRC steps",
    answer: {
      definition: "Checksum and CRC (Cyclic Redundancy Check) are two mathematical procedures used to detect errors in transmitted data units.",
      explanation: "Checksum involves treating data as a sequence of integers and adding them together, often using 1's complement math; the result is sent as the checksum field. CRC treats data as a binary polynomial and performs a long division by a generator polynomial; the remainder is the CRC. CRC is significantly more complex but also much more powerful at catching 'burst' errors (multiple bit flips). Checksum is lighter on CPU resources and is commonly used in protocols like TCP/IP where speed is prioritized, while CRC is the standard for high-reliability physical and data link layer framing like Ethernet.",
      example: "IP header checksumming (fast) vs Ethernet frame CRC checking (robust).",
      keyPoints: ["Addition vs Division logic", "Integer sum vs Polynomial math", "CPU light vs Hardware robust", "Speed vs Reliability tradeoff", "Internet layers vs Link layers", "Error detection certainty"]
    }
  },

  // 2 MARKS
  {
    id: "m2-2-1",
    moduleId: 2,
    marks: 2,
    question: "Simplex protocol drawbacks",
    answer: {
      definition: "A simplex protocol only allows data to flow in one direction. The major drawbacks are the inability of the receiver to send acknowledgments, request retransmissions, or perform any flow control, making it highly unreliable.",
      keyPoints: []
    }
  },
  {
    id: "m2-2-2",
    moduleId: 2,
    marks: 2,
    question: "Design issues of DLL",
    answer: {
      definition: "Key design issues include providing a well-defined service interface to the network layer, handling transmission errors, regulating data flow (flow control), and identifying the start and end of frames (framing).",
      keyPoints: []
    }
  },
  {
    id: "m2-2-3",
    moduleId: 2,
    marks: 2,
    question: "Error detection & correction",
    answer: {
      definition: "Error detection (like Checksum or CRC) identifies if data was corrupted; error correction (like Hamming Code) includes enough redundant info to actually fix the errors without needing a retransmission.",
      keyPoints: []
    }
  },
  {
    id: "m2-2-4",
    moduleId: 2,
    marks: 2,
    question: "Piggybacking",
    answer: {
      definition: "Piggybacking is a technique where a receiver waits to send an acknowledgment until it has its own data frame to send, including the ACK in that frame's header to save bandwidth.",
      keyPoints: []
    }
  },
  {
    id: "m2-2-5",
    moduleId: 2,
    marks: 2,
    question: "MAC sublayer necessity",
    answer: {
      definition: "The Medium Access Control (MAC) sublayer is necessary in broadcast networks to determine which station can transmit on the shared channel at a given time, preventing chaos and collisions.",
      keyPoints: []
    }
  },
  {
    id: "m2-2-6",
    moduleId: 2,
    marks: 2,
    question: "Collision free protocols",
    answer: {
      definition: "Bit-map and Binary Countdown are protocols that ensure no collisions occur by requiring stations to reserve a slot before transmitting, providing deterministic performance under high load.",
      keyPoints: []
    }
  },
  {
    id: "m2-2-7",
    moduleId: 2,
    marks: 2,
    question: "CSMA principle",
    answer: {
      definition: "Carrier Sense Multiple Access (CSMA) follows the 'Listen before Talk' rule: a station senses the channel and only transmits if it finds the carrier to be idle.",
      keyPoints: []
    }
  },
  {
    id: "m2-2-8",
    moduleId: 2,
    marks: 2,
    question: "Exponential backoff",
    answer: {
      definition: "Binary Exponential Backoff is an algorithm that increases the random wait time for a station after every consecutive collision, reducing the probability of multiple stations colliding again simultaneously.",
      keyPoints: []
    }
  },
  {
    id: "m2-2-9",
    moduleId: 2,
    marks: 2,
    question: "Flow control",
    answer: {
      definition: "Flow control is a technique used at the data link layer to regulate the rate of data transmission so that a fast sender does not overwhelm the buffers of a slower receiver.",
      keyPoints: []
    }
  },
  {
    id: "m2-2-10",
    moduleId: 2,
    marks: 2,
    question: "Ethernet classification",
    answer: {
      definition: "Ethernet is classified by speed: Standard (10 Mbps), Fast (100 Mbps), Gigabit (1 Gbps), and 10-Gigabit Ethernet, using diverse media like Twisted pair or Fiber optics.",
      keyPoints: []
    }
  },
  {
    id: "m2-2-11",
    moduleId: 2,
    marks: 2,
    question: "Frame format",
    answer: {
      definition: "A data link frame typically consists of a Preamble (sync), Source/Dest MAC addresses, Type/Length field, Payload (Network data), and an FCS (Frame Check Sequence) for error detection.",
      keyPoints: []
    }
  },
  {
    id: "m2-2-12",
    moduleId: 2,
    marks: 2,
    question: "Stop-and-wait drawbacks",
    answer: {
      definition: "The main drawback of stop-and-wait is extremely low efficiency on high-speed or long-distance links because the sender remains idle for the vast majority of the round-trip time.",
      keyPoints: []
    }
  },

  // ==========================================
  // MODULE 3: NETWORK LAYER
  // ==========================================
  
  // 15 MARKS
  {
    id: "m3-15-2",
    moduleId: 3,
    marks: 15,
    question: "Dijkstra shortest path algorithm",
    answer: {
      definition: "Dijkstra's algorithm is a greedy, shortest-path algorithm used in networking to find the most efficient route between a source node and all other nodes in a graph with non-negative weights.",
      explanation: "The algorithm operates by assigning temporary distance values to every node, initialized to infinity, except for the starting source node which is set to zero. It maintains two sets: visited and unvisited nodes. In each step, the algorithm selects the unvisited node with the smallest cumulative distance. For every neighbor of this selected node, it performs a 'relaxation' operation: if the path through the current node to the neighbor is shorter than the neighbor's currently stored distance, the distance is updated. Once a node is visited, its shortest path is guaranteed. This process repeats until all nodes are visited or the destination is reached. In computer networks, this algorithm allows routers to build a 'Shortest Path Tree' (SPT), identifying the optimal next-hop for every possible destination. It is the core logic behind robust Link-State routing protocols like OSPF, ensuring that data packets take the mathematically most efficient path through the network infrastructure.",
      diagramExplanation: "A graph with weighted edges. A table showing the step-by-step evolution of [Node, Distance, Predecessor] values as the algorithm progresses.",
      example: "A router in a corporate network calculating the fastest path to a remote server across multiple intermediate links of varying speeds.",
      advantages: ["Guarantees shortest path", "Mathematically robust", "No routing loops", "Highly efficient for known topologies"],
      disadvantages: ["High CPU usage", "Fails with negative weights", "Requires global topology knowledge"],
      applications: ["OSPF routing", "GPS navigation", "Packet forwarding", "Traffic engineering"],
      conclusion: "Dijkstra's algorithm is the golden standard for efficient routing, providing the mathematical certainty needed for high-performance networks.",
      keyPoints: ["Greedy node selection", "Path relaxation step", "Source node initialization", "Unvisited vs Visited sets", "Non-negative weight requirement", "OSPF core logic", "Shortest Path Tree (SPT)"]
    }
  },
  {
    id: "m3-15-3",
    moduleId: 3,
    marks: 15,
    question: "Hierarchical routing",
    answer: {
      definition: "Hierarchical routing is a design strategy that divides a large network into different levels or layers (like areas or autonomous systems) to manage scale and complexity.",
      explanation: "As networks grow perfectly, the size of routing tables in every router becomes unmanageable. Hierarchical routing solves this by logically grouping routers into 'Regions' or 'Areas'. Routers within an area only need to know how to reach nodes in their own area. To send data to another area, they simply forward it to a designated 'Border Router'. This significantly reduces the size of routing tables, saves memory, and limits the amount of routing update traffic spanning the entire network. For example, OSPF uses a Backbone Area (Area 0) and multiple attached areas. Changes in one area don't trigger recalculations in others, improving stability and convergence times across the global internet. This multi-level approach allows the network to expand indefinitely without crashing routers under the weight of massive routing databases. It balances the need for global connectivity with the physical limitations of router hardware.",
      diagramExplanation: "A map showing clusters of routers grouped into 'Area 1', 'Area 2', and 'Backbone Area'. Lines show connections within and between these groups.",
      example: "The global internet uses BGP to route between large Autonomous Systems, while OSPF or EIGRP routes within each system.",
      advantages: ["Reduced routing table size", "Lower CPU/RAM usage", "Improved stability", "Minimized update traffic"],
      disadvantages: ["Suboptimal routing paths possible", "Increased configuration complexity", "Harder to manage globally"],
      applications: ["Global Internet (BGP)", "OSPF Areas", "Large enterprise WANs"],
      conclusion: "Hierarchical routing is what makes the global-scale internet possible by keeping routing complexity manageable for individual devices.",
      keyPoints: ["Area-based grouping", "Reduced table size", "Border gateway routers", "Stability through isolation", "OSPF Area 0 logic", "Scalability focus", "Autonomous Systems (AS)"]
    }
  },
  {
    id: "m3-15-4",
    moduleId: 3,
    marks: 15,
    question: "Link state routing",
    answer: {
      definition: "Link state routing is a dynamic routing class where every router possesses a complete map of the entire network and independently calculates the best paths.",
      explanation: "In this method, каждый router identifies its immediate neighbors and the costs to reach them. It then creates a 'Link State Packet' (LSP) containing this information and floods it to all other routers in the network. Once all LSPs are received, every router builds an identical topology database or map. Each router then independently runs Dijkstra's algorithm on this map to find the shortest path from itself to all other nodes. This results in incredibly fast convergence and zero routing loops, as every router has a consistent and complete view of the network. Unlike distance vector, updates are only sent when a link change occurs, reducing normal bandwidth waste. However, this comes at the cost of high CPU and memory requirements to store and process the full network graph. Protocols like OSPF and IS-IS are prime examples, forming the backbone of most large modern networks.",
      diagramExplanation: "A visual showing routers broadcasting LSPs to all peers until everyone has the same full-network map.",
      example: "An enterprise OSPF network where a cable cut triggers an LSP update that all routers use to instantly re-calculate routes.",
      advantages: ["Fast convergence", "No routing loops", "Event-driven updates", "Hierarchical support"],
      disadvantages: ["High CPU/Memory usage", "Complex configuration", "Initial flooding overhead"],
      applications: ["Enterprise backbones", "ISP networks", "OSPF/IS-IS protocols"],
      conclusion: "Link state routing provides the speed and reliability necessary for any modern high-availability network infrastructure.",
      keyPoints: ["Global topology knowledge", "Flooding of LSPs", "Dijkstra's Algorithm", "OSPF and IS-IS", "No routing loops", "Event-triggered updates", "High resource requirements"]
    }
  },
  {
    id: "m3-15-5",
    moduleId: 3,
    marks: 15,
    question: "Dynamic routing algorithms",
    answer: {
      definition: "Dynamic routing algorithms are protocols that allow routers to automatically discover the network topology, exchange routing information, and adapt to changes in real-time.",
      explanation: "Unlike static routing, where paths are manually entered, dynamic algorithms use software logic to determine the best paths. They are broadly categorized into Distance Vector (like RIP) and Link State (like OSPF). Distance Vector algorithms are simpler; they periodicially share tables with neighbors and use the Bellman-Ford algorithm to find paths based on 'distance' and 'direction'. Link State algorithms are more complex; they build a full map of the network and use Dijkstra's algorithm for pathfinding. Hybrid protocols like EIGRP combine features of both. These algorithms handle network growth, link failures, and congestion automatically, ensuring that traffic is always routed through the most efficient available paths. They use metrics like hop count, bandwidth, delay, and reliability to make decisions. In the modern world, dynamic routing is essential for maintaining the high availability and performance of the internet and large-scale corporate networks.",
      diagramExplanation: "A flowchart showing: Router discovery -> Table exchange -> Best path calculation -> Regular monitoring -> Adaptive recalculation.",
      example: "BGP dynamically re-routing global internet traffic around a major submarine cable failure.",
      advantages: ["Automatic recovery", "Easy to scale", "No manual maintenance", "Adapts to congestion"],
      disadvantages: ["Consumes bandwidth", "High router overhead", "Susceptible to misconfiguration"],
      applications: ["The Internet", "Corporate WANs", "Cloud datacenters"],
      conclusion: "Dynamic routing is the self-healing intelligence of the modern network, allowing it to survive and grow without human intervention.",
      keyPoints: ["Auto-toplogy discovery", "Topology change adaptation", "Distance Vector vs Link State", "Routing metrics logic", "BGP, OSPF, RIP protocols", "Best-path determination", "High availability focus"]
    }
  },
  {
    id: "m3-15-6",
    moduleId: 3,
    marks: 15,
    question: "Congestion control techniques",
    answer: {
      definition: "Congestion control refers to a set of techniques and mechanisms used at the network layer to prevent the network from becoming overloaded and collapsing.",
      explanation: "Congestion occurs when the offered load (number of packets) exceeds the network's capacity. Techniques are divided into Open-Loop (prevention) and Closed-Loop (removal). Open-loop techniques include Retransmission policy, Window policy, Acknowledgment policy, and Discarding policy; these are implemented by design to minimize congestion. Closed-loop techniques respond to congestion in real-time and include Backpressure (choking a node), Choke Packets (notifying the source to slow down), and Load Shedding (dropping packets). Another major technique is Traffic Shaping, using Leaky Bucket or Token Bucket algorithms to regulate the data flow. Routers may also use ECN (Explicit Congestion Notification) bits in IP headers to inform hosts about nearly-full buffers. Effective congestion control ensures that the network maintains high throughput and low delay even under heavy load, preventing catastrophic failures where the entire system stops moving data due to excessive packet loss.",
      diagramExplanation: "A graph of offered load vs throughput, showing a peak followed by a sharp drop (congestion collapse) and a flattened line (with control).",
      example: "A router dropping low-priority ICMP packets (Load Shedding) during a period of high video streaming traffic.",
      advantages: ["Prevents network collapse", "Fair resource sharing", "Predictable performance", "Reduces packet loss"],
      disadvantages: ["Adds overhead", "Can reduce individual speed", "Complex implementation"],
      applications: ["Internet routers", "ISP flow management", "QoS in VOIP"],
      conclusion: "Congestion control is the traffic policing of the digital world, keeping data moving smoothly despite infinite demand.",
      keyPoints: ["Open-loop vs Closed-loop", "Traffic shaping (Leaky/Token)", "Choke packets mechanism", "Load shedding strategies", "Explicit Congestion Notification", "Throughput vs Load balance", "Backpressure logic"]
    }
  },
  {
    id: "m3-15-7",
    moduleId: 3,
    marks: 15,
    question: "IPv4 protocol and addressing",
    answer: {
      definition: "IPv4 (Internet Protocol version 4) is the primary protocol at the network layer used to provide logical addressing and packet routing across the internet.",
      explanation: "IPv4 using a 32-bit address space, allowing for approximately 4.3 billion unique addresses. Addresses are written in dotted-decimal notation (e.g., 172.16.254.1). An IPv4 header (20-60 bytes) contains vital fields: Source/Dest IPs, TTL (Time to Live) to prevent loops, Protocol ID (identifies high layer), and Checksum for header integrity. The addressing system uses a hierarchical structure consisting of a Network ID and a Host ID, which is distinguished by a Subnet Mask. Classful addressing (A, B, C) was the original allocation method, later replaced by CIDR (Classless Inter-Domain Routing) for better efficiency. IPv4 also supports fragmentation, allowing packets to be broken down if they are too large for a specific link's MTU. Despite the address exhaustion leading to the rise of IPv6, IPv4 remains the most widely used and supported protocol on the internet today, often managed through NAT (Network Address Translation).",
      diagramExplanation: "An IP address split into four octets. The header structure showing fields: Version, IHL, Total Length, TTL, and IP addresses.",
      example: "Your computer being assigned a local IP of 192.168.1.5 to communicate with a router.",
      advantages: ["Universal adoption", "Well-understood", "Efficient processing", "Hierarchical routing"],
      disadvantages: ["Address exhaustion", "No built-in security", "Flat address space issues"],
      applications: ["The Internet", "Private LANs", "Global routing"],
      conclusion: "IPv4 was the spark that ignited the global internet and remains its most foundational pillar.",
      keyPoints: ["32-bit address space", "Dotted-decimal notation", "20-byte standard header", "TTL for loop prevention", "Network vs Host IDs", "Fragmentation support", "CIDR and Subnet masks"]
    }
  },

  // 8 MARKS
  {
    id: "m3-8-1",
    moduleId: 3,
    marks: 8,
    question: "IPv4 vs IPv6",
    answer: {
      definition: "IPv4 and IPv6 are the two current versions of the Internet Protocol used for identifying and routing data between devices.",
      explanation: "IPv4 uses a 32-bit address (4.3B addresses) in decimal format, while IPv6 uses 128-bit (nearly infinite) in hexadecimal. IPv6 was designed to solve the address exhaustion of IPv4. Beyond size, IPv6 has a simplified header for faster routing, built-in IPsec security, and eliminates the need for NAT by providing enough global addresses for every device. IPv6 also supports auto-configuration (SLAAC), allowing devices to generate their own IP without a DHCP server. While IPv4 is still dominant, the world is gradually migrating to the more efficient and scalable IPv6.",
      example: "192.168.1.1 (v4) vs 2001:0db8:85a3:0000:0000:8a2e:0370:7334 (v6).",
      keyPoints: ["32-bit vs 128-bit addresses", "Decimal vs Hex notation", "NAT vs Global address model", "Simplified vs complex header", "Built-in security in v6", "SLAAC auto-config in v6"]
    }
  },
  {
    id: "m3-8-2",
    moduleId: 3,
    marks: 8,
    question: "OSPF protocol",
    answer: {
      definition: "Open Shortest Path First (OSPF) is a powerful Link State routing protocol used within a single Autonomous System (AS).",
      explanation: "OSPF uses Dijkstra's algorithm to compute the shortest path to all network nodes. Routers build a full map of the network (Link State Database) by flooding Link State Advertisements (LSAs) to their peers. It supports hierarchical routing through 'Areas', reducing table sizes. OSPF converges very quickly after a change and is highly scalable, making it the standard for most enterprise networks. It is 'open' and vendor-neutral, ensuring cross-hardware compatibility, and supports multi-path routing (ECMP) where data can take multiple equal-cost paths simultaneously.",
      example: "A large university or corporate campus using OSPF to route traffic between different departments and buildings.",
      keyPoints: ["Link State protocol", "Dijkstra's Algorithm", "Area 0 (Backbone) logic", "Fast convergence speed", "LSA flooding mechanism", "Vendor-neutral standard"]
    }
  },
  {
    id: "m3-8-3",
    moduleId: 3,
    marks: 8,
    question: "BGP protocol",
    answer: {
      definition: "Border Gateway Protocol (BGP) is the 'glue' of the internet, a path-vector protocol used to exchange routing information between different Autonomous Systems (AS).",
      explanation: "BGP is responsible for routing data across the entire global internet. Unlike interior protocols, BGP focuses on policy and stability rather than just the shortest path. It maintains a table of IP prefixes and the sequence of AS numbers (the AS_PATH) to each destination. By looking at the path, it easily detects and prevents routing loops at the global level. BGP is highly configurable, allowing ISPs to set complex rules for traffic flow based on commercial and security agreements. It is extremely robust and handles the routing of trillions of daily global packets.",
      example: "An Indian ISP using BGP to determine whether to send US-bound traffic via a cable in the Suez Canal or across the Pacific.",
      keyPoints: ["Inter-AS routing", "Path-vector based", "Internet backbone glue", "AS_PATH loop prevention", "Policy-driven routing", "TCP port 179 used"]
    }
  },
  {
    id: "m3-8-4",
    moduleId: 3,
    marks: 8,
    question: "Unicast vs multicast vs anycast",
    answer: {
      definition: "These are the three primary types of addressing schemes that determine how many receivers get a data packet.",
      explanation: "Unicast is one-to-one; data is sent from a single source to a single, specific destination. Multicast is one-to-many; data is sent to a group of interested host. Anycast is one-to-nearest; data is sent to a group of nodes, but only the node physically or logically closest to the sender receives it. Unicast is for standard browsing; Multicast is for IPTV or streaming to a group; Anycast is used by DNS and CDNs to provide low latency by connecting users to the nearest server. These schemes optimize bandwidth and performance for different service types.",
      example: "Opening a private file (Unicast), Watching a live stream (Multicast), DNS resolution (Anycast).",
      keyPoints: ["One-to-one (Unicast)", "One-to-many (Multicast)", "One-to-nearest (Anycast)", "DNS use of Anycast", "IPTV use of Multicast", "Standard web use of Unicast"]
    }
  },
  {
    id: "m3-8-5",
    moduleId: 3,
    marks: 8,
    question: "Token bucket vs leaky bucket",
    answer: {
      definition: "These are two traffic shaping algorithms used to regulate the rate of data entering a network.",
      explanation: "The Leaky Bucket algorithm enforces a rigid, constant-rate output stream, regardless of how bursty the input is; its hole size defines the speed. The Token Bucket algorithm allows for controlled 'burstiness'. Data can only be sent if 'tokens' are available in the bucket; during idle times, tokens accumulate, allowing a large burst of data to be sent later. Token bucket is much more popular in modern QoS because it allows applications to utilize full speed for short periods (like loading a web page) while still protecting the overall network stability.",
      example: "Leaky bucket is like a steady drip; Token bucket is like a credit card with a monthly limit and carry-over.",
      keyPoints: ["Steady rate vs Burst support", "Traffic shaping logic", "Leaky: Discards on overflow", "Token: Collects for later", "Modern QoS standard", "Network stability focus"]
    }
  },
  {
    id: "m3-8-6",
    moduleId: 3,
    marks: 8,
    question: "Admission control & load shedding",
    answer: {
      definition: "These are two 'Closed-Loop' congestion control strategies used when the network is reaching its capacity.",
      explanation: "Admission Control is a preventive measure where the network refuses to accept new connections if it doesn't have enough resources to guarantee their quality. Load Shedding is a drastic recovery measure where routers simply start 'shedding' (dropping) existing packets when overloaded. In Load Shedding, 'Gentle' dropping prioritizes dropping low-priority packets, while 'Wine' dropping drops old packets assuming new ones are more relevant. Admission control prevents congestion before it starts, while load shedding is the final wall of defense against total system failure.",
      example: "A phone network saying 'Lines Busy' (Admission Control) or a router dropping ICMP packets (Load Shedding).",
      keyPoints: ["Preventive vs Reactive", "Connection rejection", "Packet dropping logic", "QoS prioritization", "Resource reservation", "Final defense mechanism"]
    }
  },
  {
    id: "m3-8-7",
    moduleId: 3,
    marks: 8,
    question: "Link state phases",
    answer: {
      definition: "The operation of a Link State routing protocol generally proceeds through five distinct phases to achieve network convergence.",
      explanation: "1. Neighbor Discovery: Routers send 'Hellos' to find peers. 2. Link Cost Measurement: Routers determine the cost (delay/bandwidth) to each neighbor. 3. LSP Construction: Building a packet with local link info. 4. LSP Flooding: Sharing this packet with every other router in the network. 5. Shortest Path Calculation: Each router runs Dijkstra's algorithm on the collected map to build its routing table. These phases ensure that every node moves from local awareness to global network visibility, enabling efficient routing.",
      example: "The sequence of events when an OSPF router is powered on and joins a network.",
      keyPoints: ["Discovery and Hellos", "Metric calculation", "Link State Packets (LSP)", "Global flooding", "Shortest Path Tree (SPT)", "Dijkstra's final run"]
    }
  },

  // 2 MARKS
  {
    id: "m3-2-1",
    moduleId: 3,
    marks: 2,
    question: "Count to infinity problem",
    answer: {
      definition: "This occurs in Distance Vector routing when a failed link causes routing loops, where routers continuously increment the distance to a destination until reaching a predefined maximum (infinity).",
      keyPoints: []
    }
  },
  {
    id: "m3-2-2",
    moduleId: 3,
    marks: 2,
    question: "Routing definition",
    answer: {
      definition: "Routing is the network-layer process of selecting the best path for data packets to travel from a source to a destination across one or more interconnected networks.",
      keyPoints: []
    }
  },
  {
    id: "m3-2-3",
    moduleId: 3,
    marks: 2,
    question: "Flooding",
    answer: {
      definition: "Flooding is a simple routing technique where an incoming packet is sent out on every outgoing link by every router, ensuring it reaches all possible destinations rapidly.",
      keyPoints: []
    }
  },
  {
    id: "m3-2-4",
    moduleId: 3,
    marks: 2,
    question: "Congestion control",
    answer: {
      definition: "A network layer function used to monitor and manage the total traffic load, ensuring it stays within the network's capacity to prevent data loss and delay.",
      keyPoints: []
    }
  },
  {
    id: "m3-2-5",
    moduleId: 3,
    marks: 2,
    question: "Traffic shaping",
    answer: {
      definition: "A method of controlling the amount and speed of traffic sent into a network, typically using algorithms like Leaky Bucket or Token Bucket to prevent congestion.",
      keyPoints: []
    }
  },
  {
    id: "m3-2-6",
    moduleId: 3,
    marks: 2,
    question: "Load shedding",
    answer: {
      definition: "A desperate congestion control technique where a router intentionally drops packets when its buffers are completely full and it can no longer handle incoming data.",
      keyPoints: []
    }
  },
  {
    id: "m3-2-7",
    moduleId: 3,
    marks: 2,
    question: "Admission control",
    answer: {
      definition: "A preventive congestion control measure where the network refuses to accept or set up new virtual circuit connections if it lacks sufficient available capacity.",
      keyPoints: []
    }
  },
  {
    id: "m3-2-8",
    moduleId: 3,
    marks: 2,
    question: "Optimality principle",
    answer: {
      definition: "The principle stating that if router J is on the optimal path from I to K, then the path from J to K is also optimal.",
      keyPoints: []
    }
  },
  {
    id: "m3-2-9",
    moduleId: 3,
    marks: 2,
    question: "Distance vector principle",
    answer: {
      definition: "Routers share their entire routing tables only with immediate neighbors and use the Bellman-Ford algorithm to find the shortest path based on 'distance' and 'direction'.",
      keyPoints: []
    }
  },
  {
    id: "m3-2-10",
    moduleId: 3,
    marks: 2,
    question: "IP addressing",
    answer: {
      definition: "A logical 32-bit (IPv4) or 128-bit (IPv6) numeric identifier assigned to every device on a TCP/IP network to facilitate global routing and unique identification.",
      keyPoints: []
    }
  },
  {
    id: "m3-2-11",
    moduleId: 3,
    marks: 2,
    question: "IPv4 vs IPv6 basics",
    answer: {
      definition: "IPv4 uses 32-bit decimal addresses (4.3B limit) and is existing legacy; IPv6 uses 128-bit hexadecimal addresses (limitless) and is the modern, secure successor.",
      keyPoints: []
    }
  },
  {
    id: "m3-2-12",
    moduleId: 3,
    marks: 2,
    question: "ECN vs RED",
    answer: {
      definition: "RED (Random Early Detection) drops packets randomly when buffers fill to signal congestion; ECN (Explicit Congestion Notification) marks bits in the IP header instead of dropping.",
      keyPoints: []
    }
  },

  // ==========================================
  // MODULE 4: TRANSPORT LAYER
  // ==========================================
  
  // 15 MARKS
  {
    id: "m4-15-1",
    moduleId: 4,
    marks: 15,
    question: "TCP three-way handshake",
    answer: {
      definition: "The TCP three-way handshake is a rigorous process used to establish a reliable connection between a client and a server on a TCP/IP network before data transfer starts.",
      explanation: "To ensure both hosts are ready and their sequence numbers are synchronized, TCP uses three steps. First, the client sends a SYN (Synchronize) packet with a random Initial Sequence Number (ISN). Second, the server responds with a SYN-ACK packet, acknowledging the client's SYN and sending its own ISN. Third, the client sends back an ACK packet to acknowledge the server's SYN. At this point, the connection is considered 'ESTABLISHED'. This process prevents old, delayed packets from accidentally opening a connection and ensures that both sides have agreed on the starting point for their byte-stream tracking. It allocates necessary buffer space and resources for the session. Without this handshake, reliable, stateful communication would be impossible in the chaotic, lossy environment of internet routing. It serves as the foundation for almost every reliable internet service, from simple websites to complex financial transactions.",
      diagramExplanation: "A sequence chart: 1. SYN (seq=X) -> Server, 2. SYN-ACK (seq=Y, ack=X+1) -> Client, 3. ACK (ack=Y+1) -> Server.",
      example: "A web browser opening a connection to 'google.com' immediately after the DNS lookup is complete.",
      advantages: ["Reliable sync", "Prevents duplicate connections", "Resource allocation", "Negotiates parameters"],
      disadvantages: ["Added latency (RTT)", "Vulnerable to SYN flooding", "Handshake overhead"],
      applications: ["Web browsing (HTTP)", "FTP file transfer", "Email (SMTP)"],
      conclusion: "The three-way handshake is the essential start of any reliable conversation on the modern internet.",
      keyPoints: ["SYN packet (Client)", "SYN-ACK (Server)", "ACK (Client finished)", "Sequence number sync", "Reliable establishment", "Prevents ghost connections", "Resource prep phase"]
    }
  },
  {
    id: "m4-15-2",
    moduleId: 4,
    marks: 15,
    question: "TCP congestion control",
    answer: {
      definition: "TCP congestion control is a suite of algorithms used to regulate the data transmission rate to prevent the network from becoming overloaded.",
      explanation: "The process follows several phases. 'Slow Start' begins with a small congestion window (cwnd) that doubles for every ACK received, showing exponential growth until reaching a 'Threshold'. Then, 'Congestion Avoidance' takes over, increasing the window linearly to probe the network's limit safely. If a timeout occurs, it signals severe congestion; TCP halves the threshold and resets the window to 1, starting over. If 'Triple Duplicate ACKs' are received, it signals a single lost packet rather than a full network collapse; TCP performs 'Fast Retransmit' of the lost packet and 'Fast Recovery' (halving the window instead of dropping to 1). This AIMD (Additive Increase Multiplicative Decrease) logic ensures that TCP uses all available bandwidth while being extremely cautious about overloading shared internet links. It is the core reason the internet remains stable despite billions of devices sending bursty traffic simultaneously.",
      diagramExplanation: "A graph showing cwnd size over time: Exponential increase, linear increase, and sharp drops during loss events.",
      example: "A file download starting slow, then hitting full speed, and occasionally dipping if your home WiFi becomes crowded.",
      advantages: ["Fair resource sharing", "Prevents network collapse", "Self-regulating logic", "Dyanmic speed"],
      disadvantages: ["Slow initial ramp-up", "Poor for high-loss wireless", "Treats loss as congestion"],
      applications: ["All reliable web traffic", "Streaming downloads", "File sync"],
      conclusion: "Congestion control is the primary mechanism that keeps the global internet from grinding to a halt.",
      keyPoints: ["Slow Start (Exponential)", "Congestion Avoidance (Linear)", "Threshold management", "Fast Retransmit strategy", "Fast Recovery logic", "AIMD mechanism", "Network stability focus"]
    }
  },
  {
    id: "m4-15-3",
    moduleId: 4,
    marks: 15,
    question: "TCP header format",
    answer: {
      definition: "The TCP header is a 20-60 byte data structure added to every transport layer segment to manage reliable, stateful of communication.",
      explanation: "Key fields in the header include: Source and Destination Ports (16 bits) to identify applications. Sequence Number (32 bits) and Acknowledgment Number (32 bits) for tracking bytes and ensuring reliability. The 'Flags' field (6 bits) includes SYN, ACK, FIN, RST, PSH, and URG, which control the connection state. The Window Size (16 bits) is used for flow control, telling the sender how much data can be received. A Checksum (16 bits) ensures the integrity of the entire segment. Options can include Maximum Segment Size (MSS) and Window Scaling. Unlike the much simpler 8-byte UDP header, the TCP header provides all the information needed for error recovery, flow control, and connection management. It allows TCP to turn the 'best-effort' IP layer into a reliable pipe. This overhead is what provides the 'Transmission Control' in TCP, making it the most used transport protocol for applications that cannot afford to lose even a single bit.",
      diagramExplanation: "A 32-bit wide grid mapping fields: Ports, SeqNum, AckNum, Header Length, Flags, Window, Checksum, and Options.",
      example: "Every packet of this web page you are reading contains a TCP header that ensures the text arrives in the correct order.",
      advantages: ["Highly reliable", "Dynamic flow control", "Universal compatibility", "Error-proof"],
      disadvantages: ["Large overhead (20+ bytes)", "Increased processing time", "Not for real-time latency"],
      applications: ["Web browsing", "Database queries", "SSH, FTP, SMTP"],
      conclusion: "The TCP header is a masterpiece of binary engineering, containing every tool needed for reliable global communication.",
      keyPoints: ["Source/Dest Ports", "32-bit Seq/Ack numbers", "6-bit Control Flags", "Flow control Window", "Header length field", "Checksum for integrity", "Variable Options field"]
    }
  },
  {
    id: "m4-15-4",
    moduleId: 4,
    marks: 15,
    question: "Connection establishment & release",
    answer: {
      definition: "Connection management in TCP involves a strict synchronization process to start (handshake) and stop (teardown) a reliable session.",
      explanation: "Establishment uses the 3-way handshake: Client sends SYN, Server sends SYN-ACK, Client sends ACK. This ensures both sides are ready and syncs initial sequence numbers. Connection Release is more complex and typically uses a 4-way handshake to ensure a 'graceful' shutdown. One side sends a FIN (Finish) packet, indicating it is done sending. The other side responds with an ACK and may continue to send its remaining data. Once finished, the second side also sends a FIN, which is acknowledged by the first side. This 'half-close' state allows for reliable completion of data transfer in both directions. Alternatively, a 'Hard Reset' (RST) can be used for immediate, non-graceful termination. Proper management prevents 'ghost' connections from wasting server resources and ensures that every byte sent is eventually accounted for and confirmed by the receiver. It provides the stateful 'connection' in what is otherwise a stateless network of independent packets.",
      diagramExplanation: "A sequence diagram showing: SYN -> SYN/ACK -> ACK (Open) followed by FIN -> ACK -> FIN -> ACK (Close).",
      example: "Opening a browser tab to shop (Establishment) and closing it after the transaction is confirmed (Release).",
      advantages: ["Graceful data completion", "Resource efficiency", "Reliable state tracking", "Prevents duplicate errors"],
      disadvantages: ["Handshake latency", "Teardown states (TIME_WAIT)", "Complexity in implementation"],
      applications: ["All TCP-based services", "Web servers", "Network security"],
      conclusion: "Proper start and stop procedures are what define the reliability and order of transport layer communication.",
      keyPoints: ["3-way Handshake (Open)", "4-way Handshake (Close)", "FIN/ACK signals", "SYN for synchronization", "RST for hard reset", "Graceful shutdown logic", "Half-close capability"]
    }
  },
  {
    id: "m4-15-5",
    moduleId: 4,
    marks: 15,
    question: "TCP protocol overview",
    answer: {
      definition: "TCP (Transmission Control Protocol) is a connection-oriented, reliable, and byte-stream oriented transport layer protocol that forms the backbone of the internet.",
      explanation: "TCP provides a reliable service by ensuring that data arrives in order, without errors, and without duplication. It achieves this through sequence numbers, acknowledgements, and retransmissions. It is connection-oriented, requiring a handshake before any's data is sent. TCP handles 'flow control' using sliding windows to prevent overwhelming the receiver, and 'congestion control' to protect the entire network. It treats data as an unstructured stream of bytes, meaning it doesn't preserve message boundaries, unlike UDP. It is full-duplex, allowing simultaneous communication in both directions. TCP is used for most internet traffic including the web (HTTP), email (SMTP), and remote access (SSH). While it introduces latency due to its thorough reliability checks, it is the absolute standard for any task where data integrity is the top priority. Its complexity is the price paid for turning a lossy, best-effort network into a perfectly reliable communication channel.",
      diagramExplanation: "A block diagram showing: Application Data -> TCP (Segmenting/Seq) -> IP (Routing) -> Physical Medium.",
      example: "A bank transaction where every bit must be perfectly accurate to prevent financial loss.",
      advantages: ["Perfect reliability", "Flow and Congestion control", "Ordered delivery", "Ubiquitous support"],
      disadvantages: ["High overhead", "Slow for real-time media", "Sensitive to random loss"],
      applications: ["World Wide Web", "Global Banking", "Database systems"],
      conclusion: "TCP is the undisputed reliable foundation of the digital age, enabling trust in global communications.",
      keyPoints: ["Connection-oriented", "Reliable byte-stream", "Full-duplex service", "Flow/Congestion control", "Error recovery (ARQ)", "Seq and Ack tracking", "Standardized in RFC 793"]
    }
  },

  // 8 MARKS
  {
    id: "m4-8-1",
    moduleId: 4,
    marks: 8,
    question: "UDP protocol",
    answer: {
      definition: "User Datagram Protocol (UDP) is a lightweight, connectionless transport layer protocol that prioritizes speed and efficiency over absolute reliability.",
      explanation: "UDP does not perform handshakes or track the state of a connection. It sends 'datagrams' as-is, with no guarantee of arrival, order, or duplication control. Its header is only 8 bytes, compared to TCP's 20 bytes. This makes it extremely fast with very low overhead. UDP is ideal for real-time applications like DNS, VoIP, online gaming, and video streaming where losing a few packets is better than waiting for retransmissions. It effectively provides a direct interface to the underlying IP layer with the simple addition of port numbers for application multiplexing and a basic checksum for optional integrity.",
      example: "A voice call on WhatsApp where a tiny glitch is ignored for the sake of real-time talk speed.",
      keyPoints: ["Connectionless (no handshake)", "Unreliable (best effort)", "Low overhead (8-byte header)", "High speed focus", "DNS and VoIP usage", "No congestion control logic"]
    }
  },
  {
    id: "m4-8-2",
    moduleId: 4,
    marks: 8,
    question: "RTP protocol",
    answer: {
      definition: "Real-time Transport Protocol (RTP) is a network protocol designed for delivering audio and video data over IP networks in real-time.",
      explanation: "RTP typically runs on top of UDP to take advantage of its speed. While UDP provides no timing, RTP adds a timestamp and sequence number to every packet. This allows the receiver to reassemble the media in the correct order and play it back at the right time, minimizing jitter. RTP works alongside RTCP (RTP Control Protocol), which sends feedback about the quality of the stream. It is the industry standard for VoIP, video conferencing, and live internet broadcasting, focusing on maintaining the 'flow' and 'timing' required for human perception of audio and video.",
      example: "A Zoom or Microsoft Teams meeting where RTP handles the actual video stream delivery.",
      keyPoints: ["Real-time media delivery", "Builds on top of UDP", "Timestamps for playback", "Sequence numbers for order", "Pairs with RTCP feedback", "VoIP and Streaming standard"]
    }
  },
  {
    id: "m4-8-3",
    moduleId: 4,
    marks: 8,
    question: "Sliding window in TCP",
    answer: {
      definition: "The sliding window mechanism in TCP is used for efficient flow control, allowing the sender to transmit multiple segments before waiting for an acknowledgment.",
      explanation: "The window size is advertised by the receiver in every ACK, telling the sender how much buffer space it has available. The sender can send bytes up to this window limit. As ACKs return, the window 'slides' forward, allowing new data to be sent. This 'pipelining' ensures the link is kept busy, vastly improving speeds compared to stop-and-wait. If the receiver's application is slow, it reduces the advertised window to 'zero', temporarily stopping the sender. It effectively balances the transmission rate with the receiver's processing capacity at any given moment.",
      example: "Downloading a 1GB file where the speed adjusts based on your PC's CPU and memory availability.",
      keyPoints: ["Receiver-based flow control", "Advertised window size", "Pipelined transmission", "Buffer safety mechanism", "Zero window flow stop", "Dynamic speed adjustment"]
    }
  },
  {
    id: "m4-8-4",
    moduleId: 4,
    marks: 8,
    question: "Flow control in transport layer",
    answer: {
      definition: "Flow control at the transport layer is an end-to-end mechanism that synchronizes the sender's speed with the receiver's processing and buffer capacity.",
      explanation: "Unlike link-layer flow control which handles a single wire, transport layer control works between the source and final destination across many routers. TCP uses a 'Sliding Window' combined with 'Window Advertisements' in the segment header. The receiver constantly communicates its free buffer space. This prevents buffer overflow at the destination host, which would cause packet loss. It is essential in a heterogeneous internet where a multi-gigabit server might be sending data to a slow smartphone on a weak cellular signal.",
      example: "A high-speed server slowing down because your phone is struggling to process a complex 4K video stream.",
      keyPoints: ["End-to-end synchronization", "Prevents destination overflow", "Sliding window mechanism", "Advertised window field", "Heterogeneous speed balance", "Application processing guard"]
    }
  },
  {
    id: "m4-8-5",
    moduleId: 4,
    marks: 8,
    question: "RPC concept",
    answer: {
      definition: "Remote Procedure Call (RPC) is a protocol that allows a computer program to cause a subroutine or procedure to execute in another address space (typically on another computer) as if it were a local call.",
      explanation: "RPC hides the complexities of the network from the developer. Behind the scenes, the system uses 'Stubs'. The 'Client Stub' packs (marshals) the arguments into a message and sends it to the server. The 'Server Stub' unpacks (unmarshals) them, calls the local function, and sends the result back. This makes building distributed systems much easier, as the programmer doesn't have to manually write socket code every time. It is the foundation for modern 'Microservices' and cloud computing where many servers work together as a single system.",
      example: "Your phone app calling a server function to 'process_payment' without knowing the server's internal socket logic.",
      keyPoints: ["Transparent remote execution", "Client and Server Stubs", "Marshalling/Unmarshalling", "Hides networking complexity", "Cloud and Microservices foundation", "Local call abstraction"]
    }
  },
  {
    id: "m4-8-6",
    moduleId: 4,
    marks: 8,
    question: "Timer management in TCP",
    answer: {
      definition: "TCP uses several timers to ensure reliability and handle connection states in the presence of unpredictable network delays and failures.",
      explanation: "The most important is the Retransmission Timer, which waits for an ACK and triggers a resend if it expires. This timer is dynamic, calculated using the Round Trip Time (RTT). Other timers include the Persistence Timer (checking if a zero-window has opened), the Keepalive Timer (checking if a quiet peer is still alive), and the TIME_WAIT timer (ensuring a closed connection doesn't interfere with new ones). Effective timer management is what allows TCP to be robust enough for the internet, where a packet might take 10ms or 500ms to arrive depending on the route.",
      example: "TCP waiting 200ms for an ACK before assuming the packet was lost and resending it.",
      keyPoints: ["Retransmission timeout (RTO)", "Dynamic RTT estimation", "Persistence zero-window timer", "Keepalive idle check", "TIME_WAIT closure safety", "Robustness mechanism"]
    }
  },
  {
    id: "m4-8-7",
    moduleId: 4,
    marks: 8,
    question: "TCP vs UDP",
    answer: {
      definition: "TCP and UDP are the two primary transport layer protocols, representing a trade-off between absolute reliability and pure speed.",
      explanation: "TCP is connection-oriented, reliable, and uses flow/congestion control, making it heavy but error-proof. UDP is connectionless, best-effort, and has minimal overhead, making it light and extremely fast. TCP guarantees the order of data; UDP does not. TCP is used for apps that can't lose data (Web, Email, Banking). UDP is used for apps that can't afford delay (Streaming, Gaming, VoIP). TCP is a 'Heavyweight' protocol with a 20-byte header, while UDP is a 'Lightweight' protocol with an 8-byte header. Choose TCP when accuracy is everything; choose UDP when real-time speed is everything.",
      example: "Downloading an App (TCP) vs Playing an Online Game (UDP).",
      keyPoints: ["Reliable vs Unreliable", "Connection-oriented vs Less", "High vs Low overhead", "Ordered vs Any-order", "Web/File vs Stream/DNS use", "Heavy vs Light header"]
    }
  },

  // 2 MARKS
  {
    id: "m4-2-1",
    moduleId: 4,
    marks: 2,
    question: "Transport layer definition",
    answer: {
      definition: "The fourth layer of the OSI model, responsible for providing transparent, reliable, and cost-effective end-to-end data transfer and error recovery between source and destination hosts.",
      keyPoints: []
    }
  },
  {
    id: "m4-2-2",
    moduleId: 4,
    marks: 2,
    question: "Services of transport layer",
    answer: {
      definition: "Primary services include process-level addressing (ports), connection management (handshakes), reliable delivery (ACKs), flow control (windows), and congestion control.",
      keyPoints: []
    }
  },
  {
    id: "m4-2-3",
    moduleId: 4,
    marks: 2,
    question: "TCP definition",
    answer: {
      definition: "Transmission Control Protocol is a connection-oriented, reliable, byte-stream protocol that ensures data is delivered accurately and in order across an IP network.",
      keyPoints: []
    }
  },
  {
    id: "m4-2-4",
    moduleId: 4,
    marks: 2,
    question: "UDP definition",
    answer: {
      definition: "User Datagram Protocol is a simple, connectionless transport protocol that provides best-effort delivery of datagrams with minimal overhead and high speed.",
      keyPoints: []
    }
  },
  {
    id: "m4-2-5",
    moduleId: 4,
    marks: 2,
    question: "RTP definition",
    answer: {
      definition: "Real-time Transport Protocol is a specialized protocol used for delivering real-time audio and video across the internet, providing timestamps and sequence numbers for playback.",
      keyPoints: []
    }
  },
  {
    id: "m4-2-6",
    moduleId: 4,
    marks: 2,
    question: "Port numbers",
    answer: {
      definition: "16-bit identifiers (0-65535) used to distinguish between multiple applications running on the same host, allowing the transport layer to deliver data to the correct process.",
      keyPoints: []
    }
  },
  {
    id: "m4-2-7",
    moduleId: 4,
    marks: 2,
    question: "TCP flags",
    answer: {
      definition: "Single-bit control markers in the TCP header (SYN, ACK, FIN, RST, PSH, URG) used to manage connection establishment, teardown, and data flow states.",
      keyPoints: []
    }
  },
  {
    id: "m4-2-8",
    moduleId: 4,
    marks: 2,
    question: "Acknowledgement",
    answer: {
      definition: "A signal (ACK) sent by a receiver to the sender to confirm that a specific set of data has been received successfully and without errors.",
      keyPoints: []
    }
  },
  {
    id: "m4-2-9",
    moduleId: 4,
    marks: 2,
    question: "UDP header",
    answer: {
      definition: "A simple 8-byte structure containing: Source Port, Destination Port, Length, and a Checksum, highlighting the protocol's lightweight design.",
      keyPoints: []
    }
  },
  {
    id: "m4-2-10",
    moduleId: 4,
    marks: 2,
    question: "End-to-end protocol",
    answer: {
      definition: "A protocol (like TCP/UDP) that functions only between the final source and destination hosts, ignoring the intermediate routers and network hops.",
      keyPoints: []
    }
  },

  // ==========================================
  // MODULE 5: APPLICATION LAYER
  // ==========================================
  
  // 15 MARKS
  {
    id: "m5-15-1",
    moduleId: 5,
    marks: 15,
    question: "WWW architecture",
    answer: {
      definition: "The World Wide Web (WWW) is a global information system that allows documents and web resources to be shared and accessed over the internet using URLs and the HTTP protocol.",
      explanation: "The architecture of the WWW is built on a distributed client-server model. The key components include Web Browsers (the clients), Web Servers, and the Hypertext Transfer Protocol (HTTP). When a user enters a URL, the browser sends an HTTP request to the server hosting that address. The server processes the request and sends back an HTTP response, typically containing HTML, CSS, and JavaScript. This system relies on three pillars: Uniform Resource Locators (URLs) for unique addressing, Hypertext Markup Language (HTML) for content structure, and HTTP for communication. Modern web architecture has expanded to include Content Delivery Networks (CDNs) for faster global access, Web Caches to reduce server load, and dynamic backends like databases and APIs. This creates a seamless, interactive experience where users can navigate between trillions of linked resources with a single click. It is the most dominant application of the internet, transforming how humanity accesses information, conducts business, and interacts socially.",
      diagramExplanation: "A flowchart: User -> Browser -> DNS Lookup -> HTTP Request -> Web Server -> File Retrieval -> HTTP Response -> Browser Rendering.",
      example: "Browsing an online store like Amazon where the browser requests product pages from Amazon's global server network.",
      advantages: ["Global reach", "Searchable information", "Cross-platform compatibility", "Low barrier to entry"],
      disadvantages: ["Security risks (XSS, Phishing)", "Privacy concerns", "Information overload", "Reliant on internet access"],
      applications: ["E-commerce", "Online education", "Social media", "News portals"],
      conclusion: "The WWW is the universal interface of the information age, providing the structure that makes the internet useful for everyone.",
      keyPoints: ["Client-Server model", "HTTP/HTTPS communication", "HTML/CSS/JS content", "URL unique identifiers", "Hypertext linking", "Web Browser rendering", "CDNs and Caching"]
    }
  },
  {
    id: "m5-15-2",
    moduleId: 5,
    marks: 15,
    question: "Email architecture",
    answer: {
      definition: "Email architecture is the system of servers, protocols, and clients that enable the asynchronous exchange of digital messages over the global internet.",
      explanation: "The email system consists of several core components: User Agents (UA), Message Transfer Agents (MTA), and Message Access Agents (MAA). When a user sends an email, their UA (like Outlook) sends the message to their local MTA (Mail Server) using the SMTP (Simple Mail Transfer Protocol). The sender's MTA looked up the receiver's destination using DNS (MX records) and forwards the message to the receiver's MTA. The receiver's MTA stores the message in the user's mailbox. Finally, the receiver uses their UA to retrieve the message from the server using MAA protocols like POP3 or IMAP. This 'Store-and-Forward' architecture allows messages to be delivered even if the receiver is offline. It separates the heavy lifting of routing and delivery from the client interface. Modern email also includes complex spam filtering, encryption (TLS/SSL), and webmail interfaces, making it the most critical tool for professional and personal formal communication worldwide.",
      diagramExplanation: "A visual path: Sender -> UA -> SMTP -> Sender MTA -> SMTP -> Receiver MTA -> Mailbox -> POP/IMAP -> Receiver UA.",
      example: "Sending a work report from your company Gmail account to a client's Outlook account.",
      advantages: ["Asynchronous delivery", "Cheap and fast", "Supports attachments", "Global industry standard"],
      disadvantages: ["Spam and Phishing", "Security risks", "Storage management", "No guaranteed receipt"],
      applications: ["Business communication", "Official documentation", "Subscription services", "Account verification"],
      conclusion: "Email remains the bedrock of digital identity and formal communication, despite the rise of instant messaging.",
      keyPoints: ["User Agents (UA)", "Message Transfer Agents (MTA)", "SMTP for relaying", "POP/IMAP for retrieval", "DNS MX record lookup", "Store-and-forward model", "Asynchronous nature"]
    }
  },
  {
    id: "m5-15-3",
    moduleId: 5,
    marks: 15,
    question: "DNS working",
    answer: {
      definition: "The Domain Name System (DNS) is the hierarchical and decentralized naming system used to translate human-readable domain names (like google.com) into IP addresses.",
      explanation: "DNS functions as the 'phonebook' of the internet. When you type a URL, your computer first checks its local cache. If not found, it sends a query to a Recursive Resolver (typically provided by your ISP). The resolver then queries the DNS hierarchy in stages: first the Root Servers (identifying the TLD), then the Top-Level Domain (TLD) servers (like .com or .org), and finally the Authoritative Name Servers for the specific domain. Each stage provides the IP of the next level until the resolver gets the final destination IP address. This result is then cached by the resolver and your computer for future use (controlled by the TTL value). DNS uses UDP port 53 for fast queries but can switch to TCP for large data transfers. This distributed design ensures that no single server has to handle all global internet naming traffic, providing massive scalability and resilience. Without DNS, users would have to remember complex numeric IP addresses for every website they access.",
      diagramExplanation: "A circular query path: Browser -> Local Resolver -> Root -> TLD -> Authoritative Server -> IP found -> Browser.",
      example: "Typing 'wikipedia.org' and having DNS find the IP address 208.80.154.224 in less than 50 milliseconds.",
      advantages: ["User-friendly naming", "Hierarchical scalability", "Redundancy and resilience", "Global standard"],
      disadvantages: ["DNS Spoofing/Poisoning", "Privacy leaks", "Latency for first-time queries"],
      applications: ["Web browsing", "Email routing (MX)", "Load balancing", "Service discovery"],
      conclusion: "DNS is the invisible mapping layer that makes the internet navigable and human-friendly.",
      keyPoints: ["Hierarchical naming", "Recursive vs Iterative queries", "Root, TLD, Authoritative servers", "IP translation logic", "UDP Port 53", "TTL and Caching", "MX/A/AAAA record types"]
    }
  },
  {
    id: "m5-15-4",
    moduleId: 5,
    marks: 15,
    question: "FTP protocol",
    answer: {
      definition: "File Transfer Protocol (FTP) is a standard network protocol used for the efficient transfer of files between a client and a server on a computer network.",
      explanation: "FTP is unique because it uses two separate TCP connections: a Control Connection (Port 21) for commands and status, and a Data Connection (Port 20) for the actual file transfer. When a client connects, it establishes the control connection to send login info and file commands. For the data transfer, it uses either 'Active Mode' (server connects to client) or 'Passive Mode' (client connects to server). Passive mode is preferred today as it works better with firewalls. FTP supports both binary and ASCII modes and provides basic authentication. While the original FTP is insecure as it sends passwords in plain text, variations like SFTP (SSH-based) or FTPS (SSL-based) provide the necessary encryption for modern use. Despite being an old protocol, FTP remains one of the most efficient ways to move large amounts of data, manage website files on remote servers, and perform bulk backups between servers in a data center.",
      diagramExplanation: "A two-line connection diagram: Port 21 (Commands) and Port 20 (Data) between Client and Server.",
      example: "A web developer uploading new website code to a hosting server using an FTP client like FileZilla.",
      advantages: ["Very fast file transfers", "Supports large files", "Resume capability", "Directional control"],
      disadvantages: ["Insecure (plain text)", "Firewall issues", "Two-port complexity"],
      applications: ["Web publishing", "Bulk file storage", "Software distribution", "System backups"],
      conclusion: "FTP is the specialized workhorse of file management, prioritizing throughput and control for bulk data operations.",
      keyPoints: ["Port 21 Control connection", "Port 20 Data connection", "Active vs Passive modes", "Binary vs ASCII transfers", "Authentication support", "Insecure default state", "SFTP and FTPS variants"]
    }
  },
  {
    id: "m5-15-5",
    moduleId: 5,
    marks: 15,
    question: "Email message format",
    answer: {
      definition: "The email message format (defined by RFC 5322) is the standard structure for digital messages, consisting of an envelope, a header section, and a message body.",
      explanation: "The 'Envelope' is used by the mail server (MTA) for routing and isn't seen by the user. The 'Header' section contains key-value pairs like From, To, Subject, and Date. Headers also include technical info like 'Received' stamps used for tracking message paths and 'Message-ID' for unique identification. The 'Body' contains the actual text. Originally, email was limited to plain 7-bit ASCII text. To support non-English characters, images, and attachments, the MIME (Multipurpose Internet Mail Extensions) standard was added. MIME allows the body to have multiple parts with different content types (like HTML and plain text) and provides encoding for binary files. This standardized format ensures that an email sent from a smartphone in Japan can be perfectly read by a desktop computer in Brazil. It serves as the universal legal and professional structure for digital communication, ensuring cross-platform stability and long-term archivability.",
      diagramExplanation: "A hierarchical breakdown: [Envelope] -> [Header (To, From, Sub)] -> [Body (MIME sections)].",
      example: "An email containing a PDF attachment and a formatted HTML message body with embedded images.",
      advantages: ["Universal compatibility", "Supports rich media (MIME)", "Structured headers", "Searchable/Archivable"],
      disadvantages: ["Header spoofing risk", "Complexity of MIME", "Text-heavy origins"],
      applications: ["Corporate reports", "Legal notices", "Digital newsletters", "Personal messaging"],
      conclusion: "The standardized email format is the common language that allows billions of diverse devices to exchange complex information reliably.",
      keyPoints: ["RFC 5322 structure", "Envelope vs Message", "Header fields (To/From/Subject)", "MIME for attachments", "ASCII vs Binary support", "Multipart body structure", "Spam filter headers"]
    }
  },

  // 8 MARKS
  {
    id: "m5-8-1",
    moduleId: 5,
    marks: 8,
    question: "HTTP protocol",
    answer: {
      definition: "Hypertext Transfer Protocol (HTTP) is the foundational application layer protocol of the World Wide Web, used for transmitting hypermedia documents.",
      explanation: "HTTP follows a request-response model where a client (browser) requests a resource and a server responds with it. It is inherently 'stateless', meaning each request is independent; 'cookies' are used to manage user sessions. Commands like GET (retrieve), POST (send data), and DELETE manage resources. HTTP/1.1 introduced persistent connections, while HTTP/2 and HTTP/3 have brought major performance boosts like multiplexing and faster encryption. It is the core language of the web, enabling everything from simple news reading to complex banking and social interactions.",
      example: "Your browser sending a 'GET /home.html' request to a server after you click a link.",
      keyPoints: ["Request-Response model", "Stateless protocol", "GET, POST, DELETE methods", "TCP Port 80 / 443", "Cookie-based state", "Web foundation"]
    }
  },
  {
    id: "m5-8-2",
    moduleId: 5,
    marks: 8,
    question: "URL structure",
    answer: {
      definition: "A Uniform Resource Locator (URL) is the global address for any web resource, containing all the information needed to locate and access it.",
      explanation: "A URL consists of several parts: The Protocol (http://), the Domain Name (example.com), the Port (optional, e.g., :80), the Path (/users/home), the Query String (?id=123), and the Fragment (#top). Together, these tell the browser exactly which server to talk to, which specific file to ask for, and what extra parameters to provide. It is a human-readable way to access the deep, technical infrastructure of the internet.",
      example: "https://www.netacademy.com/modules/module5?q=1#answer",
      keyPoints: ["Protocol (Scheme)", "Domain/Host name", "Port number", "Path to resource", "Query parameters", "Fragment identifier"]
    }
  },
  {
    id: "m5-8-3",
    moduleId: 5,
    marks: 8,
    question: "DNS hierarchy",
    answer: {
      definition: "The Domain Name System (DNS) is organized as a distributed, inverted tree-like hierarchy to ensure global scalability.",
      explanation: "At the top is the 'Root' (represented by a dot), followed by 'Top-Level Domains' (TLDs) like .com, .edu, and country-codes like .in. Below these are 'Second-Level Domains' (like google.com), and finally 'Subdomains' (like mail.google.com). Responsibility is delegated at each level: Root servers know where TLD servers are; TLD servers know where authoritative servers for example.com are. This hierarchical system prevents any single server from being overwhelmed by global naming requests.",
      example: "The path from root (.) to TLD (.com) to Domain (google) to Subdomain (mail).",
      keyPoints: ["Inverted tree structure", "Root server layer", "TLD (.com, .org) layer", "Authoritative servers", "Delegation of authority", "Hierarchical lookups"]
    }
  },
  {
    id: "m5-8-4",
    moduleId: 5,
    marks: 8,
    question: "Web servers",
    answer: {
      definition: "A web server is software (and the hardware it runs on) that stores, processes, and delivers web content to clients using the HTTP protocol.",
      explanation: "Its primary job is to sit and wait for incoming HTTP requests. When one arrives, it searches its storage for requested files (HTML, images, etc.) or passes the request to a dynamic backend like a Python or Node.js script. It then packages the result and sends it back to the browser. Common web server software includes Apache, Nginx, and Microsoft IIS. They also provide security, manage concurrent users, and can act as 'load balancers' to spread traffic across multiple physical machines.",
      example: "Nginx serving thousands of simultaneous requests for a popular news website's homepage.",
      keyPoints: ["Stores/delivers web files", "HTTP/HTTPS communication", "Apache/Nginx/IIS types", "Static vs Dynamic content", "TCP Port 80/443 listener", "Resource management"]
    }
  },
  {
    id: "m5-8-5",
    moduleId: 5,
    marks: 8,
    question: "Email flow",
    answer: {
      definition: "Email flow describes the sequence of steps a digital message takes from the sender's device to the receiver's inbox across multiple servers.",
      explanation: "First, the sender's app (UA) sends the mail to their server (MTA) using SMTP. The sender's MTA looked up the receiver's MX record in DNS to find their server. It then forwards the message via SMTP to the receiver's MTA. The receiver's MTA performs security checks and places it in the user's mailbox. Finally, the receiver retrieves it using their app via POP3 or IMAP. This journey usually happens in seconds but can involve multiple intermediate relays, ensuring global reachability.",
      example: "A Gmail message travelling through Google's relays to an Outlook inbox.",
      keyPoints: ["UA to MTA (SMTP)", "DNS MX record lookup", "MTA to MTA relay (SMTP)", "Storage in Mailbox", "Retrieval (POP/IMAP)", "Asynchronous flow"]
    }
  },
  {
    id: "m5-8-6",
    moduleId: 5,
    marks: 8,
    question: "DNS resource records",
    answer: {
      definition: "DNS resource records (RRs) are the individual entries in a DNS database that define different types of information for a domain name.",
      explanation: "The most common are: A records (maps domain to IPv4), AAAA (maps to IPv6), CNAME (maps one domain to another alias), MX (identifies email servers), and NS (names authoritative servers). Other records like TXT are used for verification (like SPF for email security). These distinct record types allow a single domain name to point to multiple different services like a website, an email server, and a cloud-based verification service simultaneously.",
      example: "An MX record telling the world that 'mail.google.com' handles mail for '@google.com'.",
      keyPoints: ["A/AAAA IP mapping", "CNAME domain aliases", "MX for email routing", "NS for authoritative info", "TXT for security/metadata", "TTL for cache control"]
    }
  },
  {
    id: "m5-8-7",
    moduleId: 5,
    marks: 8,
    question: "POP vs IMAP",
    answer: {
      definition: "POP and IMAP are the two primary protocols used by email clients to retrieve messages from a mail server.",
      explanation: "POP (Post Office Protocol) is designed to download emails to a single device and then delete them from the server; it's simple but poor for multiple devices. IMAP (Internet Message Access Protocol) syncs emails across all devices; messages stay on the server, and changes (like marking as read or deleting) are updated everywhere instantly. Most modern users prefer IMAP because it allows their phone, laptop, and tablet to show exactly the same state of their mailbox.",
      example: "Accessing your mail on both a phone and a laptop using IMAP Sync.",
      keyPoints: ["POP: Download and delete", "IMAP: Multi-device sync", "IMAP: Server-side storage", "POP: Best for single device", "IMAP: Modern industry standard", "IMAP: Faster partial fetches"]
    }
  },

  // 2 MARKS
  {
    id: "m5-2-1",
    moduleId: 5,
    marks: 2,
    question: "DNS definition",
    answer: {
      definition: "The Domain Name System is the internet's decentralized naming service that translates human-readable domain names (like netacademy.com) into specialized numeric IP addresses.",
      keyPoints: []
    }
  },
  {
    id: "m5-2-2",
    moduleId: 5,
    marks: 2,
    question: "HTTP definition",
    answer: {
      definition: "Hypertext Transfer Protocol is the application layer protocol used by web browsers and servers to exchange data, forming the basis of communication for the WWW.",
      keyPoints: []
    }
  },
  {
    id: "m5-2-3",
    moduleId: 5,
    marks: 2,
    question: "URL definition",
    answer: {
      definition: "A Uniform Resource Locator is a standardized address string used to identify and locate a specific resource (like a document or image) on the internet.",
      keyPoints: []
    }
  },
  {
    id: "m5-2-4",
    moduleId: 5,
    marks: 2,
    question: "Email concept",
    answer: {
      definition: "Electronic mail is a method of exchanging digital messages between people using electronic devices through an asynchronous store-and-forward server architecture.",
      keyPoints: []
    }
  },
  {
    id: "m5-2-5",
    moduleId: 5,
    marks: 2,
    question: "DNS records",
    answer: {
      definition: "Resource records are entries in a DNS database that store specific information such as IP addresses (A/AAAA), mail server locations (MX), or aliases (CNAME).",
      keyPoints: []
    }
  },
  {
    id: "m5-2-6",
    moduleId: 5,
    marks: 2,
    question: "User agent",
    answer: {
      definition: "A software application, like a web browser or email client, that acts as an interface between a user and a network service to retrieve and display information.",
      keyPoints: []
    }
  },
  {
    id: "m5-2-7",
    moduleId: 5,
    marks: 2,
    question: "Hyperlinks",
    answer: {
      definition: "Interactive elements in a web document that, when clicked, redirect the user to another resource or location within the same document or a different one.",
      keyPoints: []
    }
  },
  {
    id: "m5-2-8",
    moduleId: 5,
    marks: 2,
    question: "Static vs dynamic web pages",
    answer: {
      definition: "Static pages store pre-built content that stays the same for every user; dynamic pages generate content on-the-fly using scripts and databases based on user interaction.",
      keyPoints: []
    }
  },
  {
    id: "m5-2-9",
    moduleId: 5,
    marks: 2,
    question: "Email structure",
    answer: {
      definition: "An email consists of three parts: the envelope (for routing), the header (metadata like To/From/Subject), and the body (the actual message content).",
      keyPoints: []
    }
  },
  {
    id: "m5-2-10",
    moduleId: 5,
    marks: 2,
    question: "DNS namespace",
    answer: {
      definition: "The global hierarchical organization of domain names, structured as a tree with specific labels separated by dots, ensuring every name is globally unique.",
      keyPoints: []
    }
  },
];
