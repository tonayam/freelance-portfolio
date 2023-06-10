import electricBikes from '../assets/electric-bikes.png';
import deverence from '../assets/deverence.png';

// OUR SERVICES
const ourServices = [
  {
    title: `BRANDING`,
    info: `Establish a strong brand identity that sets you apart.`,
    btnLabel: `ABOUT BRANDING`,
    link: ``,
  },
  {
    title: `CAMPAIGNS`,
    info: `Utilize data and analytics to optimize your marketing performance.`,
    btnLabel: `ABOUT CAMPAIGNS`,
    link: ``,
  },
  {
    title: `E-COMMERCE`,
    info: `Develop customized online stores that reflect your brand and vision.`,
    btnLabel: `ABOUT E-COMMERCE`,
    link: ``,
  },
  {
    title: `SOCIAL MEDIA`,
    info: `Create engaging and shareable content that drives brand awareness.`,
    btnLabel: `ABOUT SOCIAL MEDIA`,
    link: ``,
  },
];

// PROJECTS
const projects = [
  {
    projectName: `ELECTRIC BIKES LAGOS`,
    projectDesc: `A Nigerian based e-commerce store that sells electric bikes`,
    projectLink: `https://www.electricbikeslagos.com/`,
    projectImage: electricBikes,
    projectClass: ``,
  },

  {
    projectName: `DEVERENCE`,
    projectDesc: `Portfolio project for a fullstack web developer based in Nigeria`,
    projectLink: `https://deverence.xyz/`,
    projectImage: deverence,
    projectClass: `inverted`,
  },
];

export { ourServices, projects };
