export const navLinks = [
    {
      id: 1,
      name: 'Experience',
      href: '#work',
    },
    {
      id: 2,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 3,
      name: 'Contact',
      href: '#contact',
    },
    {
      id: 4,
      name: 'About',
      href: '#about',
    }
  ];
  
  export type ProjectData = {
    title: string,
    desc: string,
    subdesc: string,
    href: string,
    src_code: string,
    texture: string,
    logo: string,
    logoStyle: {
      backgroundColor: string,
      background?: string,
      border: string,
      boxShadow: string,
    },
    spotlight: string,
    tags: Array<
        {
          id: number,
          name: string,
          path: string,
        }
      >
  }
  
  export const myProjects: Array<ProjectData> = [
    {
      title: '50 Three JS Projects',
      desc: '50 Three.js projects created to practice and challenge my 3D skills. Some are simple, others more complex — but each one is meaningful and beautifully crafted.',
      subdesc: 'With a focus on both practice and learning, every project was crafted not just with the result in mind, but also the process. Every tool used in this app brings meaningful balance: Astro provides the structure, creating a great environment for development and deployment; Three.js and Typescript form the foundation of all projects; and HTML/CSS are used to style and structure the web outside the canvas.',
      href: 'https://yeffej.github.io/50-three-js-projects',
      src_code: 'https://github.com/Yeffej/50-three-js-projects',
      texture: '/textures/project/50-three-js-projects.mp4',
      logo: '/assets/50-three-js-projects.webp',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.webp',
      tags: [
        {
          id: 1,
          name: 'Three.js',
          path: '/assets/threejs.svg',
        },
        {
          id: 2,
          name: 'Astro.js',
          path: '/assets/astro.svg',
        },
        {
          id: 3,
          name: 'Typescript',
          path: '/assets/typescript.webp',
        },
        {
          id: 4,
          name: 'HTML/CSS',
          path: 'assets/html-css.webp',
        },
      ],
    },
    {
      title: 'Dodger Box 3D',
      desc: 'Dodger Box 3D is a game where you have to dodge boxes that come at you. You score each time you dodge a box.',
      subdesc:
        'Built as 3D web game with Three.js, vanilla Javascript, HTML y CSS.',
      href: 'https://yeffej.github.io/dogger-box-3d/',
      src_code: 'https://github.com/Yeffej/dogger-box-3d',
      texture: '/textures/project/dogger-box-3d.mp4',
      logo: '/assets/dogger-box-3d-logo.svg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.webp',
      tags: [
        {
          id: 1,
          name: 'Three.js',
          path: '/assets/threejs.svg',
        },
        {
          id: 2,
          name: 'Javascript',
          path: 'assets/javascript.svg',
        },
        {
          id: 3,
          name: 'HTML/CSS',
          path: '/assets/html-css.webp',
        },
      ],
    },
    {
      title: 'ToDo Machine',
      desc: 'ToDo Machine is a taks managment app that allows users to create, organize, and track tasks.',
      subdesc:
        'With ToDo Machine, users can track their task saved in the browser with real-time sync data between browser tabs. Built with React.js',
      href: 'https://yeffej.github.io/todo-machine/',
      src_code: 'https://github.com/Yeffej/todo-machine',
      texture: '/textures/project/todo-machine.mp4',
      logo: '/assets/todo-machine-logo.webp',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.webp',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'HTML/CSS',
          path: 'assets/html-css.webp',
        },
        
      ],
    },
    {
      title: '50 web projects',
      desc: '50 web projects made to practice and challenge myself. The projects can be simple, but are meaningful.',
      subdesc: "Most of these projects were inspired by Brad Traversy's 50 Projects in 50 Days, which motivated me to take on this challenge. All the projects were built using only HTML, CSS, and vanilla JavaScript. I'll continue uploading more interesting projects, so be sure to keep an eye on it!",
      href: 'https://yeffej.github.io/50-web-projects-yeff/',
      src_code: 'https://github.com/Yeffej/50-web-projects-yeff',
      texture: '/textures/project/50-web-projects.mp4',
      logo: '/assets/50-web-projects.webp',
     logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.webp',
      tags: [
        {
          id: 1,
          name: 'HTML/CSS',
          path: 'assets/html-css.webp',
        },
        {
          id: 2,
          name: 'Javascript',
          path: '/assets/javascript.svg',
        },
      ],
    },
    {
      title: 'Inductor Project - Informative App',
      desc: 'Inductor Project is a university project which explain a electric topic interactively.',
      subdesc:
        'With a focus on the inductor electronic component, this app explains every property and uses of this component, by using vanilla javascript to create a Single Page App going step by step with fantasty animations.',
      href: 'https://yeffej.github.io/InductorProject',
      src_code: 'https://github.com/Yeffej/InductorProject',
      texture: '/textures/project/inductor-project.mp4',
      logo: '/assets/inductor-project.svg',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.webp',
      tags: [
        {
          id: 1,
          name: 'Javascript',
          path: '/assets/javascript.svg',
        },
        {
          id: 2,
          name: 'HTML/CSS',
          path: 'assets/html-css.webp',
        },
      ],
    },
  ];
  
  type SizesObj = {
    deskScale: number,
    deskPosition: [number, number, number],
    cubeScale: number,
    cubePosition: [number, number, number],
    reactLogoScale: number,
    reactLogoPosition: [number, number, number],
    ringsScale: number,
    ringsPosition: [number, number, number],
    targetScale: number,
    targetPosition: [number, number, number],
  }
  
  export const calculateSizes = (_isMobile: boolean, isTablet: boolean, isPC: boolean): SizesObj => {

    return {
      deskScale: isPC ? 0.09 : isTablet ? 0.08 : 0.065,
      deskPosition: isPC ? [0.5, -6, 0]: isTablet? [0.5, -5, 0]: [0.5, -5, 0],
      cubeScale:  isPC ? 0.85: isTablet ? 0.74: 0.74,
      cubePosition: isPC ? [11, -6, 0] : isTablet ? [9, -5, 0] : [6, -7, 0],
      reactLogoScale:  isPC ? 0.5: isTablet ? 0.38: 0.3,
      reactLogoPosition:  isPC ? [12, 6, 0]: isTablet ? [8, 4, 0]: [4, 4, 0],
      ringsScale: isPC? 0.80 : isTablet ? 0.60 : 0.60,
      ringsPosition: isPC ? [-12, 6, 0] : isTablet ? [-9.5, 5, 0] : [-4.5, 4, 0],
      targetScale: isPC? 1.2 : isTablet ? 1.1 : 1,
      targetPosition: isPC ? [-12, -7, 0] : isTablet ? [-10, -6, 0] : [-6, -8, 0],
    };
  };
  
  export type Work = {
    id: number,
    name: string,
    pos: string,
    duration: string,
    descrip: string,
    icon: string,
    animation: string,
  }

  export const workExperiences: Work[] = [
    {
      id: 1,
      name: 'Ilutec (Sinergia Software)',
      pos: 'Full Stack Web Developer',
      duration: '2021 - 2024',
      descrip: "During my time at Ilutec, I maintained, enhanced, and developed new features for the laboratory software called Sinergia, utilizing technologies such as HTML, CSS, JavaScript, and PHP. Additionally, I created scripts for automation, data processing, and integrating various software systems using Python and AutoIt. I also gained extensive experience in MySQL, crafting complex queries to optimize database performance and efficiency.",
      icon: '/assets/ilutec.webp',
      animation: 'salute',
    },
  ];

  export const sectionTitleResponsiveSizes =  { xs: "1.45em", sm: "1.75em", md: "2.1em" };

  export const contactEmail = "yefri@yefftech.com";

