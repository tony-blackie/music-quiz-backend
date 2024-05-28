type Song = {
  id: string;
  artist: string;
  name: string;
  audioUrl: string;
  songImageUrl: string;
  artistImageUrl: string;
  about: string;
};

type Songs = {
  [questionIndex: number]: Song[];
};

export const songs: Songs = {
  1: [
    {
      id: "1",
      artist: "Louis Armstrong",
      name: "What a wonderful world",
      audioUrl: "/songs/1-1.mp3",
      songImageUrl: "/images/1-1.jpg",
      artistImageUrl: "/full-images/1-1.jpg",
      about:
        "Louis Armstrong is considered the leading trumpeter and one of the most influential artists in jazz history, who helped develop jazz into a fine art. His beautiful tone and gift for bravura solos ending in high-note climaxes led to such masterworks as his recordings of “That's My Home,” “Body and Soul,” and “Star Dust.”",
    },
    {
      id: "2",
      artist: "Miles Davis",
      name: "Eddie Freeloader",
      audioUrl: "/songs/1-2.mp3",
      songImageUrl: "/images/1-2.jpg",
      artistImageUrl: "/full-images/1-2.jpg",
      about:
        "Miles Davis was arguably the most influential jazz musician in the post-World War II period, being at the forefront of changes in the genre for more than 40 years. His work “Kind of Blue” is widely considered to be the best album in jazz history",
    },
    {
      id: "3",
      artist: "Ella Fitzgerald",
      name: "Blue Skies",
      audioUrl: "/songs/1-3.mp3",
      songImageUrl: "/images/1-3.jpg",
      artistImageUrl: "/full-images/1-3.jpg",
      about:
        "Dubbed “The First Lady of Song,” Ella Fitzgerald was the most popular female jazz singer in the United States for more than half a century. In her lifetime, she won 13 Grammy awards and sold over 40 million albums.",
    },
    {
      id: "4",
      artist: "John Coltrane",
      name: "Everytime we say goodbye",
      audioUrl: "/songs/1-4.mp3",
      songImageUrl: "/images/1-4.jpg",
      artistImageUrl: "/full-images/1-4.jpg",
      about:
        "John William Coltrane is one of the most influential jazz musicians to ever play, and today remains even more relevant than during his life. A saxophonist, he was initially drawn to the popular jazz formats of bebop and hard bop, before eventually becoming one of the guiding forces behind free jazz.",
    },
  ],
  2: [
    {
      id: "5",
      artist: "Pink Floyd",
      name: "High Hopes",
      audioUrl: "/songs/2-1.mp3",
      songImageUrl: "/images/2-1.jpg",
      artistImageUrl: "/full-images/2-1.jpg",
      about:
        "Pink Floyd are an English rock band formed in London in 1965. Gaining an early following as one of the first British psychedelic groups, they were distinguished by their extended compositions, sonic experiments, philosophical lyrics, and elaborate live shows. They became a leading band of the progressive rock genre, cited by some as the greatest progressive rock band of all time.",
    },
    {
      id: "6",
      artist: "AC/DC",
      name: "Thunderstruck",
      audioUrl: "/songs/2-2.mp3",
      songImageUrl: "/images/2-2.jpg",
      artistImageUrl: "/full-images/2-2.jpg",
      about:
        "AC/DC, Australian heavy metal band whose theatrical high-energy shows placed them among the most popular stadium performers of the 1980s. Their music has been variously described as hard rock, blues rock and heavy metal, but the band calls it simply rock and roll. They are cited as a formative influence on the new wave of British heavy metal bands",
    },
    {
      id: "7",
      artist: "Linkin Park",
      name: "Numb",
      audioUrl: "/songs/2-3.mp3",
      songImageUrl: "/images/2-3.jpg",
      artistImageUrl: "/full-images/2-3.jpg",
      about:
        "Linkin Park is among both the best-selling bands of the 21st century and the world's best-selling music artists, having sold over 100 million records worldwide. Linkin Park had found a successful formula for blending nu metal and alternative rock.",
    },
    {
      id: "8",
      artist: "Nickelback",
      name: "When we stand together",
      audioUrl: "/songs/2-4.mp3",
      songImageUrl: "/images/2-4.jpg",
      artistImageUrl: "/full-images/2-4.jpg",
      about:
        'One of the most commercially successful Canadian rock bands of all time, Nickelback released a string of top 10 hits like 2001\'s "How You Remind Me," 2005\'s "Photograph" and 2007\'s "Rockstar." Based on their chart success, the band was crowned as the top group of the 2000s by Billboard.',
    },
  ],
  3: [
    {
      id: "9",
      artist: "Beyonce",
      name: "Halo",
      audioUrl: "/songs/3-1.mp3",
      songImageUrl: "/images/3-1.jpg",
      artistImageUrl: "/full-images/3-1.jpg",
      about:
        "Beyoncé achieved fame in the late 1990s as the lead singer of the R&B group Destiny's Child and then launched a hugely successful solo career. She is regarded as a prominent cultural figure of the 21st century and has been recognized for her artistry and performances",
    },
    {
      id: "10",
      artist: "Michael Jackson",
      name: "Smooth Criminal",
      audioUrl: "/songs/3-2.mp3",
      songImageUrl: "/images/3-2.jpg",
      artistImageUrl: "/full-images/3-2.jpg",
      about:
        "Michael Joseph Jackson was an American singer, songwriter, dancer, and one of the most influential and iconic pop music entertainers of all time. He was nicknamed the “King of Pop” by his close and long-time friend Elizabeth Taylor, a title that stuck after striking a chord with fans.",
    },
    {
      id: "11",
      artist: "Madonna",
      name: "Hung Up",
      audioUrl: "/songs/3-3.mp3",
      songImageUrl: "/images/3-3.jpg",
      artistImageUrl: "/full-images/3-3.jpg",
      about:
        'Madonna Louise Ciccone is an American singer, songwriter, and actress. Nicknamed the "Queen of Pop", she has been recognized for her continual reinvention and versatility in music production, songwriting and visual presentation.',
    },
    {
      id: "12",
      artist: "Elton John",
      name: "I'm still standing",
      audioUrl: "/songs/3-4.mp3",
      songImageUrl: "/images/3-4.jpg",
      artistImageUrl: "/full-images/3-4.jpg",
      about:
        "Elton John is a British singer, pianist and composer. Along with selling more than 300 million records, he has found success on Broadway, composing the music score for the Tony award-winning hit 'Billy Elliot.'",
    },
  ],
  4: [
    {
      id: "13",
      artist: "Hans Zimmer",
      name: "Time",
      audioUrl: "/songs/4-1.mp3",
      songImageUrl: "/images/4-1.jpg",
      artistImageUrl: "/full-images/4-1.jpg",
      about:
        "Hans Zimmer (1957-present) is a German film score composer and music producer, who has composed music for over 100 films, including Hollywood blockbusters such as the Pirates of the Caribbean series, Gladiator, The Lion King, The Da Vinci Code, Angels & Demons and Sherlock Holmes.",
    },
    {
      id: "14",
      artist: "Ludovico Einaudi",
      name: "Oltermare",
      audioUrl: "/songs/4-2.mp3",
      songImageUrl: "/images/4-2.jpg",
      artistImageUrl: "/full-images/4-2.jpg",
      about:
        "The Turin-born musician has cornered the market in post-classical ambient music, and while he may be best known for his solo piano musings, writing scores for films, including This is England, I'm Still Here, 1+1 (The Intouchables) and many more",
    },
    {
      id: "15",
      artist: "Max Richter",
      name: "Nature of Daylight",
      audioUrl: "/songs/4-3.mp3",
      songImageUrl: "/images/4-3.jpg",
      artistImageUrl: "/full-images/4-3.jpg",
      about:
        "Max Richter is one of the most influential figures on the contemporary music scene, producing groundbreaking work as a recording artist, composer, pianist, and collaborator. He is best known for his genre-defying solo albums including The Blue Notebooks, named by The Guardian as one of the best classical music works of the 21st Century, Recomposed By Max Richter: Vivaldi - The Four Seasons, which topped the classical chart in 22 countries, and his landmark eight-hour magnum opus Sleep praised by Pitchfork magazine as one of the 50 best ambient albums of all time.",
    },
    {
      id: "16",
      artist: "Yann Tiersen",
      name: "La valse d'Amelie",
      audioUrl: "/songs/4-4.mp3",
      songImageUrl: "/images/4-4.jpg",
      artistImageUrl: "/full-images/4-4.jpg",
      about:
        "Yann Tiersen is a French composer and musician whose name is synonymous with emotional and evocative compositions. Although he is best known for his iconic soundtrack for the movie “Amélie,” his career encompasses much more than this work.",
    },
  ],
};
