import EmbedPage from "./EmbedPage";
import { NEXUDUS_BLOG_URL } from "../config/nexudus";

const Articles = () => (
  <EmbedPage
    title="Articles"
    tagline="News, updates, and stories from the Collaborative community."
    src={NEXUDUS_BLOG_URL}
  />
);

export default Articles;
