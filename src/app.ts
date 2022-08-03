import express,{Application} from 'express';
import morgan from 'morgan';
import IndexRoutes from './routes/index.routes';
import UsersRoutes from './routes/usuarios.routes';
import AuthRoutes from './routes/auth.routes';
import db from './database';
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
            
            await db.authenticate();
            console.log('Database online');

        } catch (error) {
            throw new Error( 'error' );
        }

    }


    middlewares(){
        this.app.use(morgan('dev'))
    }

    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/usuarios',UsersRoutes);
        this.app.use('/Auth',AuthRoutes);
    }

    async listen(){
        await this.app.listen(this.app.get('port')|| 3000);
        console.log('Server on port',this.app.get('port'));

    }
}