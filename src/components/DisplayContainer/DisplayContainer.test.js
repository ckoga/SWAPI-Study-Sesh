import React from 'react';
import { shallow } from 'enzyme';
import DisplayContainer from './DisplayContainer';

describe('DisplayContainer', () => {
  let movies;
  beforeEach(() => {
    movies = [
      {
        "title": "A New Hope",
        "episode_id": 4,
        "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        "director": "George Lucas",
        "producer": "Gary Kurtz, Rick McCallum",
        "release_date": "1977-05-25",
        "characters": [
          "https://swapi.co/api/people/1/",
          "https://swapi.co/api/people/2/",
          "https://swapi.co/api/people/3/",
          "https://swapi.co/api/people/4/",
          "https://swapi.co/api/people/5/",
          "https://swapi.co/api/people/6/",
          "https://swapi.co/api/people/7/",
          "https://swapi.co/api/people/8/",
          "https://swapi.co/api/people/9/",
          "https://swapi.co/api/people/10/",
          "https://swapi.co/api/people/12/",
          "https://swapi.co/api/people/13/",
          "https://swapi.co/api/people/14/",
          "https://swapi.co/api/people/15/",
          "https://swapi.co/api/people/16/",
          "https://swapi.co/api/people/18/",
          "https://swapi.co/api/people/19/",
          "https://swapi.co/api/people/81/"
        ],
        "planets": [
          "https://swapi.co/api/planets/2/",
          "https://swapi.co/api/planets/3/",
          "https://swapi.co/api/planets/1/"
        ],
        "starships": [
          "https://swapi.co/api/starships/2/",
          "https://swapi.co/api/starships/3/",
          "https://swapi.co/api/starships/5/",
          "https://swapi.co/api/starships/9/",
          "https://swapi.co/api/starships/10/",
          "https://swapi.co/api/starships/11/",
          "https://swapi.co/api/starships/12/",
          "https://swapi.co/api/starships/13/"
        ],
        "vehicles": [
          "https://swapi.co/api/vehicles/4/",
          "https://swapi.co/api/vehicles/6/",
          "https://swapi.co/api/vehicles/7/",
          "https://swapi.co/api/vehicles/8/"
        ],
        "species": [
          "https://swapi.co/api/species/5/",
          "https://swapi.co/api/species/3/",
          "https://swapi.co/api/species/2/",
          "https://swapi.co/api/species/1/",
          "https://swapi.co/api/species/4/"
        ],
        "created": "2014-12-10T14:23:31.880000Z",
        "edited": "2015-04-11T09:46:52.774897Z",
        "url": "https://swapi.co/api/films/1/"
      },
      {
        "title": "Attack of the Clones",
        "episode_id": 2,
        "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
        "director": "George Lucas",
        "producer": "Rick McCallum",
        "release_date": "2002-05-16",
        "characters": [
          "https://swapi.co/api/people/2/",
          "https://swapi.co/api/people/3/",
          "https://swapi.co/api/people/6/",
          "https://swapi.co/api/people/7/",
          "https://swapi.co/api/people/10/",
          "https://swapi.co/api/people/11/",
          "https://swapi.co/api/people/20/",
          "https://swapi.co/api/people/21/",
          "https://swapi.co/api/people/22/",
          "https://swapi.co/api/people/33/",
          "https://swapi.co/api/people/36/",
          "https://swapi.co/api/people/40/",
          "https://swapi.co/api/people/43/",
          "https://swapi.co/api/people/46/",
          "https://swapi.co/api/people/51/",
          "https://swapi.co/api/people/52/",
          "https://swapi.co/api/people/53/",
          "https://swapi.co/api/people/58/",
          "https://swapi.co/api/people/59/",
          "https://swapi.co/api/people/60/",
          "https://swapi.co/api/people/61/",
          "https://swapi.co/api/people/62/",
          "https://swapi.co/api/people/63/",
          "https://swapi.co/api/people/64/",
          "https://swapi.co/api/people/65/",
          "https://swapi.co/api/people/66/",
          "https://swapi.co/api/people/67/",
          "https://swapi.co/api/people/68/",
          "https://swapi.co/api/people/69/",
          "https://swapi.co/api/people/70/",
          "https://swapi.co/api/people/71/",
          "https://swapi.co/api/people/72/",
          "https://swapi.co/api/people/73/",
          "https://swapi.co/api/people/74/",
          "https://swapi.co/api/people/75/",
          "https://swapi.co/api/people/76/",
          "https://swapi.co/api/people/77/",
          "https://swapi.co/api/people/78/",
          "https://swapi.co/api/people/82/",
          "https://swapi.co/api/people/35/"
        ],
        "planets": [
          "https://swapi.co/api/planets/8/",
          "https://swapi.co/api/planets/9/",
          "https://swapi.co/api/planets/10/",
          "https://swapi.co/api/planets/11/",
          "https://swapi.co/api/planets/1/"
        ],
        "starships": [
          "https://swapi.co/api/starships/21/",
          "https://swapi.co/api/starships/39/",
          "https://swapi.co/api/starships/43/",
          "https://swapi.co/api/starships/47/",
          "https://swapi.co/api/starships/48/",
          "https://swapi.co/api/starships/49/",
          "https://swapi.co/api/starships/32/",
          "https://swapi.co/api/starships/52/",
          "https://swapi.co/api/starships/58/"
        ],
        "vehicles": [
          "https://swapi.co/api/vehicles/4/",
          "https://swapi.co/api/vehicles/44/",
          "https://swapi.co/api/vehicles/45/",
          "https://swapi.co/api/vehicles/46/",
          "https://swapi.co/api/vehicles/50/",
          "https://swapi.co/api/vehicles/51/",
          "https://swapi.co/api/vehicles/53/",
          "https://swapi.co/api/vehicles/54/",
          "https://swapi.co/api/vehicles/55/",
          "https://swapi.co/api/vehicles/56/",
          "https://swapi.co/api/vehicles/57/"
        ],
        "species": [
          "https://swapi.co/api/species/32/",
          "https://swapi.co/api/species/33/",
          "https://swapi.co/api/species/2/",
          "https://swapi.co/api/species/35/",
          "https://swapi.co/api/species/6/",
          "https://swapi.co/api/species/1/",
          "https://swapi.co/api/species/12/",
          "https://swapi.co/api/species/34/",
          "https://swapi.co/api/species/13/",
          "https://swapi.co/api/species/15/",
          "https://swapi.co/api/species/28/",
          "https://swapi.co/api/species/29/",
          "https://swapi.co/api/species/30/",
          "https://swapi.co/api/species/31/"
        ],
        "created": "2014-12-20T10:57:57.886000Z",
        "edited": "2015-04-11T09:45:01.623982Z",
        "url": "https://swapi.co/api/films/5/"
      },
      {
        "title": "The Phantom Menace",
        "episode_id": 1,
        "opening_crawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
        "director": "George Lucas",
        "producer": "Rick McCallum",
        "release_date": "1999-05-19",
        "characters": [
          "https://swapi.co/api/people/2/",
          "https://swapi.co/api/people/3/",
          "https://swapi.co/api/people/10/",
          "https://swapi.co/api/people/11/",
          "https://swapi.co/api/people/16/",
          "https://swapi.co/api/people/20/",
          "https://swapi.co/api/people/21/",
          "https://swapi.co/api/people/32/",
          "https://swapi.co/api/people/33/",
          "https://swapi.co/api/people/34/",
          "https://swapi.co/api/people/36/",
          "https://swapi.co/api/people/37/",
          "https://swapi.co/api/people/38/",
          "https://swapi.co/api/people/39/",
          "https://swapi.co/api/people/40/",
          "https://swapi.co/api/people/41/",
          "https://swapi.co/api/people/42/",
          "https://swapi.co/api/people/43/",
          "https://swapi.co/api/people/44/",
          "https://swapi.co/api/people/46/",
          "https://swapi.co/api/people/48/",
          "https://swapi.co/api/people/49/",
          "https://swapi.co/api/people/50/",
          "https://swapi.co/api/people/51/",
          "https://swapi.co/api/people/52/",
          "https://swapi.co/api/people/53/",
          "https://swapi.co/api/people/54/",
          "https://swapi.co/api/people/55/",
          "https://swapi.co/api/people/56/",
          "https://swapi.co/api/people/57/",
          "https://swapi.co/api/people/58/",
          "https://swapi.co/api/people/59/",
          "https://swapi.co/api/people/47/",
          "https://swapi.co/api/people/35/"
        ],
        "planets": [
          "https://swapi.co/api/planets/8/",
          "https://swapi.co/api/planets/9/",
          "https://swapi.co/api/planets/1/"
        ],
        "starships": [
          "https://swapi.co/api/starships/40/",
          "https://swapi.co/api/starships/41/",
          "https://swapi.co/api/starships/31/",
          "https://swapi.co/api/starships/32/",
          "https://swapi.co/api/starships/39/"
        ],
        "vehicles": [
          "https://swapi.co/api/vehicles/33/",
          "https://swapi.co/api/vehicles/34/",
          "https://swapi.co/api/vehicles/35/",
          "https://swapi.co/api/vehicles/36/",
          "https://swapi.co/api/vehicles/37/",
          "https://swapi.co/api/vehicles/38/",
          "https://swapi.co/api/vehicles/42/"
        ],
        "species": [
          "https://swapi.co/api/species/1/",
          "https://swapi.co/api/species/2/",
          "https://swapi.co/api/species/6/",
          "https://swapi.co/api/species/11/",
          "https://swapi.co/api/species/12/",
          "https://swapi.co/api/species/13/",
          "https://swapi.co/api/species/14/",
          "https://swapi.co/api/species/15/",
          "https://swapi.co/api/species/16/",
          "https://swapi.co/api/species/17/",
          "https://swapi.co/api/species/18/",
          "https://swapi.co/api/species/19/",
          "https://swapi.co/api/species/20/",
          "https://swapi.co/api/species/21/",
          "https://swapi.co/api/species/22/",
          "https://swapi.co/api/species/23/",
          "https://swapi.co/api/species/24/",
          "https://swapi.co/api/species/25/",
          "https://swapi.co/api/species/26/",
          "https://swapi.co/api/species/27/"
        ],
        "created": "2014-12-19T16:52:55.740000Z",
        "edited": "2015-04-11T09:45:18.689301Z",
        "url": "https://swapi.co/api/films/4/"
      }
    ]
  })


  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<DisplayContainer data={movies}/>)
    expect(wrapper).toMatchSnapshot();
  })
})