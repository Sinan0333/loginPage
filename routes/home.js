const express = require("express");
const router = express.Router();


router.get("/", function (req, res, next) {
  const items = [
    {
      name: "Black Adam (2022)",
      image: "https://m.media-amazon.com/images/M/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      desc: "5,000 years have passed since Black Adam was imprisioned, and he has gone from man to myth to legend. Now free, his unique form of justice, born out of rage, is challenged by modern-day heroes who form the Justice Society.",
    },
    {
      name: "Avengers: Endgame (2019)",
      image: "https://tse3.mm.bing.net/th?id=OIP.VARIf9lcBeTWV96BCLOYXQHaK-&pid=Api&P=0",
      desc: "The grave course of events set in motion by Thanos, that wiped out half the universe and fractured the Avengers ranks, compels the remaining Avengers to take one final stand. The Avengers must reunite and assemble again.",
    },    
    {
      name: "Guardians of the Galaxy Vol. 2 (2017)",
      image: "http://cdn.collider.com/wp-content/uploads/2017/03/guardians-of-the-galaxy-2-imax-poster.jpg",
      desc: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    },
    {
      name: "World War Z (2013)",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.s9d3Fn-71GG-3Mmo1kGhFQHaLH&pid=Api&P=0",
      desc: "Former United Nations employee Gerry Lane traverses the world in a race against time to stop the Zombie pandemic that is toppling armies and governments, and threatening to destroy humanity itself.",
    },
    {
      name: "Justice League (2017)",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.dbLGZBZIA-CQQlqmFFSjDAHaLH&pid=Api&P=0",
      desc: "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists Superman, Green Lantern, Wonder Woman, Aquaman, the Flash and other superheroes unite to fight against evil forces.",
    },
    {
      name: "Spider-Man: No Way Home (2021)",
      image: "https://www.chunkys.com/nas/content/live/chunkys/wp-content/uploads/2021/11/Spider-Man-No-Way-Home-Poster-1.jpg",
      desc: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    },
    {
      name: "Gemini Man (2019)",
      image: "https://tse3.mm.bing.net/th?id=OIP.elNMTszX9ZZN4XltDTqUJwHaK-&pid=Api&P=0",
      desc: "A retiring assassin, Henry Brogan, finds himself pursued by a mysterious killer that can predict his every move. Discovering that he's being hunted by a younger clone of himself, Henry needs to find out why he's being targeted and who the creator is.",
    },
    {
      name: "Godzilla vs. Kong (2021)",
      image: "https://tse1.mm.bing.net/th?id=OIP.do9xkvndBPk7XvUD6-4iwgHaLe&pid=Api&P=0",
      desc: "The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against one another - the fearsome Godzilla and the mighty Kong - with humanity caught in the balance.",
    },
    {
      name: "Venom (2018)",
      image: "https://tse3.mm.bing.net/th?id=OIP.SrvtihfHDvqcHr8W9nz15gHaK_&pid=Api&P=0",
      desc: "When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego venom, to save his life.",
    },
    {
      name: "House of the Dragon Season 1",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.t38XbE_nMdFR7CkUTYC-cgHaLM&pid=Api&P=0",
      desc: "The story of the House Targaryen set 200 years before the events of Game of Thrones (2011).",
    },    
    {
      name: "John Wick: Chapter 2 (2017)",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.pTzH0mOFh0NvSMNLy1bhNwHaLH&pid=Api&P=0",
      desc: "After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.",
    },
    {
      name: "Thor: Love and Thunder (2022)",
      image:
        "https://cdnb.artstation.com/p/assets/images/images/019/493/757/large/hyper-9-thor.jpg?1563761562",
      desc: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
    },
    
  ];
  if (req.session.login) {
    res.render("home", { items });
  } else {
    res.redirect("/");
  }
});

module.exports = router;
