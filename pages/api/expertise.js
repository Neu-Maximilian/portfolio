const expertise = [
    {
        id: 0,
        title: 'Développement Full Stack',
        desc: 'Expertise dans la création d\'applications web robustes en utilisant les technologies MERN (MongoDB, Express.js, React.js, Node.js).',
    },
    {
        id: 1,
        title: 'Administration Systèmes',
        desc: 'Mise en place et gestion de systèmes comme MECM, TREND, et des solutions hospitalières.',
    },
    {
        id: 2,
        title: 'DevOps et Virtualisation',
        desc: 'Utilisation de Kubernetes, Xen Server et outils DevOps pour optimiser les flux de travail.',
    },
    {
        id: 3,
        title: 'Programmation Polyvalente',
        desc: 'Maîtrise de langages comme C#, C++, Python, JavaScript, Dart et Rust.',
    },
    {
        id: 4,
        title: 'Gestion Réseau et Sécurité',
        desc: 'Connaissance approfondie de Fortinet, OPNsense, Wireguard et Netbird.',
    },
    {
        id: 5,
        title: 'Outils et Automatisation',
        desc: 'Expérience avec PowerShell, Bash, Copilot, et Visual Studio Code pour le développement et l\'automatisation.',
    },    
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
