/**
 * Local assets under /public — export all covers & gallery shots at 1920×912.
 * Panvika still uses placeholders until images are added.
 */

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  profile: "/images/profile.webp",
  heroDashboard: "/images/hero-dashboard.jpg",
  heroCode: "/images/hero-code.jpg",
  projects: {
    "optima-crm": {
      cover: "/projects/optima-crm/cover.png",
      gallery: [
        { src: "/projects/optima-crm/crm-1.jpg", alt: "Optima-CRM dashboard" },
        { src: "/projects/optima-crm/crm-2.png", alt: "Optima-CRM listings overview" },
        {
          src: "/projects/optima-crm/crm-3.png",
          alt: "Optima-CRM property and listing workflow",
        },
        { src: "/projects/optima-crm/crm-4.png", alt: "Optima-CRM client management" },
        { src: "/projects/optima-crm/crm-5.png", alt: "Optima-CRM team workspace" },
        { src: "/projects/optima-crm/crm-6.png", alt: "Optima-CRM analytics view" },
        { src: "/projects/optima-crm/crm-7.png", alt: "Optima-CRM integrations" },
        { src: "/projects/optima-crm/crm-8.png", alt: "Optima-CRM reporting" },
        { src: "/projects/optima-crm/crm-9.png", alt: "Optima-CRM production UI" },
      ],
    },
    "immosurance-aml": {
      cover: "/projects/immosurance-aml/cover.png",
      gallery: [
        {
          src: "/projects/immosurance-aml/aml-1.png",
          alt: "Immosurance AML compliance dashboard",
        },
        { src: "/projects/immosurance-aml/aml-2.png", alt: "AML onboarding workflow" },
        { src: "/projects/immosurance-aml/aml-3.png", alt: "KYC and dossier management" },
        { src: "/projects/immosurance-aml/aml-4.png", alt: "AML workflow overview" },
        { src: "/projects/immosurance-aml/aml-5.png", alt: "Secure compliance operations" },
        { src: "/projects/immosurance-aml/aml-6.png", alt: "Audit and risk tracking" },
        { src: "/projects/immosurance-aml/aml-7.png", alt: "Regulatory reporting" },
        {
          src: "/projects/immosurance-aml/aml-8.png",
          alt: "Immosurance AML production interface",
        },
      ],
    },
    thebrandvue: {
      cover: "/projects/thebrandvue/cover.png",
      gallery: [
        { src: "/projects/thebrandvue/brand-1.png", alt: "The Brand Vue homepage" },
        { src: "/projects/thebrandvue/brand-2.png", alt: "Services and offerings" },
        { src: "/projects/thebrandvue/brand-3.png", alt: "Projects portfolio" },
        { src: "/projects/thebrandvue/brand-4.png", alt: "Client testimonials" },
        { src: "/projects/thebrandvue/brand-5.png", alt: "Content management workflow" },
        { src: "/projects/thebrandvue/brand-6.png", alt: "Marketing pages" },
        { src: "/projects/thebrandvue/brand-7.png", alt: "The Brand Vue site UI" },
      ],
    },
    "panvika-learning-system": {
      cover: unsplash("photo-1501504901654-516559d290b5", 1200),
      gallery: [
        {
          src: unsplash("photo-1501504901654-516559d290b5", 1200),
          alt: "Online learning platform",
        },
        {
          src: unsplash("photo-1522202176988-66273c2fd55f", 1200),
          alt: "Course and instructor tools",
        },
        {
          src: unsplash("photo-1516321318423-f06f85e504b3", 1200),
          alt: "E-learning workspace",
        },
      ],
    },
  },
  bento: {
    catalog: unsplash("photo-1460925895917-afdab827c52f", 800),
  },
} as const;
