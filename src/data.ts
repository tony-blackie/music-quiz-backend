type Song = {
  id: string;
  artist: string;
  name: string;
  audioUrl: string;
  about: string;
};

type SongNames = {
  [questionIndex: number]: Song[];
};

export const songs: SongNames = {
  1: [
    {
      id: "1",
      artist: "Louis Armstrong",
      name: "What a wonderful world",
      audioUrl: "/songs/1-1.mp3",
      about: "",
    },
    {
      id: "2",
      artist: "Miles Davis",
      name: "Eddie Freeloader",
      audioUrl: "/songs/1-2.mp3",
      about: "",
    },
    {
      id: "3",
      artist: "Ella Fitzgerald",
      name: "Blue Skies",
      audioUrl: "/songs/1-3.mp3",
      about: "",
    },
    {
      id: "4",
      artist: "John Coltrane",
      name: "Everytime we say goodbye",
      audioUrl: "/songs/1-4.mp3",
      about: "",
    },
  ],
  2: [
    {
      id: "5",
      artist: "Pink Floyd",
      name: "High Hopes",
      audioUrl: "/songs/2-1.mp3",
      about: "",
    },
    {
      id: "6",
      artist: "AC/DC",
      name: "Thunderstruck",
      audioUrl: "/songs/2-2.mp3",
      about: "",
    },
    {
      id: "7",
      artist: "Linkin Park",
      name: "Numb",
      audioUrl: "/songs/2-3.mp3",
      about: "",
    },
    {
      id: "8",
      artist: "Nickelback",
      name: "When we stand together",
      audioUrl: "/songs/2-4.mp3",
      about: "",
    },
  ],
  3: [
    {
      id: "9",
      artist: "Beyonce",
      name: "Halo",
      audioUrl: "/songs/3-1.mp3",
      about: "",
    },
    {
      id: "10",
      artist: "Michael Jackson",
      name: "Smooth Criminal",
      audioUrl: "/songs/3-2.mp3",
      about: "",
    },
    {
      id: "11",
      artist: "Madonna",
      name: "Hung Up",
      audioUrl: "/songs/3-3.mp3",
      about: "",
    },
    {
      id: "12",
      artist: "Elton John",
      name: "I'm still standing",
      audioUrl: "/songs/3-4.mp3",
      about: "",
    },
  ],
  4: [
    {
      id: "13",
      artist: "Hans Zimmer",
      name: "Time",
      audioUrl: "/songs/4-1.mp3",
      about: "",
    },
    {
      id: "14",
      artist: "Ludovico Einaudi",
      name: "Oltermare",
      audioUrl: "/songs/4-2.mp3",
      about: "",
    },
    {
      id: "15",
      artist: "Max Richter",
      name: "Nature of Daylight",
      audioUrl: "/songs/4-3.mp3",
      about: "",
    },
    {
      id: "16",
      artist: "Yann Tiersen",
      name: "La valse d'Amelie",
      audioUrl: "/songs/4-4.mp3",
      about: "",
    },
  ],
};
