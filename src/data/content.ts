// ---------------------------------------------------------------------------
// Marquee preview GIFs (21 total) from motionsites.ai
// ---------------------------------------------------------------------------
// Real figures from the M.Sc. thesis, used in the scrolling marquee strip.
export const marqueeImages: string[] = [
  '/thesis/tpms-cells.jpg',
  '/thesis/lattice-cube-a.jpg',
  '/thesis/sem-micrograph.jpg',
  '/thesis/fea-cube.jpg',
  '/thesis/lattice-array.jpg',
  '/thesis/lpbf-printer.jpg',
  '/thesis/ebsd.jpg',
  '/thesis/fractography.jpg',
  '/thesis/void-fraction.jpg',
  '/thesis/lattice-row.jpg',
  '/thesis/lab-equipment.jpg',
  '/thesis/lattice-samples.jpg',
  '/thesis/control-panel.jpg',
  '/thesis/test-rig.jpg',
  '/thesis/stress-strain.jpg',
  '/thesis/lattice-cubes-row.jpg',
  '/thesis/fractography2.jpg',
  '/thesis/powder-grid.jpg',
  '/thesis/compression-curves.jpg',
  '/thesis/lpbf-schematic.jpg',
]

// ---------------------------------------------------------------------------
// Service list
// ---------------------------------------------------------------------------
export type Service = {
  num: string
  name: string
  description: string
}

export const services: Service[] = [
  {
    num: '01',
    name: 'Additive Manufacturing',
    description:
      'Laser powder bed fusion of structured and lattice (TPMS) geometries, with design-for-AM control of feature size, overhangs, build orientation, and functionally graded porosity.',
  },
  {
    num: '02',
    name: 'Characterisation & Testing',
    description:
      'X-ray computed tomography, SEM fractography, and ISO 13314 quasi-static compression to quantify porosity, defects, and structure–property behaviour.',
  },
  {
    num: '03',
    name: 'Simulation & Modelling',
    description:
      'ABAQUS and Ansys finite element models, including nonlinear and contact analysis, validated against the measured force–displacement response.',
  },
  {
    num: '04',
    name: 'Porous & Lattice Design',
    description:
      'Uniform and functionally graded TPMS architectures engineered for stiffness, strength, and energy absorption, guided by Gibson–Ashby scaling.',
  },
  {
    num: '05',
    name: 'Data & Machine Learning',
    description:
      'Python, MATLAB, and KNIME workflows applying supervised machine learning to L-PBF datasets for process and parameter optimisation.',
  },
]

// ---------------------------------------------------------------------------
// Projects (sticky stacking cards)
// ---------------------------------------------------------------------------
export type Project = {
  num: string
  name: string
  category: string
  description: string
  col1: [string, string]
  col2: string
  link?: string
  linkLabel?: string
}

export const projects: Project[] = [
  {
    num: '01',
    name: 'Graded TPMS Lattices',
    category: 'M.Sc. Thesis · Politecnico di Torino',
    description:
      'Uniform and functionally graded TPMS lattices (FRD, Gyroid, Fischer–Koch–S) built by L-PBF in AlSi10Mg; CT/SEM characterisation and an Abaqus model validated against experiment (R² = 0.853).',
    col1: ['/thesis/tpms-cells.jpg', '/thesis/sem-micrograph.jpg'],
    col2: '/thesis/lattice-cube-a.jpg',
    link: 'https://webthesis.biblio.polito.it/36721/',
    linkLabel: 'View Thesis',
  },
  {
    num: '02',
    name: 'ML for Additive Manufacturing',
    category: 'Academic Project',
    description:
      'Supervised machine learning (Python, MATLAB, KNIME) applied to L-PBF datasets to optimise process parameters.',
    col1: ['/thesis/powder-grid.jpg', '/thesis/compression-curves.jpg'],
    col2: '/thesis/fea-cube.jpg',
    linkLabel: 'In Preparation',
  },
  {
    num: '03',
    name: 'Porous Lattices for Implants',
    category: 'Research Collaboration',
    description:
      'Scoping review of lattice and TPMS architectures for dental implants — design, manufacturing, and performance. Protocol accepted and registered on OSF.',
    col1: ['/thesis/lattice-array.jpg', '/thesis/ebsd.jpg'],
    col2: '/thesis/void-fraction.jpg',
    link: 'https://doi.org/10.17605/OSF.IO/UMBVD',
    linkLabel: 'View Protocol',
  },
  {
    num: '04',
    name: 'Axial Crushing of Thin-Walled Tubes',
    category: 'B.Sc. Thesis · Published in IJAM',
    description:
      'Experimental and numerical (FEA) crush analysis of a novel multibody thin-walled tube under axial impact; multi-objective optimisation lowered peak crush force and raised specific energy absorption.',
    col1: ['/thesis/crush-tubes.jpg', '/thesis/crush-curves.jpg'],
    col2: '/thesis/crush-modes.jpg',
    link: 'https://www.worldscientific.com/doi/10.1142/S1758825122500429',
    linkLabel: 'Read Paper',
  },
]

// ---------------------------------------------------------------------------
// Certificates (rendered from the certificates PDF into /public/certificates)
// ---------------------------------------------------------------------------
export type Certificate = {
  src: string
  title: string
  issuer: string
}

export const certificates: Certificate[] = [
  {
    src: '/certificates/cert-05.jpg',
    title: 'Design for Additive Manufacturing',
    issuer: 'Arizona State University · Coursera',
  },
  {
    src: '/certificates/cert-09.jpg',
    title: 'Crystal Plasticity Modeling in Ansys Mechanical',
    issuer: 'Ansys',
  },
  {
    src: '/certificates/cert-04.jpg',
    title: 'Supervised Machine Learning: Regression & Classification',
    issuer: 'DeepLearning.AI & Stanford · Coursera',
  },
  {
    src: '/certificates/cert-03.jpg',
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI · Coursera',
  },
  {
    src: '/certificates/cert-01.jpg',
    title: 'SOLIDWORKS Assemblies & Part Modeling (Exam Level)',
    issuer: 'Dassault Systèmes · Coursera',
  },
  {
    src: '/certificates/cert-02.jpg',
    title: 'SOLIDWORKS: Advanced Engineering Drawings',
    issuer: 'LinkedIn Learning',
  },
  {
    src: '/certificates/cert-06.jpg',
    title: 'MATLAB Onramp',
    issuer: 'MathWorks',
  },
  {
    src: '/certificates/cert-07.jpg',
    title: 'Deep Learning Onramp',
    issuer: 'MathWorks',
  },
  {
    src: '/certificates/cert-08.jpg',
    title: 'Regression with Deep Learning',
    issuer: 'MathWorks',
  },
  {
    src: '/certificates/cert-10.jpg',
    title: 'Reviewer Recognition — Thin-Walled Structures',
    issuer: 'Elsevier',
  },
]

// ---------------------------------------------------------------------------
// Experience & Education (from CV)
// ---------------------------------------------------------------------------
export type TimelineEntry = {
  title: string
  org: string
  period: string
  points: string[]
}

export const experience: TimelineEntry[] = [
  {
    title: 'Research Assistant — Mechanical Characterisation of Ceramics',
    org: 'Politecnico di Milano, Italy',
    period: 'Jul 2024 – Oct 2024',
    points: [
      'Characterised flexural strength and fracture toughness of advanced ceramics by 3-point bending and Vickers indentation, following ASTM-referenced test protocols.',
      'Executed specimen preparation, measurement campaigns, and data analysis; authored test reports ensuring reproducibility and data traceability.',
    ],
  },
  {
    title: 'Teaching Assistant — Fluid Machinery',
    org: 'Politecnico di Torino, Italy',
    period: '2024 – 2025',
    points: [
      'Supported 60+ undergraduate students across laboratory sessions and problem-solving tutorials in fluid machinery and engineering thermodynamics, in an international setting.',
    ],
  },
  {
    title: 'Mechanical Design Engineer',
    org: 'Peyman Modiriat Saze Co., Tehran, Iran',
    period: 'Sep 2021 – Jul 2023',
    points: [
      'Designed SolidWorks 3D assemblies and produced GD&T-annotated 2D drawings for industrial mechanical equipment.',
      'Managed CAD documentation through iterative design reviews and systematic version control.',
    ],
  },
]

// ---------------------------------------------------------------------------
// Publications & professional service (from CV)
// ---------------------------------------------------------------------------
export type Publication = {
  type: string
  title: string
  venue: string
  meta: string
  link?: string
}

export const publications: Publication[] = [
  {
    type: 'Journal',
    title:
      'Experimental and numerical crushing analysis of a novel multibody thin-walled circular tube under axial impact loading',
    venue: 'International Journal of Applied Mechanics',
    meta: 'Mozafari, Azarandaz, Darijani & Shahsavari · 2022 · 14(09), 2250042',
    link: 'https://www.worldscientific.com/doi/10.1142/S1758825122500429',
  },
  {
    type: 'Conference',
    title:
      'A Comparative Multi-Method Study of Uniform and Graded TPMS Lattices Fabricated via Additive Manufacturing',
    venue: '4th International Online Conference on Materials, MDPI',
    meta: '2025',
  },
  {
    type: 'Protocol',
    title:
      'Lattice and TPMS Architectures for Dental Implants: A Scoping Review of Design, Manufacturing, and Performance',
    venue: 'OSF Registries — accepted protocol',
    meta: 'DOI: 10.17605/OSF.IO/UMBVD',
    link: 'https://doi.org/10.17605/OSF.IO/UMBVD',
  },
  {
    type: 'In Preparation',
    title:
      'Functionally graded TPMS lattice study — compression testing, XCT, and FEA',
    venue: 'Manuscript in preparation',
    meta: '',
  },
  {
    type: 'In Preparation',
    title: 'Supervised machine learning for L-PBF parameter optimisation',
    venue: 'Manuscript in preparation',
    meta: '',
  },
  {
    type: 'Peer Review',
    title: 'Reviewer — Thin-Walled Structures (Elsevier)',
    venue: 'Structural mechanics & engineering materials',
    meta: '2 reviews · 2023–2024',
  },
]

export const education: TimelineEntry[] = [
  {
    title: 'M.Sc. Mechanical Engineering',
    org: 'Politecnico di Torino, Italy',
    period: '2022 – 2025',
    points: [
      'Thesis: A Comparative Multi-Method Study of Uniform and Graded TPMS Lattices Fabricated via Additive Manufacturing.',
      'Focus: L-PBF additive manufacturing, porous/TPMS design, FEA (ABAQUS), compression testing, and XCT-based characterisation.',
    ],
  },
  {
    title: 'B.Sc. Mechanical Engineering',
    org: 'Shahid Bahonar University of Kerman, Iran',
    period: '2017 – 2021',
    points: [
      'Graduated top 5% in department; merit scholarship for direct M.Sc. admission.',
      'Thesis: Experimental and numerical crushing analysis of a novel multibody thin-walled circular tube under axial impact loading.',
    ],
  },
]
