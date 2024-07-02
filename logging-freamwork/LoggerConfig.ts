import { BaseClass } from "./BaseClass";
import { LogAppender } from "./appender/LogAppender";
import { LogLevel } from "./LogLevel";

export interface ILoggerConfig {
    level: LogLevel, 
    logAppender: LogAppender
}

export class LoggerConfig extends BaseClass<ILoggerConfig> {
    constructor(level: LogLevel, logAppender: LogAppender) {
        super({level, logAppender});
    }
    public get getLevel() {
        return this.data.level;
    }

    public get getAppender() {
        return this.data.logAppender;
    }

    public set setLogLevel(logLevel: LogLevel) {
        this.data.level = logLevel;
    }

    public set setLogAppender(logAppender: LogAppender){
        this.data.logAppender = logAppender;
    }
}