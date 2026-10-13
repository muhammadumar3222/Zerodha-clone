import Holding from "../models/Holdings.model.js";

export const getAllHoldings = async (req, res) => {
  try {
    const allHoldings = await Holding.find({});
    res.status(200).json(allHoldings);
  } catch (error) {
    console.log("Error in getAllHoldings controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
