const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class HistoryData extends Model {
    static association(models) {
      HistoryData.belongsTo(models.Room, { foreignKey: "userId" });
    }
  }

  HistoryData.init(
    {
      data: DataTypes.STRING,
      room_id: DataTypes.INTEGER,
      year: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "HistoryData",
    }
  );
};
