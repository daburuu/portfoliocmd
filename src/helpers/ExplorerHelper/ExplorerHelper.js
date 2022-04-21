import files from './files.json';

export default class ExplorerHelper{

    printDirectories = path => {
        return files;
    }

    changeDirectory = (path, dest) => {
        console.log(path);
        if (files[path]) {
            if (files[path].includes(dest)){
                return dest;
            }
        }
        return false;
    }

    changeParentDirectory = (path) => {
    }
}