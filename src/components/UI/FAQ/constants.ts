type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ["Frequently asked", "questions"];
export const mobileHeaderPhrase = ["Frequently", "asked", "questions"];
export const animate = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  open: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: "¿Cómo puedo contratar los servicios de soluciones tecnológicas?",
    answer:
      "Simplemente contáctanos para agendar una consulta. Evaluaremos las necesidades de tu negocio y te ofreceremos las soluciones que mejor se adapten.",
  },
  {
    question: "¿Cómo garantizas la seguridad de mis datos empresariales?",
    answer:
      "Implementamos las últimas medidas de seguridad, incluyendo cifrado de datos y acceso controlado, para asegurar que toda la información de tu negocio esté protegida.",
  },
  {
    question:
      "¿Qué tipo de soluciones tecnológicas puedo implementar en mi empresa?",
    answer:
      "Ofrecemos soluciones a medida que incluyen automatización de procesos, desarrollo de software personalizado, integración de sistemas, y mucho más.",
  },
  {
    question: "¿Qué beneficios trae la asesoría estratégica para mi negocio?",
    answer:
      "Nuestra asesoría estratégica te permite tomar decisiones informadas, optimizar recursos, y aprovechar las mejores oportunidades tecnológicas para el crecimiento de tu empresa.",
  },
];
