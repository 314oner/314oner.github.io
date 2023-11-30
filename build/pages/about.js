const {h} = preact;
import htm from "https://cdnjs.cloudflare.com/ajax/libs/htm/3.1.1/htm.module.js";
import {PersonalInfo} from "../components/personal-info.js";
const html = htm.bind(h);
const About = () => {
  return html`
    <${PersonalInfo} />
`;
};
export default About;
