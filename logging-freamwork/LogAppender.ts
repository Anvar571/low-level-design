import { LogMessage } from "./LogMessage";

export interface LogAppender {
    append(logMessage: LogMessage): void;
}

export class ConsoleAppender implements LogAppender {
    append(logMessage: LogMessage): void {
        
    }
}

export class FileAppender implements LogAppender {
    append(logMessage: LogMessage): void {
        
    }
}

export class DatabaseAppender implements LogAppender {
    append(logMessage: LogMessage): void {
        
    }
}