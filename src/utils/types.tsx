export type Users = User[];

export type User = {
  id: string;
  name: string;
  surname: string;
  profilePic: string;
  online: boolean;
  messages: Message[];
};

type Message = {
  message: string;
  type: "sent" | "received";
  time: number;
};

export type MiniProfileData = {
  name: string;
  profilePic: string;
  online: boolean;
};

export type ContactsSlice = {
  contacts: Users;
};
