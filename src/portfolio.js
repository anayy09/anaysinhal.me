/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Anay Sinhal",
  title: "Hi all, I'm Anay",
  subTitle: emoji(
    "🚀 I'm a Computer Science undergrad excelling as a Full Stack Developer and AI/ML Enthusiast. Experienced in ReactJS, Django, TensorFlow, Keras, and more, I create digital brilliance through code, design, and machine learning."
  ),
  resumeLink: "/resume",
  displayGreeting: true,
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anayy09",
  linkedin: "https://www.linkedin.com/in/anaysinhal/",
  gmail: "anay.sinhal@aol.com",
  instagram: "https://www.instagram.com/_anay09_/",
  twitter: "https://twitter.com/_anaysinhal_",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "EXPLORING THE BOUNDLESS REALMS OF TECHNOLOGY STACKS",
  skills: [
    emoji(
      "⚡ Developing dynamic user interfaces and refining backend functionalities"
    ),
    emoji(
      "⚡ Advancing towards mastering full stack development and UI/UX design"
    ),
    emoji(
      "⚡ Specializing in AI/ML solutions with a focus on innovative problem-solving"
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "zoho",
      svgPath: require("./assets/images/zoho.svg"),
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php",
    },
  ],

  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Technology Kanpur",
      logo: require("./assets/images/IITK.png"),
      subHeader: "Semester Exchange Student - Computer Science and Engineering",
      duration: "January 2024 - May 2024",
      desc: "I was selected to spend a semester at the esteemed IITK.",
      descBullets: [
        "Studied Computer Science courses such as Computer Networks and Big Data Visual Analytics.",
        "Explored additional subjects including Brand Management and Strategic Marketing.",
      ],
    },
    {
      schoolName: "Indian Institute of Technology Gandhinagar",
      logo: require("./assets/images/IITGN.png"),
      subHeader: "Visiting Student - Computer Science",
      duration: "August 2022 - December 2022",
      desc: "I was selected to spend a semester at the esteemed IITGN.",
      descBullets: [
        "Studied Computer Science courses such as DSA and Theory of Computation.",
        "Explored additional subjects including Leadership, Graphic Design, and Philosophy.",
      ],
    },
    {
      schoolName: "JK Lakshmipat University, Jaipur",
      logo: require("./assets/images/JKLU.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2021 - Present",
      desc: "Currently in the third year, I am passionately pursuing my education in the field of Computer Science.",
      descBullets: [
        "In the Honor's List for Meritorious Academic Performance [8.74/10 CGPA]",
        "Served as a Student Placement Coordinator",
        "Member of IIC-JKLU (Institution's Innovation Council - JKLU)",
      ],
    },
    {
      schoolName: "Vidya Niketan Hr. Sec. School, Bhopal",
      logo: require("./assets/images/VNS.png"),
      subHeader: "Class XII",
      duration: "June 2020 - May 2021",
    },
    {
      schoolName: "Sagar Public School, Bhopal",
      logo: require("./assets/images/SPS.png"),
      subHeader: "Class X",
      duration: "July 2015 - May 2020",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
    {
      Stack: "UI-UX Design",
      progressPercentage: "80%",
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "70%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "SDE Intern",
      company: "GeeksforGeeks, Noida",
      companylogo: require("./assets/images/geeks.png"),
      date: "May 2024 – Present",
      desc: "Gained hands-on experience in PHP, Vanilla JS, ReactJS, NextJS, and Django.",
      descBullets: [
        "Worked on feature improvements.",
        "Handled internal arrangements.",
        "Collaborated within the team.",
        // "Acquired insights into web development processes.",
      ],
    },
    {
      role: "Research Intern (ML)",
      company: "SVNIT Surat",
      companylogo: require("./assets/images/SVNIT.png"),
      date: "May 2024 – June 2024",
      desc: "Worked on a research project under Dr. Bhavesh N. Gohil, Assistant Professor, Dept. of CSE, SVNIT Surat.",
      descBullets: [
        "Project: Depression Detection using AI and Machine Learning Techniques",
      ],
    },
    {
      role: "Research Intern (ML)",
      company: "IIT Jammu",
      companylogo: require("./assets/images/IITJammu.png"),
      date: "December 2023 – Jan 2024",
      desc: "Worked on a research project under Dr. Subhasis Bhattacharjee, Assistant Professor, Dept. of CSE, IIT Jammu.",
      descBullets: [
        "Project: Optimizing Stress Prediction with Wearable Sensor Data using Advanced ML Techniques",
      ],
    },
    {
      role: "SDE Intern",
      company: "Dexpert Systems, Pune",
      companylogo: require("./assets/images/Dexpert.png"),
      date: "June 2023 – July 2023",
      desc: "Gained hands-on experience in Java Spring Boot, ReactJS, Zoho CRM, Java JSP, and PHP Laravel.",
      descBullets: [
        "Contributed to real-time projects.",
        "Interacted with clients.",
        "Collaborated within the team.",
        "Acquired insights into the software development lifecycle.",
      ],
    },
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ],
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "EXPLORE MY TECH PROJECTS",
  projects: [
    {
      image: require("./assets/images/pollution.png"),
      projectName: "Visual Analytics of Air Pollutants in India",
      projectDesc:
        "Interactive Air Quality Analysis Dashboard with Temporal Analysis. Made using D3.js.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/anayy09/Visual-Analytics-Of-Air-Pollutants-in-India",
        },
      ],
    },
    {
      image: require("./assets/images/stress.png"),
      projectName: "Stress Detection using Wearable Sensors",
      projectDesc:
        "Analyzed physiological data with ML algorithms (RF, XGB, MLP, Stacking), enhancing accuracy.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/anayy09/Stress-Prediction-using-Wearable-Sensors",
        },
      ],
    },
    {
      image: require("./assets/images/iot.png"),
      projectName: "IoT-based Health Monitoring System",
      projectDesc:
        "Engineered an IoT solution with NodeMCU ESP8266 and MAX30100 for health monitoring.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/anayy09/IoT-Based-Health-Monitoring-System",
        },
      ],
    },
    {
      image: require("./assets/images/patch.png"),
      projectName: "Substance Use Disorder Treatment",
      projectDesc:
        "Developed an solution for monitoring & treating SUDs, with a wearable patch & mobile app.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/anayy09/Substance-Use-Disorder-Treatment",
        },
      ],
    },
    {
      image: require("./assets/images/portfolio.png"),
      projectName: "Personal Portfolio",
      projectDesc:
        "A personal portfolio website built using ReactJS with Hashnode API and EmailJS integration.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/anayy09/anaysinhal.me",
        },
      ],
    },
    {
      image: require("./assets/images/solarsystem.png"),
      projectName: "Solar System in VR",
      projectDesc:
        "A Solar System simulator in VR created using Unreal Engine 5 and Blender.",
      footerLink: [
        {
          name: "Demo",
          url: "https://youtu.be/qhl5tfTJqgU",
        },
      ],
    },
    {
      image: require("./assets/images/hostelmanage.png"),
      projectName: "Hostel Management",
      projectDesc:
        "A Hostel Management System developed using Java NetBeans and MySQL.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/anayy09/College_Projects/tree/main/Hostel%20Management%20System",
        },
      ],
    },
    // {
    //   image: require("./assets/images/waterdisp.png"),
    //   projectName: "Automatic Water Dispenser",
    //   projectDesc:
    //     "An Automatic Water Dispenser implemented using the Microprocessor MSP430 Lunchbox.",
    //   footerLink: [
    //     {
    //       name: "GitHub",
    //       url: "https://github.com/anayy09/College_Projects/tree/main/Automatic%20Water%20%20Dispenser",
    //     },
    //   ],
    // },
  ],
  display: true, // Set false to hide this section, defaults to true
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: false, // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  subtitle: " Some Certifications that I have done !",

  achievementsCards: [
    {
      title: "Privacy and Security in Online Social Media",
      subtitle: "NPTEL - IIIT Hyderabad",
      image: require("./assets/images/nptel.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1MB671l0pUN6diF1yvwpD5Lot00mKHn_G/view?usp=drivesdk",
        },
      ],
    },
    {
      title: "Master C Programming with Data Structures",
      subtitle: "GeeksForGeeks",
      image: require("./assets/images/gfg.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://media.geeksforgeeks.org/courses/certificates/bf1bc6cb5a008775c8b6eb73d10f0008.pdf",
        },
      ],
    },
    {
      title: "AWS Cloud Technical Essentials",
      subtitle: "Amazon Web Services",
      image: require("./assets/images/aws.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/P4BUJUM2RYW8",
        },
      ],
    },
    {
      title: "Foundations of User Experience (UX) Design",
      subtitle: "Google",
      image: require("./assets/images/google.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/52FMF94HS9HK",
        },
      ],
    },
    {
      title: "Linear Regression with NumPy and Python",
      subtitle: "Coursera",
      image: require("./assets/images/coursera1.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/UYLH9EEE75YX",
        },
      ],
    },
    {
      title: "Modern Web Development",
      subtitle: "Sheriyans Coding School",
      image: require("./assets/images/sheriyans.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1iCZ5iEDncL1XIjYUlYW1UzCgznnqmdaI/view?usp=share_link",
        },
      ],
    },
    {
      title: "What is Metaverse",
      subtitle: "Meta",
      image: require("./assets/images/meta.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/2AAKFTPVWGUN",
        },
      ],
    },
    {
      title: "C for Everyone",
      subtitle: "University of California, Santa Cruz",
      image: require("./assets/images/ucsc.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/DTPB6YFVET8Y",
        },
      ],
    },
    // {
    //   title: "Virtual Reality Specialization",
    //   subtitle: "Coursera",
    //   image: require("./assets/images/coursera1.png"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.coursera.org/account/accomplishments/specialization/certificate/T88EKHWMMHDF",
    //     },
    //   ],
    // },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "My Blogs",
  subtitle: "I enjoy writing and sharing what I've learned with others.",
  displayMediumBlogs: "true",
  blogs: [],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7987594952",
  email_address: "anaysinhal.edu@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "_anaysinhal_", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
};
