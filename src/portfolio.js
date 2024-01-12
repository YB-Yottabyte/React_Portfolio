/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import './Experience.scss'; // Your component-specific styles
import { Scrollbars } from 'react-custom-scrollbars';
import 'aos/dist/aos.css'; // Import the AOS CSS file


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
  username: "Sai Rithwik Kukunuri",
  title: "Hi all, I'm Sai Rithwik",
  subTitle: emoji(
    "I'm Sai Rithwik, a high school senior passionate about Computer Science. My journey has been a mix of coding challenges and collaborative projects, fueling my love for innovation. Excited for the next chapter, I look forward to contributing to the ever-evolving world of Computer Science."
  ),
  displayGreeting: true // Set false to hide this section, defaults to true
  };

// Social Media Links

  const socialMediaLinks = {
  github: "https://github.com/YB-Yottabyte",
  linkedin: "https://www.linkedin.com/in/sai-rithwik-kukunuri-b5084527b/",
  gmail: "sairithwik0108@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
  };

// Skills Section

  const skillsSection = {
  title: "A Bit About Me",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ High school senior with a keen interest in technology and innovation."
    ),
    emoji("⚡ Enthusiastic about coding projects and exploring the world of computer science."),

    emoji("⚡ Aspiring to pursue a Ph.D., driven by a desire for continuous learning and contribution to the field of technology."),
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
  };









// Education Section

  const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona College Prep High School",
      logo: require("./assets/images/download.jpg"),
      subHeader: "High School Diploma",
      duration: "Octobar 2022 - Present",
      desc: "American Curriculum: Have Taken 9 AP Classes and 1 Honor Classes",
      descBullets: [
        "Activities & Soceities: National Honor Soceity, Science National Honor Soceity, Key Club, Photography Club",
      ]
    },
    {
      schoolName: "Sri Chaitanaya Public School",
      logo: require("./assets/images/Sri Chaitanaya Techno School.png"),
      subHeader: "High School Diploma",
      duration: "Apirl 2020 - Octobar 2022",
      desc: "Central Board of Secondary Education",
      descBullets: ["Completed CBSE Grade 9 and Grade 10"]
    }
  ]
  };

// Your top 3 proficient stacks/tech experience
  const techStack = 
{
  viewSkillBars : true,
   experience: [
    {
      "Stack": "CSS",
      "progressPercentage": "90%"
    },
    {
      "Stack": "HTML",
      "progressPercentage": "70%"
    },
    {
      "Stack": "React",
      "progressPercentage": "60%"
    }
  ],
   end: [
    {
      "Stack": "Python",
      "progressPercentage": "90%"
    },
    {
      "Stack": "Java",
      "progressPercentage": "70%"
    },
    {
      "Stack": "SQL",
      "progressPercentage": "60%"
    }
  ],
   displayCodersrank: true
  }

// Work experience section

  const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
  };


// Some big projects you have worked on

  const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
  display: true // Set false to hide this section, defaults to true
  };

// TESTIMONALS Section

  const blogSection = {
  title: "Don't just take my word for it...",
  subtitle:
    "Here are a few lines from people who I have worked with over in my career.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      description: "Working with Your Name was a game-changer for our project. Their dedication, creativity, and attention to detail surpassed our expectations. We highly recommend Your Name for anyone seeking top-notch expertise."
      ,
      title:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
  };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
  };


const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer


const MainContent = () => {
  return (
    <Scrollbars style={{ width: '100%', height: '100vh' }}>
      <div>
         <div className="greeting-section">
          </div>
      </div>
    </Scrollbars>
  );
};


export {
  illustration,
  greeting,
  MainContent,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable
};