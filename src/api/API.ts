type Config = {
    params?: {
        [key: string]: string | number
    }
}

type Body = {

}

class API {

    private baseURL: string;

    constructor() {
        this.baseURL = 'https://jsonplaceholder.typicode.com'
    }

    get<R>(url: string, config: Config = {}) {
        const newUrl = new URL(this.baseURL + url);
        for (const key in config.params) {
            newUrl.searchParams.set(key, config.params[key].toString());
        }
        return new Promise<R>((resolve, reject) => {
            fetch(newUrl.toString())
                .then((response) => {
                    if (!response.ok) {
                        return reject();
                    }
                    return response.json();
                })
                .then((result) => resolve(result))
        });
    }

    post<R>(url: string, body: Body = {}) {
        return new Promise<R>((resolve, reject) => {
            fetch(url.toString(), {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        return reject();
                    }
                    return response.json();
                })
                .then((result) => resolve(result))
        });
    }
}

const APIService = new API()

export {APIService}
