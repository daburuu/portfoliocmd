import env from "./env";

export default class EnvironmentHelper{
    getEnv = () => {
        console.log(env);
        return env;
    }

    setEnv = (key, value) => {
        env[key] = value;
    }

    getPWD = () => {
        return env['PWD'];
    }

    setPWD = (pwd) => {
        env['PWD'] = pwd;
    }
}