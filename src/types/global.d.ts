// Not export anything to ensure this file is treated as a module and doesn't pollute the global scope.
export {};

declare global {
    interface Section {
        name: string;
        reference: string;
        component: AstroComponentFactory;
    }

    interface AboutMe {
        title: string;
        description: string;
        imageUrl?: string;
    }

    interface Project {
        title: string;
        description: string;
        repoUrl: string;
        image?: string;
        skills?: string[];
    }

    interface WorkExperience {
        title: string;
        place: string;
        time: string;
        current: boolean;
        functions: string[];
        skills?: string[];
    }

    interface Skills {
        backend: string[];
        frontend: string[];
    }

    interface Data {
        about: AboutMe;
        projects: Project[];
        experience: WorkExperience[];
        skills: Skills;
    }

}
