const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'CCI Campus Alsace',
                degree: 'BTS SIO (Services Informatiques aux Organisations)',
                detail: 'BTS SIO, avec spécialité en Systèmes et Réseaux. En alternance, avec l\'entreprise Hôpitaux Civils de Colmar.',
                year: '2023-2025'
            },
            {
                id: 1,
                title: 'Université de haute-alsace',
                degree: 'Licence Informatique',
                detail: 'Licence Informatique, avec spécialité en Informatique et Mathématiques Appliquées. Validation de la L1, L2 non poursuivie.',
                year: '2022-2023'
            },
            {
                id: 2,
                title: 'Lycée La Bourdonnais',
                degree: 'Baccalauréat, Général',
                detail: 'Baccalauréat Général, avec spécialité en NSI (Numérique et Sciences Informatiques), Physique-Chimie et Mathématiques. Mention Bien.',
                year: '2010-2022'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Hôpitaux Civils de Colmar',
                role: 'Administrateur Systèmes (alternant)',
                url: 'https://ch-colmar.fr/',
                desc: 'Développement solutions info, dont un système de messagerie. Mise en place/gestion MECM, TREND, et solutions hospitalières.',
                year: '09/2023 - Present',
                location: 'Colmar, France'
            },
            {
                id: 2,
                title: 'U-Logistique',
                role: 'Préparateur de commande',
                url: 'https://www.u-logistique.com/',
                desc: 'Assurer la réception, le stockage, la préparation de marchandises. Utilisation d\'un chariot. Maintien des consignes de sécurités.',
                year: '01/2023 - 07/2023',
                location: 'Mulhouse, France'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
