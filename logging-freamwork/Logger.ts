import { ILogger, LogLevel } from "./LogLevel";
import { LogMessage } from "./LogMessage";
import { LoggerConfig } from "./LoggerConfig";
import { ConsoleAppender } from "./appender/console";

export class Logger implements ILogger {
    private config: LoggerConfig;
    private static instance: Logger;

    private constructor() {
        this.config = new LoggerConfig(LogLevel.INFO, new ConsoleAppender());
    }

    public static getInstance() {
        if(this.instance) {
            return this.instance
        }
        return new Logger();
    }

    debug(message: string) {
        this.log(LogLevel.DEBUG, message);
    }
    info(message: string) {
        this.log(LogLevel.INFO, message);
    }
    warning(message: string) {
        this.log(LogLevel.WARNING, message);
    }
    error(message: string) {
        this.log(LogLevel.ERROR, message);
    }
    fatal(message: string) {
        this.log(LogLevel.FATAL, message);
    }

    private log(logLevel: LogLevel, message: string) {
        const logMessage = new LogMessage({
            logLevel,
            message,
        });
        this.config.getAppender.append(logMessage);
    }

    public addAppender(config: LoggerConfig) {
        this.config = config;
    }
}