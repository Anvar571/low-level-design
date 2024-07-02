import { LogLevel } from "./LogLevel";
import { Logger } from "./Logger";
import { LoggerConfig } from "./LoggerConfig";
import { FileAppender } from "./appender/file";

export class LoggingExample {
    public static run() {
        const logger = Logger.getInstance();

        // default configuration
        logger.error("lorem ipsum 1");
        logger.info("lorem ipsum 2");

        const config = new LoggerConfig(LogLevel.DEBUG, new FileAppender("logginf.log"));

        logger.addAppender(config);

        logger.debug("This is a debug message");
        logger.info("This is an information message")

    }
}

LoggingExample.run();