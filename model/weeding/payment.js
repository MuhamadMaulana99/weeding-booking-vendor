// models/payment.js
const Booking = require("./booking");

module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define(
    "tb_payment",
    {
      bookingId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tb_booking',
          key: "id",
        },
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "QRIS",
      },
      paymentDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      paymentStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pending", // pending, completed, failed
      },
      paymentReference: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "tb_payment",
      timestamps: true,
    }
  );
  return Payment;
};
