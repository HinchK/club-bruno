import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("652276c7d795f3327990"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
