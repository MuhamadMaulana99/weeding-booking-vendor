const expess = require('express');
;
const validation = require('../validation/user/validation.js');

const booking = require('../controller/weeding/bookingController.js');
const vendor = require('../controller/weeding/vendorController.js');
const payments = require('../controller/weeding/paymentController.js');

const routers = expess.Router();

routers.get('/bookings',booking.getBookings);
routers.post('/bookings',booking.createBooking);
routers.delete('/bookings/:id/status',booking.updateBookingStatus);
// routers.put('/angsuran/:id',booking.putAngsuran);

routers.get('/vendors',vendor.getVendors);
routers.post('/vendors',vendor.createVendor);
routers.put('/vendors/:id',vendor.updateVendor);
routers.delete('/vendors/:id',vendor.deleteVendor);

// routers.get('/payments',payments.getVendors);
routers.post('/payments',payments.createPayment);
routers.put('/payments/:id/confirm',payments.confirmPayment);
// routers.delete('/payments/:id',payments.deleteVendor);

// routers.post('/login',loginController.LoginUser);
// routers.post('/register',loginController.addUser);
// routers.get('/allUser',loginController.getUser);
// routers.get('/allUserByRoles',loginController.getUserByRole);
// routers.delete('/allUser/:id',loginController.deleteUser);
// routers.put('/allUser/:id',loginController.putUser);



module.exports = routers;