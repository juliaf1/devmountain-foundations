const projects = [
  {
    title: 'Aventureiro',
    link: 'https://juliafrederico.webflow.io/work/project-1',
    image: 'https://uploads-ssl.webflow.com/5fdf8cae083cee887e2edcf5/5fe12f6d3be2b110c3d28a13_a2.png',
    description: 'A plataform to connect local families from a remote beach in Ilha Grande with potential tourists. The project helps people from the community to manage the touristic activity with a lightweight webapp and WhatsApp integration. I worked as project manager and lead dev during our 2 week work sprint. My main contributions were designing stylesheets and database schema, managing our production Trello and workflow, besides working on the back and front-end.',
    tags: ['Ruby on Rails']
  },
  {
    title: 'Boca Miúda',
    link: 'https://juliafrederico.webflow.io/work/boca-miuda',
    image: 'https://uploads-ssl.webflow.com/5fdf8cae083cee887e2edcf5/6289650106854d6a51321605_Captura%20de%20Tela%202022-05-21%20a%CC%80s%2019.17.07.png',
    description: 'Boca Miúda is a circuit of artists from the state of Rio de Janeiro, organized in a curated admin managed library.',
    tags: ['Ruby on Rails']
  },
  {
    title: 'Cuukin',
    link: 'http://cuukin.herokuapp.com/',
    image: 'https://uploads-ssl.webflow.com/5fdf8cae083cee887e2edcf5/62896501c1220909ae1e3589_Captura%20de%20Tela%202022-05-21%20a%CC%80s%2019.16.43.png',
    description: 'Cuukin is a web app that teaches people how to cook with a handmade gamified journey based on personal taste. I worked as a full-stack developer, creating the app from scratch, designing its database and implementing all features.',
    tags: ['Ruby on Rails']
  },
  {
    title: 'Open Tickets',
    link: 'https://juliafrederico.webflow.io/work/project-3',
    image: 'https://uploads-ssl.webflow.com/5fdf8cae083cee887e2edcf5/5fe133459283e72453d018a7_o3.png',
    description: 'Open Tickets is an open plataform that connects developers, experienced or not, to code together.',
    tags: ['Ruby on Rails']
  },
  {
    title: 'Greg News HBO',
    link: 'https://juliafrederico.webflow.io/work/project-4',
    image: 'https://uploads-ssl.webflow.com/5fdf8cae083cee887e2edcf5/5fdfdf28425730305f6edee2_Prancheta-1-p-2600.png',
    description: 'Greg News is a politics humor show, broadcasted by HBO and produced by Porta dos Fundos. I worked as a social media manager, being responsible for creating content for Greg News HBO digital media.',
    tags: ['Graphic Design', 'Social Media']
  },
  {
    title: 'Globoplay',
    link: 'https://juliafrederico.webflow.io/work/project-2',
    image: 'https://uploads-ssl.webflow.com/5fdf8cae083cee887e2edcf5/5fdfc8b9db89354650ad4ceb_gp24-p-2600.png',
    description: 'Globoplay is the leading streaming service in Brasil. I worked during two time periods at the marketing agency responsible for Globoplays social media content.',
    tags: ['Graphic Design', 'Social Media']
  },
]

const socialLinks = {
  github: 'https://github.com/juliaf1',
  linkedin: 'https://www.linkedin.com/in/julia-frederico-95651b1a2/',
  portfolio: 'https://juliafrederico.webflow.io/',
  image: 'https://uploads-ssl.webflow.com/5fdf8cae083cee887e2edcf5/5fdf942c881adb3879de6a54_me-nyc.jpg',
}

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

const randomProject = (req, res) => {
  res.status(200).send(projects.sample())
};

const social = (req, res) => {
  res.status(200).send(socialLinks);
};

module.exports = {
  randomProject,
  social,
}