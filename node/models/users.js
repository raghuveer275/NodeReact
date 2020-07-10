
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        validate: {
          isInt: {
            args: false,
            message: "Invalid ID"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: false,
            message: "Invalid Email"
          }
        }
      },
      password: {
        type: DataTypes.STRING
      }

    }
  )
  // users.associate = (models) => {
  // }
  return users;
}