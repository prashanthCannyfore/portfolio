export const sectionSEO = {
  top: {
    heading: 'Prashanth V | Fullstack Engineer',
    title: 'Prashanth V | Fullstack Engineer',
    description: 'Prashanth V is a Fullstack Engineer with 2+ years of experience building responsive web applications using React.js, TypeScript, Node.js, and production GenAI solutions. Explore his work.',
  },
  about: {
    heading: 'About Prashanth V',
    title: 'Prashanth V | About the Fullstack Engineer',
    description: 'Meet Prashanth V, a Bangalore-based Fullstack Engineer with 2+ years of experience in React.js, Node.js, TypeScript, LangChain, and RAG-based GenAI systems.',
  },
  work: {
    heading: 'Professional Experience',
    title: 'Prashanth V | Professional Experience',
    description: 'Explore Prashanth V\'s professional experience at Cannyfore — building enterprise web apps, GenAI solutions, HR dashboards, and natural-language data query systems.',
  },
  stack: {
    heading: 'Fullstack & GenAI Skills',
    title: 'Prashanth V | React.js, Node.js, LangChain & GenAI Skills',
    description: 'Explore Prashanth V\'s skills across frontend (React.js, TypeScript), backend (Node.js, Express.js), databases (PostgreSQL, MongoDB), and AI (LangChain, RAG, LangGraph).',
  },
  projects: {
    heading: 'Fullstack & GenAI Projects',
    title: 'Prashanth V | OrangeHRM, Data Chat & E-Commerce Projects',
    description: 'Explore Prashanth V\'s projects: OrangeHRM HR management system, Data Chat AI query assistant, and a full-stack e-commerce platform with Redux and JWT authentication.',
  },
  background: {
    heading: 'Education & Background',
    title: 'Prashanth V | MCA — Manipal Institute of Technology',
    description: 'Prashanth V holds a Master of Computer Applications (MCA) from Manipal Institute of Technology, with certifications from DeepLearning.AI and IBM.',
  },
  contact: {
    heading: 'Contact Prashanth V',
    title: 'Prashanth V | Contact for Fullstack Development',
    description: 'Contact Prashanth V about fullstack and GenAI development opportunities. Find his email, GitHub, LinkedIn, location in Bangalore, and availability.',
  },
}

export function metadataForSection(id) {
  return sectionSEO[id] || sectionSEO.top
}
