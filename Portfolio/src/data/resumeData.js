// ─────────────────────────────────────────────────────────────────────────────
// resumeData.js  –  Edit ALL your personal content here.
// No need to touch any component file for text changes.
// ─────────────────────────────────────────────────────────────────────────────

export const personal = {
  name:       'Alex Morgan',
  title:      'Senior Software Engineer',
  summary:    'Building scalable, cloud-native products that reach millions of users.',
  email:      'alex.morgan@example.com',
  phone:      '+1 (555) 234-5678',
  location:   'San Francisco, CA',
  linkedin:   'https://linkedin.com/in/alexmorgan',
  github:     'https://github.com/alexmorgan',
  resumePdf:  '/resume.pdf',
};

export const stats = [
  { value: '8+',  label: 'Years Experience' },
  { value: '40+', label: 'Projects Shipped' },
  { value: '25+', label: 'Technologies' },
  { value: '3',   label: 'Open-Source Libs' },
];

export const about = `I'm a Senior Software Engineer with 8+ years of experience designing
and delivering high-traffic web applications, distributed systems, and
developer tooling. I thrive at the intersection of elegant architecture
and pragmatic delivery — writing code that's easy to change and a
pleasure to read. I believe great software starts with clear thinking,
honest feedback, and tight collaboration between engineers and the
people they build for.`;

// ── Experience ────────────────────────────────────────────────────────────────
export const experience = [
  {
    role:     'Senior Software Engineer',
    company:  'Cloudify Inc.',
    period:   'Jan 2022 – Present',
    bullets: [
      'Architected a multi-tenant SaaS platform on AWS (ECS, RDS, SQS) handling 50M+ requests/day with 99.98% uptime.',
      'Led migration from monolith to microservices, cutting deployment lead time from 3 weeks to under 2 hours.',
      'Mentored a team of 6 engineers, introduced ADRs and pair-programming culture, reducing bug escape rate by 35%.',
    ],
  },
  {
    role:     'Software Engineer II',
    company:  'DataStream Labs',
    period:   'Mar 2019 – Dec 2021',
    bullets: [
      'Built a real-time analytics pipeline in Kafka + Flink processing 200k events/sec with sub-100ms P99 latency.',
      'Delivered a React dashboard consuming WebSocket feeds, adopted by 12 enterprise customers in the first quarter.',
      'Reduced CI build time by 60% by parallelising test suites and caching Docker layers in GitHub Actions.',
    ],
  },
  {
    role:     'Junior Software Engineer',
    company:  'Nexus Digital Agency',
    period:   'Jun 2017 – Feb 2019',
    bullets: [
      'Developed and maintained 8 client websites using React, Node.js and PostgreSQL.',
      'Introduced automated end-to-end testing with Playwright, catching regressions before every release.',
      'Collaborated with designers to build a reusable component library, cutting UI development time by 40%.',
    ],
  },
];

// ── Skills ───────────────────────────────────────────────────────────────────
export const skills = [
  {
    group: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'CSS/SCSS', 'Tailwind', 'Vite', 'Testing Library'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Python', 'Go', 'REST APIs', 'GraphQL', 'PostgreSQL', 'Redis', 'Kafka'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Datadog', 'Nginx'],
  },
  {
    group: 'Soft Skills',
    items: ['Technical Leadership', 'System Design', 'Code Review', 'Mentoring', 'Agile / Scrum'],
  },
];

// ── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    title:       'OpenMetrics Dashboard',
    description: 'A self-hosted, real-time observability dashboard that aggregates metrics from Prometheus, CloudWatch and Datadog into a unified, filterable view.',
    tech:        ['React', 'Go', 'Prometheus', 'Docker', 'WebSockets'],
    live:        'https://openmetrics.example.com',
    github:      'https://github.com/alexmorgan/openmetrics',
  },
  {
    title:       'QuickDeploy CLI',
    description: 'A developer CLI that provisions AWS infrastructure via Terraform and deploys containerised apps in a single command, with rollback support.',
    tech:        ['Node.js', 'Terraform', 'AWS CDK', 'GitHub Actions'],
    live:        null,
    github:      'https://github.com/alexmorgan/quickdeploy',
  },
  {
    title:       'Collab Notes',
    description: 'A real-time collaborative note-taking app with rich-text editing, version history and end-to-end encryption, built as a PWA.',
    tech:        ['Next.js', 'Y.js', 'Node.js', 'PostgreSQL', 'Vercel'],
    live:        'https://collabnotes.example.com',
    github:      'https://github.com/alexmorgan/collabnotes',
  },
  {
    title:       'FormForge',
    description: 'An open-source headless form engine with validation, conditional logic and multi-step support. Used by 3k+ developers worldwide.',
    tech:        ['TypeScript', 'React', 'Zod', 'Rollup', 'npm'],
    live:        'https://formforge.dev',
    github:      'https://github.com/alexmorgan/formforge',
  },
];

// ── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    degree:      'B.Sc. Computer Science',
    institution: 'University of California, Berkeley',
    period:      '2013 – 2017',
    detail:      'Graduated Magna Cum Laude. Concentration in Distributed Systems.',
  },
];

export const certifications = [
  { name: 'AWS Certified Solutions Architect – Professional', issuer: 'Amazon Web Services', year: '2023' },
  { name: 'Certified Kubernetes Administrator (CKA)',          issuer: 'CNCF',               year: '2022' },
  { name: 'Google Professional Cloud Developer',               issuer: 'Google Cloud',        year: '2021' },
];
