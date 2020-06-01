import MKLogo from "../img/showcase/muellkoenig.svg";
import p365 from "../img/showcase/p365.svg";
import tymelog from "../img/showcase/tymelog.svg";
import maxout from "../img/showcase/maxout.svg";
import do386 from "../img/showcase/do386.svg";
import QRLogo from "../img/showcase/scan.svg";

const Project = [
  {
    name: "Paladins 365",
    logo: p365,
    beschreibung:
      "Fan app for the Solingen Paladins. Live scores, online-ticketing and more. Build with react, wordpress & firebase",
    github: "",
    demo:
      "https://play.google.com/store/apps/details?id=com.westhofen.android.paladins&hl=de"
  },
  {
    name: "Müllkönig",
    logo: MKLogo,
    beschreibung:
      "Simple game for praciting responsibility. Sort your trash the right way. Build with react",
    github: "https://github.com/groev/muellkoenig",
    demo: "http://muellkoenig.westhofen.me"
  },
  {
    name: "tymelog",
    logo: tymelog,
    beschreibung:
      "Track your Wordpress hours automatically. Build with mern stack."
  },
  {
    name: "max out",
    logo: maxout,
    beschreibung:
      "Simple app for increasing your one rep max in the weightroom. Build with react."
  },
  {
    name: "do386",
    logo: do386,
    beschreibung:
      "Really simple todo app in 386 style. Build with react & firebase."
  },
  {
    name: "QR code participation",
    logo: QRLogo,
    beschreibung:
      "Solving the problem of paper filling at local businesses in the wake of Covid-19",
    github: "https://github.com/groev/qr-code-participation-system",
    demo: "https://scanner.westhofen.me"
  },
  {
    name: "React Gravitiy Sort",
    beschreibung: "Adaptable game idea, making use of React and framer-motion.",
    github: "https://github.com/groev/react-gravity-sort",
    demo: "https://sort-presidents.netlify.app"
  },
  {
    name: "Options value calculator",
    beschreibung: "Calculating the value of an option based on black-scholes.",
    github: "https://github.com/groev/options-value",
    demo: "https://options-value.netlify.app/"
  }
];
export default Project;
