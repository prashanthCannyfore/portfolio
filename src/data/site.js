// All copy lives here so components stay structural.

export const profile = {
  name: 'Prashanth V',
  initials: 'PV',
  role: 'Fullstack Engineer',
  location: 'Bangalore, Karnataka, India',
  timezone: 'IST (UTC +5:30)',
  availability: 'Open to work',
  phone: '+91-9008539137',
  email: 'prashanthv6777@gmail.com',
  links: {
    github: 'https://github.com/prashanthCannyfore',
    linkedin: 'https://www.linkedin.com/in/prashanth6777/',
    resume: '/assets/resume/PRASHANTH V-2026.pdf',
  },
  intro:
    'React.js / Node.js Developer with 2+ years of hands-on experience building responsive web applications using React.js, TypeScript, JavaScript, Node.js, Express.js, REST APIs, Redux, and SQL/NoSQL databases. Experienced in developing reusable React components, API integration, authentication, role-based access control, form validation, state management, and database-driven applications.',
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'background', label: 'Background' },
  { id: 'contact', label: 'Contact' },
]

export const facts = [
  { value: '2+', label: 'Years of experience' },
  { value: 'MERN', label: 'Primary stack' },
  { value: 'GenAI', label: 'LangChain · RAG · LLMs' },
  { value: 'MCA', label: 'Manipal Institute of Technology' },
]

export const marquee = [
  'React.js',
  'TypeScript',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'MongoDB',
  'Redux',
  'Tailwind CSS',
  'LangChain',
  'REST APIs',
  'LangGraph',
  'RAG',
]

export const stack = [
  {
    title: 'Frontend',
    note: 'Building responsive, interactive user interfaces with modern frameworks and state management.',
    items: [
      'React.js',
      'TypeScript',
      'JavaScript ES6+',
      'Redux',
      'React Router',
      'Context API',
      'Hooks',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Material UI',
      'Tailwind CSS',
    ],
    footer: { label: 'Focus', value: 'Component-driven UI' },
  },
  {
    title: 'Backend',
    note: 'Building scalable server-side applications and RESTful APIs with Node.js and Python frameworks.',
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT Authentication',
      'RBAC',
      'FastAPI',
    ],
    footer: { label: 'Approach', value: 'API-first development' },
  },
  {
    title: 'Database',
    note: 'Working with both SQL and NoSQL databases for efficient data storage and retrieval.',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'SQLite',
    ],
    footer: { label: 'Strategy', value: 'Schema design & optimization' },
  },
  {
    title: 'AI / GenAI',
    note: 'Building production-grade GenAI solutions with LLM orchestration, RAG pipelines, and prompt engineering.',
    items: [
      'LangChain',
      'LangGraph',
      'RAG',
      'Prompt Engineering',
      'Ollama (Mistral, Gemma)',
      'OpenRouter',
      'Local LLMs',
    ],
    footer: { label: 'Focus', value: 'Natural-language interfaces' },
  },
]

export const experience = [
  {
    company: 'Cannyfore',
    title: 'Fullstack Engineer',
    period: 'Sep 2024 — Present',
    duration: '2+ yrs',
    place: 'Bangalore, India',
    type: 'Full-time',
    current: true,
    summary:
      'Full-stack development and deployment of enterprise web applications and production GenAI solutions across the AI engineering lifecycle.',
    points: [
      'Built responsive full-stack applications using React.js, TypeScript, Node.js, and Express, implementing role-based access control (RBAC), form validation, and JWT authentication.',
      'Designed multi-agent LLM orchestration, RAG with semantic chunking, and prompt engineering for natural-language data query and analytics systems.',
      'Developed a natural-language data query assistant (Data Chat) using LangChain, local LLMs (Ollama with Mistral & Gemma), and OpenRouter to transform queries into automated SQL and visual charts.',
      'Designed dynamic HR analytics dashboards and employee management modules for OrangeHRM, displaying real-time data, charts, leave tracking, and performance metrics.',
    ],
    tags: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'LangChain', 'RAG', 'JWT', 'RBAC'],
  },
]

export const projects = [
  {
    kind: 'Enterprise Project',
    name: 'OrangeHRM',
    company: 'Human Resource Management System',
    blurb:
      'Core HR management system with employee onboarding, leave management, performance tracking, and role-based dashboards. Team size: 4.',
    overview:
      'Full-stack developer on an enterprise HRM platform covering onboarding, personal info, job details, reporting hierarchies, and interactive analytics dashboards.',
    responsibilities: [
      'Developed core employee management modules using React.js and TypeScript covering onboarding, personal info, job details, and reporting hierarchies.',
      'Integrated React components with REST APIs for leave management, performance tracking, and employee workflows.',
      'Implemented Role-Based Access Control (RBAC) for Admin, HR, and Employee personas with dynamic navigation views.',
      'Built interactive HR analytics dashboards displaying real-time employee data, charts, and leave balances.',
    ],
    tags: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'REST APIs', 'SQL'],
    detail: { label: 'Type', value: 'Enterprise Web App' },
    repo: null,
  },
  {
    kind: 'Enterprise Project',
    name: 'Data Chat',
    company: 'Smart Data Query & Visualization Assistant',
    blurb:
      'AI-powered platform for natural-language interaction with CSV, Excel, and SQLite datasets. Transforms plain English into SQL queries and auto-generated charts. Team size: 3.',
    overview:
      'Full-stack developer on an AI-assisted query and visualization platform integrating LangChain, local LLMs, and dynamic chart generation.',
    responsibilities: [
      'Developed an AI-assisted query and visualization platform enabling natural-language interaction with uploaded CSV, Excel, and SQLite datasets.',
      'Integrated LangChain and local LLMs via Ollama (Mistral, Gemma) to automatically translate natural language into SQL queries.',
      'Built React interfaces featuring dynamic tables, downloadable CSV outputs, auto-generated charts, and multi-model switching via OpenRouter.',
      'Implemented editable Python/Matplotlib code execution and UI themes (dark/light mode).',
    ],
    tags: ['React.js', 'JavaScript', 'SQLite', 'LangChain', 'Ollama', 'Mistral', 'Gemma', 'OpenRouter'],
    detail: { label: 'Type', value: 'GenAI Application' },
    repo: null,
  },
  {
    kind: 'Personal Project',
    name: 'Full-Stack E-Commerce Platform',
    company: 'MERN Stack',
    blurb:
      'Full-featured e-commerce platform with authentication, product catalog management, payment processing, and admin tooling. Team size: 5.',
    overview:
      'End-to-end MERN e-commerce application with Redux state management, JWT auth in HTTP-only cookies, and third-party payment integration.',
    responsibilities: [
      'Engineered full-stack functionality covering authentication, product catalog management, payment processing, and admin tooling.',
      'Managed client state using Redux and developed secure Node.js/Express REST APIs with JWT authentication stored in HTTP-only cookies.',
      'Integrated third-party payment and transactional communication APIs (Stripe/Paytm, SendGrid).',
    ],
    tags: ['React.js', 'JavaScript', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Stripe'],
    detail: { label: 'Type', value: 'Full Stack Web App' },
    repo: null,
  },
]

export const education = [
  {
    id: 'education-mca',
    year: '2021',
    endYear: '2024',
    degree: 'Master of Computer Applications (MCA)',
    school: 'Manipal Institute of Technology',
    years: '2021 – 2024',
    field: 'Computer Applications',
    status: 'Completed',
    note: 'Post-graduate programme in computer applications providing a strong foundation in software engineering, data structures, and systems design.',
  },
]

export const certifications = [
  'DeepLearning.AI — Neural Networks and Deep Learning',
  'IBM — Machine Learning with Python',
  'AutoML — DeepLearning.AI / AWS',
]

export const contactFacts = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { label: 'Based in', value: profile.location },
  { label: 'Timezone', value: profile.timezone },
  { label: 'Availability', value: profile.availability },
]
