export const portfolioData = {
    personal: {
        name: "Mayank Goyal",
        role: "VCF Automation Architect | vExpert 2025",
        summary:
            "Bringing nearly a decade of hands-on VMware automation experience. Specializing in designing and delivering extensible, enterprise-grade automation solutions.",
        email: "mayankgoyalmax@gmail.com",
        phone: "9673871077",
        location: "India",
        socials: {
            linkedin: "https://www.linkedin.com/in/mayankgoyal1994",
            github: "https://github.com/imtrinity94",
            twitter: "#",
            blog: "https://cloudblogger.co.in",
        },
    },
    skills: [
        {
            category: "Automation & Orchestration",
            items: [
                "VMware Aria Automation",
                "vRealize Orchestrator (vRO)",
                "Terraform",
                "Ansible",
                "SaltStack",
                "PowerCLI",
            ],
        },
        {
            category: "Cloud & Virtualization",
            items: [
                "VMware vSphere",
                "VMware Cloud Foundation (VCF)",
                "NSX-T",
                "vCloud Director",
                "Kubernetes",
                "Docker",
            ],
        },
        {
            category: "Development & Scripting",
            items: [
                "JavaScript (ES5/ES6)",
                "Python",
                "Node.js",
                "REST API Integration",
                "PowerShell",
                "CI/CD (GitLab)",
            ],
        },
    ],
    projects: [
        {
            id: "wdt4vro",
            title: "Wdt4vRO",
            category: "Open Source Tool",
            description: "Workflow Development Toolkit for vRO developers.",
            longDescription:
                "An open-source developer tool designed to accelerate vRealize Orchestrator workflow development and API integration. Simplifies complex tasks and improves code reusability.",
            techStack: ["JavaScript", "vRO API", "Automation"],
            repo: "https://github.com/mayankgoyal1994/Wdt4vRO", // Placeholder
            demo: "#",
            color: "from-blue-600/20 to-cyan-500/20",
            hoverColor: "group-hover:from-blue-600/40 group-hover:to-cyan-500/40",
            span: "md:col-span-2 md:row-span-2",
            mediaType: "image",
            mediaUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Abstract code image
            demoUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: "curl2vro",
            title: "curl2vRO",
            category: "Developer Tool",
            description: "Convert cURL commands to vRO scripting code.",
            longDescription:
                "A utility that converts raw cURL commands into ready-to-use vRealize Orchestrator JavaScript code, streamlining the integration of external REST APIs.",
            techStack: ["Node.js", "vRO", "Parsing"],
            repo: "#",
            demo: "#",
            color: "from-purple-600/20 to-pink-500/20",
            hoverColor: "group-hover:from-purple-600/40 group-hover:to-pink-500/40",
            span: "md:col-span-1 md:row-span-2",
            mediaType: "image",
            mediaUrl: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            demoUrl: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: "vcf-automation-framework",
            title: "VCF Automation Framework",
            category: "Enterprise Automation",
            description: "End-to-end automation for VCF infrastructure.",
            longDescription:
                "Designed and implemented a comprehensive automation framework for VMware Cloud Foundation (VCF) 5.2.x and 9.0.x, enabling self-service provisioning and lifecycle management.",
            techStack: ["VCF", "vRO", "Python"],
            repo: "#",
            demo: "#",
            color: "from-green-600/20 to-teal-500/20",
            hoverColor: "group-hover:from-green-600/40 group-hover:to-teal-500/40",
            span: "md:col-span-1 md:row-span-1",
            mediaType: "image",
            mediaUrl: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            demoUrl: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: "licensing-portal",
            title: "Self-Service Licensing",
            category: "Full Stack",
            description: "Automated license compliance and chargeback.",
            longDescription:
                "Developed automated report generation solutions for VMware Usage Meter using vRealize Orchestrator, streamlining license compliance and chargeback processes for large enterprises.",
            techStack: ["vRO", "JavaScript", "Reporting"],
            repo: "#",
            demo: "#",
            color: "from-orange-500/20 to-red-500/20",
            hoverColor: "group-hover:from-orange-500/40 group-hover:to-red-500/40",
            span: "md:col-span-1 md:row-span-1",
            mediaType: "image",
            mediaUrl: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            demoUrl: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ],
    experience: [
        {
            year: "Jan 2025 - Present",
            title: "Senior Technical Consultant",
            org: "MBCOM, VMware Division",
            description:
                "Lead technical resource driving enterprise automation projects. Delivering comprehensive solutions for banking customers across the Middle East. Creator of open-source tools Wdt4vRO and curl2vRO.",
            type: "work",
        },
        {
            year: "Oct 2023 - Jan 2025",
            title: "Senior Systems Engineer",
            org: "Wipro @ S&P Global",
            description:
                "Cloud Automation Services SME providing L3+ support for VMware Aria Automation. Managed 400+ vRO workflows and 50+ Cloud Templates supporting critical business operations.",
            type: "work",
        },
        {
            year: "Sep 2021 - Oct 2023",
            title: "Module Lead (VMware Automation)",
            org: "TELUS International",
            description:
                "Architected Telus International Private Cloud automation framework. Led a team of 5 automation engineers. Engineered custom workflows for NSX-T and tenant onboarding.",
            type: "work",
        },
        {
            year: "July 2020 - Aug 2021",
            title: "Senior Applications Developer",
            org: "TELUS International",
            description:
                "Developed vRO solutions for Edge Clusters in VCD. Implemented CI/CD pipelines on GitLab using YAML for continuous integration.",
            type: "work",
        },
        {
            year: "Oct 2018 - June 2020",
            title: "Senior Software Engineer",
            org: "Xavient Digital",
            description:
                "Recognized as Employee of the Quarter. Refactored legacy PowerShell scripts into native vRO JavaScript workflows. Delivered vRO training programs.",
            type: "work",
        },
        {
            year: "Before 2018",
            title: "Early Career",
            org: "Atos",
            description:
                "Reporting Specialist & Application Developer. Started with vRealize Orchestrator training. extensive expertise in PowerShell and PowerCLI for VMware infrastructure.",
            type: "milestone",
        },
    ],
    testimonials: [
        {
            quote:
                "Mayank's deep expertise in VMware automation transformed our infrastructure operations. His ability to bridge the gap between Ops and Dev is remarkable.",
            name: "Former Manager",
            role: "S&P Global",
            initials: "FM",
        },
        {
            quote:
                "A true vExpert. The tools he built like Wdt4vRO saved our team countless hours of development time. Highly recommended for any complex automation project.",
            name: "Colleague",
            role: "VMware Community",
            initials: "VC",
        },
        {
            quote:
                "Mayank delivered the project with exceptional quality and documentation. His understanding of banking sector requirements is top-notch.",
            name: "Client",
            role: "Banking Sector",
            initials: "CL",
        },
    ],
    blog: [
        {
            title: "Mastering vRealize Orchestrator",
            excerpt:
                "Tips and tricks for building scalable workflows in vRO 8.x. Best practices for error handling and logging.",
            category: "Automation",
            readTime: "5 min read",
            color: "from-blue-500 to-cyan-500",
            link: "https://cloudblogger.co.in",
        },
        {
            title: "VCF 5.x Automation Guide",
            excerpt:
                "A deep dive into automating VMware Cloud Foundation using the latest APIs and tools. What's new in VCF headers.",
            category: "VCF",
            readTime: "8 min read",
            color: "from-purple-500 to-pink-500",
            link: "https://cloudblogger.co.in",
        },
        {
            title: "Building Developer Tools for vRO",
            excerpt:
                "Why I created Wdt4vRO and how it can help you speed up your development cycle. Open source contributions.",
            category: "DevTools",
            readTime: "6 min read",
            color: "from-orange-500 to-red-500",
            link: "https://cloudblogger.co.in",
        },
    ],
};
