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
      explanation: [
        "Origin: The OSI model was established by the International Organization for Standardization (ISO) in 1984 to facilitate global communication and interoperability between diverse vendors.",
        "Abstract Architecture: It provides a highly structured 7-layer architecture where each layer addresses a specific aspect of the computer-to-computer data exchange process.",
        "Modularity: By breaking down the complex networking process, it allows for targeted troubleshooting, modularity in protocol design, and a clear understanding of data flow.",
        "Layer Dependency: Each layer performs its own set of functions and relies on the services provided by the layer immediately below it while offering its own services to the layer above.",
        "Vertical Isolation: This vertical hierarchy is crucial for maintaining abstraction; for example, the Application layer doesn't need to know whether the Physical layer is using copper or light to transmit bits.",
        "Standard Blueprint: This model remains the gold standard for theoretical networking education and serves as a vital blueprint for building scalable, multi-vendor enterprise networks consistently."
      ],
      detailedPoints: [
        "Physical Layer (Layer 1): Deals with the physical characteristics of the transmission medium and the raw bitstream transmission. It defines voltages, pin layouts, and cable specifications.",
        "Data Link Layer (Layer 2): Responsible for node-to-node data transfer. It packages bits into frames, handles physical addressing (MAC addresses), and manages error control and flow control.",
        "Network Layer (Layer 3): Manages packet routing across the network. It uses logical addressing (IP addresses) and determines the best path for data using advanced routing algorithms.",
        "Transport Layer (Layer 4): Provides end-to-end communication services. It handles segmentation, reassembly, error correction, and flow control (TCP and UDP function here).",
        "Session Layer (Layer 5): Establishes, manages, and terminates dialogues between applications. It handles session checkpoints and recovery mechanisms.",
        "Presentation Layer (Layer 6): Acts as the data translator. It handles data encryption, compression, and various character encoding formats (like ASCII or JPEG).",
        "Application Layer (Layer 7): Provides network services directly to end-user applications. It includes protocols like HTTP, SMTP, and FTP that users interact with directly."
      ],
      diagramExplanation: "A vertical stack of seven layers. Data flows down (encapsulation) at the sender and up (decapsulation) at the receiver. Peers communicate logically.",
      example: "When you browse a website, your request travels through your browser (Application) down to your network cable (Physical).",
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
      explanation: [
        "Development: The TCP/IP model, also known as the DoD model, is a practical and flexible framework developed by DARPA.",
        "Internet Focus: Unlike the 7-layer OSI model, TCP/IP focuses specifically on the protocols required for the global internet to function.",
        "Pragmatic Design: It prioritizes reliability and efficient routing over strict theoretical separation of tasks.",
        "Platform Independence: The model is designed to be hardware-independent, allowing computers across the globe to communicate regardless of their internal architecture.",
        "Delivery Tiers: It operates using the principle of best-effort delivery at the lower layers, while the Transport layer (TCP) provides the necessary guarantees for mission-critical data.",
        "Modern Standard: This model has become the undisputed standard for modern networking because it is lightweight, highly scalable, and perfectly optimized for the packet-switching nature of the internet.",
        "Reduced Overhead: By consolidating tasks (like combining session and presentation into application), it reduces processing overhead and simplifies the implementation for software developers and systems engineers."
      ],
      detailedPoints: [
        "Network Access Layer: Combines the Physical and Data Link layers of the OSI model. It handles the physical transmission of data between adjacent network nodes.",
        "Internet Layer: Equivalent to the OSI Network layer. It uses the Internet Protocol (IP) for logical addressing and packet routing across different networks.",
        "Transport Layer: Manages host-to-host communication. TCP provides reliable, connection-oriented data delivery, while UDP offers fast, connectionless data transfer.",
        "Application Layer: Encompasses the Session, Presentation, and Application layers of OSI. It includes all high-level protocols like HTTP, DNS, and SSH that applications use.",
        "Focus on Integration: The model is highly integrative, allowing seamless communication across diverse physical media like Ethernet, Fiber, and Satellite.",
        "Hardware Independence: Since protocols are software-defined, the TCP/IP model allows any device (phone, server, IoT) to join the global web.",
        "Global Standardization: Every device connected to the internet must implement some version of the TCP/IP stack, ensuring universal connectivity."
      ],
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
      explanation: [
        "Design Significance: Choosing a network topology is one of the most critical decisions in network design, as it impacts performance, cabling costs, and the difficulty of future expansions.",
        "Physical vs Logical: Physical topology focuses on the layout of cables and devices, while logical topology describes the actual path signals take through the physical wires.",
        "Variety of Arrangements: Each arrangement has a unique 'personality': some are built for extreme reliability (Mesh), while others are built for simplicity and cost-savings (Bus).",
        "Industry Standard: In modern enterprise environments, the Star topology has become the standard due to the reliability and intelligence of modern network switches.",
        "Scalability Structures: For large-scale backbone networks, Mesh or Tree structures are preferred to provide the necessary redundancy and hierarchical organization.",
        "Engineering Balance: Understanding the merits and demerits of each is essential for any engineer tasked with building a network that must survive hardware failures while remaining within a set budget and physical space."
      ],
      detailedPoints: [
        "Star Topology: All devices connect to a central hub/switch. Pros: easy to install, one cable failure doesn't affect the rest. Cons: hub failure brings down the entire network.",
        "Bus Topology: All nodes share a common single backbone cable. Pros: cheap and simple for small setups. Cons: a break in the main cable ends all communication.",
        "Ring Topology: Every node connects to exactly two neighbors, forming a circle. Pros: handles heavy traffic well. Cons: one node failure can disrupt the whole network.",
        "Mesh Topology: Every node has a direct connection to many other nodes. Pros: extreme redundancy and privacy. Cons: incredibly expensive and complex to cable.",
        "Tree Topology: A hierarchical structure where star networks are connected through a central bus/root. Pros: highly scalable. Cons: depends on the root node.",
        "Hybrid Topology: Combining two or more topologies (like Star-Ring) to leverage the advantages of each for specialized industrial or campus environments."
      ],
      diagramExplanation: "Illustrative shapes: Point-to-point (Star), Single Line (Bus), Circle (Ring), and Web (Mesh). Higher layer diagrams include hierarchical branching (Tree).",
      example: "A typical office setup uses Star topology where every computer connects to a central server room switch.",
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
      explanation: [
        "Selection Criteria: The selection of transmission media is a foundational step in network engineering, as it determines the maximum possible bandwidth and the distance data can travel before needing a repeater.",
        "Security & Noise: It also dictates the level of security against eavesdropping and the susceptibility to environmental electromagnetic interference.",
        "Guided Mechanism: Guided media use a physical conduit, such as copper or glass, to contain and direct the signal, providing higher security and reliability.",
        "Signal Protection: This containment reduces the impact of external cross-talk and atmospheric conditions on the high-frequency signals.",
        "Unguided Mobility: Unguided media use the electromagnetic spectrum to broadcast signals through the air, enabling incredible mobility and rapid deployment.",
        "Geographical Flexibility: This is particularly useful in areas where physical infrastructure like trenches for cables is geographically or economically impossible.",
        "Hybrid Approaches: Modern enterprise networks often use a hybrid approach: high-speed Fiber Optic backbones (Guided) and Wireless Access Points (Unguided) for users."
      ],
      detailedPoints: [
        "Twisted Pair (Guided): Consists of two insulated copper wires twisted together. It is inexpensive and easy to install but has limited distance and bandwidth (Cat5, Cat6).",
        "Coaxial Cable (Guided): Features a central conductor surrounded by an insulating layer and a metallic shield. It offers better shielding and higher bandwidth than twisted pair.",
        "Fiber Optic (Guided): Uses pulses of light through ultra-thin glass strands. It provides the highest bandwidth, longest distances, and total immunity to electromagnetic interference.",
        "Radio Waves (Unguided): Low-frequency waves that can penetrate buildings and travel long distances. Ideal for FM radio and television broadcasting.",
        "Microwaves (Unguided): High-frequency waves that require line-of-sight transmission (unobstructed path). Used extensively for satellite and cellular communication.",
        "Infrared (Unguided): Extremely high-frequency, short-range waves. They cannot penetrate walls, making them secure for short-range device communication like TV remotes.",
        "Propagation Modes: Guided media use physical propagation, while unguided media use ground wave, sky wave, and line-of-sight propagation depending on frequency."
      ],
      diagramExplanation: "A branching tree: Media -> Guided (Twisted, Coax, Fiber) and Unguided (Radio, Microwave, Infrared).",
      example: "Connecting your computer to a router via an Ethernet cable (Guided) vs your laptop connecting via Wi-Fi (Unguided).",
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
      explanation: [
        "Structural Difference: The OSI model is a 7-layer theoretical standard, while TCP/IP is a 4-layer practical protocol stack.",
        "Design Intent: OSI was designed as a vendor-neutral standard before development, while TCP/IP followed existing protocols.",
        "Abstraction vs Efficiency: OSI provides strict separation between services and interfaces; TCP/IP merges multiple functions for efficiency.",
        "Layer Consolidation: The Session and Presentation layers of OSI are absorbed into the single Application layer in TCP/IP.",
        "Educational vs Practical Use: OSI is primarily used as an educational and diagnostic tool for understanding network mechanics.",
        "Deployment Standard: TCP/IP is the practical engine that powers the modern internet and all corporate enterprise networks.",
        "Shared Logic: Both models use a hierarchical layered approach to facilitate modularity and global communication standards."
      ],
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
      explanation: [
        "Global Connectivity: The Internet's architecture is built on a hierarchical and decentralized structure of interconnected networks managed by diverse entities.",
        "Tier-1 Backbone: Tier-1 ISPs form the global backbone, owning high-speed fiber-optic links that span continents and peer without transit costs.",
        "Tier-2 Regional: Tier-2 ISPs operate at regional or national levels, purchasing bandwidth from Tier-1 and selling it to smaller providers.",
        "Tier-3 Last Mile: Tier-3 (Local) ISPs provide the 'last mile' connectivity directly to homes and businesses using technologies like DSL or Fiber.",
        "Protocol Coordination: Data is routed across these tiers using the Border Gateway Protocol (BGP), which finds the most efficient external paths.",
        "End-to-End Principle: The architecture adheres to the 'End-to-End' principle, where network intelligence stays at the hosts while the core focuses on speed.",
        "System Resilience: This distributed design ensures that the global network remains resilient, scalable, and capable of surviving localized failures."
      ],
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
      explanation: [
        "Scientific Basis: Wireless transmission is governed by the principles of electromagnetic radiation and specialized signal processing algorithms.",
        "Data Encoding: Information is encoded onto an electromagnetic carrier wave through modulation techniques like Amplitude, Frequency, or Phase changes.",
        "Shared Medium: The transmission medium—the atmosphere—is shared and inherently 'hostile' due to physical obstacles and competing electronic noise.",
        "Wave Propagation: Signals propagate through different paths: ground waves for short distances, sky waves for long-range, and line-of-sight for high speeds.",
        "Environmental Impact: Challenges like Multipath Fading occur when signals bounce off buildings and arrive at the receiver at slightly different times.",
        "Spectral Innovation: Modern systems like 5G leverage higher frequency bands (Millimeter waves) and massive MIMO to overcome bandwidth limitations.",
        "Targeted Delivery: Advance techniques like Beamforming allow signals to be focused directly at a user, increasing range and reducing wasted energy."
      ],
      detailedPoints: [
        "Antenna Principles: Antennas convert electrical energy into electromagnetic waves. Sizes and shapes are tuned to specific frequencies (resonant length).",
        "Modulation Techniques: AM (Amplitude), FM (Frequency), and PM (Phase) modulation encode data onto high-frequency carrier waves for efficient travel.",
        "Spectrum Management: Since air is a shared medium, frequencies are strictly regulated by governments (like FCC) to prevent different services from interfering.",
        "Signal Propagation: Waves travel via Ground waves (following curvature), Sky waves (bouncing off ionosphere), or Line-of-Sight (straight path).",
        "Interference & Fading: Signals are weakened by physical obstacles, rain, and overlapping waves from other wireless devices (EMI).",
        "MIMO Technology: Using multiple antennas at both sender and receiver to transmit multiple pieces of data simultaneously, significantly increasing capacity.",
        "Beamforming: Focusing the wireless signal directly towards the receiver rather than broadcasting it in all directions, improving range and efficiency."
      ],
      diagramExplanation: "Illustration of an antenna radiating waves, showing modulation peaks and troughs, and a receiver capturing the signal. Shows line-of-sight vs multipath bounces.",
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
      explanation: [
        "System Simplification: Layered architecture simplifies complex system designs by dividing tasks into specialized vertical sections.",
        "Modularity & Updates: It promotes 'Modularity', allowing specific layer functions to be updated without affecting the entire stack.",
        "Vendor Neutrality: Standardized interfaces between layers ensure that hardware from different vendors can communicate seamlessly.",
        "Complexity Abstraction: This design abstracts technical details; a web developer doesn't need to know the physics of fiber optics.",
        "Precision Diagnostics: Layering facilitates precision troubleshooting, as network faults can be isolated to a single layer for analysis.",
        "Independent Innovation: It encourages rapid innovation by allowing each protocol layer to evolve independently at its own pace.",
        "Universal Compatibility: This architectural blueprint is the primary reason the internet can support billions of diverse, connected devices."
      ],
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
      explanation: [
        "Fragmentation: In packet switching, long messages are broken down into small, manageable blocks called 'packets'.",
        "Header Components: Each packet contains a header with its unique source and destination address, as well as a sequence number.",
        "Independent Pathing: Packets are routed independently through the network, meaning they can take different paths to reach the target.",
        "Buffer Mechanism: Intermediate routers use 'Store-and-Forward' switching to buffer and verify each packet before sending it further.",
        "Message Reassembly: Upon reaching the destination, the host reassembles the packets into the original message using their sequence info.",
        "Bandwidth Multiplexing: This approach maximizes bandwidth efficiency as multiple users can share the same physical links simultaneously."
      ],
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
      explanation: [
        "Dedicated Channel: Circuit switching establishes a dedicated, constant-bitrate physical connection between two nodes for the entire session.",
        "Analog Heritage: This method guarantees reserved bandwidth and zero jitter, which was ideal for traditional analog voice telephone calls.",
        "Resource Waste: The major downside is inefficiency; network resources remain locked even if no data is currently being transmitted.",
        "Dynamic Routing: Packet switching divides data into individual blocks (packets) that are routed independently through the network fabric.",
        "Statistical Multiplexing: It uses statistical multiplexing to allow many users to share one physical link, offering superior efficiency for bursty data.",
        "Modern Superiority: While packet switching can introduce variable delays, it is the undisputed standard for almost all modern digital systems."
      ],
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
      explanation: [
        "Raw Transmission: The Physical Layer handles the raw transmission of bits (0s and 1s) over whatever physical medium is being used.",
        "Specifications: It defines the mechanical and electrical specifications of interfaces, such as cable types and connector pin layouts.",
        "Encoding: A key function is 'Bit Representation', which determines how 0s and 1s are encoded into signals (e.g., voltage levels or light pulses).",
        "Timing: It establishes the transmission rate—the number of bits sent per second—and ensures 'Bit Synchronization' between clocks.",
        "Transmission Mode: The layer defines the transmission mode, determining if data flows in one direction (Simplex) or both (Duplex).",
        "Topology: It is also responsible for the physical topology, such as Star or Mesh, and handles the actual signal transmission and reception."
      ],
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
      explanation: [
        "Stability: Wired communication (Fiber/Copper) offers high stability, high bandwidth, and superior security as signals stay within the cable.",
        "Infrastructure Cost: However, wired setups require expensive physical infrastructure and limit users to fixed locations.",
        "Mobile Access: Wireless communication (WiFi/LTE) provides excellent mobility and is easy to deploy in difficult or remote areas.",
        "Environmental Vulnerability: Wireless is more susceptible to atmospheric interference, signal fading, and obstacles like walls or rain.",
        "Broadcasting Risk: Security is a major concern for wireless, as signals are broadcast to everyone in range, requiring complex encryption.",
        "Network Strategy: Modern enterprise networks use a hybrid: wired backbones for reliability and wireless for last-hop user convenience."
      ],
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
      explanation: [
        "Interference Cancellation: Twisted pair uses copper wires twisted together to cancel out electromagnetic interference; it is inexpensive and widely used for LANs.",
        "Optical Reflection: Fiber optics use ultra-thin glass or plastic strands to transmit data as light pulses using total internal reflection.",
        "Scalable Bandwidth: Fiber offers vastly higher bandwidth and can transmit over kilometers without signal degradation or repeaters.",
        "Signal Integrity: One of fiber's greatest strengths is total immunity to EMI, RFI, and crosstalk, making it much more reliable than copper.",
        "Expertise Requirements: While fiber is more expensive and requires specialized skill for installation, it is the standard for high-performance backbones.",
        "Cost-Efficiency: Twisted pair remains the leader for home and office connections due to its flexibility, durability, and low equipment cost."
      ],
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
      explanation: [
        "Line-of-Sight: Microwave links transmit data via high-frequency radio waves along a precise line-of-sight path between two fixed towers.",
        "Infrastructure Savings: A major advantage is avoiding the immense cost of laying physical cables across mountains, oceans, or crowded urban streets.",
        "Deployment Speed: The infrastructure is relatively cheap, primarily requiring dishes and towers rather than thousands of miles of trenching.",
        "High Capacity: Microwave systems provide high bandwidth compared to standard radio and can be set up rapidly for disaster recovery.",
        "Physical Security: Since the medium is the air, there are no concerns about cable theft or physical damage to buried wires in public areas.",
        "Geographical Reach: It is the ideal choice for point-to-point communication in geographically challenging areas where fiber is impractical."
      ],
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
      explanation: [
        "Source Module: The system starts with a Light Source (Laser or LED) that converts high-speed electrical signals into coherent light pulses.",
        "Optical Conduit: The Transmission Medium is the optical fiber, which guides these light pulses over long distances using internal reflection.",
        "Detection Unit: At the destination, an Optical Receiver (Photodiode) converts the photons back into an electrical bitstream for processing.",
        "Signal Boosting: Optical Amplifiers are used periodically to boost the light signal's strength without needing to convert it back to electricity.",
        "Spectral Density: Wavelength Division Multiplexers (WDM) allow multiple data channels to travel simultaneously over one fiber at different colors.",
        "Mechanical Coupling: Connectors and Splicers are critical mechanical components that ensure the light transitions between cables with minimal loss."
      ],
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
      definition: "Hamming Code is an error-correcting code developed by Richard Hamming that inserts redundant redundancy bits at specific power-of-two positions to enable the detection and automatic correction of single-bit errors.",
      explanation: [
        "Concept: Hamming code is a powerful Block Code designed to overcome the limitations of simple parity, which can detect but not fix errors.",
        "Positioning: It works by inserting 'Overlapping Parity Bits' at specific positions (powers of two) within the data stream.",
        "Parity Logic: Each parity bit is mathematically responsible for checking a unique subset of the data bit positions based on binary logic.",
        "Detection Pattern: When a bit flip occurs during transmission, the corresponding parity checks will fail, creating a unique pattern.",
        "Position Calculation: By analyzing which parity bits are incorrect, the receiver can calculate the precise decimal position of the faulty bit.",
        "Forward Correction: The receiver then automatically flips the bit back to its correct state, providing 'Forward Error Correction' without retransmission.",
        "Hardware Performance: This is critical for high-speed hardware like ECC computer memory where waiting for a re-send would severely impact system performance."
      ],
      detailedPoints: [
        "Positioning Rule: Redundancy bits are placed at positions that are powers of 2 (1, 2, 4, 8, 16...), while data bits fill the remaining gaps (3, 5, 6, 7, 9...).",
        "Redundancy Formula: To calculate 'r' redundancy bits for 'm' data bits, we use: 2^r >= m + r + 1. For 4 data bits, 3 parity bits are required (2^3 >= 4+3+1).",
        "Parity Logic: Each parity bit, say P(n), checks all bits whose position binary representation has a '1' at the nth digit. P1 checks 1, 3, 5, 7, 9... P2 checks 2, 3, 6, 7, 10...",
        "Encoding Process: The sender calculates these parity bits (usually using even parity) and inserts them into the message before transmission.",
        "Syndrome Calculation: At the receiver, all parity checks are re-performed. The results are used to form a 'syndrome word'.",
        "Error Correction: If the syndrome is all zeros, no error occurred. If not, the syndrome's binary value converted to decimal gives the exact position of the error.",
        "Efficiency Trade-off: Hamming code adds significant overhead (bit cost) but saves time by eliminating the need for NAK/Retransmision protocols."
      ],
      diagramExplanation: "A bit mapping table showing positions 1 to 7: P1, P2, D1, P4, D2, D3, D4. Venn diagrams show how P1, P2, and P4 overlap to protect specific data bits (D1-D4).",
      example: "Transmitting '1101' (4 bits). formula: 2^3 >= 4+3+1. Parity bits at 1, 2, 4. Result: P1-P2-D1-P4-D2-D3-D4. If position 6 flips, syndrome points to 6.",
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
      definition: "Collision-free protocols are a sophisticated class of Medium Access Control (MAC) techniques specifically engineered to eliminate the possibility of data collisions by pre-scheduling station access.",
      explanation: [
        "Medium Competition: In shared networks, stations often 'compete' for the channel, leading to data collisions that waste significant network resources.",
        "Reservation Phase: Collision-free protocols eliminate this chaos by requiring an 'Orderly Phase' or reservation period before any data is sent.",
        "Deterministic Logic: These protocols are 'Deterministic', meaning they guarantee every station a turn to transmit without interruptions or collisions.",
        "Load Performance: Under heavy network loads, these protocols maintain much higher throughput compared to 'Contention-based' protocols like CSMA/CD.",
        "Bit-Map Signaling: The Bit-Map protocol uses a reservation frame where stations 'raise their hand' by setting a specific bit to signal their need to talk.",
        "Binary Election: The Binary Countdown protocol uses a silent binary auction based on station addresses to determine the next speaker efficiently.",
        "Capacity Maximization: By ensuring that every bit sent belongs to a successful frame, these protocols maximize the useful capacity of the physical link."
      ],
      detailedPoints: [
        "Elimination of Chaos: These protocols remove the random 'backoff' time required by CSMA/CD, ensuring the channel is never empty when data is waiting.",
        "Reservation Concept: A dedicated time period (contention period) is used to establish who wants to send and in what specific order.",
        "Bit-Map Mechanism: In an N-station network, an N-bit reservation frame is sent. If station 'i' wants to send, it marks the i-th bit as 1.",
        "Binary Countdown: Stations transmit their addresses in binary; at each bit-time, a '0' station withdraws if it hears a '1' from a higher-priority peer.",
        "Throughput Stability: Unlike random access, the efficiency of collision-free protocols remains stable and high even as the number of active stations increases.",
        "Fairness vs Priority: These protocols can be tuned to be strictly fair (round-robin) or to provide absolute priority to high-importance nodes.",
        "Overhead Cost: The main disadvantage is the 'silent time' spent during the reservation phase, which becomes noticeable when only one station wants to send."
      ],
      diagramExplanation: "A timeline diagram showing a Contention Frame (Reservation Phase) where bits are set, followed by a series of Data Frames sent by the successful stations without any overlap.",
      example: "In a 4-node network, nodes 1 and 3 set their bits in the reservation frame. Data transmits as: [Node 1] then [Node 3] with zero collision.",
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
      definition: "Bit-map and Binary Countdown are the two foundational reservation-based collision-free protocols used to achieve maximum channel efficiency by avoiding the collision resolution cycles of random access.",
      explanation: [
        "Zero Collision Goal: Both protocols aim for a collision-zero network, but use different logical methods to achieve their reservation goals.",
        "Roll-Call Mechanism: The Bit-map protocol acts like a roll-call: every station has a dedicated slot, requiring 'N' bits for 'N' stations.",
        "Scaling Limits: This is perfectly efficient for consistent small networks but can become slow when the number of stations is very large and mostly idle.",
        "Bit-wise Auction: Binary Countdown is a more competitive mechanism where stations broadcast their unique addresses bit-by-bit to claim the channel.",
        "Priority Filtering: In Countdown, a station with a '0' withdrew if it hears a '1' from a peer, ensuring the highest ID wins the competition rapidly.",
        "Bit-Efficiency: Countdown is faster for large networks because it only requires log2(N) bits, significantly reducing the reservation overhead.",
        "Fairness Management: While Countdown is efficient, it is naturally 'unfair' to lower-priority IDs, requiring ID rotation logic to ensure balanced access."
      ],
      detailedPoints: [
        "Reservation Efficiency: Bit-map requires 'N' contention bits for 'N' stations; Binary Countdown only requires 'log2(N)' bits, making it much faster for large groups.",
        "Conflict Logic: In Countdown, collisions are used 'positively' to eliminate lower-priority stations until only one remains in the contest.",
        "Strict Ordering: Bit-map ensures a strict, predictable round-robin order of transmission based on the numerical sequence of station slots.",
        "ID Priority: The highest binary address always wins in the Countdown protocol, presenting a 'Static Priority' challenge that must be managed.",
        "Hardware Requirements: Bit-map is extremely simple and requires no address comparison; Countdown requires stations to monitor the line while transmitting their ID.",
        "Load Sensitivity: Both protocols remain efficient under near 100% network load, unlike CSMA which suffers from 'thrashing' as collisions multiply.",
        "Hybrid Designs: Modern sophisticated MAC layers often combine the speed of Countdown for small clusters with the fairness of Bit-map for overall coordination."
      ],
      diagramExplanation: "A comparison chart showing 8 reservation slots for Bit-map vs. a 3-bit binary competition for Binary Countdown in a network of 8 stations.",
      example: "Stations 2 (010) and 6 (110) compete: At the first bit, 6 sends '1' and 2 sends '0'. Station 2 immediately drops out, allowing 6 to win the channel.",
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
      definition: "Sliding window protocols are the heavy-duty flow control and error-handling mechanisms that allow multiple data frames to be sent across a network link before requiring an acknowledgment.",
      explanation: [
        "Concurrent Transmission: Sliding window protocols are sophisticated mechanisms that allow a sender to transmit multiple data units before requiring an acknowledgment.",
        "Active Capacity: The 'Window Size' defines the maximum number of frames that can be 'in flight' at any given time, filling the network 'pipe' effectively.",
        "Progressive Flow: As acknowledgments return from the receiver, the window 'slides' forward, enabling the transmission of new frames from the backlog.",
        "Link Utilization: This pipelining approach significantly increases link utilization and throughput compared to simple 'one-at-a-time' protocols.",
        "Trio of Functions: These protocols manage three critical networking challenges: flow control, error recovery, and sequential packet tracking.",
        "Order Guarantee: By utilizing sequence numbers and specialized timers, they ensure that data is delivered in the correct order, even across noisy links.",
        "Operational Varieties: Variations like Go-Back-N and Selective Repeat offer different trade-offs between implementation simplicity and transmission efficiency."
      ],
      detailedPoints: [
        "Pipelined Transmission: Allows multiple frames to be in flight simultaneously, drastically increasing the speed compared to serial transmission.",
        "Sequence Number Range: Every frame is given a unique index. The range of these numbers must be large enough to distinguish between new and old frames.",
        "Sender Window Logic: A buffer on the sender side that keeps a copy of every unacknowledged frame in case it needs to be sent again.",
        "Receiver Window Logic: A buffer that determines which frame indices the receiver is currently willing to accept from the network.",
        "Cumulative vs Individual ACK: Some protocols confirm a whole block of data at once, while others confirm each individual frame one-by-one.",
        "Protocol Varieties: The three main versions are One-bit (Stop-and-wait), Go-Back-N (retransmit all), and Selective Repeat (retransmit one lost frame).",
        "Resource Balancing: Larger window sizes increase throughput but require more RAM in the network equipment to store the buffered data."
      ],
      diagramExplanation: "A timeline showing a sender sending frames 0, 1, 2. After ACK 0 arrives, the window 'slides' from [0,1,2] to [1,2,3], enabling the transmission of frame 3.",
      example: "A high-speed fiber optic link where 100 frames are sent in a single millisecond before the first acknowledgment has time to return.",
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
      definition: "Cyclic Redundancy Check (CRC) is a high-performance error-detection method based on binary polynomial division, primarily used to protect raw bitstreams in industrial data links.",
      explanation: [
        "Polynomial Basis: CRC is a powerful error-detection technique based on the mathematics of binary polynomial division, capable of catching complex burst errors.",
        "Data Interpretation: The data bitstream is treated as a single long polynomial, with the bit values acting as the coefficients of each term.",
        "Agreed Divisor: Both the sender and receiver agree on a 'Generator Polynomial', which acts as the mathematical divisor for the process.",
        "Calculation Phase: The sender appends a calculated number of zero bits to the message and performs modulo-2 division using binary XOR operations.",
        "Appended Remainder: The resulting remainder, known as the CRC checksum, is appended to the original data before the frame is transmitted.",
        "Detection Check: The receiver performs the exact same division on the arriving frame; any remainder other than zero indicates a bit-level corruption.",
        "Hardware-Optimized: Due to its high mathematical efficiency, CRC can be implemented directly in hardware, enabling real-time error checking for gigabit links."
      ],
      detailedPoints: [
        "Mathematical Base: Both the data message and the generator are treated as polynomials (e.g., 11001 is x^4 + x^3 + 1).",
        "Padding Phase: The sender appends 'n' zeros to the data, where 'n' is the degree of the chosen generator polynomial.",
        "XOR Division: The padded bitstream is divided by the generator using modulo-2 long division (no carrying or borrowing).",
        "Remainder as Checksum: The bits remaining at the end of the division are the CRC bits, which replace the previously added zeros.",
        "Verification: The receiver divides the entire frame by the same generator. A non-zero result triggers an immediate frame rejection.",
        "Error Coverage: Standardized generators like CRC-32 are designed to detect 100% of single/double bit errors and most burst errors.",
        "Industry Usage: Essential for hardware-level integrity in Ethernet, Wi-Fi, USB, and high-speed storage interfaces."
      ],
      diagramExplanation: "A long-division visual showing the Data+00... being divided by the Generator. XOR steps are highlighted, and the final remainder is shown inserted at the end of the frame.",
      example: "Data: 1011 (degree 3), Gen: 1001. Append 3 zeros: 1011000. Remainder is found (e.g., 011), and frame 1011011 is transmitted.",
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
      definition: "Stop-and-wait Automatic Repeat Request (ARQ) is a fundamental, reliable data link protocol that ensures every frame is confirmed before the next one is sent.",
      explanation: [
        "Core Philosophy: Stop-and-wait ARQ is the most fundamental reliable protocol, ensuring every single frame is acknowledged before the next one is sent.",
        "Timer Start: The sender transmits a frame and starts a 'Retransmission Timer', then pauses all further output until a confirmation arrives.",
        "Positive Feedback: If the receiver confirms the frame via an 'ACK' packet, the sender proceeds to the next frame in the sequence.",
        "Retry Trigger: If the timer expires before an ACK is received, the sender assumes the frame was lost and automatically retransmits the original data.",
        "Duplicate Guard: To prevent duplicates from being misinterpreted, the protocol uses 'Alternating Bits' (0 and 1) as rotating sequence numbers.",
        "Latency Bottleneck: While extremely reliable, this protocol is inherently slow because the physical link sits idle while waiting for the round-trip signal.",
        "Ideal Context: It is best suited for simple, low-power environments where correctness is more important than absolute transmission speed."
      ],
      detailedPoints: [
        "Serial Logic: Only one frame can be 'in flight' at a time, making the protocol inefficient for links with high latency.",
        "Error Detection: The receiver uses a checksum to verify every frame. If it detects an error, it simply discards the frame and waits.",
        "Retransmission Timer: A critical component on the sender side that triggers a resend if an acknowledgment index is not received in time.",
        "Alternating Sequence Number: Frames and ACKs are marked with 0 or 1 to distinguish between retransmissions and new data.",
        "Acknowledgment (ACK): The receiver sends a small control frame to notify the sender that the data arrived successfully.",
        "Link Utilization: Very low efficiency (U = T_frame / (T_frame + 2 * T_prop)), as the sender spends most of its time in a 'wait' state.",
        "Usage Case: Ideal for very simple, low-power hardware links where complex buffering is more expensive than the cost of slow speed."
      ],
      diagramExplanation: "A vertical time-sequence diagram showing: Sender (Frame 0) sends, Receiver (ACK 0) replies, and Sender (Frame 1) following after success.",
      example: "A low-power smart sensor sending a single temperature reading to a base station and waiting for confirmation before shutting down to save battery.",
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
      explanation: [
        "Bridge Role: The Data Link Layer transforms the raw bitstream of the physical layer into a reliable, addressed communication channel.",
        "Bit Packaging: It is responsible for 'Framing', which involves packaging networking packets into structured frames with headers and trailers.",
        "Logical Identity: Physical addressing is handled via MAC addresses, allowing devices to identify each other on a local segment or bus.",
        "Corruption Defense: It implements Error Control to detect and sometimes correct bit-level corruptions that occur during physical transmission.",
        "Speed Balancing: Flow Control mechanisms are used to synchronize the speeds of the sender and receiver, preventing data overflows.",
        "Shared Rights: The Medium Access Control (MAC) sublayer determines which station has the right to use a shared channel at any given time.",
        "Function Isolation: By abstracting the physical hardware, Layer 2 allows higher layers to focus on global routing and complex application logic."
      ],
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
      definition: "Selective Repeat is an elite error-control protocol that achieves maximum throughput by retransmitting only the specific packets that were lost, avoiding unnecessary repetition.",
      explanation: [
        "Efficiency: Selective Repeat is the most efficient sliding window variation, focusing retransmissions only on lost or corrupt frames.",
        "Resource Waste Avoidance: In simpler protocols like Go-Back-N, losing one frame forces a re-send of the entire window, wasting significant bandwidth.",
        "Receiver Storage: Selective Repeat uses a buffer at the receiver's end to store 'out-of-order' frames that arrived safely after a gap.",
        "Individual Tracking: The sender maintains individual timers for each frame and only repeats the specific index that went unacknowledged.",
        "Sequence Assembly: Once the 'hole' in the receiver's buffer is filled, the entire sequence is delivered to the higher networking layers.",
        "Deployment Case: This protocol is essential for high-latency or error-prone links, such as satellite or international fiber connections."
      ],
      example: "A high-speed Internet download over a cross-ocean fiber link where individual packet loss is corrected without slowing down the entire transfer.",
      keyPoints: ["Surgical Retransmit: Only lost frames", "Receiver Buffering: Holds out-of-order data", "Flow Integrity: Delivers data in perfect sequence", "High Efficiency: Ideal for noisy/high-delay links", "Dual Windowing: Sender and receiver have windows", "Complex Logic: Requires individual packet timers"]
    }
  },
  {
    id: "m2-8-2",
    moduleId: 2,
    marks: 8,
    question: "Go-Back-N vs Selective Repeat",
    answer: {
      definition: "Go-Back-N and Selective Repeat are two variations of sliding window protocols used to handle errors in piplelined data transmission.",
      explanation: [
        "Failure Handling: In Go-Back-N, a single lost frame at the receiver causes all subsequent arriving frames to be discarded immediately.",
        "Window Reset: The sender's window must then 'go back' and re-transmit the entire set of frames starting from the point of failure.",
        "Buffer Optimization: Selective Repeat improves this by adding a receiver buffer that can hold 'good' out-of-order data during a recovery.",
        "Memory Efficiency: Go-Back-N is simpler to implement and requires much less memory at the receiver, as it only needs to track one index.",
        "Link Optimization: Selective Repeat is significantly more efficient for high-speed or noisy links where frequent window retransmissions are costly.",
        "Implementation Cost: SR requires independent timers at the sender and complex sequence tracking at the receiver, making it harder to build."
      ],
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
      explanation: [
        "Synchronization: Flow control acts as a synchronization mechanism between a fast sender and a potentially slower receiving device.",
        "ACK Dependency: Feedback-based methods, such as 'Stop-and-Wait', require a confirmation for every individual datum sent.",
        "Credit System: The 'Sliding Window' method uses a dynamic credit-based system where the receiver advertises its current free capacity.",
        "Negotiated Speed: Rate-based control involves pre-negotiated limits on how many packets can be sent per second without further checks.",
        "Physical Control: Hardware flow control uses physical signals (like RTS/CTS lines) to pause and resume the flow of electricity on a wire.",
        "Overflow Prevention: Effective flow control prevents buffer overflows at the receiver, which would otherwise trigger costly packet losses."
      ],
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
      explanation: [
        "Carrier Sensation: In CSMA/CD, a station first listens to the medium (Carrier Sense); if the channel is idle, it attempts to transmit.",
        "Active Monitoring: While transmitting, the station continues to listen to ensure that another node didn't start sending at same time.",
        "Collision Detection: If a collision occurs—detected by a signal voltage spike—the station immediately stops and sends a 'Jam Signal'.",
        "Error Awareness: The Jam Signal ensures that all stations in the network are aware of the collision and discard the current frame.",
        "Fairness Calculation: To prevent repeated collisions, the station waits for a random time using the 'Binary Exponential Backoff' algorithm.",
        "Network Evolution: This protocol was the heart of shared-hub Ethernet but is rarely used now due to full-duplex switched networks."
      ],
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
      explanation: [
        "Ad-hoc Access: Pure ALOHA is a completely decentralized protocol where a station transmits a frame whenever it is ready.",
        "Destructive Overlap: Because there is no coordination, if two frames overlap by even one bit, a collision occurs and both are corrupted.",
        "Throughput Limits: This inefficiency limits Pure ALOHA to a maximum channel utilization of approximately 18% under heavy loads.",
        "Temporal Windows: Slotted ALOHA improves this by dividing time into discrete, synchronized 'slots' that data must fit into.",
        "Reduction of Risk: A station can only begin a transmission at the start of a slot, reducing the 'Vulnerable Period' by half.",
        "Efficiency Boost: This simple synchronization doubles the maximum theoretical efficiency to 37%, though it requires global clock sync."
      ],
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
      explanation: [
        "Collision Blindness: The Hidden Terminal problem occurs when stations A and C can see station B but cannot detect each other's signals.",
        "Undetectable Chaos: If A and C both send data to B simultaneously, a collision occurs at B that neither A nor C can detect directly.",
        "Handshake Solution: This is typically solved using the RTS/CTS (Request to Send / Clear to Send) handshake to clear the area around B.",
        "Wasted Silence: The Exposed Terminal problem happens when station B is sending to A, and station C mistakenly avoids sending to D.",
        "False Congestion: C hears B's transmission and assumes the channel is busy, even though a transmission to D would not interfere with A.",
        "Complexity Recognition: These problems illustrate how simple 'Carrier Sensing' (listening) is insufficient for complex wireless environments."
      ],
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
      explanation: [
        "A Checksum is calculated by adding up all the data segments as integers using 1's complement arithmetic.",
        "The sender appends the negative of this sum, so the total sum at the receiver's end should be zero if no error exists.",
        "CRC (Cyclic Redundancy Check) uses binary polynomial division instead of simple addition to catch more errors.",
        "While checksums are computationally 'light' and fast, they can be easily fooled by errors that cancel each other out.",
        "CRC is significantly more robust, catching almost all burst errors, and is often implemented directly in network hardware.",
        "Standard protocols use Checksums at higher layers (IP/TCP) for speed, and CRC at the Data Link layer for reliability."
      ],
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
      definition: "Dijkstra's algorithm is a greedy, shortest-path algorithm used in networking to find the most mathematically efficient route between a single source node and all other nodes in a network graph.",
      explanation: [
        "Core Foundation: Dijkstra's algorithm is the fundamental cornerstone of Link-State routing protocols like OSPF.",
        "Mathematical Model: It treats the network as a graph where routers are nodes and physical links are edges with assigned 'weights' or 'costs'.",
        "Router Perspective: The goal is for each router to determine the least-cost path to every other router, creating a Shortest Path Tree.",
        "Local Optimality: The algorithm is 'greedy' because it definitively chooses the shortest known path to an unvisited node at each step.",
        "Reliability Guarantee: This architectural process ensures that once a path is finalized, it is mathematically guaranteed to be the shortest possible.",
        "Dynamic Adaptation: In a real-world ISP network, Dijkstra's is constantly running in the background to handle fiber cuts or hardware changes.",
        "Precision Performance: It provides the mathematical certainty needed for high-performance networks to avoid loops and maximize throughput."
      ],
      detailedPoints: [
        "Initialization: Set the source node distance to 0 and all other nodes to infinity. Mark all nodes as unvisited.",
        "Greedy Selection: From the set of unvisited nodes, select the node with the smallest cumulative distance from the source.",
        "Neighbor Evaluation: For the selected node, look at all its unvisited neighbors and calculate their potential distance through the current node.",
        "Path Relaxation: If the newly calculated distance is smaller than the neighbor's current recorded distance, update the distance and set the current node as the neighbor's predecessor.",
        "Permanence: Once all neighbors of the current node are evaluated, mark the current node as 'visited'. A visited node's shortest path is never recalculated.",
        "Termination Logic: Repeat the selection and relaxation steps until all reachable nodes in the network are visited.",
        "Algorithm Output: The result is a Shortest Path Tree (SPT) where the cost to reach any destination from the source is minimized."
      ],
      diagramExplanation: "A graph with weighted edges. A table showing the step-by-step evolution of [Node, Distance, Predecessor] values as the algorithm progresses from source S to destinations A, B, and C.",
      example: "A router in a corporate network calculating the fastest path to a remote server across multiple intermediate links of varying speeds (10Gbps vs 1Gbps).",
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
      definition: "Hierarchical routing is a multi-level design strategy that divides a large network into distinct areas or clusters to ensure scalability, manage complexity, and reduce routing overhead.",
      explanation: [
        "Area Partitioning: Hierarchical routing is a design strategy that divides a large network into distinct areas or clusters for better scalability.",
        "Traffic Containment: By grouping routers locally, most routing update traffic stays contained within a small neighborhood rather than flooding the site.",
        "Strategic Summarization: Only aggregated or 'summary' information is passed up to the backbone layer, reducing total table sizes significantly.",
        "Architectural Analogy: This organization mirrors the human postal system: mail is sent to a country, then a city, then a specific street address.",
        "Global Scalability: Without this structural hierarchy, the global internet would collapse under the weight of its own administrative routing updates.",
        "Boundary Management: Specialized border routers connect these areas and handle the translations between local and global routing perspectives.",
        "Capacity Optimization: It enables millions of devices to coexist without requiring every router to maintain an impossibly massive memory database."
      ],
      detailedPoints: [
        "Scalability Focus: Prevents 'Routing Table Explosion' by allowing routers to ignore the internal details of distant network sections.",
        "Area Partitioning: Large networks are partitioned into regions (e.g., OSPF Areas). Each area maintains its own internal topology map.",
        "Backbone Layer: High-level routers (Backbone Area 0) handle the transit of data between different areas/regions.",
        "Border Routers: Specialized routers connect to two or more areas and handle the summarization of internal routes for the rest of the network.",
        "Resource Efficiency: Significantly reduces the CPU and RAM required for routing calculations since each router only deals with a small subset of the total network.",
        "Stability Enhancement: An unstable link or 'flapping' route in one area is hidden from other areas, preventing a local failure from becoming a global outage.",
        "Autonomous Systems: At the largest scale, the internet is a hierarchy of Autonomous Systems (AS) managed by BGP protocols."
      ],
      diagramExplanation: "A map showing clusters of routers grouped into 'Area 1', 'Area 2', and 'Backbone Area'. Lines show connections within and between these groups. Arrows indicate summarized route flow.",
      example: "The global internet uses BGP to route between large Autonomous Systems (like Google or Comcast), while OSPF routes within each company internally.",
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
      definition: "Link State Routing is a modern, high-performance dynamic routing class where every router builds a complete, identical map of the entire network topology.",
      explanation: [
        "Network Map: Link state routing is like every router having its own complete 'GPS map' of the entire network topology.",
        "Neighbor Discovery: Each router discovers its immediate neighbors and their connection costs using periodic 'Hello' packets.",
        "Global Awareness: It then floods this discovered information to every other router in the network via Link State Advertisements (LSAs).",
        "Synchronized Data: This 'flooding' ensures that every node in the network eventually builds a perfectly identical topology database.",
        "Shortest Path Calculation: Once the map is complete, each router independently runs Dijkstra's algorithm to find the absolute shortest paths.",
        "Convergence Speed: This results in extremely fast 'convergence'—when a link fails, the entire network updates its pathing in milliseconds.",
        "Industry Standard: It is the global standard for large-scale enterprise networks due to its reliability and immunity to routing loops."
      ],
      detailedPoints: [
        "Global Topology Awareness: Every router possesses a complete and identical 'Link State Database' representing the entire network structure.",
        "Hello Protocol: Routers use periodic 'Hello' packets to discover neighbors and monitor the health of their immediate connections.",
        "LSA Flooding: Link State Advertisements (LSAs) are reliably sent to all nodes to ensure synchronous database updates across the network.",
        "Shortest Path Tree (SPT): Using Dijkstra's algorithm, each router calculates its own unique 'best-path' tree rooted at itself.",
        "Fast Convergence: The network responds to topology changes almost instantly, as updates are event-triggered rather than periodic.",
        "Loop Prevention: Because every router understands the full topology, they can logically verify paths and ignore circular routing information.",
        "Resource Intensive: Requires significant RAM to store the topology map and CPU cycles to run complex mathematical shortest-path calculations."
      ],
      diagramExplanation: "A visual showing routers broadcasting Link State Packets (LSPs). A database table is shown on each router with perfectly synchronized network data.",
      example: "An OSPF network in a large corporate office where a fiber-cut in the basement triggers an instant re-route for all upstairs departments.",
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
      explanation: [
        "Autonomous Adaptation: Dynamic routing allows routers to automatically discover topology, exchange info, and adapt to changes in real-time.",
        "Logic-Driven: Unlike static routing, these protocols use software logic and metrics to determine the most efficient data paths.",
        "Neighbor Sharing: Distance Vector algorithms (like RIP) regularly share local tables with neighbors to build a directional sense of the network.",
        "Map Building: Link State algorithms (like OSPF) build a full topological map of the entire network for precise path calculations.",
        "Failure Resilience: These protocols handle link failures and congestion automatically, ensuring data always follows the best available route.",
        "Optimized Hybrids: Modern systems often use hybrid approaches like EIGRP to combine the speed of Link State with the simplicity of Distance Vector.",
        "Digital Intelligence: Dynamic routing is essential for the self-healing nature of the modern internet and large enterprise wide-area networks."
      ],
      detailedPoints: [
        "Network Discovery: Routers automatically identify directly connected neighbors using periodic hello packets.",
        "Information Exchange: Nodes share their local routing tables (Distance Vector) or link states (Link State) with peers.",
        "Path Selection: Sophisticated algorithms like Bellman-Ford or Dijkstra calculate the best route based on specific metrics.",
        "Convergence: The state where all routers have synchronized and consistent routing information across the network.",
        "Metric Evaluation: Decisions are made using cost, hop count, bandwidth, load, or delay values.",
        "Adaptive Behavior: If a link fails, the protocol automatically detects the outage and recalculates a secondary path.",
        "Efficiency: Reduces manual administrative burden and ensures traffic always follows the most optimal digital path."
      ],
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
      explanation: [
        "System Stability: Congestion control involves techniques to prevent the network from becoming overloaded and suffering a complete collapse.",
        "Strategy Division: It is broadly divided into Open-Loop (prevention-focused) and Closed-Loop (active removal) strategies.",
        "Prevention Focus: Open-loop policies, such as specific retransmission rules, are designed into the protocol to minimize congestion by default.",
        "Reactive Response: Closed-loop methods respond to active congestion using mechanisms like Choke Packets to slow down the data source.",
        "Traffic Shaping: Algorithms like Leaky Bucket or Token Bucket regulate the flow of data into the network fabric to maintain stability.",
        "Emergency Measures: Load Shedding is a final recovery measure where routers intentionally 'drop' non-critical packets when buffers are full.",
        "Fairness Guaranteed: Effective control ensures fair resource sharing and high throughput even when demand exceeds physical link capacity."
      ],
      detailedPoints: [
        "Open-Loop Strategies: Preventive policies like specific acknowledgment rules and retransmission timers set at the protocol design phase.",
        "Closed-Loop Feedback: Periodic monitoring that triggers active responses like sending 'Choke Packets' to slow down a source.",
        "Traffic Shaping: Using algorithms like Leaky Bucket (constant rate) or Token Bucket (burst support) to regulate data entry.",
        "Backpressure Logic: A hop-by-hop feedback mechanism where each node restricts the sender's rate when its own buffers are full.",
        "Load Shedding: A final recovery measure where routers intentionally 'drop' packets (e.g., Wine or Milk policy) when overwhelmed.",
        "Explicit Congestion Notification (ECN): Marking bits in the packet header to warn end-hosts without actually dropping data.",
        "Throughput Monitoring: Constantly comparing the delivered data rate to the requested load to detect the 'Congestion Knee' early."
      ],
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
      explanation: [
        "Scale: IPv4 uses a 32-bit address space, allowing for approximately 4.3 billion unique identifiers worldwide.",
        "Notation: Addresses are typically represented in 'Dotted-Decimal' notation (e.g., 172.16.254.1) for human readability.",
        "Loop Prevention: The 20-byte standard header contains vital fields like TTL (Time to Live) to prevent infinite packet loops.",
        "Structural Hierarchy: Addressing is hierarchical, divided into a Network ID and a Host ID using a specific 'Subnet Mask'.",
        "MTU Adaptation: It supports 'Fragmentation', allowing large packets to be divided to fit through links with smaller MTU sizes.",
        "Addressing Efficiency: While 'Classful' addressing was used originally, modern IPv4 uses CIDR (Classless Inter-Domain Routing).",
        "Persistent Dominance: Despite address exhaustion, IPv4 remains the dominant global standard, often extended via NAT technology."
      ],
      detailedPoints: [
        "32-Bit Address Space: Provides exactly 4,294,967,296 unique logical addresses for global networking.",
        "Dotted-Decimal Notation: Addresses are represented as four 8-bit octets separated by dots (e.g., 192.168.1.1).",
        "Header Components: Includes fields like TTL (loop prevention), Protocol (layer 4 ID), and Header Checksum.",
        "Net-ID and Host-ID: Logical separation of the address using a 'Subnet Mask' to identify the local network vs the device.",
        "CIDR (Classless Inter-Domain Routing): The modern method for flexible address allocation using prefixes like /24 or /16.",
        "Fragmentation: The ability to break large packets into smaller segments to fit the Maximum Transmission Unit (MTU) of a link.",
        "Classful Addressing: The legacy system (Classes A, B, C, D, E) used for fixed-size network blocks before CIDR."
      ],
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
      explanation: [
        "Header Divergence: IPv4 uses a 32-bit address (4.3B addresses) in decimal format, while IPv6 uses a 128-bit space in hexadecimal.",
        "Motivation: IPv6 was primarily designed to solve the imminent address exhaustion problem of the IPv4 internet.",
        "Processing Speed: Beyond size, IPv6 features a simplified header with fewer fields, enabling faster processing by backbone routers.",
        "Security & Flow: It includes native IPsec support for mandatory security and eliminates the need for Network Address Translation (NAT).",
        "Auto-Config: IPv6 supports Stateless Address Autoconfiguration (SLAAC), allowing devices to join networks without a DHCP server.",
        "Future Survival: While migration is ongoing, IPv6 is essential for the growth of IoT and the survival of the global internet."
      ],
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
      explanation: [
        "Protocol Class: OSPF is an 'Interior' Link State routing protocol that builds a complete topological map of a local network.",
        "Algorithm Logic: It uses Dijkstra's algorithm to compute the absolute shortest path to every router in the autonomous system.",
        "Scalability: OSPF supports hierarchical design through 'Areas', preventing routing table 'explosion' in massive enterprises.",
        "Reaction Time: The protocol converges extremely quickly, finding new paths in milliseconds after a physical link failure.",
        "Interoperability: It is non-proprietary (open standard), ensuring that Cisco, Juniper, and other vendors' routers can interoperate.",
        "Metric Precision: OSPF also supports Cost-based metrics, allowing engineers to favor high-speed fiber links over slower alternatives."
      ],
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
      explanation: [
        "Global Glue: BGP is the 'Glue' of the internet, responsible for routing data across the massive global web of diverse providers.",
        "Logic Method: It is a Path-Vector protocol, meaning it tracks the sequence of Autonomous Systems (AS) a packet must cross.",
        "Decision Tiers: BGP prioritizes stability and administrative policy over simply finding the shortest geographical distance.",
        "Path Guard: By analyzing the AS_PATH, BGP naturally detects and prevents infinite routing loops at the scale of continents.",
        "Transit Policy: ISPs use BGP to implement complex business agreements, favoring certain transit partners over more expensive ones.",
        "Massive Scale: It is designed to be incredibly robust, handling the dynamic routing of the entire world's digital traffic daily."
      ],
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
      explanation: [
        "One-to-One: Unicast is the standard 1-to-1 communication, where a packet is addressed to one specific host on the network.",
        "One-to-Many: Multicast is 1-to-many, where one stream is delivered only to a specific group of interested receivers (IGMP).",
        "One-to-Nearest: Anycast is 1-to-nearest, where a packet is delivered to the single node in a group that is physically or logically closest.",
        "Resource Optimization: Multicast is essential for efficient IPTV and massive software updates, as it avoids clogging the entire network bandwidth.",
        "Latency Reduction: Anycast is the backbone of DNS and CDNs, ensuring users connect to the nearest regional server for ultra-low latency.",
        "Versatile Delivery: Together, these schemes allow network engineers to optimize data delivery for everything from private chat to global streaming."
      ],
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
      explanation: [
        "Fixed Output: The Leaky Bucket algorithm enforces a strict, constant-rate output, smoothing out even the most extreme traffic surges.",
        "Funnel Analogy: It is like a funnel: no matter how much water you pour in at once, it only drips out at a fixed, predictable speed.",
        "Burst Support: The Token Bucket algorithm is more flexible, allowing for 'Bursts' of traffic when the network has idle capacity.",
        "Earning Credit: In Token Bucket, tokens are gathered in a bucket at a fixed rate; each packet sent 'costs' one token to process.",
        "Immediate Processing: If the bucket is full, a large amount of data can be sent at full speed immediately, supporting modern web behavior.",
        "QoS Integration: Most modern routers use Token Bucket for QoS because it balances overall network safety with high-performance peaks."
      ],
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
      explanation: [
        "Entrance Guarding: Admission Control is a preventive strategy where a network 'rejects' new connection requests if its resources are full.",
        "Quality Maintenance: By saying 'No' to new users, the network ensures that the quality for existing users remains high and stable.",
        "Active Disposal: Load Shedding is a desperate, reactive strategy where routers 'shed' (drop) packets that are already in the system.",
        "Intelligent Dropping: Modern routers use 'Intelligent Shedding', dropping non-critical packets (like pings) before touching mission-critical data.",
        "Data Relevance: In some protocols, 'Wine' shedding drops older packets, assuming newer data is more relevant to the receiver.",
        "Collapse Defense: These methods prevent the 'Congestion Collapse' where the network spends all its energy on overhead and zero on actual data."
      ],
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
      explanation: [
        "Discovery: Phase 1 - Neighbor Discovery: Routers send 'Hello' packets to find out who is directly connected to them.",
        "Costing: Phase 2 - Metric Calculation: The router measures bandwidth, delay, or reliability to each discovered neighbor.",
        "LSP Creation: Phase 3 - LSP Construction: A Link-State Packet (LSP) is built, containing the router's identity and its neighbor costs.",
        "Propagation: Phase 4 - Global Flooding: This LSP is reliably broadcast to EVERY router in the entire network or area.",
        "Optimization: Phase 5 - Dijkstra's Run: Every router takes the synchronized map and calculates the absolute shortest paths for its table.",
        "Convergence: This sequence ensures that every node moves from local awareness to a perfect, global understanding of the network."
      ],
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
      definition: "The TCP three-way handshake is a rigorous, multi-step synchronization process used to establish a reliable, connection-oriented session between two hosts before actual data transfer begins.",
      explanation: [
        "Connection Logic: TCP is a connection-oriented protocol that must establish a 'virtual circuit' before any data transfer can occur.",
        "System Calibration: The three-way handshake is the rigorous process used to build this circuit and calibrate the two end-systems.",
        "Sequence Sync: It synchronizes the starting sequence numbers (ISNs), which are critical for byte-level data tracking throughout the session.",
        "Capability Check: The process allows both hosts to agree on communication parameters like the Maximum Segment Size (MSS).",
        "Ghost Detection: By requiring three distinct steps, it provides a definitive guard against 'ghost connections' from old, delayed packets.",
        "Reliability Base: This handshake turns a stateless best-effort IP network into a stateful, reliable communication pipe for applications.",
        "Universal Standard: It is the mandatory foundation for all reliable internet traffic, including web browsing, secure shell, and file transfers."
      ],
      detailedPoints: [
        "Step 1 (SYN): The client sends a packet with the SYN (Synchronize) flag set. It includes its random Initial Sequence Number (X) and connection options.",
        "Server Resource Allocation: Upon receiving the SYN, the server allocates internal buffer space and timers for the pending connection.",
        "Step 2 (SYN-ACK): The server responds with a packet having both SYN and ACK flags set. It acknowledges the client (ack=X+1) and sends its own random sequence number (Y).",
        "Step 3 (ACK): The client receives the server's response and sends a final ACK packet (ack=Y+1). It may also include the first few bytes of application data here.",
        "Connection Status: Once the third packet is sent/received, both sides move to the 'ESTABLISHED' state, and full-speed, full-duplex data transfer begins.",
        "Security Note: The random nature of the sequence numbers (ISNs) is critical to prevent 'TCP Sequence Prediction' attacks where attackers inject fake data into a session.",
        "Failure Handling: If a SYN is sent to a closed port, the server responds with an RST (Reset); if the server is down, the client's handshake timer will eventually expire."
      ],
      diagramExplanation: "A sequential chart: 1. SYN (seq=X) -> Server, 2. SYN-ACK (seq=Y, ack=X+1) -> Client, 3. ACK (ack=Y+1) -> Server. Shows transition from LISTEN to ESTABLISHED.",
      example: "Your web browser connecting to a server (like google.com) immediately after your PC resolves the server's IP address via DNS.",
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
      definition: "TCP congestion control is a suite of AI-like algorithms (AIMD) that allow a sender to intelligently probe the network's capacity and adjust its speed to prevent throughput collapse.",
      explanation: [
        "Intelligent Throttling: TCP congestion control is a suite of intelligent algorithms designed to adjust transmission speeds based on network health.",
        "Feedback Loop: It interprets the acknowledgment of packets as 'green lights' to speed up and lost packets as 'stop signs' to slow down.",
        "Rapid Discovery: The 'Slow Start' phase exponentially increases the speed to rapidly discover the network's initial available capacity.",
        "Cautious Search: 'Congestion Avoidance' switches to a safe, linear search for the absolute maximum speed once a threshold is reached.",
        "Severe Back-off: The protocol uses the Multiplicative Decrease principle to back off significantly when severe congestion (packet loss) is detected.",
        "Efficiency Retention: Advanced features like Fast Recovery allow TCP to maintain high throughput even if individual packets are lost.",
        "Global Stability: This collective behavior of billions of connections ensures the global internet remains stable and fair for all users."
      ],
      detailedPoints: [
        "Congestion Window (cwnd): This is the heart of the algorithm. It is a value that tells the sender how many segments it can have 'un-acknowledged' in the network.",
        "Slow Start Logic: cwnd starts at 1 segment and doubles every Round Trip Time (RTT). This continues until cwnd reaches the 'Threshold' (ssthresh).",
        "Congestion Avoidance: Once past ssthresh, cwnd increases by just one segment per RTT, cautiously searching for the absolute maximum capacity of the link.",
        "Timeout Response: If a segment times out, it means severe congestion. TCP sets ssthresh to half the current speed and resets cwnd to 1, restarting Slow Start.",
        "Fast Retransmit: If 3 duplicate ACKs are received, the sender assumes only ONE segment was lost. It immediately resends that segment without waiting for the timer.",
        "Fast Recovery: Instead of dropping back to 1 after a 3-dup ACK, TCP halves the window and stays in Congestion Avoidance, maintaining much higher throughput.",
        "AIMD Principle: Additive Increase (go slow) and Multiplicative Decrease (back off big). This ensures the network stays in a stable, well-balanced state."
      ],
      diagramExplanation: "A sawtooth graph plotting Window Size vs Time. Shows the exponential climb of Slow Start followed by the linear 'search' of Avoidance and the sharp vertical drops at loss.",
      example: "Watching a YouTube video where the quality starts low and then 'jumps up' to 4K once the TCP connection confirms your speed is high enough.",
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
      explanation: [
        "Reliability Shell: The TCP header is a structured 20-60 byte prefix added to transport segments to manage the complexities of reliability.",
        "Process ID: It includes 16-bit Source and Destination ports that identify exactly which local applications are communicating.",
        "Byte Tracking: 32-bit Sequence and Acknowledgment numbers allow TCP to track every byte and ensure data arrives in the perfect order.",
        "Binary Signals: The Control Flags field (SYN, ACK, FIN, etc.) provides the binary signaling required to manage the connection state.",
        "Flow Adjustment: Flow control is achieved via the Window Size field, which notifies the sender of the receiver's current buffer capacity.",
        "Mathematical Check: A mandatory Checksum field provides the mathematical integrity check needed to detect multi-bit data corruption in transit.",
        "Pipe Transformation: This comprehensive design enables TCP to transform any 'best-effort' physical path into a guaranteed, reliable digital pipe."
      ],
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
      explanation: [
        "Three-Way Sync: Connection establishment uses the 3-way handshake to ensure both sides are ready and in sync.",
        "Tracking Base: The process syncs Initial Sequence Numbers (ISNs) which are vital for tracking the subsequent byte stream.",
        "Graceful Exit: Connection release is typically a 4-way handshake designed to ensure a graceful and complete shutdown.",
        "Half-Closed State: One side sends a FIN packet, and the other acknowledges it, moving into a 'half-closed' communication state.",
        "Residual Delivery: This allows the receiver to finish sending any remaining data before performing its own final closure.",
        "Emergency Stop: A 'Hard Reset' (RST) can be used as a failsafe to immediately terminate a resource-wasting connection.",
        "State Integrity: Proper teardown prevents 'ghost' connections and ensures all transmitted bytes are confirmed by the receiver."
      ],
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
      explanation: [
        "In-Order Sync: TCP provides a reliable service by ensuring data arrives in order, without errors and duplicates.",
        "Tracking logic: It achieves absolute reliability through the use of sequence numbers, acknowledgements, and retransmissions.",
        "Handshake Base: The protocol is connection-oriented, requiring a rigorous handshake before any application data is sent.",
        "Receiver Guard: TCP handles 'flow control' using sliding windows to prevent a fast sender from overwhelming the receiver.",
        "Network Shield: It protects the entire network using 'congestion control' algorithms that react to packet loss signal.",
        "Byte Abstraction: Data is treated as an unstructured byte-stream, meaning it doesn't preserve application-level message boundaries.",
        "Full Duplex: It is a full-duplex protocol, allowing simultaneous, high-speed communication in both directions between hosts."
      ],
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
      explanation: [
        "Handshake Free: UDP is a 'Lightweight' transport protocol that minimizes overhead by eliminating the handshake process.",
        "Unconfirmed Stream: It is connectionless, meaning it sends datagrams immediately without verifying if the receiver is ready.",
        "Header Efficiency: With an 8-byte header, it is much faster and requires less processing power than the 20-byte TCP header.",
        "Maximum Speed: UDP does not provide flow control or congestion control, allowing it to send data at the application's full speed.",
        "Real-Time Focus: It is ideal for real-time services like DNS and online gaming, where speed is more critical than a few lost bits.",
        "Minimal Logic: The protocol acts as a simple wrapper around IP, adding only port multiplexing and optional checksums."
      ],
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
      explanation: [
        "Streaming Standard: RTP is the industry standard for delivering live audio and video over unstable packet-switched networks.",
        "Playback Sync: Crucially, RTP adds a 'Timestamp' to every packet, which allows the receiver to play back media at the correct speed.",
        "Error Resilience: It also uses 'Sequence Numbers' to detect lost packets and reorder segments that arrived out of sequence.",
        "UDP Foundation: RTP usually runs on top of UDP to prioritize the real-time 'flow' over the slow reliability of TCP.",
        "Quality Metrics: It is paired with RTCP (RTP Control Protocol), which provides feedback on the network's current quality and jitter.",
        "Communication Engine: RTP is the foundational engine for modern communication tools like Zoom, Microsoft Teams, and WebRTC."
      ],
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
      explanation: [
        "Pipelined Transmission: The Sliding Window is TCP's primary mechanism for 'Pipelining' and high-performance flow control.",
        "Buffer Advertising: The receiver 'Advertises' its currently available buffer space in every ACK packet sent back to the source.",
        "Safe Boundaries: The sender is allowed to transmit as many bytes as can 'fit' within this advertised window before stopping.",
        "Dynamic Movement: As acknowledgments return, the window 'slides' forward, allowing the next set of bytes to enter the network pipe.",
        "Speed Balance: This balances the data flow, ensuring a powerful server doesn't drown a slower receiver in too much data.",
        "Wait-Time Reduction: It effectively eliminates the massive 'wait time' that plagues simpler stop-and-wait communication protocols."
      ],
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
      explanation: [
        "End-to-End Scope: Flow control at the transport layer is an end-to-end concept, unlike link-layer control which is hop-by-hop.",
        "Buffer Protection: It is designed to protect the final destination's application buffers from being completely overwhelmed.",
        "Ad Feedback: TCP uses the 'Advertised Window' field in the header to inform the sender of the receiver's dynamic capacity.",
        "Heterogeneous Scaling: This mechanism allows a 10Gbps server to communicate safely with a 1Mbps smartphone without data loss.",
        "Adaptive Throttling: If the receiver's application is busy, it shrinks the window, effectively 'throttling' the incoming data stream.",
        "Stability Pillar: Without this critical synchronization, high-speed networks would suffer constant packet drops and retransmissions."
      ],
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
      explanation: [
        "Network Abstraction: RPC abstracts the network, allowing a developer to call functions on a remote server as if they were local functions.",
        "Stub Processing: It uses 'Stubs' to handle the complexity: the client stub 'Marshals' (packs) arguments into a standard network packet.",
        "Server Logic: The server stub 'Unmarshals' (unpacks) the packet, executes the procedure, and sends the result back in a message.",
        "Business Focus: This allows the programmer to focus on 'What' is happening rather than 'How' the raw bits are sent over the wire.",
        "Binary Speed: Modern RPC systems like gRPC use efficient binary serialization to provide ultra-fast inter-server calls.",
        "Architectural Pattern: It is the fundamental architectural pattern behind cloud computing, microservices, and distributed databases."
      ],
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
      explanation: [
        "Retransmission Guard: The Retransmission Timer is the most critical; it waits for an ACK and triggers a resend if it expires.",
        "Dynamic RTT: This timer is 'Adaptive', meaning it constantly adjusts itself based on the measured Round Trip Time (RTT).",
        "Deadlock Prevention: The Persistence Timer prevents deadlocks by periodically checking if a peer's zero-window has finally opened.",
        "Silence Monitor: A Keepalive Timer is used to check if a connection is still active during long periods of silence.",
        "Closure Safety: The TIME_WAIT timer ensures that a closed connection's stray packets don't interfere with new, identical ones.",
        "Internet Proof: Efficient management of these timers is what allows TCP to remain robust across the unpredictable global internet."
      ],
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
      explanation: [
        "State Difference: TCP is connection-oriented and reliable, while UDP is connectionless and 'best-effort' (unreliable).",
        "Throttling Logic: TCP uses rigorous flow and congestion control to protect the network; UDP sends data at full speed without checks.",
        "In-Order Delivery: TCP guarantees that data arrives in the perfect order; UDP datagrams can arrive in any order or not at all.",
        "Header Weight: The TCP header is 20-60 bytes (heavyweight), whereas the UDP header is a tiny 8 bytes (lightweight).",
        "Optimal Use-Case: TCP is used where data integrity is vital (Web, Banking, Email); UDP is for real-time speed (VoIP, Gaming).",
        "Design Choice: Choose TCP for accuracy and delivery guarantees; choose UDP when low latency is the highest priority."
      ],
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
      definition: "The World Wide Web (WWW) is a massive, distributed information system built on the internet that uses the Hypertext Transfer Protocol (HTTP) to share linked documents and resources.",
      explanation: [
        "Distributed Model: The architecture of the WWW is a masterpiece of distributed computing, based on a flexible Client-Server model.",
        "Collective Scale: It consists of a collection of billions of servers serving trillions of resources to users worldwide.",
        "Resource Pipeline: The browser (client) makes a specific request for a resource, and the web server provides the answer.",
        "Standard Languages: This relationship is governed by HTTP/HTTPS, the standardized 'languages' of the global web.",
        "Intermediate Layers: To ensure speed, the architecture includes intermediate layers like CDNs to distribute files geographically.",
        "Separation of Concerns: The architecture separates content (HTML), presentation (CSS), and behavior (JS) for maximum development flexibility.",
        "Information Hub: It is the most dominant application of the internet, transforming how humanity interacts with all information."
      ],
      detailedPoints: [
        "Client-Server Model: The web operates on requests from browsers (Clients) to servers (Hosts) that process and deliver the asked-for resources.",
        "Uniform Resource Locators (URLs): Every single document, image, or video on the web has a unique 'address' that can be linked to from anywhere else.",
        "Hypertext Linking: The fundamental principle of the web is 'Hypertext'—the ability to jump from one document to another via clickable links, creating a web of data.",
        "HTTP/HTTPS Protocols: The standardized 'languages' used for communication. HTTPS adds a layer of encryption (SSL/TLS) for secure transactions.",
        "Resource Representation: Servers provide data in structured formats like HTML (structure), CSS (styling), and JavaScript (interaction) for browser rendering.",
        "Browser Engines: Specialized software inside the client that translates raw code into the visual, interactive interface that humans can use.",
        "Distributed Scalability: The system is decentralized; no single entity owns the web, and new servers can be added indefinitely without reconfiguring the global system."
      ],
      diagramExplanation: "A flowchart showing: User Input -> Browser -> DNS Lookup -> HTTP Get Request -> Web Server -> File Retrieval -> HTTP Response -> Browser Parsing -> Visual Rendering.",
      example: "Browsing a global e-commerce site like Amazon, where your browser connects to local CDN servers to load images and text quickly.",
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
      explanation: [
        "System Agents: Email architecture involves User Agents (UA), Message Transfer Agents (MTA), and Message Access Agents (MAA).",
        "Local Submission: The User Agent (e.g., Outlook) sends a message to the local Mail Server (MTA) using the SMTP protocol.",
        "Address Discovery: The sender's MTA performs a DNS MX record lookup to find the physical address of the receiver's mail server.",
        "Mailbox Relay: The message is then relayed to the receiver's MTA, where it is deposited into a specific digital mailbox.",
        "Flexible Retrieval: The receiver retrieves the message at their convenience using retrieval protocols like POP3 or IMAP.",
        "Delayed Communication: This 'Store-and-Forward' design ensures that communication succeeds even if the parties are not online at the same time.",
        "Security Layers: Modern systems add layers of spam filtering and encryption (TLS/SSL) to protect the integrity of professional communication."
      ],
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
      definition: "The Domain Name System (DNS) is the global, hierarchical, and highly decentralized database that translates human-readable domain names into specialized numeric IP addresses.",
      explanation: [
        "Dynamic Translation: DNS is a global, hierarchical, and decentralized database that translates domain names into numeric IP addresses.",
        "Internet Phonebook: It acts as the 'phonebook' of the internet, converting names like 'google.com' into IPs like '172.217.1.1'.",
        "Scaling Hierarchy: The hierarchical structure partitions the global namespace, preventing any single database from being overwhelmed.",
        "Query Path: A user request travels through recursive resolvers and authoritative name servers to find the final record.",
        "Response Speed: Aggressive caching at multiple network levels ensures that most queries take less than 100 milliseconds to resolve.",
        "Metadata Management: DNS also manages critical metadata, such as MX records for email routing and SRV records for specific services.",
        "Navigability: It is a vital foundation of the modern internet, enabling humans to navigate the web using easy-to-remember words."
      ],
      detailedPoints: [
        "Hierarchical Structure: DNS is organized in a tree: Root (.) -> Top-Level Domains (.com, .org) -> Second-Level Domains (google) -> Subdomains (mail).",
        "Recursive Resolvers: These are servers (usually at your ISP) that do the 'hunting' for you, querying different servers until the final IP is found.",
        "Root Name Servers: The first stop in a query. They direct the resolver to the specific server responsible for a TLD like '.com'.",
        "TLD Servers: Managed by organizations like Verisign, these servers point to the 'Authoritative Name Server' for a specific domain name.",
        "Authoritative Name Servers: The final source of truth. These servers hold the actual IP address for the domain you are looking for.",
        "A and AAAA records: The basic records that map names to IPv4 and IPv6 addresses respectively.",
        "TTL (Time to Live) & Caching: To save time, every result is 'cached' (remembered) for a specific number of seconds so the same lookup isn't repeated immediately."
      ],
      diagramExplanation: "A circular query path: Browser -> Recursive Resolver -> Root Server -> TLD Server -> Authoritative Server -> Resolver -> Browser Cache.",
      example: "Typing 'wikipedia.org' and having DNS find the IP address 208.80.154.224 in the blink of an eye.",
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
      explanation: [
        "Dual Channels: FTP is unique because it uses two separate TCP connections to manage the transfer of files.",
        "Command Pipeline: The Control Connection uses Port 21 for sending commands and status updates between client and server.",
        "Bitstream Pipeline: The Data Connection uses Port 20 for the actual, high-speed transfer of file bitstreams.",
        "Firewall Adaptation: It supports both 'Active Mode' and 'Passive Mode' to work around various networking firewall restrictions.",
        "Transfer Modes: FTP can transfer data in both ASCII mode (for text files) and Binary mode (for images and software).",
        "Encrypted Variants: While original FTP is insecure, variations like SFTP and FTPS provide the necessary encryption for modern use.",
        "Bulk Efficiency: It remains a critical tool for web publishing, server backups, and moving large amounts of bulk data efficiently."
      ],
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
      explanation: [
        "Structural Layers: The email message format consists of a hidden Envelope, a visible Header, and the Message Body.",
        "Internal Envelope: The Envelope is used strictly by the Mail Servers (MTAs) for routing and delivering the message.",
        "Visible Metadata: The Header section contains key metadata such as From, To, Subject, and unique Message-ID markers.",
        "Server Trail: Headers also include a trail of 'Received' stamps that document the physical servers the message traversed.",
        "Rich Media: The MIME standard allows email to include rich media, such as high-resolution images and PDF attachments.",
        "Alternative Views: MIME can also provide 'Multipart' messages, allowing the same email to contain both plain text and HTML versions.",
        "Global Reliability: This standardized format ensures that messages can be reliably exchanged between any two global email providers."
      ],
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
      explanation: [
        "Web Foundation: HTTP is the foundational request-response protocol that powers the entire World Wide Web experience.",
        "Client Intent: A client (browser) sends a request for a specific resource, such as a webpage or high-resolution image.",
        "Server Action: The server processes this request and responds with the data or an appropriate error status code.",
        "Independent Requests: It is inherently 'stateless', meaning every request is independent of any previous interaction with the site.",
        "Session Persistence: Modern websites use 'Cookies' to add a layer of persistent session state to the stateless HTTP protocol.",
        "Interaction Verbs: Standard commands like GET, POST, and PUT are used to interact with resources on the remote server.",
        "Performance Leap: Evolutions like HTTP/3 use the QUIC protocol to provide vastly superior speeds and security over older versions."
      ],
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
      explanation: [
        "Ruleset: The Protocol (http://) defines the set of rules the browser uses to talk to the server (e.g., secure HTTPS).",
        "Logical Host: The Domain Name (example.com) identifies the physical or logical server hosting the desired resource.",
        "Process Marker: An optional Port Number (:80 or :443) specifies the exact process on the server to connect with.",
        "File Identifier: The Path (/users/profile) tells the server which specific directory or file the user is requesting.",
        "Dynamic Input: Query Parameters (?id=123) allow the client to pass extra dynamic information to the server's scripts.",
        "Internal Bookmark: The Fragment (#top) identifies a specific location within the page for the browser to scroll to immediately."
      ],
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
      explanation: [
        "Tree Base: The DNS hierarchy is structured as an inverted tree, starting with the invisible 'Root' represented by a dot.",
        "Global Split: Top-Level Domains (TLDs) like .com, .org, and .in form the first layer of global categorization.",
        "Entity Identity: Second-Level Domains (like google.com) represent specific organizations or businesses within a TLD.",
        "Service Partition: Subdomains (like mail.google.com) allow organizations to further partition their internal network services.",
        "Information Flow: Authority is delegated down the tree: Root servers know the TLD servers, which in turn know the local servers.",
        "Decentralized Design: This distributed approach ensures that no single server is responsible for the entire world's naming data."
      ],
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
      explanation: [
        "Service Unit: A web server is a high-performance software application that listens for and fulfills HTTP requests from browsers.",
        "Static Delivery: Its primary function is to serve static content like HTML, CSS, and images directly from its disk storage.",
        "Backend Gateway: In modern setups, it often acts as a 'Reverse Proxy', passing complex requests to specialized backend scripts.",
        "Concurrent Handling: Popular servers like Nginx and Apache are designed to handle thousands of concurrent connections efficiently.",
        "Security Tasks: They also manage critical tasks like SSL/TLS encryption, compression, and request logging for security.",
        "Redundancy Setup: High-traffic sites use many web servers behind a 'Load Balancer' to ensure the platform never goes offline."
      ],
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
      explanation: [
        "Step 1: The User Agent (UA) uses the SMTP protocol to send the email to its local Message Transfer Agent (MTA).",
        "Step 2: The sender's MTA queries DNS for the receiver's 'MX record' to find the IP of their mail server.",
        "Step 3: The message is relayed via SMTP across the internet to the receiver's MTA (mail server).",
        "Step 4: The receiver's server performs security/spam checks and places the message in the user's local mailbox.",
        "Step 5: The receiver uses a retrieval protocol (POP3 or IMAP) to pull the message into their own User Agent.",
        "This 'Store-and-Forward' cycle ensures that messages are delivered even if the user is currently offline."
      ],
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
      explanation: [
        "A Records: The most basic entry, mapping a human-readable domain name to a numeric IPv4 address.",
        "AAAA Records: The modern equivalent of A records, mapping domain names to the newer 128-bit IPv6 addresses.",
        "CNAME Records: Used for Aliasing, allowing multiple names (like www.site.com) to point to one primary domain.",
        "MX Records: Mail Exchanger records that specify exactly which servers are authorized to receive email for a domain.",
        "NS Records: Identify the 'Authoritative Name Servers' that hold the master database for that specific domain.",
        "TXT Records: Used for various metadata, including security verification services and proving domain ownership."
      ],
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
      explanation: [
        "POP (Post Office Protocol) is a 'Download-and-Delete' service designed for an era of single-computer use.",
        "In POP, once an email is downloaded to your PC, it is removed from the server, making it inaccessible elsewhere.",
        "IMAP (Internet Message Access Protocol) is a 'Synchronization' service designed for the multi-device world.",
        "With IMAP, your emails live on the server; changes made on one device are instantly reflected on all others.",
        "IMAP allows for 'Partial Fetches', meaning you can see the Subject line without downloading a massive attachment.",
        "In today's landscape, IMAP is the undisputed standard as users demand seamless access from phones and laptops."
      ],
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
