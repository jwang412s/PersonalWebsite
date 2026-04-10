// =====================================================
// EDIT THIS FILE to update your Work, Research, and Projects content.
// Just modify the arrays below — the site picks them up automatically.
// =====================================================

export interface WorkEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface ResearchEntry {
  title: string;
  venue?: string;
  year: string;
  description: string;
  link?: string;
}

export interface ProjectEntry {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface CertificationEntry {
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  verifyLink?: string;
  logo?: string;
}

// ── Certifications ─────────────────────────────────
export const certifications: CertificationEntry[] = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    logo: "/logos/microsoft.svg",
    issued: "Apr 2026",
    credentialId: "2D31591325A22E8C",
    verifyLink:
      "https://learn.microsoft.com/en-ca/users/jwang412s-2264/credentials/2d31591325a22e8c",
  },
  {
    title: "Fortinet Certified Associate in Cybersecurity",
    issuer: "Fortinet",
    logo: "/logos/fortinet.svg",
    issued: "Mar 2026",
    expires: "Mar 2028",
    credentialId: "049835822JW",
    verifyLink:
      "https://training.fortinet.com/pluginfile.php/1/tool_certificate/issues/1775809110/0498358222JW.pdf",
  },
  {
    title: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    logo: "/logos/isc2.svg",
    issued: "Mar 2026",
    expires: "Mar 2029",
    credentialId: "3731440",
    verifyLink:
      "https://www.credly.com/badges/7111a1ad-3af2-4c95-b043-4761853beb66/public_url",
  },
  // Add more entries by copying the block above
];

// ── Work History ────────────────────────────────────
export const workHistory: WorkEntry[] = [
  {
    company: "Simon Fraser University",
    role: "Graduate Teaching Assistant",
    period: "September 2025 – Present",
    description:
      `Teaching Assistant for the course 'Social Issues and Communication Strategies in Computing Science' (CMPT105). 
      This course teaches the fundamentals of informative and persuasive communication for professional engineers and computer scientists. `,
    highlights: [
      `Streamlined course administration and student support by leveraging Microsoft 365 (Teams, Outlook, Excel,
      Word) to coordinate with the teaching team, manage grading workflows, and deliver timely, personalized
      feedback to students.`,
      ` Provided high-volume support to students and faculty, resolving technical queries and ticketing style
        requests regarding course materials and software access.`,
      `Evaluated and provided detailed feedback on student writing assignments, focusing on coherence, persuasion,
      technical accuracy and grammar.`,
    ],
  },
  {
    company: "Pacific Coastal Computing Association",
    role: "Digital Media Specialist",
    period: "May 2024 – August 2024",
    description:
      `Motion Capture Specialist tasked with coordinating motion capture projects and training students in the use of motion capture technology.`,
    highlights: [
      `Led a 5-person team of designers and technicians, implementing sprint planning, scheduling, and regular
        stakeholder meetings to ensure projects were delivered within scope and budget.`,
      `Managed technical communications between directors and actors, coordinating multi-site production
      schedules and equipment logistics.`,
      `Directed and filmed training videos for post and live production workflows to train future hires and edited
      the videos using Davinci Resolve.`
    ],
  },

  {
    company: "The Sawmill Studios",
    role: "IT Technician",
    period: "May 2024 – August 2024",
    description:
      `Motion Capture Specialist responsible for operating and maintaining an OptiTrack motion capture system.`,
    highlights: [
      `Investigated and resolved hardware/software integration errors during live productions, performing
      root-cause analysis on connectivity and facial capture synchronization.`,
      `Authored comprehensive documentation for configuring and utilizing a motion capture system, including
      network management with PeelCapture for connected devices, camera calibration, and setup of Rokoko suits.`,
      `Configured unattended Remote Access for workstations and established Access Control Lists (ACL) with
      secure credentials to ensure authorized user access.`,
      `Managed network configurations and device synchronization for specialized hardware, ensuring
      low-latency communication between connected devices.`
    ],
  },

  {
    company: "UBC IT - Emerging Media Lab",
    role: "Junior Software Developer",
    period: "May 2023 – August 2024",
    description:
      `VR Developer responsible for developing interactive VR applications using Unreal Engine, C++, and Blueprints, 
      collaborating with a multidisciplinary team to create immersive experiences for research and education.`,
    highlights: [
      `Led the development of VR applications in Unreal Engine 5, collaborating with Faculty partners to design and
      prototype immersive digital experiences that met academic and research objectives.`,
      `Implemented Characterized Chatbot simulations with dynamic content retrieval, improving user engagement and interactivity.`,
      `Supported the rollout of VR hardware and immersive tech, collaborating with faculty to ensure successful
      implementation and user onboarding.`,
      `Leveraged Microsoft SharePoint and Confluence for centralized project documentation and asset management.`,
      ` Conducted inventory and equipment audits for workstation upgrades and new hardware deployments, ensuring all systems met department standards.`
    ],
  },
  // Add more entries by copying the block above
];

// ── Research ────────────────────────────────────────
export const research: ResearchEntry[] = [
  {
    title: "Beyond the Surface: How Depth Alters Face Perception",
    venue: "Evolutionary Psychological Science",
    year: "2025",
    description:
      "Pazhoohi, F., Wang, J., Aoki, K., & Kingstone, A. (2025). Beyond the surface: How depth alters face perception.",
    link: "https://doi.org/10.1007/s40806-025-00439-1",
  },
  {
    title: "Comfort Distance for Online and In-person Interactions: A Virtual Reality Study",
    venue: "Japanese Psychological Research",
    year: "2025",
    description:
      "Pazhoohi, F., Wang, J., & Kingstone, A. (2025). Comfort distance for online and in-person interactions: A virtual reality study.",
    link: "https://doi.org/10.1111/jpr.12608",
  },
  {
    title: "Revolutionizing Nurse Practitioner Training: Integrating Virtual Reality and Large Language Models for Enhanced Clinical Education",
    venue: "Studies in Health Technology and Informatics",
    year: "2024",
    description:
      "Scott, A. J. S., McCuaig, F., Lim, V., Watkins, W., Wang, J., & Strachan, G. (2024). Revolutionizing nurse practitioner training: Integrating virtual reality and large language models for enhanced clinical education. Studies in Health Technology and Informatics, 315, 671–672.",
    link: "https://doi.org/10.3233/shti240272",
  },
  // Add more entries by copying the block above
];

// ── Projects ────────────────────────────────────────
export const projects: ProjectEntry[] = [
  {
    title: "Nurse Practitioner VR Tool",
    description:
      `Responsible for animating and role-engineering virtual metahumans to roleplay as patients in OSCE assessments. Achieved real time speech-to-speech using OpenAI API endpoints with utilization of the Runtime Speech
      Recognizer Library. Created animation state machines for life-like human interactions with the project’s metahumans, and implemented user interactions for VR. 
      To mimic the behavior of patients in real OSCE assessments, I included guardrails in the system’s role prompt to 
      ensure that no extraneous information was volunteered by the LLM.`,
    tags: ["Unreal Engine 5", "Quest 3", "Openai API", "C++", "Blueprints", "Metahuman Creator"],
    link: "https://youtu.be/SVfRaU9fRZ8",
    //github: "https://youtu.be/SVfRaU9fRZ8",
  },
  {
    title: "Another Project",
    description: "Description of another cool thing you built.",
    tags: ["Python", "Machine Learning"],
    github: "https://github.com/yourusername/another-project",
  },
  // Add more entries by copying the block above
];
