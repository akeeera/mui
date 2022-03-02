class API {
    get(url, config = {}) {
        url = new URL(url);
        for (const key in config.params) {
            url.searchParams.set(key, config.params[key]);
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
}

const APIService = new API()

export {APIService}
