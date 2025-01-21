// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Eddine SAOULI',
    image: 'images/eddine-emoji.png',
    designation: 'NixOs | GrapheneOS | MECM',
    view: "Bonjour, je recommande vivement Maximilian NEU pour ses compétences en installation et configuration de systèmes d'exploitation Linux, Android et Windows. Il a une connaissance approfondie de la gestion des systèmes d'exploitation et des réseaux informatiques.",
    linkednURL: "https://www.linkedin.com/in/eddine-su-645496278/"
  },
  {
    id: 1,
    name: 'Julien BORREGAN',
    image: "images/julien-emoji.png",
    designation: 'Développeur Fullstack | Administrateur Systèmes et Réseaux',
    view: "M. NEU est toujours aussi exemplaire dans les tâches qui lui sont demandées. Il sait parfaitement répondre aux demandes qui lui sont faites et s'avère force de proposition dans l'amélioration pro-active des solutions qu'il propose. Qu'il continue ainsi, c'est du très bon travail !",
    linkednURL: "https://www.linkedin.com/in/julien-borregan-93b8b116b"
  },
  // {
  //   id: 2,
  //   name: 'Nasir Khan',
  //   image: "images/nasir.jpg",
  //   designation: 'MERN | JavaScript | Tailwind | Sass | Bootstrap',
  //   view: "I wholeheartedly recommend Osama as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Osama's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
  //   linkednURL: "https://www.linkedin.com/in/nasirkhan22/"
  // },
  // {
  //   id: 3,
  //   name: 'Muhammad Ullah',
  //   image: "images/muhammad.jpeg",
  //   designation: 'MERN Stack Developer at Productbox',
  //   view: "I highly recommend Osama Javed for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
  //   linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  // },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
