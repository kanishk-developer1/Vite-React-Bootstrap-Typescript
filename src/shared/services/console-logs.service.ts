import { LOGS_COLOR } from "../utils/constants/App.const";

const printStyle = {
    "font-weight": "bold",
    "font-size": "0.8rem"
}

const getConsoleStyles = (styleObj: { color: string }) => Object.entries({ ...printStyle, ...styleObj }).map(([key, value]) => `${key}:${value}`).join("; ");

const printInfo = (message: string, hide?: boolean) => {
    !hide ? console.log(`%cInfo-> ${message}`, getConsoleStyles({
        color: LOGS_COLOR.info
    })) : '';
}

const printSuccess = (message: string, hide?: boolean) => {
    !hide ? console.log(`%cDone-> ${message}`, getConsoleStyles({
        color: LOGS_COLOR.success
    })) : '';
}

const printWarning = (message: string, hide?: boolean) => {
    !hide ? console.log(`%cWarning-> ${message}`, getConsoleStyles({
        color: LOGS_COLOR.warning
    })) : '';
}

const printError = (message: string, hide?: boolean) => {
    !hide ? console.log(`%cError-> ${message}`, getConsoleStyles({
        color: LOGS_COLOR.error
    })) : '';
}

const ConsoleLogsService = {
    printInfo,
    printSuccess,
    printWarning,
    printError
}

export default ConsoleLogsService;