import { eapp } from "./loaders"
import { CONFIG } from "./config"
import { LOGGER } from "./utils/logger"

eapp().listen(CONFIG.PORT, () => {
  LOGGER.info('EAPP is listening on port 3000!')
})