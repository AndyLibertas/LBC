import EmbedPage from "./EmbedPage";
import { NEXUDUS_BOOKINGS_URL } from "../config/nexudus";

const Bookings = () => (
  <EmbedPage
    title="Book a Room"
    tagline="Request the Training Room and our team will confirm your booking."
    src={NEXUDUS_BOOKINGS_URL}
  />
);

export default Bookings;
