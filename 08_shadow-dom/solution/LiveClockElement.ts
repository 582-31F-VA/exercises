export class LiveClockElement extends HTMLElement {
    static observedAttributes = ["format"];
    format: string | null = null;

    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "open" });
        this.render(shadowRoot);
        setInterval(() => this.render(shadowRoot), 1000);
    }

    render(root: ShadowRoot): void {
        const now = new Date();
        root.replaceChildren(now.toLocaleTimeString(undefined, {
            hour12: this.format === "12-hour",
        }));
    }

    attributeChangedCallback(name: string, _: string, newValue: string) {
        if (name === "format") this.format = newValue;
    }
}
