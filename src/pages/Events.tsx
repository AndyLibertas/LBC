import EmbedPage from "./EmbedPage";
import { NEXUDUS_EVENTS_URL } from "../config/nexudus";

const Events = () => (
  <EmbedPage
    title="Events"
    tagline="Workshops, gatherings, and everything happening at the Collaborative."
    src={NEXUDUS_EVENTS_URL}
  />
);

export default Events;
