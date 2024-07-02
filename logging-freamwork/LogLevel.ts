
export enum LogLevel {
    DEBUG = "debug",
    INFO = "info", 
    WARNING = "warning", 
    ERROR = "error", 
    FATAL = "fatal"
};

export interface ILogger {
    debug(message: string): void;
    info(message: string): void;
    warning(message: string): void;
    error(message: string): void;
    fatal(message: string): void;
}