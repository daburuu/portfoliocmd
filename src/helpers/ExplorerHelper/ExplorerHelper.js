import files from './files.json';
import EnvironmentHelper from '../EnvironmentHelper/EnvironmentHelper';

export default class ExplorerHelper{
    printDirectories = path => {
        let current = "";
        let currentFiles = files['~'];
        if(path.length === 1){
            return files['~'];
        }
        path.shift();
        path.forEach(element => {
            current = element;
            currentFiles = currentFiles[current];
        });
        return currentFiles;
    }

    changeDirectory = (path, dest) => {
        if (files[path]) {
            for (const e in files[path]){
                if (e === dest){
                    const _env = new EnvironmentHelper();
                    const currentPath = _env.getPWD();
                    
                    _env.setEnv('PWD', `${currentPath}/${dest}`);
    
                    return dest;
                }
            }
        }
        return false;
    }

    changeParentDirectory = () => {
        const _env = new EnvironmentHelper();
        let currentPath = _env.getPWD().split("/");
        if (currentPath.length > 1){
            let popped = currentPath.pop();
            _env.setPWD(currentPath.join('/'));
        }
        return _env.getPWD();
    }
}