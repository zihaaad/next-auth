import mongoose, {Schema, models} from "mongoose";

const googleUserSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
  },
  {timestamps: true}
);

const GoogleUser =
  models.GoogleUser || mongoose.model("GoogleUser", googleUserSchema);
export default GoogleUser;
