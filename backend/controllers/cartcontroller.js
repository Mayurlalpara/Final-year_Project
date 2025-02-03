import userModel from "../models/usermodel.js";

//add to cart function
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    if (!userData) {
      return res.json({ success: false, msg: "User not found" });
    }

    let cartData = userData.cartdata || {};
    //console.log('Before Update - cartData:', cartData);

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    const updateResult = await userModel.findByIdAndUpdate(
      req.body.userId,
      { cartdata: cartData },
      { new: true }
    );
    // console.log('After Update - cartData:', updateResult.cartdata);

    res.json({ success: true, msg: "Added To Cart" });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: "An error occurred while adding to cart",
    });
  }
};

//remove from cart function
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    if (!userData) {
      return res.json({ success: false, msg: "User not found" });
    }

    let cartData = userData.cartdata || {};
    // console.log('Before Update - cartData:', cartData);
    //console.log('Item ID:', req.body.itemId);

    if (cartData[req.body.itemId] && cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
      if (cartData[req.body.itemId] === 0) {
        delete cartData[req.body.itemId];
      }
      const updateResult = await userModel.findByIdAndUpdate(
        req.body.userId,
        { cartdata: cartData },
        { new: true }
      );
      //  console.log('After Update - cartData:', updateResult.cartdata);
      res.json({ success: true, msg: "Removed From Cart" });
    } else {
      //   console.log('Item not found in cart or quantity is zero');
      return res.json({ success: false, msg: "Item not found in cart" });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: "An error occurred while removing the item from cart",
    });
  }
};

//fecthing user's cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    if (!userData) {
      return res.json({ success: false, msg: "User not found" });
    }

    let cartData = userData.cartdata || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: "An error occurred while retrieving the cart data",
    });
  }
};

export { addToCart, getCart, removeFromCart };
