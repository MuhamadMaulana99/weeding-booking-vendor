const Sequelize = require("sequelize");
const Vendor = require('../model/weeding/vendor.js'); // Import model Vendor
const Booking = require('../model/weeding/booking.js'); // Import model Vendor

// const sequelize = new Sequelize('dbTokoBangunan', 'postgres', 'postgres', {
//   host: 'localhost',
//   dialect: 'postgres'
// });
const sequelize = new Sequelize("db_wedding_booking", "root", "", {
  host: "localhost",
  dialect: "mysql", // Ganti dengan dialect yang Anda gunakan
  // dialectOptions: {
  //   charset: 'utf8mb4', // Gunakan utf8mb4
  //   collate: 'utf8mb4_unicode_ci', // Atur collate yang sesuai
  // },
  // logging: console.log, // Aktifkan logging untuk debugging
});
// const loginModel = require('./Auth/loginModels.js')(sequelize, Sequelize.DataTypes);

const booking = require("./weeding/booking.js")(sequelize, Sequelize.DataTypes);
const payment = require("./weeding/payment.js")(sequelize, Sequelize.DataTypes);
const vendor = require("./weeding/vendor.js")(sequelize, Sequelize.DataTypes);

booking.belongsTo(vendor, {
  foreignKey: 'vendorId',
  as: 'vendor', // Alias untuk relasi
});
const db = {
  sequelize,
  models: { booking, payment, vendor },
};
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = db;
