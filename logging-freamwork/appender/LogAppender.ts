import { LogMessage } from "../LogMessage";


export interface LogAppender {
    append(logMessage: LogMessage): void;
}