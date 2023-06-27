import app from "./app";
import { AppDataSource } from "./config/app-data-source";

function main(){

    // ORM initialization
    AppDataSource
        .initialize()
        .then(async()=>{
            console.log("Datasource has been initialized");
        })
        .catch((err)=>{
            console.log("Error by: ", err);
        })


    app.listen(app.get('port'));
    console.log(process.env.MYSQL_HOST)
    console.log("running in port :", app.get('port'));
}

main();
