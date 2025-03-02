import { ImageSourcePropType } from "react-native";

export interface MainGuest {
  id: number;
  name: string;
  relatedGuests: RelatedGuest[];
  cabin: string;
}

export interface RelatedGuest {
  id: number;
  name: string;
}

export interface Guest {
  id: number;
  name: string;
  role: string;
}

export interface Party {
  id: number;
  name: string;
  guests: Guest[];
  cabin: string;
}

export const getAvatar = (guestId: number) => {
  switch (guestId) {
    case 1:
      return require("../assets/guests/terry.png");
    case 2:
      return require("../assets/guests/paulw.png");
    case 3:
      return require("../assets/guests/jo.png");
    case 4:
      return require("../assets/guests/paulg.png");
    case 5:
      return require("../assets/guests/lee.png");
    case 6:
      return require("../assets/guests/becky.png");
    case 7:
      return require("../assets/guests/dino.png");
    case 8:
      return require("../assets/guests/pooh.png");
    case 9:
      return require("../assets/guests/cait.png");
    case 10:
      return require("../assets/guests/kieran.png");
    case 11:
      return require("../assets/guests/calum.png");
    case 12:
      return require("../assets/guests/kirstie.png");
    case 13:
      return require("../assets/guests/joe.png");
    case 14:
      return require("../assets/guests/megan.png");
    case 15:
      return require("../assets/guests/dan.png");
    case 16:
      return require("../assets/guests/rachel.png");
    case 17:
      return require("../assets/guests/jon.png");
    case 18:
      return require("../assets/guests/amy.png");
    case 19:
      return require("../assets/guests/tom.jpg");
    case 20:
      return require("../assets/guests/katey.jpg");
    case 21:
      return require("../assets/guests/scooby.jpg");
    case 22:
      return require("../assets/guests/henry.jpg");
    case 23:
      return require("../assets/guests/leah.png");
    case 24:
      return require("../assets/guests/jaimes.png");
    case 25:
      return require("../assets/guests/anna.png");
    case 26:
      return require("../assets/guests/jamie.png");
    case 27:
      return require("../assets/guests/jackjack.png");
    case 28:
      return require("../assets/guests/jack.jpg");
    case 29:
      return require("../assets/guests/lottie.png");
  }
};

export const parties: Party[] = [
  {
    id: 1,
    name: "Terry & Paul",
    cabin: "Babar",
    guests: [
      {
        id: 1,
        name: "Terry",
        role: "Mother of the Groom",
      },
      {
        id: 2,
        name: "Paul",
        role: "Father of the Groom",
      },
    ],
  },
  {
    id: 2,
    name: "Jo & Paul",
    cabin: "Doris",
    guests: [
      {
        id: 3,
        name: "Jo",
        role: "Mother of the Bride",
      },
      {
        id: 4,
        name: "Paul",
        role: "Father of the Bride",
      },
    ],
  },
  {
    id: 3,
    name: "Lee & Becky",
    cabin: "Caesar",
    guests: [
      {
        id: 5,
        name: "Lee",
        role: "Best Man",
      },
      {
        id: 6,
        name: "Becky",
        role: "Jack's Sister-in-law",
      },
      {
        id: 7,
        name: "Harrison",
        role: "Page Boy",
      },
      {
        id: 8,
        name: "Orla",
        role: "Flower Girl",
      },
    ],
  },
  {
    id: 4,
    name: "Cait & Kieran",
    cabin: "Milo",
    guests: [
      {
        id: 9,
        name: "Cait",
        role: "Maid of Honour",
      },
      {
        id: 10,
        name: "Kieran",
        role: "Cait's Partner",
      },
    ],
  },
  {
    id: 5,
    name: "Calum & Kirstie",
    cabin: "Snowy",
    guests: [
      {
        id: 11,
        name: "Calum",
        role: "Lottie's Brother",
      },
      {
        id: 12,
        name: "Kirstie",
        role: "Lottie's Sister-in-law",
      },
    ],
  },
  {
    id: 6,
    name: "Joe & Megan",
    cabin: "Snowy",
    guests: [
      {
        id: 13,
        name: "Joe",
        role: "Lottie's Brother",
      },
      {
        id: 14,
        name: "Megan",
        role: "Joe's Partner",
      },
    ],
  },
  {
    id: 7,
    name: "Dan & Rachel",
    cabin: "Seven",
    guests: [
      {
        id: 15,
        name: "Dan",
        role: "Lottie's Brother",
      },
      {
        id: 16,
        name: "Rachel",
        role: "Lottie's Sister-in-law",
      },
    ],
  },
  {
    id: 8,
    name: "Jon & Amy",
    cabin: "Seven",
    guests: [
      {
        id: 17,
        name: "Jon",
        role: "Lottie's Brother",
      },
      {
        id: 18,
        name: "Amy",
        role: "Lottie's Sister-in-law",
      },
    ],
  },
  {
    id: 9,
    name: "Tom & Katey",
    cabin: "Gloria",
    guests: [
      {
        id: 19,
        name: "Tom",
        role: "Jack's Friend",
      },
      {
        id: 20,
        name: "Katey",
        role: "Tom's Wife",
      },
      {
        id: 21,
        name: "Arthur",
        role: "Tom's Son",
      },
      {
        id: 22,
        name: "Henry",
        role: "Tom's Son",
      },
    ],
  },
  {
    id: 10,
    name: "Leah & Jaimes",
    cabin: "Reuben",
    guests: [
      {
        id: 23,
        name: "Leah",
        role: "Lottie's Friend",
      },
      {
        id: 24,
        name: "Jaimes",
        role: "Leah's Fiance",
      },
    ],
  },
  {
    id: 11,
    name: "Anna & Jamie",
    cabin: "Winston",
    guests: [
      {
        id: 25,
        name: "Anna",
        role: "Lottie's Friend",
      },
      {
        id: 26,
        name: "Jamie",
        role: "Anna's Partner",
      },
      {
        id: 27,
        name: "Foy",
        role: "Anna & Jamie's Baby",
      },
    ],
  },
  {
    id: 12,
    name: "Jack & Lottie",
    cabin: "Grumbles",
    guests: [
      {
        id: 28,
        name: "Jack",
        role: "Groom",
      },
      {
        id: 29,
        name: "Lottie",
        role: "Bride",
      },
    ],
  },
];
