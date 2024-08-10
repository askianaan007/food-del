import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://askianaan007:62828576@cluster0.fxfcbok.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
