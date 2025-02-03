//this function is not in work
import foodModel from "../models/foodmodels.js";

// Search food function 
const searchFood = async (req, res) => {
  try {
    const query = req.query.q; // Use a shorter query parameter name
    if (!query) {
      return res.status(400).json({ success: false, msg: "Query is required" });
    }

    // Search for food items that match the query
    const results = await foodModel.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } }
      ]
    });

    res.json({ success: true, data: results });
  } catch (error) {
    console.error("Error searching for food:", error);
    res.status(500).json({ success: false, msg: "An error occurred while searching for food" });
  }
};

// export { searchFood };
