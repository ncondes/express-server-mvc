import { Member } from "../schemas/Member.js";
import { readDb } from "../utils/readDb.js";
import { writeDb } from "../utils/writeDb.js";
import { isValidObjectId } from "mongoose";

export class MemberModel {
  static async create(member) {
    // // get data from db
    // const data = readDb();
    // // push member to data
    // data.push(member);
    // // save data to db
    // writeDb(data);

    // insert doc into mongo
    const newMember = await Member.create(member);

    return { success: true, data: newMember, error: null };
  }

  static async findAll() {
    // // get data from db
    // const data = readDb();

    // get all docs from mongo
    const data = await Member.find();

    return { success: true, data, error: null };
  }

  static async findOne(id) {
    // // get data from db
    // const data = readDb();
    // // find member by id
    // const member = data.find((member) => member.id === id);
    // // check if member exists
    // if (!member) {
    //   return { success: false, data: null, error: "Member not found" };
    // }

    // check id is a valid mongo id
    if (!isValidObjectId(id)) {
      return { success: false, data: null, error: "Invalid id" };
    }

    // get doc from mongo
    const member = await Member.findById(id);

    if (!member) {
      return { success: false, data: null, error: "Member not found" };
    }

    return { success: true, data: member, error: null };
  }

  static async update(id, body) {
    //   // get data from db
    //   const data = readDb();
    //   // check if member exists
    //   const memberExists = data.find((member) => member.id === id);
    //   if (!memberExists) {
    //     return { success: false, data: null, error: "Member not found" };
    //   }

    //   // update member by id
    //   const updatedData = data.map((member) =>
    //     member.id === id ? { ...member, ...body } : member
    //   );

    //   // save data to db
    //   writeDb(updatedData);
    //   // find member by id
    //   const member = updatedData.find((member) => member.id === id);

    //   return { success: true, data: member, error: null };
    // }

    // static async delete(id) {
    //   // get data from db
    //   const data = readDb();
    //   // check if member exists
    //   const memberExists = data.find((member) => member.id === id);
    //   if (!memberExists) {
    //     return { success: false, data: null, error: "Member not found" };
    //   }

    //   // delete member by id
    //   const updatedData = data.filter((member) => member.id !== id);

    //   // save data to db
    //   writeDb(updatedData);

    // get doc from mongo and update
    const member = await Member.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!member) {
      return { success: false, data: null, error: "Member not found" };
    }

    return { success: true, data: member, error: null };
  }

  static async delete(id) {
    //   // get data from db
    //   const data = readDb();
    //   // check if member exists
    //   const memberExists = data.find((member) => member.id === id);
    //   if (!memberExists) {
    //     return { success: false, data: null, error: "Member not found" };
    //   }

    //   // delete member by id
    //   const updatedData = data.filter((member) => member.id !== id);

    //   // save data to db
    //   writeDb(updatedData);

    // delete doc from mongo
    const member = await Member.findByIdAndDelete(id);

    if (!member) {
      return { success: false, data: null, error: "Member not found" };
    }

    return { success: true, data: member, error: null };
  }
}
