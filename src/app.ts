import express,{Application} from 'express';
import IndexRoutes from './routes/index.routes';
import UsersRoutes from './routes/usuarios.routes';
import AuthRoutes from './routes/auth.routes';
import ProgramRoutes from './routes/program.routes';
import morgan from 'morgan';
import "reflect-metadata"
import AppDataSource from '../sql/database';
export class App{

    private app:Application;


    constructor(private port?:number| string){
        this.app=express();
        this.database();
        this.settings();
        this.middlewares();
        this.routes();

    }

    settings(){
       this.app.set('port',this.port|| process.env.PORT || 3000)       
    }

    async database(){
    try {
        await AppDataSource.initialize();
      } catch (error) {
        console.error(error);
      }
    }

    middlewares(){
        this.app.use(morgan('dev'))
        this.app.use(express.json());
    }

    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/usuarios',UsersRoutes);
        this.app.use('/Auth',AuthRoutes);
        this.app.use('/Program',ProgramRoutes);
        
    }

    async listen(){
        await this.app.listen(this.app.get('port')|| 3000);
        console.log('Server on port',this.app.get('port'));

    }
}