import { seed } from "../db/seed.js";
import { Member } from "../schemas/Member.js";

export class SeedModel {
  static async seed() {
    await Member.insertMany(seed);

    return { success: true, data: null, error: null };
  }
}
