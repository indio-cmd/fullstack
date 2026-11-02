import database from "../config/database";

class User{
constructor(){
    this.model = database.db.define("produtos", {
        id:{
            type: database.db.Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        nome:{
            type: database.db.Sequelize.STRING,
            allowNull: true
        },

        categoria:{
            type: database.db.Sequelize.STRING,
        },

        marca:{
            type: database.db.Sequelize.STRING,
        }


    })
}

}
export default new User().model