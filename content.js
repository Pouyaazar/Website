// =============================================================
//  EDIT YOUR PORTFOLIO HERE
//  This single file controls almost all text on the website.
//  Items written like [Add ...] are placeholders for you to fill in.
// =============================================================

export const profile = {
  name: 'Pouya Azarandaz',
  title: 'Mechanical Engineer · FEA & Structural Simulation · CAD · DfAM',
  tagline:
    'Mechanical engineer pairing FEA-driven structural simulation with additive manufacturing and hands-on testing — closing the loop from CAD to test for lightweight, flight-ready structures.',
  photo: '/profile.jpg', // replace public/profile.jpg to change
}

export const contact = {
  email: 'pouyaazarandaz@gmail.com',
  phone: '+39 348 782 1635',
  linkedin: 'https://linkedin.com/in/pouyaazarandaz',
  github: 'https://github.com/[add-your-handle]', // [Add your GitHub handle]
  location: 'Torino, Italy · Open to roles across Europe',
}

// Path to your CV inside the /public folder.
export const cvFile = '/CV.pdf'

export const about = [
  'I am a mechanical engineer with an M.Sc. from Politecnico di Torino, combining FEA-driven structural simulation, additive manufacturing, and hands-on experimental validation, alongside two years of industrial CAD and GD&T design.',
  'My M.Sc. thesis closed the loop between ABAQUS finite element modelling, quasi-static compression testing, and CT-based defect characterisation of L-PBF lattice structures — reaching a force correlation of R² = 0.853 and peak-force error within 5.6%. I work across structural analysis, lightweight design for additive manufacturing, simulation-to-test correlation, and review-ready engineering documentation.',
  'I am eager to apply this combination to flight-hardware development for the space sector, where lightweight structures, additive manufacturing, and rigorous simulation-to-test qualification matter most.',
]

// Key, real metrics from the thesis / CV.
export const metrics = [
  { value: 'R² 0.853', label: 'FE-to-test correlation' },
  { value: '≤ 5.6%', label: 'peak-force error' },
  { value: '2 yrs', label: 'industrial CAD / GD&T' },
  { value: '95 / 110', label: 'M.Sc. final grade' },
]

export const languages = ['Persian — Native', 'English — C1', 'Italian — A2']

// ---- SKILLS (bento cards) ----
export const skills = [
  {
    group: 'FEA & Simulation',
    tag: 'analysis',
    items: ['ABAQUS (Static / Explicit / Contact / Nonlinear)', 'Simulation-to-Test Correlation', 'Mesh & Convergence', 'Energy-Balance Verification', 'Altair Inspire', 'ANSYS Mechanical'],
  },
  {
    group: 'CAD & Mechanical Design',
    tag: 'design',
    items: ['SolidWorks', 'GD&T', '2D Manufacturing Drawings', 'Tolerance Application', 'Design Reviews', 'Revision Control'],
  },
  {
    group: 'Additive Manufacturing / DfAM',
    tag: 'process',
    items: ['Laser Powder Bed Fusion (L-PBF)', 'TPMS & Graded Lattices', 'nTopology', 'Build Orientation & Supports', 'Process-Parameter Mapping (VED)', 'Post-processing Planning'],
  },
  {
    group: 'Testing & Characterisation',
    tag: 'validation',
    items: ['Quasi-static Compression (ISO 13314)', '3-Point Bending', 'Vickers Indentation', 'X-ray CT (VGStudio MAX)', 'SEM Fractography'],
  },
  {
    group: 'Materials',
    tag: 'materials',
    items: ['AlSi10Mg', 'Ti-6Al-4V', 'NiTi', 'Advanced Ceramics', 'Steel'],
  },
  {
    group: 'Programming & Data',
    tag: 'tools',
    items: ['Python', 'MATLAB', 'KNIME', 'Supervised ML', 'Technical Documentation'],
  },
]

// ---- PROJECTS ----
export const projects = [
  {
    title: 'Uniform vs Graded TPMS Lattices by L-PBF (M.Sc. Thesis)',
    blurb:
      'Closed-loop workflow: CAD lattice design → L-PBF fabrication → X-ray CT inspection → quasi-static compression (ISO 13314) → ABAQUS/Explicit FEA → SEM fractography. The FE model reproduced the FRD-30 global response with R² = 0.853 and peak-force error within 5.6%.',
    tools: ['ABAQUS', 'nTopology', 'VGStudio MAX', 'AlSi10Mg'],
    link: '#research',
  },
  {
    title: 'ABAQUS Compression Simulation & Test Correlation',
    blurb:
      'Nonlinear explicit models with rigid-plate contact, friction, and elastic-plastic material definition predicting stiffness, peak load, plateau response, and energy absorption. Absorbed-energy error −3.93% with kinetic/internal energy ratio kept below 10%.',
    tools: ['ABAQUS/Explicit', 'FEA', 'ISO 13314'],
    link: '#research',
  },
  {
    title: 'Thin-Walled Tube Crushing under Axial Impact (Published)',
    blurb:
      'Co-authored a peer-reviewed study combining axial-impact testing and ABAQUS FEA of a novel multibody thin-walled tube, published in the International Journal of Applied Mechanics, 14(09), 2250042.',
    tools: ['ABAQUS', 'Impact Testing'],
    link: 'https://scholar.google.com/scholar?q=Experimental+and+numerical+crushing+analysis+novel+multibody+thin-walled+tube',
  },
  {
    title: 'Supervised ML for L-PBF Parameter Optimisation',
    blurb:
      'Applied supervised machine learning (Python, MATLAB, KNIME) to powder-bed-fusion process datasets to support parameter optimisation. Manuscript in preparation.',
    tools: ['Python', 'KNIME', 'MATLAB'],
    link: '#publications',
  },
  {
    title: 'Ceramics Mechanical Characterisation (Politecnico di Milano)',
    blurb:
      'Ran 3-point bending and Vickers indentation campaigns on advanced ceramic specimens to ASTM-referenced protocols, reducing raw load-displacement data into flexural strength and fracture-toughness metrics with traceable reports.',
    tools: ['3-Point Bending', 'Vickers', 'ASTM'],
    link: '#timeline',
  },
  {
    title: 'CAD & GD&T Drawing Packages (Industry)',
    blurb:
      'Produced SolidWorks 3D parts and assemblies and released GD&T-annotated 2D manufacturing drawings, owning drawing packages through iterative design reviews and revision control to improve release readiness.',
    tools: ['SolidWorks', 'GD&T', 'DfMA'],
    link: '#timeline',
  },
]

// ---- THESIS / RESEARCH ----
export const research = {
  thesisTitle:
    'A Comparative Multi-Method Study of Uniform and Graded TPMS Lattices Fabricated via Additive Manufacturing',
  field: 'M.Sc. Mechanical Engineering · Final grade 95/110',
  institution: 'Politecnico di Torino',
  summary:
    'Closed-loop investigation of uniform and functionally graded TPMS lattices (Schwarz-P, Gyroid, FRD), linking lattice design to manufacturing and mechanical behaviour through finite element simulation, quasi-static compression testing, and CT/SEM characterisation. The work separates designed void fraction from manufacturing-induced defects, showing that relative density alone is insufficient for ranking lightweight structures — topology, defects, and collapse stability must be considered together.',
  highlights: [
    'Designed uniform & graded TPMS architectures in nTopology with full DfAM constraints',
    'ABAQUS/Explicit models: R² = 0.853, peak-force error −5.55%, energy error −3.93%',
    'Quasi-static compression to ISO 13314 (5 specimens per configuration)',
    'X-ray CT defect quantification + SEM fractography linking porosity to collapse',
  ],
  // Current ongoing work
  active: {
    label: 'In progress',
    title: 'Scoping review — protocol registered',
    text: 'A scoping review whose protocol has been registered on OSF, mapping the current literature in the field.',
    doi: '10.17605/OSF.IO/UMBVD',
    link: 'https://doi.org/10.17605/OSF.IO/UMBVD',
  },
}

// ---- CERTIFICATIONS (images live in public/certificates/) ----
// To add a certificate: render it to public/certificates/cert-XX.jpg and add an entry here.
export const certifications = [
  {
    name: 'SOLIDWORKS Assemblies & Exam-Level Part Modeling',
    issuer: 'Dassault Systèmes · Coursera',
    date: 'Jun 2026',
    category: 'CAD',
    image: '/certificates/cert-01.jpg',
    verify: 'https://coursera.org/verify/759KTD8DSR2U',
  },
  {
    name: 'SOLIDWORKS: Advanced Engineering Drawings',
    issuer: 'LinkedIn Learning',
    date: 'Jun 2026',
    category: 'CAD',
    image: '/certificates/cert-02.jpg',
    verify: null,
  },
  {
    name: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI · Coursera',
    date: 'Jan 2026',
    category: 'ML / AI',
    image: '/certificates/cert-03.jpg',
    verify: 'https://coursera.org/verify/GOFNV6N740TX',
  },
  {
    name: 'Supervised Machine Learning: Regression & Classification',
    issuer: 'DeepLearning.AI & Stanford · Coursera',
    date: 'Apr 2026',
    category: 'ML / AI',
    image: '/certificates/cert-04.jpg',
    verify: 'https://coursera.org/verify/RUJ05FRWI16S',
  },
  {
    name: 'Design for Additive Manufacturing',
    issuer: 'Arizona State University · Coursera',
    date: 'Jan 2026',
    category: 'AM / DfAM',
    image: '/certificates/cert-05.jpg',
    verify: 'https://coursera.org/verify/W048TKKOXF5H',
  },
  {
    name: 'MATLAB Onramp',
    issuer: 'MathWorks',
    date: 'Mar 2023',
    category: 'Programming',
    image: '/certificates/cert-06.jpg',
    verify: null,
  },
  {
    name: 'Deep Learning Onramp',
    issuer: 'MathWorks',
    date: 'Mar 2026',
    category: 'ML / AI',
    image: '/certificates/cert-07.jpg',
    verify: null,
  },
  {
    name: 'Regression with Deep Learning',
    issuer: 'MathWorks',
    date: 'Mar 2026',
    category: 'ML / AI',
    image: '/certificates/cert-08.jpg',
    verify: null,
  },
  {
    name: 'Intro to Crystal Plasticity Modeling in Ansys Mechanical',
    issuer: 'Ansys',
    date: 'Jun 2025',
    category: 'FEA',
    image: '/certificates/cert-09.jpg',
    verify: null,
  },
  {
    name: 'Certificate of Reviewing — Thin-Walled Structures',
    issuer: 'Elsevier',
    date: '2023–2024',
    category: 'Peer Review',
    image: '/certificates/cert-10.jpg',
    verify: null,
  },
]

// ---- EXPERIENCE / EDUCATION TIMELINE (reverse chronological) ----
export const timeline = [
  {
    type: 'experience',
    period: 'Oct 2023 – Jul 2025',
    role: 'M.Sc. Researcher — Lattice Structures, FEA & Test Correlation',
    org: 'Politecnico di Torino, Italy',
    detail:
      'Designed uniform and graded TPMS lattices in nTopology and built nonlinear ABAQUS/Explicit models validated against ISO 13314 compression campaigns; quantified L-PBF defects by X-ray CT and SEM. Published at the 4th International Online Conference on Materials (MDPI).',
  },
  {
    type: 'education',
    period: '2022 – 2025',
    role: 'M.Sc. Mechanical Engineering',
    org: 'Politecnico di Torino, Italy · 95/110',
    detail:
      'Thesis: a comparative multi-method study of uniform and graded TPMS lattices via additive manufacturing (FEA, compression testing, CT and SEM characterisation).',
  },
  {
    type: 'experience',
    period: 'Jul 2024 – Oct 2024',
    role: 'Research Assistant — Mechanical Characterisation of Ceramics',
    org: 'Politecnico di Milano, Italy',
    detail:
      '3-point bending and Vickers indentation campaigns on advanced ceramics to ASTM-referenced protocols, with traceable test reports and engineering metrics (flexural strength, fracture toughness).',
  },
  {
    type: 'experience',
    period: 'Sep 2021 – Jul 2023',
    role: 'Mechanical Design Engineer',
    org: 'Peyman Modiriat Saze Co., Tehran, Iran',
    detail:
      'Produced SolidWorks parts and assemblies and released GD&T-annotated 2D drawings for industrial equipment, owning drawing packages through design reviews and revision control.',
  },
  {
    type: 'education',
    period: '2017 – 2021',
    role: 'B.Sc. Mechanical Engineering',
    org: 'Shahid Bahonar University of Kerman, Iran · Top 5%',
    detail:
      'Thesis on experimental and numerical crushing analysis of a novel multibody thin-walled circular tube under axial impact. Merit scholarship for direct M.Sc. admission.',
  },
]

// ---- PUBLICATIONS ----
export const publications = [
  {
    title:
      'Scoping review on [add topic] — protocol registered',
    authors: 'Pouya Azarandaz, [Add co-authors]',
    venue: 'OSF Registries · DOI 10.17605/OSF.IO/UMBVD',
    year: '2026',
    status: 'Protocol registered',
    link: 'https://doi.org/10.17605/OSF.IO/UMBVD',
  },
  {
    title:
      'Experimental and numerical crushing analysis of a novel multibody thin-walled circular tube under axial impact loading',
    authors: 'Mozafari, A., Azarandaz, P., Darijani, H., Shahsavari, H.',
    venue: 'International Journal of Applied Mechanics, 14(09), 2250042',
    year: '2022',
    status: 'Published',
    link: 'https://scholar.google.com/scholar?q=Experimental+and+numerical+crushing+analysis+novel+multibody+thin-walled+tube+axial+impact',
  },
  {
    title:
      'A Comparative Multi-Method Study of Uniform and Graded TPMS Lattices Fabricated via Additive Manufacturing',
    authors: 'Pouya Azarandaz, [Add co-authors]',
    venue: '4th International Online Conference on Materials (MDPI)',
    year: '2025',
    status: 'Conference',
    link: '[Add link]',
  },
  {
    title: 'TPMS FRD lattice study & ML for L-PBF parameter optimisation',
    authors: 'Pouya Azarandaz, [Add co-authors]',
    venue: 'Two journal manuscripts',
    year: '—',
    status: 'In preparation',
    link: '[Add link]',
  },
]
