// Nexudus Members Portal URLs — the only file to touch if the portal
// address changes.
//
// The portal sends no X-Frame-Options / frame-ancestors headers, so
// embedding from this domain works. Iframe contents are styled by
// Nexudus; don't try to restyle them from here.
const NEXUDUS_BASE = "https://lbcfrederick.nexudus.site";
export const NEXUDUS_PORTAL = `${NEXUDUS_BASE}/lbcfrederick`;

// The portal reads these query params at load and strips its own chrome
// (nav header, footer) so the embed doesn't look like a site-in-a-site.
const EMBED_PARAMS = "hide-header=true&hide-footer=true";

export const NEXUDUS_EVENTS_URL = `${NEXUDUS_PORTAL}/events/list?${EMBED_PARAMS}`;
// Join opens the Collaborator interest form (not the paid checkout, which
// isn't wired up yet) so visitors tell us how they want to collaborate.
export const NEXUDUS_JOIN_URL = `${NEXUDUS_BASE}/en/forms/preview/e4c887a9-2601-43d9-898a-9b4ce3e40249?${EMBED_PARAMS}`;
// Training Room bookings go through a request form (reviewed and confirmed
// by staff), not live online booking. Members book their own rooms directly
// via the portal after logging in. Swap this back to
// `${NEXUDUS_PORTAL}/bookings/meeting-rooms/list` to re-enable live booking.
export const NEXUDUS_BOOKINGS_URL = `${NEXUDUS_BASE}/en/forms/preview/7279da9b-91f7-443f-9a56-4ec609d70730?${EMBED_PARAMS}`;
export const NEXUDUS_BLOG_URL = `${NEXUDUS_PORTAL}/blog?${EMBED_PARAMS}`;

// Member login opens the portal in a NEW TAB (not embedded): a logged-out
// visitor is sent to the Nexudus login, then on to their dashboard.
export const NEXUDUS_MEMBER_LOGIN_URL = `${NEXUDUS_PORTAL}/user/dashboard/personal`;
