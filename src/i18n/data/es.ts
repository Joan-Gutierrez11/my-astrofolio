import one from "@assets/images/projects/1.jpg";
import two from "@assets/images/projects/2.jpg";
import three from "@assets/images/projects/3.jpg";
import four from "@assets/images/projects/4.jpg";

export default {
    about: {
        title: "Acerca de mí",
        description: "Desarrollador Full Stack orientado al desarrollo backend y construcción de soluciones escalables de software. Experiencia desarrollando aplicaciones empresariales, APIs REST y microservicios utilizando Laravel, Vue.js, Django y Google Cloud Platform. Apasionado por la arquitectura de software, la eficiencia de sistemas y el desarrollo de productos robustos, mantenibles y de alto impacto."
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
