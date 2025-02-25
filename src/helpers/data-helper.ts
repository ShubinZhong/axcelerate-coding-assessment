import { User } from "../components/ListItem";
import absentList from "../data/absent-list.json";
import attendedList from "../data/attended-list.json";

export const attendedGroup: User[] = attendedList.map((a) => ({
  contactName: a.contactName,
  isActive: a.isActive === "true",
  isEnabled: a.isEnabled === "true",
  email: a.email,
  avatar: a.avatar,
}));

export const absentGroup: User[] = absentList.map((a) => ({
  contactName: a.contactName,
  isActive: a.isActive === "true",
  isEnabled: a.isEnabled === "true",
  email: a.email,
  avatar: a.avatar,
}));
