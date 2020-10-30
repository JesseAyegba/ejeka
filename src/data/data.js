import wallet from "../svgs/wallet.svg";
import clipboard from "../svgs/clipboard.svg";
import secure_server from "../svgs/secure_server.svg";

export const makeDeposit = {
  bg: "var(--energetic_blue)",
  textColor: "white",
  flexDirection: "row",
  image: wallet,
  title: "Exclusive access",
  heading: "Make unlimited amounts of deposits with Zero fees",
  description:
    "Start saving today on our platform that allows you make unlimited deposits without getting charged any fees",
  btnText: "Get Started",
  btnLink: "/signup",
};
export const easySetup = {
  bg: "white",
  textColor: "black",
  flexDirection: "row-reverse",
  image: clipboard,
  title: "Easy Setup",
  heading: "Super fast and easy onboarding process",
  description:
    "Get everything ready and setup in under 10 minutes. All you need to add is your information and you're good to go",
  btnText: "Start Now",
  btnLink: "/signup",
};
export const secure = {
  bg: "var(--energetic_dark_blue)",
  textColor: "white",
  flexDirection: "row",
  image: secure_server,
  title: "100% secure",
  heading: "Stay protected 24/7 anywhere anytime",
  description:
    "Every transaction is stored in our secure cloud database. Never have to worry again about your data",
  btnText: "Learn More",
  btnLink: "/services",
};
