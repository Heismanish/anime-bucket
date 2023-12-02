import mongoose from "mongoose";

const animeSchema = new mongoose.Schema({
  onHold: [{ type: String }],
  watching: [{ type: String }],
  completed: [{ type: String }],
  toWatch: [{ type: String }],
});

const User =
  mongoose.models.User ||
  mongoose.model(
    "User",
    new mongoose.Schema({
      name: String,
      username: { type: String, unique: true },
      email: { type: String, unique: true },
      password: String,
      category: [animeSchema],
    })
  );

export { User };
