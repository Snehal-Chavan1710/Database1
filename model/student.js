import {Sequelize} from "sequelize"

export const studentModel=(sequelize)=>{
    const DataTypes=Sequelize
    return sequelize.define("student",{
        first_name :{
            type:DataTypes.STRING
        },
        last_name:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        },
        phone_number:{
            type:DataTypes.STRING
        }
    })
}
