import axios, {AxiosInstance} from 'axios';


interface Headers {
    [key: string]: string;
}

type DomainConstructor = {
    baseURL?: string; headers?: Headers; withCredentials?: boolean;
}

class AxiosDomain {
    readonly baseURL: string;
    readonly headers: Headers;
    readonly credentials: boolean = false;
    private readonly _timeout = 300000;

    constructor({
        baseURL = '',
        headers = {},
        withCredentials
    }: DomainConstructor = {}) {
        this.baseURL = baseURL;
        this.headers = headers;
        this.credentials = withCredentials || false;
    }

    initInstance(): AxiosInstance {
        return axios.create({
            baseURL: this.baseURL,
            headers: {...this.headers},
            withCredentials: false,
            timeout: this._timeout,
        });
    }
}

export class AxiosBuilder {
    private baseURL = '';
    private headers: Headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'accept-encoding': ' gzip, deflate, br, zstd',
    };

    private withCredentials = false;

    static create(): AxiosBuilder {
        return new AxiosBuilder();
    }

    withBaseURL(baseURL: string): AxiosBuilder {
        this.baseURL = baseURL;
        return this;
    }

    haveCredentials(): AxiosBuilder {
        this.withCredentials = true;
        return this;
    }

    withDynamicHeaders(headerProperties: Headers) {
        this.headers = {...this.headers, ...headerProperties};
        return this;
    }

    toDomain(): AxiosDomain {
        return new AxiosDomain({
            baseURL: this.baseURL,
            headers: this.headers,
            withCredentials: this.withCredentials
        });
    }
}
