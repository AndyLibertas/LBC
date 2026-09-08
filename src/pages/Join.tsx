import EmbedPage from "./EmbedPage";
import { NEXUDUS_JOIN_URL } from "../config/nexudus";

const Join = () => (
  <EmbedPage
    title="Join the Collaborative"
    tagline="Tell us how you'd like to collaborate at the LBC."
    src={NEXUDUS_JOIN_URL}
  />
);

export default Join;
