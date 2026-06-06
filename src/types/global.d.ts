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

    interface Data {
        about: AboutMe;
        projects: Project[];
    }

}
