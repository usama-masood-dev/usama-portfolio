/** Unsplash placeholders — replace with your own files in /public/projects/ later */

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  profile: u("photo-1507003211169-0a1dd7228f2d", 600),
  heroDashboard: u("photo-1551288049-bebda4e38f71", 1400),
  heroCode: u("photo-1498050108023-c5249f4df085", 800),
  projects: {
    "optima-crm": {
      cover: u("photo-1560518883-ce09059eeffa", 1200),
      gallery: [
        { src: u("photo-1560518883-ce09059eeffa", 1200), alt: "Real estate CRM dashboard" },
        { src: u("photo-1553877522-43269d4ea984", 1200), alt: "Team collaboration" },
        { src: u("photo-1551288049-bebda4e38f71", 1200), alt: "Analytics overview" },
      ],
    },
    "immosurance-aml": {
      cover: u("photo-1450101499163-c8848c66ca85", 1200),
      gallery: [
        { src: u("photo-1450101499163-c8848c66ca85", 1200), alt: "Compliance documentation" },
        { src: u("photo-1554224154-26032ffc0d07", 1200), alt: "Secure financial workflow" },
        { src: u("photo-1563986768609-322da13575f3", 1200), alt: "Risk and audit tracking" },
      ],
    },
    "panvika-learning-system": {
      cover: u("photo-1501504901654-516559d290b5", 1200),
      gallery: [
        { src: u("photo-1501504901654-516559d290b5", 1200), alt: "Online learning platform" },
        { src: u("photo-1522202176988-66273c2fd55f", 1200), alt: "Course and instructor tools" },
        { src: u("photo-1516321318423-f06f85e504b3", 1200), alt: "E-learning workspace" },
      ],
    },
  },
  bento: {
    catalog: u("photo-1460925895917-afdab827c52f", 800),
  },
} as const;
