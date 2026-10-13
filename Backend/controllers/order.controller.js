import Order from "../models/Order.model.js";

export const addOrder = async (req, res) => {
  try {
    let newOrder = new Order({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    newOrder.save();
    res.status(200).json(newOrder);
  } catch (error) {
    console.log("Error in addOrder controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
