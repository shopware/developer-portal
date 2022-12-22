// @ts-ignore
import {JSONStorage} from "node-localstorage";
import {output} from "./output";
import {resolve} from "path";

let localStorage: JSONStorage;

export const storage = {
    storage() {
        if (!localStorage) {
            const myPath = '../.docs-cli';
            output.log(`Using ${resolve(myPath)} as local storage`)
            localStorage = new JSONStorage(myPath);
        }

        return localStorage;
    },
    set(key: string, value: any) {
        output.debug(`Setting ${key} = ${value}`);
        this.storage().setItem(key, value);
    },
    get(key: string, def = null) {
        output.debug(`Getting ${key}`);
        const value = this.storage().getItem(key);
        if (!value) {
            output.debug(`No value for ${key}`);
            return def;
        }

        return value;
    }
};