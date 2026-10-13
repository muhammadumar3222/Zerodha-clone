import Position from "../models/Positions.model.js";

export const getAllPosition = async (req, res) => {
  try {
    const allPositions = await Position.find({});
    res.status(200).json(allPositions);
  } catch (err) {
    console.log("Error in getAllPosition controller:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
