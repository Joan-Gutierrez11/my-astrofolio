import one from "@assets/images/projects/1.jpg";
import two from "@assets/images/projects/2.jpg";
import three from "@assets/images/projects/3.jpg";
import four from "@assets/images/projects/4.jpg";

export default {
    about: {
        title: "About Me",
        description: "Full Stack Developer focused on backend development and building scalable software solutions. Experience developing enterprise applications, REST APIs, and microservices using Laravel, Vue.js, Django, and Google Cloud Platform. Passionate about software architecture, system efficiency, and creating robust, maintainable products with high impact."
    },
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
