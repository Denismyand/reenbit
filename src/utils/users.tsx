import { v4 as uuidv4 } from "uuid";

export const users = [
  {
    id: uuidv4(),
    name: "Chrollo",
    surname: "Lucifer",
    profilePic:
      "https://res.cloudinary.com/nvmate/image/upload/v1661189924/H%20x%20H/chrollo_lucifer_upy4v9.jpg",
    status: "online",
    messages: [
      { message: "Well. Hello there.", sender: "bot", time: 1661190748325 },
    ],
  },
  {
    id: uuidv4(),
    name: "Gon",
    surname: "Freecss",
    profilePic:
      "https://res.cloudinary.com/nvmate/image/upload/v1661189924/H%20x%20H/gon_freecss_driskj.jpg",
    status: "online",
    messages: [{ message: "OZ!", sender: "bot", time: 1661190811333 }],
  },
  {
    id: uuidv4(),
    name: "Illumi",
    surname: "Zoldick",
    profilePic:
      "https://res.cloudinary.com/nvmate/image/upload/v1661189923/H%20x%20H/illumi_zoldick_zyfgbh.jpg",
    status: "online",
    messages: [
      {
        message: "Did you not recognize me?",
        sender: "bot",
        time: 1661191012510,
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Morel",
    surname: "Mackernacy",
    profilePic:
      "https://res.cloudinary.com/nvmate/image/upload/v1661189923/H%20x%20H/morel_mackernasey_udc2pw.jpg",
    status: "online",
    messages: [
      {
        message: "*cough*",
        sender: "bot",
        time: 1661191031569,
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Killua",
    surname: "Zoldick",
    profilePic:
      "https://res.cloudinary.com/nvmate/image/upload/v1661189923/H%20x%20H/killua_zoldyck_xnibj9.jpg",
    status: "online",
    messages: [{ message: "Meow.", sender: "bot", time: 1661191051364 }],
  },
  {
    id: uuidv4(),
    name: "Ging",
    surname: "Freecss",
    profilePic:
      "https://res.cloudinary.com/nvmate/image/upload/v1661189923/H%20x%20H/ging_freecss_nmevpf.jpg",
    status: "online",
    messages: [{ message: "...", sender: "bot", time: 1661191072075 }],
  },
  {
    id: uuidv4(),
    name: "Isaac",
    surname: "Netero",
    profilePic:
      "https://res.cloudinary.com/nvmate/image/upload/v1661189923/H%20x%20H/isaac_netero_xk23p5.jpg",
    status: "offline",
    messages: [
      { message: "Helooo, hahahaha.", sender: "bot", time: 1661191091819 },
    ],
  },
  {
    id: uuidv4(),
    name: "Hisoka",
    surname: "Morow",
    profilePic:
      "https://res.cloudinary.com/nvmate/image/upload/v1661189923/H%20x%20H/hisoka_morow_ntfade.jpg",
    status: "online",
    messages: [
      { message: "Ahh, here you are.", sender: "bot", time: 1661191136526 },
    ],
  },
];
