import adminApi from "../components/adminapi.json";
import storeApi from "../components/storeapi.json";

export const makePaths = (api: string) => {
    const data = {
        admin: adminApi,
        store: storeApi,
    }[api] || null;

    if (!data) {
        throw "Incorrect api";
    }

    return Object.keys(adminApi.paths)
        .reduce((reduced, path) => {
            return Object.keys(adminApi.paths[path])
                .reduce((reduced, method) => {
                    reduced.push({
                        path: path.split('/')
                            .splice(1)
                            .join('-')
                            .replace('{', '')
                            .replace('}', ''),
                        method: method.toLowerCase(),
                    });
                    return reduced;
                }, reduced);
        }, [])
        .map(route => ({params: {...route,}, content: ''}))
}