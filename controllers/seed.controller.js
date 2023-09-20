import { SeedModel } from "../models/seed.model.js";

export class SeedController {
  static async seed(req, res) {
    // populate database
    await SeedModel.seed();

    return res.json({ message: "Seed executed successfully" });
  }
}
