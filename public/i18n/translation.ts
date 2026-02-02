export interface translationFace {
  [key:string]: {
    [key:string]: {
      [key: string]:string,
    }
  }
}

export const TRANSLATION : translationFace = {
  de: {
    header: {
      about_me: 'Über mich'
    },

    head: {
      title1: 'Ich bin',
      button: 'Schreib mir!',
      arrow: 'Scrolle runter',
    },

    about_me: {
      title: 'ÜBER MICH',
      name: 'Hallo, ich heiße Luis!',
      fun: 'Ich habe das Coden bei der Developer-Akademie in München gelernt und hatte eine Menge Freude dabei.',
      goal: 'Mein Ziel ist es Programme und Webseiten für jeden einfacher zu gestalten.',
      living:'Ich lebe in Alzey und würde gerne halb im Homeoffice und halb im Büro arbeiten.',
      motivation: 'Um mein Ziel zu erreichen, muss ich eine Menge Technologien lernen. Das motiviert mich.',
      learn: 'Je schwieriger die Aufgabe, desto mehr kann ich dabei lernen. Schwierigkeiten steigern mein analytisches Denken, meine Kreativität, Ausdauer und Teamfähigkeit.'
    },

    skills: {
      learning: 'Am Lernen',
      experience: 'Mir hat das Lernen beim kreieren des Projekts gefallen. Ich habe jede Schwierigkeit entgegengenommen, die mir eine neue Technologie brachte und habe versucht das meiste daraus zu lernen.',
      looking: 'Auf der Suche nach ',
      another: 'einem anderen Skill',
      new_skills: 'Ich bin kontinuierlch dabei neue Technologien und Frameworks zu lernen, um so effektiv wie möglich zu sein.',
      button: 'Kontaktaufnahme'
    },

    projects: {
      intro: 'Entdecke einen Teil meiner Arbeit hier - Interagiere mit Projekten, um meine Skills in Aktion zu sehen.',
      test: 'Test'
    },

    contact: {
      title: 'Kontakt',
      subtitle: 'Gibt es ein Problem zu lösen?',
      needed: 'Wird ein Frontend Developer gebraucht? ',
      me: 'Kontaktiere mich!',
      name: 'Dein Name',
      mail: 'Deine Email',
      message: 'Deine Nachricht',
      have: 'Ich habe die ',
      legals: 'rechtlichen Hinweise ',
      agree: 'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
      send: 'Nachricht senden'
    },

    footer: {
      legal: 'Rechtlicher Hinweis'
    }
  },

  en: {
    header: {
      about_me: 'About me'
    },

    head: {
      title1: 'I am',
      button: 'Let´s talk!',
      arrow: 'Scroll down',
    },

    about_me: {
      title: 'ABOUT ME',
      name: 'Hey there, I´m Luis!',
      fun: 'I learned Coding in the Developer-Akademie in Munich and had a lot of fun there.',
      goal: 'My goal is to make programs and websites easier to use for everyone.',
      living:'I´m living in Alzey and would like to work half at remote and half on-site.',
      motivation: 'To reach my goal, i have to learn a lot technologys. That motivates me.',
      learn: 'The more difficult the Task, the more I can learn. Challenges improve my analytical thinking, creativity, persistence and collaboration.'
    },

    skills: {
      learning: 'Continually learning',
      experience: 'I enjoyed learning while creating my projects. I took every challenge that a new technology gave me and tried to learn as much as possible from it.',
      looking: 'Looking for ',
      another: 'another skill',
      new_skills: 'I´m continually learning new Technologies and Frameworks, to be as effective as possible.',
      button: 'Get in touch'
    },

    projects: {
      intro: 'Explore a selection of my work here - Interact with projects to see my skills in action.',
      test: 'test'
    },

    contact: {
      title: 'Contact',
      subtitle: 'Got a problem to solve?',
      needed: 'Need a Frontend developer? ',
      me: 'Contact me!',
      name: 'Your name',
      mail: 'Your email',
      message: 'Your Message',
      have: 'I´ve read the',
      legals: ' legals ',
      agree: 'and agree to the processing of my data as outlined',
      send: 'Send message'
    },

    footer: {
      legal: 'legal Notice'
    }
  }
};
