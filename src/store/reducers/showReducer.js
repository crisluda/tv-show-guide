import ShowActionTypes from '../types/showTypes';

const initialState = {
  shows: [],
  pending: false,
  error: null,
};

// const initialStates = {
//   shows: [
//     [{
//       score: 17.763971,
//       show: {
//         id: 1715, url: 'http://www.tvmaze.com/shows/1715/counting-cars', name: 'Counting Cars', type: 'Reality', language: 'English', genres: [], status: 'Running', runtime: 60, premiered: '2012-08-13', officialSite: 'http://www.history.com/shows/counting-cars', schedule: { time: '21:00', days: ['Wednesday'] }, rating: { average: 8.1 }, weight: 98, network: { id: 53, name: 'History', country: { name: 'United States', code: 'US', timezone: 'America/New_York' } }, webChannel: null, externals: { tvrage: 32440, thetvdb: 261181, imdb: 'tt2338096' }, image: { medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/9/24055.jpg', original: 'http://static.tvmaze.com/uploads/images/original_untouched/9/24055.jpg' }, summary: "<p>Most people in Las Vegas bet with chips, but Danny \"The Count\" Koker bets with cars. Known from his numerous appearances on Pawn Stars, this Sin City legend walks, talks and breathes classic American muscle cars. When he sees a car he wants, he will do whatever it takes to get his hands on it—including making on-the-spot cash offers to unsuspecting owners. On the HISTORY series <b>Counting Cars</b>, Danny and his team restore, customize and sell cars in a hurry, scrambling to keep their Las Vegas shop in the black. From vintage Thunderbirds to classic Corvettes, toy cars to souped-up sidecar motorcycles, Danny and the crew of Count's Kustoms will stop at nothing to find and flip the greatest rides of all time.</p>", updated: 1602101679, _links: { self: { href: 'http://api.tvmaze.com/shows/1715' }, previousepisode: { href: 'http://api.tvmaze.com/episodes/1928200' }, nextepisode: { href: 'http://api.tvmaze.com/episodes/1941240' } },
//       },
//     }, {
//       score: 12.3815155,
//       show: {
//         id: 34404, url: 'http://www.tvmaze.com/shows/34404/salvage-hunters-classic-cars', name: 'Salvage Hunters: Classic Cars', type: 'Documentary', language: 'English', genres: [], status: 'To Be Determined', runtime: 60, premiered: '2018-01-17', officialSite: 'https://www.questtv.co.uk/salvage-hunters-classiccars', schedule: { time: '21:00', days: ['Wednesday'] }, rating: { average: null }, weight: 0, network: { id: 368, name: 'Quest', country: { name: 'United Kingdom', code: 'GB', timezone: 'Europe/London' } }, webChannel: null, externals: { tvrage: null, thetvdb: null, imdb: null }, image: { medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/142/356595.jpg', original: 'http://static.tvmaze.com/uploads/images/original_untouched/142/356595.jpg' }, summary: "<p>Salvage aficionado, Drew Pritchard teams up with Turbo Pickers' Paul Cowland for an epic motoring mission. They scour the UK, buying, restoring and selling classic cars.</p>", updated: 1591627688, _links: { self: { href: 'http://api.tvmaze.com/shows/34404' }, previousepisode: { href: 'http://api.tvmaze.com/episodes/1837976' } },
//       },
//     }, {
//       score: 12.123087,
//       show: {
//         id: 16456, url: 'http://www.tvmaze.com/shows/16456/counting-cars-supercharged', name: 'Counting Cars Supercharged', type: 'Reality', language: 'English', genres: [], status: 'Running', runtime: 30, premiered: '2016-04-26', officialSite: 'http://www.history.com/shows/counting-cars', schedule: { time: '21:00', days: ['Saturday'] }, rating: { average: null }, weight: 48, network: { id: 53, name: 'History', country: { name: 'United States', code: 'US', timezone: 'America/New_York' } }, webChannel: null, externals: { tvrage: null, thetvdb: null, imdb: null }, image: { medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/54/137116.jpg', original: 'http://static.tvmaze.com/uploads/images/original_untouched/54/137116.jpg' }, summary: "<p>Counting Cars shows the work that Danny \"The Count\" Koker and his crew go through to restore and customize classic vehicles, from acquiring the rides -- whether he finds them at an auto auction or a roadside diner -- to restoring and modifying the vehicles to help flip them for profit. Classic cars, like Thunderbirds and Corvettes, and motorcycles are often seen in his shop, Count's Kustoms. This edition <b>Counting Cars Supercharged</b> of the half-hour show features enhanced versions of episodes that previously aired as part of the original run.</p>", updated: 1560286994, _links: { self: { href: 'http://api.tvmaze.com/shows/16456' }, previousepisode: { href: 'http://api.tvmaze.com/episodes/1272490' } },
//       },
//     }, {
//       score: 12.114324,
//       show: {
//         id: 1645, url: 'http://www.tvmaze.com/shows/1645/comedians-in-cars-getting-coffee', name: 'Comedians in Cars Getting Coffee', type: 'Talk Show', language: 'English', genres: ['Comedy'], status: 'To Be Determined', runtime: null, premiered: '2012-07-19', officialSite: 'https://www.netflix.com/title/80171362', schedule: { time: '', days: [] }, rating: { average: 7.4 }, weight: 70, network: null, webChannel: { id: 1, name: 'Netflix', country: null }, externals: { tvrage: 32630, thetvdb: 260845, imdb: 'tt2314952' }, image: { medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/203/509996.jpg', original: 'http://static.tvmaze.com/uploads/images/original_untouched/203/509996.jpg' }, summary: "<p>In <b>Comedians in Cars Getting Coffee</b>, comedian Jerry Seinfeld takes his comedy pals out for coffee in a selection of his classic automobiles. Larry David sums it up best when he says, 'You've finally made a show about nothing.</p>", updated: 1601387492, _links: { self: { href: 'http://api.tvmaze.com/shows/1645' }, previousepisode: { href: 'http://api.tvmaze.com/episodes/1684508' } },
//       },
//     }, {
//       score: 11.888283,
//       show: {
//         id: 7488, url: 'http://www.tvmaze.com/shows/7488/chasing-classic-cars', name: 'Chasing Classic Cars', type: 'Reality', language: 'English', genres: [], status: 'Running', runtime: 60, premiered: '2008-06-03', officialSite: 'https://watch.motortrend.com/tv-shows/chasing-classic-cars/', schedule: { time: '22:00', days: ['Tuesday'] }, rating: { average: 6.2 }, weight: 43, network: { id: 142, name: 'MotorTrend', country: { name: 'United States', code: 'US', timezone: 'America/New_York' } }, webChannel: null, externals: { tvrage: null, thetvdb: 172181, imdb: 'tt1357604' }, image: { medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/205/513169.jpg', original: 'http://static.tvmaze.com/uploads/images/original_untouched/205/513169.jpg' }, summary: "<p>Hosted by renowned collector car archeologist, Wayne Carini, <b>Chasing Classic Cars</b> welcomes viewers into the elite world of high-end car collection, as Wayne finds, buys, restores and sells some of the finest and most unique vehicles ever manufactured. In <i>Chasing Classic Cars</i>, Wayne chases down original one-off cars in secret stashes around the country and meets with some of the hobby's most respected collectors, restorers, and artisans, giving viewers insight into the classic car expert's elite inner circle. Whether he is restoring a vintage ride, or searching for a hidden gem in garages around the world, Wayne's straight-shooting sensibility and passion for everything on wheels makes <i>Chasing Classic Cars</i> a must-see for car lovers everywhere.</p>", updated: 1602524968, _links: { self: { href: 'http://api.tvmaze.com/shows/7488' }, previousepisode: { href: 'http://api.tvmaze.com/episodes/1829849' }, nextepisode: { href: 'http://api.tvmaze.com/episodes/1948478' } },
//       },
//     }, {
//       score: 11.878705,
//       show: {
//         id: 5969, url: 'http://www.tvmaze.com/shows/5969/for-the-love-of-cars', name: 'For the Love of Cars', type: 'Documentary', language: 'English', genres: [], status: 'Ended', runtime: 60, premiered: '2014-04-20', officialSite: 'http://www.channel4.com/programmes/for-the-love-of-cars', schedule: { time: '20:00', days: ['Sunday'] }, rating: { average: null }, weight: 0, network: { id: 45, name: 'Channel 4', country: { name: 'United Kingdom', code: 'GB', timezone: 'Europe/London' } }, webChannel: null, externals: { tvrage: 41919, thetvdb: 280820, imdb: null }, image: { medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/23/58714.jpg', original: 'http://static.tvmaze.com/uploads/images/original_untouched/23/58714.jpg' }, summary: '<p>Automobile fanatic Philip Glenister and internationally renowned automobile designer Ant Anstead are on a mission - to scour the barns and lock ups of Britain for wrecked treasures to bring to life.</p><p>These guys cruise for the classics. Meet self-described petrol-sexual motorhead Richard Rawlings and mechanical prodigy Aaron Kaufmann as they search far-flung corners of the country for forgotten and derelict classic cars to restore at their Gas Monkey Garage. Heaps of rust are transformed into gleaming road warriors and sold to the top bidder.</p>', updated: 1545540246, _links: { self: { href: 'http://api.tvmaze.com/shows/5969' }, previousepisode: { href: 'http://api.tvmaze.com/episodes/355794' } },
//       },
//     }, {
//       score: 11.733816,
//       show: {
//         id: 40158, url: 'http://www.tvmaze.com/shows/40158/mystery-cars', name: 'Mystery Cars', type: 'Documentary', language: 'English', genres: [], status: 'Ended', runtime: 30, premiered: null, officialSite: null, schedule: { time: '', days: [] }, rating: { average: null }, weight: 0, network: { id: 66, name: 'Discovery Channel', country: { name: 'United States', code: 'US', timezone: 'America/New_York' } }, webChannel: null, externals: { tvrage: null, thetvdb: 274167, imdb: 'tt5050676' }, image: { medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/220/551666.jpg', original: 'http://static.tvmaze.com/uploads/images/original_untouched/220/551666.jpg' }, summary: "<p>In the 1950's, America had broken free from the shackles of wartime economics. It was walking with the swagger of a Nation that had the world by the tail. Scientists had harnessed nuclear energy. Jetpropelled airplanes were breaking speed records... and the race to space was on! But perhaps more than anything else, one thing melded imagination and consumerism, putting this era in perfect context: The concept car. Unlike satellites, rockets, and jet planes these dream cars were accessible. People flocked to auto shows like GM's Motorama to see the concept cars in their titanium bodied glory. They were snapshots of how America perceived its future. Jaw dropping, unforgettable but what happened then? Most were destroyed. Some just plain vanished. But amazingly, some are still here and new series Mystery Cars is on a mission to find them.</p>", updated: 1573326332, _links: { self: { href: 'http://api.tvmaze.com/shows/40158' } },
//       },
//     }, {
//       score: 11.733816,
//       show: {
//         id: 8110, url: 'http://www.tvmaze.com/shows/8110/z-cars', name: 'Z Cars', type: 'Scripted', language: 'English', genres: ['Drama', 'Crime'], status: 'Ended', runtime: 50, premiered: '1962-01-02', officialSite: 'http://www.bbc.co.uk/programmes/b00d57bk', schedule: { time: '', days: ['Wednesday'] }, rating: { average: null }, weight: 78, network: { id: 12, name: 'BBC One', country: { name: 'United Kingdom', code: 'GB', timezone: 'Europe/London' } }, webChannel: null, externals: { tvrage: null, thetvdb: 76377, imdb: 'tt0129723' }, image: { medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/29/73773.jpg', original: 'http://static.tvmaze.com/uploads/images/original_untouched/29/73773.jpg' }, summary: '<p><b>Z Cars</b> or <i>Z-Cars</i> was a British television drama series centred on the work of mobile uniformed police in the fictional town of Newtown, based on Kirkby, Merseyside. Produced by the BBC, it debuted in January 1962 and ran until September 1978.</p><p>The series differed sharply from earlier police procedurals. With its less-usual Northern setting, it injected a new element of harsh realism into the image of the police, which some found unwelcome.</p><p><i>Z Cars</i> ran for a total of 803 episodes, of which fewer than half have survived. Regular stars included Stratford Johns (Detective Inspector Barlow), Frank Windsor (Det. Sgt Watt), James Ellis (Bert Lynch) and Brian Blessed ("Fancy" Smith). Barlow and Watt were later spun into a separate series "Softly, Softly".</p><p>The name <i>Z Cars</i> relates to an imaginary "Z" Division of the local constabulary. The theme tune was based on a traditional Liverpool folk song, and was adopted by Everton Football Club as its official anthem.</p>', updated: 1601638257, _links: { self: { href: 'http://api.tvmaze.com/shows/8110' }, previousepisode: { href: 'http://api.tvmaze.com/episodes/922376' } },
//       },
//     }, {
//       score: 11.733816,
//       show: {
//         id: 21428, url: 'http://www.tvmaze.com/shows/21428/historic-cars', name: 'Historic Cars', type: 'Reality', language: 'English', genres: [], status: 'Running', runtime: 60, premiered: '2016-09-22', officialSite: 'http://newyork.cbslocal.com/2016/06/23/classic-cars-showcase-history-personal-stories/', schedule: { time: '14:00', days: ['Sunday'] }, rating: { average: null }, weight: 0, network: { id: 272, name: 'CBS Sports Network', country: { name: 'United States', code: 'US', timezone: 'America/New_York' } }, webChannel: null, externals: { tvrage: null, thetvdb: null, imdb: null }, image: { medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/76/190366.jpg', original: 'http://static.tvmaze.com/uploads/images/original_untouched/76/190366.jpg' }, summary: '<p><b>Historic Cars</b> is an annual display of classic historic and beautiful cars.</p>', updated: 1506217515, _links: { self: { href: 'http://api.tvmaze.com/shows/21428' }, previousepisode: { href: 'http://api.tvmaze.com/episodes/1314946' } },
//       },
//     }, {
//       score: 11.733816,
//       show: {
//         id: 20735, url: 'http://www.tvmaze.com/shows/20735/classic-cars', name: 'Classic Cars', type: 'Documentary', language: 'English', genres: [], status: 'To Be Determined', runtime: 60, premiered: '2016-09-12', officialSite: null, schedule: { time: '21:00', days: ['Monday'] }, rating: { average: null }, weight: 0, network: { id: 310, name: 'ITV4', country: { name: 'United Kingdom', code: 'GB', timezone: 'Europe/London' } }, webChannel: null, externals: { tvrage: null, thetvdb: null, imdb: null }, image: null, summary: '<p>Dario Franchitti looks into the classic car movement.</p>', updated: 1560239635, _links: { self: { href: 'http://api.tvmaze.com/shows/20735' }, previousepisode: { href: 'http://api.tvmaze.com/episodes/913179' } },
//       },
//     }],
//   ],
// };

const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case ShowActionTypes.FETCH_SHOWS_START:
      return {
				...state,
				pending: true,
			};
    case ShowActionTypes.FETCH_SHOWS_FAILURE:
      return {
				...state,
				pending: false,
				errorMessage: action.payload,
			};
    case ShowActionTypes.FETCH_SHOWS_SUCCESS:
      return {
				...state,
				pending: false,
				shows: action.payload,
			};
    default:
      return state;
  }
};

export default showReducer;
