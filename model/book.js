import {Sequelize} from "sequelize";

export const bookModel=(sequelize)=>{
    const DataTypes=Sequelize
    return sequelize.define("book",{
        name:{
            type:DataTypes.STRING
        },
        author:{
            type:DataTypes.STRING
        }
    })
}