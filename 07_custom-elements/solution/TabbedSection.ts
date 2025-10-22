export class TabbedSectionsElement extends HTMLElement {
    static observedAttributes = ["default-section"];
    defaultSectionIndex = 0;
    sections: Array<HTMLElement> = [];

    constructor() {
        super();
    }

    connectedCallback() {
        this.sections = Array.from(this.querySelectorAll("section"));
        this.hideSections(this.defaultSectionIndex);
        const nav = this.createNav(this.defaultSectionIndex);
        this.prepend(nav);
    }

    hideSections(exceptIndex: number): void {
        this.sections.forEach((section, i) => {
            const isShown = i === exceptIndex;
            section.style.display = isShown ? "block" : "none";
        });
    }

    createNav(defaultIndex: number): HTMLElement {
        const nav = document.createElement("nav");
        const labels = this.sections.map((section, i) => {
            const input = document.createElement("input");
            input.type = "radio";
            input.name = "current-tab";
            input.checked = defaultIndex === i;
            const label = document.createElement("label");
            const title = section.getAttribute("tab-title")
                || `Section ${i + 1}`;
            label.append(title, input);
            label.addEventListener(
                "click",
                () => this.hideSections(i),
            );
            return label;
        });
        nav.append(...labels);
        return nav;
    }

    attributeChangedCallback(
        name: string,
        _oldValue: string,
        newValue: string,
    ) {
        if (name === "default-section") {
            this.defaultSectionIndex = Number(newValue);
        }
    }
}
