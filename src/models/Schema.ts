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
      // name: String,
      username: { type: String },
      email: { type: String, unique: true },
      // password: String,
      category: {
        type: animeSchema,
        default: {
          onHold: [],
          watching: [],
          completed: [],
          toWatch: [],
        },
      },
    })
  );

export { User };
