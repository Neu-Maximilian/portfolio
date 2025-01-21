const portfolio = [
    {
        id: 0,
        projectName: "AP3",
        url: "",
        image: "",
        projectDetail: "Un projet réalisé dans le cadre du BTS SIO, il s'agit d'un maquettage d'un parc informatique. Avec un vpn site à site, un serveur de fichier, etc...",
        technologiesUsed: [
            {
                tech: "Active Directory",
            },
            {
                tech: "DNS",
            },
            {
                tech: "DHCP",
            },
            {
                tech: "Group Policy",
            },
            {
                tech: "Windows Server",
            },
            {
                tech: "Windows 10",
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
