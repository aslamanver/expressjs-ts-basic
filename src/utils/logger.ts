import { CONFIG } from "../config";

class Logger {

    private isFirst: boolean = true;

    info(msg: string) {

        if (this.isFirst) {

            console.log('\n------------------------------------------')
            console.log(`${CONFIG.APP_NAME} - ${CONFIG.VERSION_NAME} \n`);

            this.isFirst = false
        }

        console.log('[INFO]', msg)
    }
}

export const LOGGER = new Logger();