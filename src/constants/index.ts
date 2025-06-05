const navSections: ReadonlyArray<{ name: string; href: string }> = [
  { name: "About", href: "#about" },
  { name: "Selected Projects", href: "#selected-projects" },
  { name: "Contact", href: "#contact" },
];

const selectedProjects: ReadonlyArray<{
  title: string;
  description: string;
  imgSrc: string;
  technologies: string[];
  code: string;
  demo: string;
}> = [
  {
    title: "NoCap-Cut",
    description:
      "Browser-based video editor, the user is able to upload media and edit it in the browser.",
    imgSrc: "/nocapcut.png",
    technologies: ["Typescript", "React", "Tailwind"],
    code: "https://github.com/omarmohamed286/nocapcut",
    demo: "https://youtu.be/D2XNyKr7ph4",
  },
  {
    title: "Ramos",
    description:
      "Visually appealing website with kinda intensive and responsive animations.",
    imgSrc: "/ramos.png",
    technologies: ["Typescript", "React", "Tailwind", "Gsap"],
    code: "https://github.com/omarmohamed286/ramos-clone",
    demo: "https://youtu.be/kGaAWwFLVfI",
  },
];

const contacts: ReadonlyArray<{ name: string; href: string }> = [
  { name: "Email", href: "mailto:omarmohamedrandoms@gmail.com" },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/omar-mohamed-033009225/",
  },
  { name: "Github", href: "https://github.com/omarmohamed286" },
];

export { selectedProjects, contacts, navSections };
