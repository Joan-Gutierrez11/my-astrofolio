import one from "@assets/images/projects/1.jpg";
import two from "@assets/images/projects/2.jpg";
import three from "@assets/images/projects/3.jpg";
import four from "@assets/images/projects/4.jpg";

export default {
    skills: {
        backend: ["python", "fastapi", "nodejs", "java", "spring", "csharp", "dot-net", "mysql", "django", "laravel", "php"],
        frontend: ["angular", "javascript", "firebase", "vuejs", "typescript", "react", "nextjs"],
    },
    about: {
        title: "About Me",
        description: "Full Stack Developer focused on backend development and building scalable software solutions. Experience developing enterprise applications, REST APIs, and microservices using Laravel, Vue.js, Django, and Google Cloud Platform. Passionate about software architecture, system efficiency, and creating robust, maintainable products with high impact."
    },
    experience: [
        {
            title: "Teaching Assistant - Programming",
            place: "ESCUELA SUPERIOR POLITECNICA DEL LITORAL (ESPOL)",
            time: "2021 - 2022",
            current: false,
            skills: ["python"],
            functions: [
                "Provided academic support for the Fundamentals of Programming course.",
                "Reviewed assignments and programming projects.",
                "Reinforced programming concepts and problem-solving skills."
            ]
        },
        {
            title: "FullStack Developer - Intern",
            place: "Hangaroa S.A",
            time: "2022 - 2023",
            current: false,
            skills: ["django", "vuejs", "ionic", "angular", "typescript"],
            functions: [
                "Developed an admin web panel using Django and Vue.js.",
                "Built a hybrid mobile application using Ionic and Angular.",
                "Implemented frontend and backend modules for enterprise applications."
            ]
        },
        {
            title: "FullStack Developer",
            place: "FUNIBER",
            time: "2024 - Present",
            current: true,
            skills: ["php", "laravel", "vuejs", "typescript", "googlecloud"],
            functions: [
                "Develop web applications using PHP, Laravel, and Vue.js.",
                "Implement microservices and REST APIs using Laravel and TypeScript.",
                "Integrate and deploy applications on Google Cloud.",
                "Contribute to architecture improvements and maintenance of enterprise systems."
            ]
        },
    ],
    projects: [
        {
            title: "Auth REST API for users",
            description: "Backend REST API for auth users, using JWT and refresh tokens.",
            repoUrl: "https://github.com/Joan-Gutierrez11/Sistema-de-Autenticacion-de-Usuarios.git",
            image: one.src,
            skills: ["python", "fastapi", "mysql"]
        },
        {
            title: "Music App",
            description: "Fullstack Application. Backend made in Express JS and Frontend in Angular 14",
            image: two.src,
            repoUrl: "https://github.com/Joan-Gutierrez11/PROYECTOS-DAWN/tree/master/Proyecto%203",
            skills: ["nodejs", "angular", "firebase", "javascript", "mysql"]
        },
        {
            title: "Student Rest API",
            description: "This project is a REST API for managing student records, built using Spring Boot.",
            image: three.src,
            repoUrl: "https://github.com/Joan-Gutierrez11/Simple-Student-REST-Service.git",
            skills: ["java", "spring", "mysql"]
        },
        {
            title: "Cars Rest API",
            description: "This project is a REST API for managing car records, built using C#.",
            image: four.src,
            repoUrl: "https://github.com/Joan-Gutierrez11/Cars-API-.NET",
            skills: ["csharp", "dot-net", "mysql"]
        },
    ] as Project[]
} as Data;
