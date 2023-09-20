import { MemberModel } from "../models/member.model.js";

export class MembersController {
  static async create(req, res) {
    // get data from body
    const { name, age, role } = req.body;
    // build member object
    const member = {
      name,
      age,
      role,
    };
    // save member to db
    const { data, success, error } = await MemberModel.create(member);

    if (!success) {
      return res.status(400).json({ message: error });
    }

    return res.json(data);
  }

  static async findAll(req, res) {
    // get data from db
    const { data, success, error } = await MemberModel.findAll();

    if (!success) {
      return res.status(404).json({ message: error });
    }
    // send data as json
    return res.json(data);
  }

  static async findOne(req, res) {
    // get id from params
    const { id } = req.params;
    const { data, success, error } = await MemberModel.findOne(id);
    // check if member exists
    if (!success) {
      return res.status(404).json({ message: error });
    }

    return res.json(data);
  }

  static async update(req, res) {
    // get id from params
    const { id } = req.params;
    // get data from body
    const body = req.body;

    const { data, success, error } = await MemberModel.update(id, body);

    if (!success) {
      return res.status(404).json({ message: error });
    }

    return res.json(data);
  }

  static async delete(req, res) {
    // get id from params
    const { id } = req.params;

    const { data, success, error } = await MemberModel.delete(id);

    if (!success) {
      return res.status(404).json({ message: error });
    }

    return res.status(200).json({ message: "Member deleted successfully" });
  }
}
