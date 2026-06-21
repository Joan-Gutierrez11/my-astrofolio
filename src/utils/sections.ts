import Hero from "@layouts/Hero.astro";
import About from "@layouts/About.astro";
import Skills from "@layouts/Skills.astro";
import Projects from "@layouts/Projects.astro";
import Contact from "@layouts/Contact.astro";

export const sections: Section[] = [
    { name: 'Home', reference: '#home', component: Hero },
    { name: 'About me', reference: '#about', component: About },
    { name: 'Skills', reference: '#skills', component: Skills },
    { name: 'Projects', reference: '#projects', component: Projects },
    { name: 'Contact', reference: '#contact', component: Contact },
];
