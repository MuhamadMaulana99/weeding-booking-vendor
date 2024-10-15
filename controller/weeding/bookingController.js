// controllers/bookingController.js
const greedyBooking = require("../../utils/greedyBooking");
const { models: { booking, vendor } } = require('../../model/index.js');

exports.createBooking = async (req, res) => {
  const { userId, requiredSlots, date } = req.body;

  try {
    const vendors = await vendor.findAll(); // Ambil semua vendor
    const selectedVendor = await greedyBooking(vendors, requiredSlots); // Gunakan algoritma greedy

    const newBooking = await booking.create({
      userId,
      vendorId: selectedVendor.id,
      date,
      totalPrice: selectedVendor.price,
    });

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await booking.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};

exports.updateBookingStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const booking = await booking.findByPk(id);
    if (booking) {
      booking.update({ status });
      res.status(200).json(booking);
    } else {
      res.status(404).json({ error: "Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update booking status" });
  }
};
