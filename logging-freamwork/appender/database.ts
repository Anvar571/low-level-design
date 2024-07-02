import { LogMessage } from "../LogMessage";
import { LogAppender } from "./LogAppender";

export class DatabaseAppender implements LogAppender {
    append(logMessage: LogMessage): void {
        // implement database logging
    }
}