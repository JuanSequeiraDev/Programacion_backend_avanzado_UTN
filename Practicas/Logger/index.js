import { Log, LoggerManager } from "./utils/logger.js";

const logger = new LoggerManager()

logger.addLog('debug', 'app.jsx', 'Actualizacion de la funcion getJSON')

logger.addLog('error', 'UserChats.jsx', 'Error en la carga de nuevos mensajes')

logger.showLogs()