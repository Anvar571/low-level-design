import { BaseClass } from "./BaseClass";
import { LogLevel } from "./LogLevel";

export interface LogMessageModule {
    logLevel: LogLevel,
    message: string,
    timestamp?: Date,
}

export class LogMessage extends BaseClass<LogMessageModule> {
    constructor(logMessage: LogMessageModule) {
        super(logMessage);
        this.data.timestamp = new Date();
    }

    public get getLogLevel() {
        return this.data.logLevel;
    }

    public get getMessage() {
        return this.data.message;
    }

    public get getTimestamp() {
        return this.data.timestamp;
    }

    public setMessage(logMessage: LogMessage) {
        this.data.message = logMessage.getMessage;
    }
}