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
    "🚀 I'm a 3rd Year CSE undergrad excelling as a Full Stack Developer, UI-UX Designer, and AI-ML Enthusiast. I bring experience in ReactJS, Flutter, Laravel, Figma, and more to create digital brilliance through code and design."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1OBCXdGRHLDdU9L7AaKrEtD8lI56lki2l/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
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
      "⚡ Creating Captivating Frontend Experiences for Web and Mobile Applications"
    ),
    emoji(
      "⚡ Gaining hands-on experience in developing dynamic user interfaces and refining backend functionalities"
    ),
    emoji(
      "⚡ Steadily advancing towards mastering the intricate art of full stack development and UI-UX design"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
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
      skillName: "java", // New skill: Java
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "springboot",
      svgPath: require("./assets/images/spring-boot.svg"),
    },
    {
      skillName: "php", // New skill: PHP
      fontAwesomeClassname: "fab fa-php",
    },
    {
      skillName: "laravel", // New skill: Laravel
      fontAwesomeClassname: "fab fa-laravel",
    },
    {
      skillName: "figma", // New skill: Figma
      fontAwesomeClassname: "fab fa-figma",
    },
    {
      skillName: "blender",
      svgPath: require("./assets/images/blender.svg"),
    },
    {
      skillName: "unreal",
      svgPath: require("./assets/images/unreal-engine.svg"),
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
      subHeader: "Non-Degree Student - Computer Science and Engineering",
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
        "Serving as a Student Placement Coordinator",
        "Actively participating as a member of IIC-JKLU (Institution's Innovation Council - JKLU)",
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
  viewSkillBars: true, //Set it to true to show Proficiency Section
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
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Software Developer (Intern)",
      company: "Dexpert Systems Pvt. Ltd.",
      companylogo: require("./assets/images/Dexpert.png"),
      date: "June 2023 – July 2023",
      desc: "Engaged in diverse software projects, gaining hands-on experience in technologies like Java Spring Boot, ReactJS, Zoho CRM, Java JSP, and PHP Laravel.",
      descBullets: [
        "Contributed actively to real-time projects.",
        "Interacted directly with clients.",
        "Collaborated effectively within the team.",
        "Acquired valuable insights into the software development lifecycle.",
      ],
    },
    {
      role: "Research Intern",
      company: "Indian Institute of Technology Jammu",
      companylogo: require("./assets/images/IITJammu.png"),
      date: "December 2023 – Jan 2024",
      desc: "Engaged in a research project under the guidance of Dr. Subhasis Bhattacharjee, Assistant Professor, Deptt. of Computer Sci. & Engg., IIT Jammu.",
      descBullets: [
        "Project title: Optimizing Stress Prediction with Wearable Sensor Data: A Comprehensive Approach Through Advanced Machine Learning Techniques",
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

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "EXPLORE MY TECH PROJECTS",
  projects: [
    {
      image: require("./assets/images/portfolio.png"),
      projectName: "Personal Portfolio",
      projectDesc:
        "A personal portfolio website built using ReactJS with Hashnode API and EmailJS integration.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://anaysinhal.me/",
        },
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
    {
      image: require("./assets/images/waterdisp.png"),
      projectName: "Automatic Water Dispenser",
      projectDesc:
        "An Automatic Water Dispenser implemented using the Microprocessor MSP430 Lunchbox.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/anayy09/College_Projects/tree/main/Automatic%20Water%20%20Dispenser",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
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
  email_address: "anay.sinhal@aol.com",
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
