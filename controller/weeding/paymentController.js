// controllers/paymentController.js
const { models: { payment } } = require('../../model/index.js');

exports.createPayment = async (req, res) => {
  const { bookingId, paymentReference } = req.body;
  try {
    const newPayment = await payment.create({
      bookingId,
      paymentReference,
      paymentDate: new Date(),
      paymentStatus: 'completed'
    });
    res.status(201).json(newPayment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to process payment' });
  }
};

exports.confirmPayment = async (req, res) => {
    const { id } = req.params;
    try {
      const payment = await payment.findByPk(id);
      if (payment) {
        payment.update({ paymentStatus: 'confirmed' });
        res.status(200).json(payment);
      } else {
        res.status(404).json({ error: 'Payment not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to confirm payment' });
    }
  };
  