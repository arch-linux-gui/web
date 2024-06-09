export const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Remote",
    skills: ["Next.js", "TailwindCSS", "JavaScript", "Git", "CSS"],
    description:
      "We are seeking a talented Frontend Developer to join our team. As a Frontend Developer, you will work closely with our design team to implement stunning user interfaces. This role is ideal for students and individuals passionate about frontend development, as we prioritize skills and potential over work experience.",
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
    title: "Community Manager",
    location: "Remote",
    skills: [
      "Communication",
      "Engagement",
      "Relation-building",
      "Collaboration",
    ],
    description:
      "We are seeking a talented Community Manager to nurture and grow our community of users, contributors, and enthusiasts. The ideal candidate is passionate about fostering engagement, building relationships, and driving community initiatives. This role requires a combination of strategic thinking, creative problem-solving, and excellent communication skills.",
    details:
      "You will develop and maintain server-side logic and databases. Requirements: 3+ years of experience with Node.js and Express.",
    responsibilities: [
      "Develop and execute community engagement strategies to increase participation and satisfaction.",
      "Monitor and moderate community forums, social media channels, and other communication platforms.",
      "Create and curate engaging content, including newsletters, blog posts, and social media updates.",
      "Analyze community feedback and data to identify trends and opportunities for improvement.",
    ],
    requirements: [
      "Proven experience in community management or a related role.",
      "Familiarity with online community platforms (e.g., Discord, Instagram, X (formerly twitter)).",
      "Strong understanding of community dynamics and engagement strategies.",
    ],
    niceToHave: [
      "Experience with content creation (e.g., writing, graphic design, video production).",
      "Passion for the subject matter or industry of the Arch Linux community.",
      "Experience with content creation (e.g., writing, graphic design, video production).",
    ],
  },
];

export const getJobById = (id) => jobs.find((job) => job.id === parseInt(id));
