"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        //Configuraciones
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, cors_1.default)()); //iniciamos cors
        this.app.use(express_1.default.json()); //habilitamos el intercambio de objetos json entre aplicaciones
        this.app.use(express_1.default.urlencoded({ extended: false })); //habilitamos para recibir datos a traves de formularios html.
        //Variables globales
        //Middlewares
        this.app.use((0, morgan_1.default)('dev'));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Sever escuchando" + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start(); //Ejecutamos el metodo start en inica el server
//# sourceMappingURL=index.js.map