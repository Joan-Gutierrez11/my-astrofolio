import type { AstroComponentFactory } from "astro/runtime/server/index.js";

declare global {
    interface Section {
        name: string;
        reference: string;
        component: AstroComponentFactory;
    }

    interface Project {
        title: string;
        imageUrl: string;
        description: string;
        link?: string;
    }
}
