// controllers/vendorController.js
const { models: { vendor, loginModel, masterNasabah } } = require('../../model/index.js');

exports.createVendor = async (req, res) => {
  const { name, description, price, availableSlots } = req.body;
  try {
    const newVendor = await vendor.create({
      name,
      description,
      price,
      availableSlots,
    });
    res.status(201).json(newVendor);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to create vendor" });
  }
};
exports.getVendors = async (req, res) => {
  try {
    const vendors = await vendor.findAll();
    res.status(200).json(vendors);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch vendors" });
  }
};

exports.updateVendor = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, availableSlots } = req.body;
  try {
    const vendors = await vendor.findByPk(id);
    if (vendors) {
      vendors.update({ name, description, price, availableSlots });
      res.status(200).json(vendors);
    } else {
      res.status(404).json({ error: "Vendor not found" });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to update vendor" });
  }
};

exports.deleteVendor = async (req, res) => {
  const { id } = req.params;
  try {
    const vendors = await vendor.findByPk(id);
    if (vendors) {
      await vendors.destroy();
      res.status(200).json({ message: "Vendor deleted" });
    } else {
      res.status(404).json({ error: "Vendor not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete vendor" });
  }
};
