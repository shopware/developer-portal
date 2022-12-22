import {storage} from "../storage";
import inquirer from "inquirer";
import getProjectsPath from "./getProjectsPath";

/*
import inquirerFuzzyPath from "inquirer-fuzzy-path";
inquirer.registerPrompt('fuzzypath', inquirerFuzzyPath);

const type = 'fuzzypath'; // input
const options = {
    itemType: 'directory',
    excludePath: nodePath => nodePath.startsWith('node_modules'),
    excludeFilter: nodePath => nodePath == '.',
};*/

const getPath = async (key: string, message: string) => {
    // get root path
    let root = '/www';
    if (key !== 'root') {
        root = await getProjectsPath();
    }

    // get stored path
    const myPath = storage.get(`dir.${key}`);
    if (myPath) {
        return myPath;
    }

    // ask for path
    const {dir} = await inquirer.prompt([
        {
            type: 'input',
            name: 'dir',
            message,
            default: key === 'root'
                ? root
                : `${root}/${key}`,
        }
    ]);

    // save stored path
    storage.set(`dir.${key}`, dir);

    return dir;
};
export default getPath;