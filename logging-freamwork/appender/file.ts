import { LogMessage } from "../LogMessage";
import { LogAppender } from "./LogAppender";

export class FileAppender implements LogAppender {
    constructor(path: string) {}

    append(logMessage: LogMessage): void {
        // implement file logging
    }
}