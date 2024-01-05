/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "@jatinkrmalik",
  title: "Hello! I'm Jatin",
  subTitle: emoji(
    "A Principal Software Engineer interested in designing and crafting efficient modern software, and learning new tools and technologies on the way!"
  ),
  resumeLink:"" , // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  twitter: "https://twitter.com/jatinkrmalik",
  medium: "https://medium.com/@jatinkrmalik",
  github: "https://github.com/jatinkrmalik",
  linkedin: "https://www.linkedin.com/in/jatinkrmalik/",
  gmail: "jatinkrmalik@gmail.com",
  instagram: "https://instagram.com/jatinkrmalik",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PRINCIPAL SOFTWARE ENGINEER",
  skills: [
    emoji(
      "⚡ Proficient at designing and developing scalable systems."
    ),
    emoji("⚡ Specializes in thinking outside the box to find unique optimized solutions to difficult engineering problems."),
    emoji("⚡ It is not the actual work but the challenging creative process that goes behind it which inspires me to think out of the box to do something new, something satisfactory!"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "c/c++",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "ruby",
      fontAwesomeClassname: "far fa-gem"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "fa-brands fa-golang"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fab fa-k"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "cloud",
      fontAwesomeClassname: "fa-solid fa-cloud"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "you tell me?",
      fontAwesomeClassname: "fas fa-code"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Coding",
      progressPercentage: "90%"
    },
    {
      Stack: "System Design", 
      progressPercentage: "90%" 
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud",
      progressPercentage: "75%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Science",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Principal Software Engineer",
      company: "Atlassian",
      companylogo: require("./assets/images/atlassianLogo.webp"),
      date: "Sep 2022 – Present",
      desc: "I am working with Enterprise Trust team to help build a next-generation platform that is envisaged to be the backbone of all enterprise data portability & data residency usecases.",
      descBullets: [
        "A key contributor in unlocking Data Portability and Data Residency usecases for Cloud products"
      ]
    },
    {
      role: "Software Architect",
      company: "Uber",
      companylogo: require("./assets/images/uberLogo.png"),
      date: "May 2019 – Aug 2022",
      desc: "I was responsible for building, scaling, and architecture of our customer platform, the software stack used by Uber’s customers, employees, and partners that helps us effectively address these defects both proactively or in response to an issue raised by a customer ultimately resulting in customer delight!",
    },
    {
      role: "SDE III",
      company: "Synaptic",
      companylogo: require("./assets/images/synapticLogo.jpeg"),
      date: "Jun 2018 – May 2019",
      desc: "I worked in the Core Platform Development team. Synaptic is a Vy Capital backed early stage Fintech startup, which is an alternative data platform that helps financial firms and investors get actionable insights from vast amounts of data."
    },
    {
      role: "SDE II",
      company: "Shuttl",
      companylogo: require("./assets/images/shuttlLogo.png"),
      date: "Jun 2018 – May 2019",
      desc: "I worked in Innovation Team (R&D). Being in a product based startup, I got to work on the bleeding edge of the Shuttl spectrum. It was a full stack developer role which requires developing and designing each and every bit including hardware, front end, back end, design, databases, project management."
    }, 
    {
      role: "SDE I",
      company: "Adobe",
      companylogo: require("./assets/images/adobeLogo.png"),
      date: "Jun 2014 – May 2017",
      desc: "I worked in Adobe Experience Manager team of Marketing Cloud as a Software Developer. My work involved developing new features and enhancing existing features in AEM (full-stack)  which were a part of product roadmap and requirements of partners and vendors."
    }

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/uber_config.png"),
      projectName: "uConfigurator",
      projectDesc: "The core configurator platform service for the CO stack.",
      footerLink: [
        {
          name: "Read more",
          url: "https://www.uber.com/en-IN/blog/how-we-unified-configuration-distribution-across-systems-at-uber/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/uber_zorro.png"),
      projectName: "Zorro",
      projectDesc: "Automated PII masking data framework to protect customers' data and be GDPR compliant in our tickets.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/shuttl_bus.png"),
      projectName: "Shuttl S.A.F.E.",
      projectDesc: "Auto onboarding authentication via face detection and recognition, ShuttlTV, Always on Alcohol detector with ignition cut off and all of this powered by a solo Raspberry Pi 3.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://web.archive.org/web/20230926113433/https://ficci.in/public/storage/events/23514/ISP/FICCI-Road-Safety-Awards-2017-Citation.pdf"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  display: true // Set false to hide this section, defaults to true
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
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "jatinkrmalik@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "jatinkrmalik", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  isHireable
};
