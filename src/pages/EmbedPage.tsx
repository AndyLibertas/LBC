import { useEffect, useRef, useState } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

// Shared shell for the Nexudus iframe pages (Events, Join, Bookings,
// Articles): full site nav, accent title, auto-height iframe.
//
// Nexudus only emits height postMessages when the URL carries an
// `iframe-id`; we pass one, then grow the iframe to the reported height
// so the portal never scrolls inside its own window.
const EmbedPage = ({
  title,
  tagline,
  src,
}: {
  title: string;
  tagline: string;
  src: string;
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const frameId = useRef(
    "lbc-" + title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  );
  const [height, setHeight] = useState<number | null>(null);

  const url =
    src +
    (src.includes("?") ? "&" : "?") +
    "iframe-id=" +
    encodeURIComponent(frameId.current);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (!e.origin.includes("nexudus")) return;
      const d = e.data;
      if (!d || d.iframeId !== frameId.current) return;
      if (typeof d.iframeHeight === "number" && d.iframeHeight > 0) {
        setHeight(d.iframeHeight);
      }
      // The portal asks the parent to scroll to the top of the frame on
      // internal navigation (e.g. opening a booking) — honor it so the
      // user isn't left mid-page.
      if (d.scrollToTop) {
        iframeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="font-sans antialiased text-[#121212] min-h-screen flex flex-col bg-[#F1EDE6]">
      {/* Non-fixed so the page content flows below it instead of under it */}
      <SiteNav fixed={false} />

      {/* Thread divider, matching the home page */}
      <div className="w-full">
        <img
          src="/Assets/thread_image.png"
          alt=""
          className="w-full h-auto max-h-5 object-cover block"
        />
      </div>

      <div className="container mx-auto px-6 py-8 flex-1 flex flex-col">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#D47558] uppercase">
            {title}
          </h1>
          <p className="text-gray-600 mt-1">{tagline}</p>
        </div>

        <iframe
          ref={iframeRef}
          src={url}
          title={title}
          loading="lazy"
          scrolling="no"
          // Until the portal reports its height, hold an 80vh minimum so
          // there's no flash of a tiny frame; after, match content exactly.
          style={height ? { height: `${height}px` } : undefined}
          className={`w-full bg-white border border-gray-200 rounded-md shadow-sm ${
            height ? "" : "min-h-[80vh] flex-1"
          }`}
        />
      </div>

      <SiteFooter />
    </div>
  );
};

export default EmbedPage;
