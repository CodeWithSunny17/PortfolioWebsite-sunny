const { REACT_APP_RESUME_DRIVE_ID } = process.env;
export const resume = {
  name: 'Sunny Kumar',
  email: 'sunny274.kr@gmail.com',
  Phone: '+916283654856',
  address: 'Noida, UP, India',
  resumeDriveLinkCode:
    REACT_APP_RESUME_DRIVE_ID ?? '1vRTItmiLjW8Y_0B7vi87pDCgxWP530XF',
  dob: {
    month: 'December',
    year: '1997',
    date: 17,
  },
  links: {
    github: 'https://github.com/CodeWithSunny17',
    facebook: 'https://www.facebook.com',
    linkedIn: 'https://www.linkedin.com/in/sunny-kumar-b1976b146',
    instagram: 'https://www.instagram.com/maisunnyhu',
  },
  headline: 'A Frontend Web Developer',
  jobName: 'React Developer',
  bio: 'Experienced Frontend Developer skilled in crafting captivating web experiences with HTML, CSS, JavaScript, Typescript, React JS, Node.js, Express.js. Seamlessly blending frontend design for diverse web solutions.',
  //description must be less than or equal to 100 characters
  education: [
    {
      year: '2016 - 2020',
      name: "Bachelor's Degree",
      affiliation: 'Lovely Professional University',
      description:
        'Transforming Education Transforming India',
    },
    {
      year: '2023 - 2023',
      name: 'Web Development Bootcamp',
      affiliation: 'Udemy',
      description:
        'Comprehensive training fostering strong coding abilities and practical web development skills.',
    },
    // {
    //   year: '2023 - 2023',
    //   name: 'Pesto Plus Fellowship',
    //   affiliation: 'Pesto Tech',
    //   description:
    //     '8-month program shapes devs into global engineers, prioritizes skill, boosts income.',
    // },
  ],
  //description must be less than or equal to 100 characters
  experience: [
    {
      year: '2022 - Present',
      name: 'Infosys Limited',
      affiliation: 'IT Company',
      description: '',
    },
  ],
  skills: {
    primary: [
      {
        name: 'ReactJS',
        score: 95,
      },
      {
        name: 'Javascript',
        score: 90,
      },
      {
        name: 'HTML5 & CSS3',
        score: 90,
      },
      {
        name: 'Redux',
        score: 90,
      },
      {
        name: 'SQL & PostgreSQL',
        score: 85,
      },
    ],
    secondary: [
      {
        name: 'tailwind CSS',
        score: 90,
      },
      {
        name: 'Node & Express JS',
        score: 60,
      },
      {
        name: 'MongoDB',
        score: 60,
      },
      {
        name: 'PowerShell & Bicep Scripts',
        score: 70,
      },
    ],
  },
  platforms: [
    'Visual Studio',
    'Visual Studio Code',
    'GIT',
    'GitHub',
    'JiRa',
  ],
  projects: [
    {
      name: 'Event Manager App',
      link: 'https://managemyevent.netlify.app',
    },
    {
      name: 'ViteTube',
      link: 'https://vitetube.netlify.app',
    },
    {
      name: 'Notify App',
      link: 'https://noteifie.netlify.app',
    },
    {
      name: 'Link Shortner',
      link: 'https://53299h.csb.app/',
    },
  ],
  //hireMeHeader example: "I'm <span>open</span> to work!", use span for focusing texts
  hireMeHeader: "I'm <span>Available</span> for freelancing",
};
