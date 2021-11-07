// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Dylan',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'InsertYourAPIKeyHere123456',
  weatherIcons: 'Nord', // 'Nord', 'Dark', 'White', 'OneDark'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/0/#inbox',
    },
    {
      id: '3',
      name: 'TodoList',
      icon: 'trello',
      link: 'https://app.standardnotes.org/',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'YOutube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Rock',
        link: 'https://music.youtube.com/playlist?list=PL1Vo2UgyAkWMMSe4uUhTBEB_VO1sgDcj_',
      },
      {
        name: '90s Alternative',
        link: 'https://music.youtube.com/playlist?list=RDCLAK5uy_m_h-nx7OCFaq9AlyXv78lG0AuloqW_NUA',
      },
      {
        name: 'Instrumental',
        link: 'https://music.youtube.com/playlist?list=PL1Vo2UgyAkWM0gujhkHpLprEI6nGhWjBk',
      },
      {
        name: 'Volbeat',
        link: 'https://music.youtube.com/channel/UC5p42RKUQutsl7bDxFrCHKw',
      },
    ],
    secondList: [
      {
        name: 'DuckDuckGo',
        link: 'https://duckduckgo.com/',
      },
      {
        name: 'Standard Notes',
        link: 'https://app.standardnotes.org/',
      },
      {
        name: 'Khan Academy',
        link: 'https://www.khanacademy.org/',
      },
      {
        name: 'Amazon',
        link: 'https://www.amazon.com/',
      },
    ],
  },
};
