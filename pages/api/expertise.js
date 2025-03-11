const expertise = [
    {
        id: 0,
        title: 'Automatisation Intelligente',
        desc: 'Création de solutions sur mesure avec PowerShell, Bash et Python pour optimiser vos processus métier.',
    },
    {
        id: 1,
        title: 'Infrastructure & Solutions Cloud',
        desc: 'Déploiement et gestion d\'infrastructures robustes avec MECM, TREND et Grafana pour une supervision efficace.',
    },
    {
        id: 2,
        title: 'Innovation DevOps',
        desc: 'Orchestration de conteneurs avec Kubernetes et virtualisation avancée pour des déploiements agiles et performants.',
    },
    {
        id: 3,
        title: 'Développement Multi-Plateformes',
        desc: 'Conception d\'applications modernes et performantes en C#, C++, JavaScript, Dart et Rust.',
    },
    {
        id: 4,
        title: 'Sécurité & Connectivité',
        desc: 'Protection et interconnexion de vos systèmes avec OPNsense, OpenVPN et solutions VPN nouvelle génération.',
    },
    {
        id: 5,
        title: 'Développement Augmenté',
        desc: 'Utilisation des dernières technologies d\'IA et outils de développement pour une productivité maximale.',
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
