import { LogMessage } from "../LogMessage";
import { LogAppender } from "./LogAppender";

export class ConsoleAppender implements LogAppender {
    append(logMessage: LogMessage): void {
        console.log(logMessage.getMessage);
    }
}