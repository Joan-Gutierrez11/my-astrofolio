import deviconList from "devicon/devicon.json";

export type IconName = typeof deviconList[number]['name'];

class Icon {
    constructor(
        public name: IconName,
    ) {}

    get class() {
        return `devicon-${this.name}-plain colored text-lg`;
    }
}

export const icons: Record<IconName, Icon> = deviconList
    .map(icon => new Icon(icon.name))
    .reduce((acc, icon) => {
        acc[icon.name] = icon;
        return acc;
    }, {} as Record<IconName, Icon>);
