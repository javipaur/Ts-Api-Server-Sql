import dotenv from 'dotenv';
import {App} from './app';

    dotenv.config();

   async function main(){
        const app =new App(process.env.PORT);
        await app.listen();
    }

    main();