import { LogLevel } from "./LogLevel";

export interface LogMessageModule{
    logLevel: LogLevel,
    message: string,
    timestamp?: Date,
}

export class LogMessage {
    constructor(data: LogMessageModule){}
}