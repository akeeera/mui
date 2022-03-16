import {AddPostProps} from "../actions/posts.action";

type Config = {
    params?: {
        [key: string]: string | number
    }
}

class API {
    get(url: string, config: Config = {}) {
        const newUrl = new URL(url);
        for (const key in config.params) {
            newUrl.searchParams.set(key, config.params[key].toString());
        }

        return new Promise((resolve, reject) => {
            fetch(url.toString())
                .then((response) => {
                    if (!response.ok) {
                        return reject();
                    }
                    return response.json();
                })
                .then((result) => resolve(result))
        });
    }

    post(url, body = {}) {
        return new Promise((resolve, reject) => {
            fetch(url, {
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
