import { db } from "@db";
import * as schema from "@shared/schema";

export const storage = {
  async insertContact(contact: schema.ContactInsert) {
    const [newContact] = await db.insert(schema.contacts)
      .values(contact)
      .returning();
    return newContact;
  },

  async getContacts() {
    return await db.query.contacts.findMany({
      orderBy: (contacts, { desc }) => [desc(contacts.createdAt)]
    });
  }
};
