import {Sequelize} from 'sequelize';
import { studentModel } from './model/student.js';
import { bookModel } from './model/book.js';

export const Connection = async () => {
    const sequelize = new Sequelize('db1', 'postgres', 'snehall_1710', {
        host: 'localhost',
        dialect: 'postgres'
    });

    // student table

    let student = null;
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        student = studentModel(sequelize);
        await sequelize.sync();
        console.log('Student table is created.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    //book table

    let book = null;
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        book=bookModel(sequelize);
        await sequelize.sync();
        console.log('book table is created.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
