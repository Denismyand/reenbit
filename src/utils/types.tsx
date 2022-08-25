export type Users = User[];

export type User = {
  id: string;
  name: string;
  surname: string;
  profilePic: string;
  online: boolean;
  messages: Message[];
};

export type Message = {
  message: string;
  type: "sent" | "received";
  time: number;
};

export type MiniProfileData = {
  name: string;
  profilePic: string;
  online: boolean;
};

export type ContactsState = {
  contacts: Users;
  auth: string;
};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_CLIENT_ID: string;
    }
  }
}
