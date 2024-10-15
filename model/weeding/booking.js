module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "tb_booking",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      vendorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "tb_vendor", // Pastikan sesuai dengan nama model
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pending",
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      paymentConfirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: "tb_booking",
      timestamps: true,
    }
  );

  Booking.associate = (models) => {
    // console.log(models, '------------------')
    Booking.belongsTo(models.vendor, { // Pastikan nama model sesuai
      foreignKey: 'vendorId',
      as: 'vendor', // Alias untuk relasi
    });
  };

  return Booking;
};
