import Hero from "@layouts/Hero.astro";
import About from "@layouts/About.astro";
import Projects from "@layouts/Projects.astro";
import Contact from "@layouts/Contact.astro";
import Experience from "@layouts/Experience.astro";

export const sections: Section[] = [
    { name: 'Home', reference: '#home', component: Hero },
    { name: 'About me', reference: '#about', component: About },
    { name: 'Experience', reference: '#experience', component: Experience },
    { name: 'Projects', reference: '#projects', component: Projects },
    { name: 'Contact', reference: '#contact', component: Contact },
];
