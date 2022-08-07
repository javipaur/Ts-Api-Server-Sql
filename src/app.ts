import express,{Application} from 'express';
import IndexRoutes from './routes/index.routes';
import UsersRoutes from './routes/usuarios.routes';
import AuthRoutes from './routes/auth.routes';
import ProgramRoutes from './routes/program.routes';
import sequelize from '../sql/database';
import morgan from 'morgan';

export class App{

    private app:Application;


    constructor(private port?:number| string){
        this.app=express();
        this.settings();
        this.dbConnection();
        this.middlewares();
        this.routes();

    }

    settings(){
       this.app.set('port',this.port|| process.env.PORT || 3000) 
       
    }

    async dbConnection() {

        try {
            
            await sequelize.sync({force:true});
            console.log('Database online');

        } catch (error) {
            console.error('Unable to connect to the database:', error);
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