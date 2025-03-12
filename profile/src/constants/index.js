import { school, college} from "../assets/images"

import{
    c,
    java,
    css,
    login,
    profile,
    calculator,
    quiz,
    github,
    html,
    javascript,
    mongodb,
    nodejs,
    react,
    redux,
    tailwindcss,
    linkedin,
    arrow,
    contact,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: c,
        name: "C",
        type: "Program"
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Program"
    },
    {
        imageUrl: html,
        name : "HTML",
        type: "Frontend",
    },
    {
         imageUrl: css,
         name: "CSS",
         type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JAVASCRIPT",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "TAILWINDCSS",
        type: "Frontend"
    },
    {
        imageUrl: mongodb,
        name: "MONGODB",
        type: "Database",
    },
    {
        imageUrl: react,
        name: "REACT",
        type: "Frontened",
    },
    {
        imageUrl: github,
        name: "GITHUB",
        type: "Version Control"
    },
    
];

export const education = [
    {
        title: "SSLC",
        school_name: "URC Palaniammal Matric HR.Sec School",
        location: "Erode, Thidal",
        icon: school,
        iconBg: "LightPink",
        percentage: "73.6%",
        data: "2019 - 2020"
    },
    {
        title: "HSC",
        school_name: "URC Palaniammal Matric HR.Sec School",
        location: "Erode, Thidal",
        group: "Computer Science with Maths",
        icon: school,
        iconBg: "skyblue",
        percentage: "77%",
        data: "2021 - 2022" 
    },
    {
        title: "GRADUATION",
        school_name: "KSR College of Engineering",
        location: " KSR Kalvi Nagar, Tiruchengode ",
        group:"B.E. Computer Science and Engineering",
        icon: college,
        iconBg: "Orange",
        percentage: "8.06 CGPA",
        data: "2022 - Till Now"
    }
];

export const socialLinks = [
    {
        name: "Contact",
        iconUrl: contact,
        link: "/contact",
    },
    {
        name: "GitHub",
        iconUrl: github,
        link: "https://github.com/AarkeshM",
    },
    {
        name: "LinkedIn",
        iconUrl: linkedin,
        link: "https://www.linkedin.com/in/aarkesh-m-a8230827b/"
    }
];

export const projects = [
    {
        iconUrl: login,
        theme: "btn-back-red",
        name: "Login page",
        description: 
        ' Developed a structured and responsive login page model with a focus on clean design and seamless user experience. Implemented form validation and responsive layout to ensure compatibility across devices.',
        link: "https://aarkeshm.github.io/login-page/"
    },
    {
        iconUrl: calculator,
        theme: "btn-back-green",
        name: "Calculator",
        description: 'Developed a responsive web-based calculator using HTML, CSS, and JavaScript, supporting basic arithmetic operations. Implemented real-time calculations, error handling, and user input validation. Optimized for mobile and desktop devices with an intuitive user interface.',
        link: "https://aarkeshm.github.io/Calculator-/"
    },
    {
        iconUrl: quiz,
        theme: "btn-back-blue",
        name: "Online Quiz",
        description: " Developed an engaging online quiz platform with a 10-second timeout feature for each question, allowing users to answer questions, dynamic score tracking inn real-time. Designed for an immersive and time-sensitive learning experience.",
        link: "https://aarkeshm.github.io/Online-Quiz/"

    },
    {
        iconUrl: profile,
        theme: "btn-back-pink",
        name: "Portfolio",
        description: "Designed and developed a responsive portfolio website showcasing personal projects, skills, and achievements. Integrated interactive features using JavaScript for an enhanced user experience.",

    }

]