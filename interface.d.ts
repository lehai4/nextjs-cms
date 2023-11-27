import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

interface TypeSenderMail {
  to: string;
  url: string;
  text: string;
}
interface FieldType {
  name?: string;
  password?: string;
  email?: string;
}
interface TypeUser {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
  provider: string;
}
interface TypeBannerLink {
  title: string;
  path: string;
}
