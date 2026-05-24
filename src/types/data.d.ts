declare global {
    interface AboutMe {
        name: string;
        description: string;
        imageUrl: string;
    }
    
    interface MyProjects {
        title: string;
        description: string;
        imageUrl: string;
        repoUrl?: string;
        skills?: string[];
    }

    function translateSkill(skill: string): string {
        return skill;
    };
}
