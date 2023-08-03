export class Document {
    constructor(document) {
        Object.keys(document).forEach((key) => this[key] = document[key]);

        this.components.schemas = Object.keys(this.components.schemas || {})
            .reduce((reduced, key) => {
                reduced[key] = this.components.schemas[key];
                reduced[key].key = key;
                return reduced;
            }, {});

        this.components.responses = Object.keys(this.components.responses || {})
            .reduce((reduced, key) => {
                reduced[key] = this.components.responses[key];
                reduced[key].key = key;
                return reduced;
            }, {});

        this.components.securitySchemes = Object.keys(this.components.securitySchemes || {})
            .reduce((reduced, key) => {
                reduced[key] = this.components.securitySchemes[key];
                reduced[key].key = key;

                reduced[key].flows = Object.keys(reduced[key].flows || {})
                    .map(flowKey => {
                        const flow = reduced[key].flows[flowKey];
                        flow.key = flowKey;
                        return new Flow(flow);
                    })

                reduced[key] = new SecurityScheme(reduced[key]);

                return reduced;
            }, {});
    }

    static make(document) {
        return new Document(document);
    }
}

export class SecurityScheme {
    key: string;

    constructor(securityScheme) {
        Object.keys(securityScheme).forEach((key) => this[key] = securityScheme[key]);
    }

    get title() {
        return {
            oAuth: 'Security: OAuth 2.0',
        }[this.key] || this.key;
    }
}

export class Flow {
    key: string;

    constructor(flow) {
        Object.keys(flow).forEach((key) => this[key] = flow[key]);
    }

    get title() {
        return {
            password: 'Password OAuth Flow',
            clientCredentials: 'Client Credentials OAuth Flow',
        }[this.key] || this.key;
    }
}