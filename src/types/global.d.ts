import type { IconName } from "@utils/icons";

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
        skills?: IconName[];
    }

    interface WorkExperience {
        title: string;
        place: string;
        time: string;
        current: boolean;
        functions: string[];
        skills?: IconName[];
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
