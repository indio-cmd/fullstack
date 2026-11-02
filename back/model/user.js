import database from "../config/database";

class User{
constructor(){
    this.model = database.db.define("user", {
        id:{
            type: database.db.Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        name:{
            type: database.db.Sequelize.STRING,
            allowNull: true
        },

        email:{
            type: database.db.Sequelize.STRING,
            unique: true
        },

        password:{
            type: database.db.Sequelize.STRING,
            unique: true
        }


    })
}

}
export default new User().model