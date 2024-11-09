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
  picture: ImageSourcePropType;
}

export interface Party {
  id: number;
  name: string;
  guests: Guest[];
  cabin: string;
}

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
        picture: require("../assets/guests/terry.png"),
      },
      {
        id: 2,
        name: "Paul",
        role: "Father of the Groom",
        picture: require("../assets/guests/paulw.png"),
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
        picture: require("../assets/guests/jo.png"),
      },
      {
        id: 4,
        name: "Paul",
        role: "Father of the Bride",
        picture: require("../assets/guests/paulg.png"),
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
        picture: require("../assets/guests/lee.png"),
      },
      {
        id: 6,
        name: "Becky",
        role: "Jack's Sister-in-law",
        picture: require("../assets/guests/becky.png"),
      },
      {
        id: 7,
        name: "Harrison",
        role: "Page Boy",
        picture: require("../assets/guests/dino.png"),
      },
      {
        id: 8,
        name: "Orla",
        role: "Flower Girl",
        picture: require("../assets/guests/pooh.png"),
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
        picture: require("../assets/guests/cait.png"),
      },
      {
        id: 10,
        name: "Kieran",
        role: "Cait's Partner",
        picture: require("../assets/guests/kieran.png"),
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
        picture: require("../assets/guests/calum.png"),
      },
      {
        id: 12,
        name: "Kirstie",
        role: "Lottie's Sister-in-law",
        picture: require("../assets/guests/kirstie.png"),
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
        picture: require("../assets/guests/joe.png"),
      },
      {
        id: 14,
        name: "Megan",
        role: "Joe's Partner",
        picture: require("../assets/guests/megan.png"),
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
        picture: require("../assets/guests/dan.png"),
      },
      {
        id: 16,
        name: "Rachel",
        role: "Lottie's Sister-in-law",
        picture: require("../assets/guests/rachel.png"),
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
        picture: require("../assets/guests/jon.png"),
      },
      {
        id: 18,
        name: "Amy",
        role: "Lottie's Sister-in-law",
        picture: require("../assets/guests/amy.png"),
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
        picture: require("../assets/guests/tom.jpg"),
      },
      {
        id: 20,
        name: "Katey",
        role: "Tom's Wife",
        picture: require("../assets/guests/katey.jpg"),
      },
      {
        id: 21,
        name: "Arthur",
        role: "Tom's Son",
        picture: require("../assets/guests/scooby.jpg"),
      },
      {
        id: 22,
        name: "Henry",
        role: "Tom's Son",
        picture: require("../assets/guests/henry.jpg"),
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
        picture: require("../assets/guests/leah.png"),
      },
      {
        id: 24,
        name: "Jaimes",
        role: "Leah's Fiance",
        picture: require("../assets/guests/jaimes.png"),
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
        picture: require("../assets/guests/anna.png"),
      },
      {
        id: 26,
        name: "Jamie",
        role: "Anna's Partner",
        picture: require("../assets/guests/jamie.png"),
      },
      {
        id: 27,
        name: "Baby Kirke",
        role: "Anna & Jamie's Baby",
        picture: require("../assets/guests/jackjack.png"),
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
        picture: require("../assets/guests/jack.jpg"),
      },
      {
        id: 29,
        name: "Lottie",
        role: "Bride",
        picture: require("../assets/guests/lottie.png"),
      },
    ],
  },
];
