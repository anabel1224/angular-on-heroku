import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';

class Server{
	public app:Application;
	constructor(){
		this.app = express();
		
		this.config();
		this.routes();
	}
	config():void{
		//Configuraciones
		this.app.set('port',process.env.PORT || 3000);
        this.app.use(cors()); //iniciamos cors
this.app.use(express.json()); //habilitamos el intercambio de objetos json entre aplicaciones
this.app.use(express.urlencoded({extended:false}));//habilitamos para recibir datos a traves de formularios html.

//Variables globales

        //Middlewares
this.app.use(morgan('dev'));

	}
	routes():void{
        this.app.use(indexRoutes);
    }
	start():void{
		this.app.listen(this.app.get('port'),() => {
				console.log("Sever escuchando"+this.app.get('port'));
			}
		);
	}
}

const server = new Server();
server.start(); //Ejecutamos el metodo start en inica el server