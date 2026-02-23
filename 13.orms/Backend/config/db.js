import { Sequelize } from "sequelize";
import path from 'path';

const dbpath = path.join(process.cwd(),"database","mydb.sqlite");

const sequel = new Sequelize({
    dialect:"sqlite",
    storage:dbpath
});

export default sequel;