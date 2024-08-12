export const jobs = [
  {
    id: 1,
    title: "Software Engineer - Frontend",
    location: "Remote",
    skills: ["Next.js", "TailwindCSS", "JavaScript", "Git", "CSS"],
    description:
      "We are seeking a Frontend Engineer to join our team. As a Frontend Engineer, you will work closely with our design team to implement user interfaces. This role is ideal for students and individuals passionate about frontend development.",
    details:
      "You will be responsible for designing and building modern web applications. Requirements: 2+ years of experience with React and TailwindCSS.",
    responsibilities: [
      "Develop and implement user interface components using Next.js and Tailwind CSS",
      "Write well-documented, clean JavaScript code",
      "Optimize applications for maximum speed and scalability",
    ],
    requirements: [
      "Pursuing or recently completed a degree in Computer Science, Engineering, or related field",
      "Demonstrated passion for frontend development",
      "Strong problem-solving skills",
      "Ability to learn new technologies quickly",
    ],
    niceToHave: [
      "Experience with JavaScript and Next.js.",
      "Experience with version control systems such as Git",
      "Understanding of RESTful APIs.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer - Documentation",
    location: "Remote",
    skills: ["Markdown", "JavaScript", "Git"],
    description:
      "We are seeking a software engineer to join our documentation team. You will work closely with our core team to write technical documentation for ALG. This role is ideal for students and individuals passionate about frontend development, and technical writing",
    details:
      "Our documentation is written using NextJS Fuma Docs. You need to know the basic structure of the same.",
    responsibilities: [
      "Understand and write technical documentation with respect to ALG's core codebase, website and other tools",
      "Explain complex concepts in simple and easy to understand language",
      "Ability to look for solutions online, in forums and websites like stackoverflow. Must be able to leverage AI tools LLMs to ease their workflow",
    ],
    requirements: [
      "Pursuing or recently completed a degree in Computer Science, Engineering, or related field",
      "Demonstrated passion for writing technical documentation",
      "Ability to learn new technologies quickly",
    ],
    niceToHave: [
      "Experience with Markdown",
      "Experience with version control systems such as Git",
      "Understanding of Linux System Internals",
    ],
  },
  {
    id: 3,
    title: "Software Engineer - Systems Engineering",
    location: "Remote",
    skills: ["C++", "Go-Lang", "Git", "Python", "Linux",  "Shell Scripting"],
    description:
      "We are seeking a software engineer to join our core team. You will be part of our core team to core features for ALG. This role is ideal for individuals having experience in systems programming, ideally in C++, Go-Lang or simillar languages & wanting to contribute to an open source project.",
    details:
      "Our codebase is a mix of Qt/C++, Go-lang, and QML. We do lots of shell scripting too!",
    responsibilities: [
      "Discuss possible features with core team and implement it in code",
      "Engage with core team and suggest possible features & solutions",
      "Ability to look for solutions online, in forums and websites like stackoverflow. Must be able to leverage AI tools LLMs to ease their workflow",
    ],
    requirements: [
      "Pursuing or completed a degree in Computer Science, Computing, Engineering, or related field",
      "Demonstrated passion for open source software development, Linux and Systems programming",
      "Ability to learn new technologies quickly",
    ],
    niceToHave: [
      "Experience with Python",
      "Experience with version control systems such as Git",
      "Understanding of Linux System Internals",
    ],
  },
  {
    id: 4,
    title: "Community Manager",
    location: "Remote",
    skills: [
      "Communication",
      "Engagement",
      "Relation-building",
      "Collaboration",
    ],
    description:
      "We are looking for a Community Manager to nurture and grow our community of users, contributors, and enthusiasts. The ideal candidate is passionate about fostering engagement, building relationships, and driving community initiatives. This role requires a combination of strategic thinking, creative problem-solving, and excellent communication skills.",
    details:
      "Engage with the community on ALG's social media and communication channels such as Discord, Telegram, and Instagram",
    responsibilities: [
      "Develop and execute community engagement strategies to increase participation and satisfaction.",
      "Monitor and moderate community forums, social media channels, and other communication platforms.",
      "Create and curate engaging content, including newsletters, blog posts, and social media updates.",
      "Analyze community feedback and data to identify trends and opportunities for improvement.",
    ],
    requirements: [
      "Proven experience in community management or a related role.",
      "Familiarity with online community platforms (e.g., Discord, Telegram, Instagram, X (formerly twitter)).",
      "Strong understanding of community dynamics and engagement strategies.",
    ],
    niceToHave: [
      "Experience with content creation (e.g., writing, graphic design, video production).",
      "Passion for the subject matter or the Arch Linux community.",
      "Eager to learn technical concepts on the fly as you will be engaging with a technical community",
    ],
  },
];

export const getJobById = (id) => jobs.find((job) => job.id === parseInt(id));

export function getJobs() {
  return jobs;
}
