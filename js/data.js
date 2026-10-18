/*
  Content for the whole site. Edit text here; markup stays untouched.

  - A string starting with "TODO" is shown highlighted until you replace it.
  - A link set to null is simply not shown (no empty buttons).
  - To connect the contact form, set formEndpoint (Formspree, or a Cloudflare Worker that accepts JSON POST).
    Until then the form opens your email app with the message filled in.
*/

var site = {
  name: "Manohar L U",
  role: "Java Full Stack & AI Developer",
  location: "Bengaluru, Karnataka, India",
  tagline: "Java backends, React frontends, and AI features on top.",
  status: "Graduated in 2026. Looking for my first full-time role.",
  email: "manoharlu731@gmail.com",
  phone: "+91 9380361110",
  phoneHref: "+919380361110",
  github: "https://github.com/Manohar-L-U",
  githubLabel: "Manohar-L-U",
  linkedin: "https://www.linkedin.com/in/manohar-l-u-727b88268",
  linkedinLabel: "manohar-l-u-727b88268",
  resumePdf: "assets/resume.pdf",
  photo: "assets/profile-photo.webp",
  photoAlt: "Portrait of Manohar L U",
  formEndpoint: "",
  updated: "3 October 2026",
};

var about = {
  paragraphs: [
    "I'm a Java full stack developer. Most of my work is on the backend, with Spring Boot services, Hibernate, REST APIs and MySQL. I build React frontends when a project needs one.",
    "Two of my projects are machine learning in Python, so I have also made models run inside an application. For AI features I use Generative AI and LangChain. I have worked in Agile sprints and I try to write code other people can maintain.",
  ],
  facts: [
    { label: "Now", text: "Looking for a first full-time role as a Java Full Stack / AI Developer." },
    { label: "Learning", text: "Playwright (beginner), system design and microservices." },
    { label: "Outside code", text: "Carnatic classical vocals and mridangam. Silver medal at the VTU state-level group singing competition." },
  ],
};

var experience = [
  {
    role: "Java Full Stack with AI",
    company: "JSpiders",
    location: "Rajajinagar, Bengaluru",
    period: "Jan 2026 – Jul 2026",
    type: "Internship / training programme",
    summary: "Six months in a four-person Agile team, building and improving full-stack web apps.",
    points: [
      "Built Spring MVC APIs for CRUD operations on a MySQL database.",
      "Moved the data layer from raw JDBC to Hibernate with Lombok, which cut hand-written SQL and boilerplate.",
      "Took part in sprint planning, implementation, testing and code reviews across 5 sprints.",
      "Diagnosed and fixed up to 10 middleware and application issues a day, building my debugging and root-cause analysis.",
    ],
    tech: ["Java", "Spring MVC", "Hibernate", "Lombok", "MySQL", "JavaScript", "IntelliJ IDEA", "Jenkins", "GitHub Actions"],
  },
];

var projects = [
  {
    title: "Emotion-Based Music Recommendation System",
    period: "Jul 2024 – Sep 2024",
    summary: "A web app that reads your facial expression through the webcam and recommends songs to match your mood.",
    tech: ["Python", "Flask", "OpenCV", "CNN", "FER-2013"],
    featured: true,
    image: null,
    liveUrl: null,
    githubUrl: null,
    steps: ["Webcam frame", "OpenCV face detection", "CNN emotion classifier", "Flask API", "Song recommendations"],
    details: {
      work: [
        "I owned the whole application end to end: the UI, webcam-based emotion detection, FER-2013 dataset preprocessing, CNN training and evaluation, the Flask backend API, and the link between the emotion module and the song recommender.",
        "OpenCV detects the face. A CNN classifies the expression as happy, sad, angry, fear, surprise, disgust or neutral, and the backend returns a matching collection of songs.",
        "I tested the full flow before finishing. The model reached 92% accuracy in evaluation.",
      ],
      evaluation: "TODO: was the 92% measured on a test set or a validation set?",
      leadership: "TODO: solo or team? How I planned the work, split it into modules and made the key technical decisions.",
      problems: "TODO: two or three real problems, each with the situation, what I tried, what I decided and why, and the outcome.",
      dataSource: "",
      results: "",
    },
  },
  {
    title: "GST Fraud Detection in Billing",
    period: "Mar 2025 – May 2025",
    summary: "An AI/ML system that flags fake invoices, invalid GST numbers and billing irregularities across industries.",
    tech: ["Python", "XGBoost", "Random Forest", "Isolation Forest", "One-Class SVM"],
    featured: false,
    image: null,
    liveUrl: null,
    githubUrl: null,
    steps: ["Invoices and transactions", "Preprocessing and features", "Anomaly and supervised models", "Alert for manual verification"],
    details: {
      work: [
        "I designed the fraud-detection workflow, preprocessed the transaction and invoice data, and worked out which fraud indicators were worth modelling.",
        "I built the models and put them in a pipeline that raises alerts for transactions needing manual verification.",
        "It targets duplicate or fabricated invoices, services billed but never performed, wrong GST details and billed-versus-actual mismatches. In a hospital it checks the final bill against the prescription. In a hotel it compares bookings, services, invoices and payments.",
      ],
      evaluation: "",
      leadership: "TODO: solo or team? How I decided the scope, the fraud scenarios and the model choices.",
      problems: "TODO: two or three real problems, such as the lack of labelled fraud data, class imbalance or false alerts.",
      dataSource: "TODO: real, synthetic or sample data? State it honestly here.",
      results: "",
    },
  },
  {
    title: "Quiz App with Difficulty Adaptation",
    period: "Sep 2025 – Nov 2025",
    summary: "An adaptive quiz that raises or lowers question difficulty based on how the user is performing.",
    tech: ["React.js", "JavaScript", "Spring Boot", "REST APIs", "MySQL"],
    featured: false,
    image: null,
    liveUrl: null,
    githubUrl: null,
    steps: ["Questions grouped by level", "Difficulty rule", "React UI", "Spring Boot REST API", "MySQL"],
    details: {
      work: [
        "I designed and built the whole app: the quiz flow, the difficulty-adaptation logic, the question database, the responsive UI and the production build.",
        "The app groups questions by level, checks each answer, adjusts the next question's difficulty, gives immediate feedback and tracks score and progress.",
        "I tested question selection, scoring and navigation, and handled edge cases in how the user moves through the quiz.",
      ],
      evaluation: "",
      leadership: "TODO: solo or team? How I planned the build and split frontend, backend and database work.",
      problems: "TODO: two or three real problems, such as what happens after a wrong streak, React state bugs, or API and database errors.",
      dataSource: "",
      results: "",
    },
  },
];

var skillGroups = [
  { name: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3"] },
  { name: "Backend", items: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "Servlets", "REST APIs", "Maven"] },
  { name: "Database", items: ["MySQL", "SQL", "RDBMS"] },
  { name: "Cloud / DevOps", items: ["Jenkins", "GitHub Actions", "CI/CD pipelines"] },
  { name: "Tools", items: ["Git", "GitHub", "IntelliJ IDEA"] },
  { name: "AI / ML", items: ["Python", "Generative AI", "LLMs", "Prompt Engineering", "LangChain", "RAG", "AI Agents", "CNNs", "OpenCV", "XGBoost", "Anomaly detection"] },
  { name: "Core CS", items: ["OOP", "Data Structures", "Agile methodology"] },
];

var workingKnowledge = ["Microservices architecture", "System design", "Playwright (beginner)"];

var education = [
  {
    degree: "B.E. in Computer Science and Design",
    institution: "Atria Institute of Technology",
    period: "2022 – 2026",
    result: "CGPA 7.31 / 10",
  },
  {
    degree: "Pre-University (PUC)",
    institution: "SFS PU College",
    result: "79.6%",
  },
];

var certifications = [
  {
    title: "Claude Code Course Completion Certificate",
    url: null,
  },
  {
    title: "Microsoft Learn – AI Skills Challenge",
    url: null,
  },
];

var achievements = [
  {
    title: "Silver Medalist",
    detail: "VTU State-Level Indian Group Singing Competition, Carnatic Classical Group Performance",
  },
];
