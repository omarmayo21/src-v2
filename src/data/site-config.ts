/**
 * Site-wide configuration.
 * Replace every placeholder below with the real SRFEC details.
 * Values wrapped in [brackets] are placeholders that must be replaced.
 */
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.srfec.com";
const normalizedSiteUrl = rawSiteUrl.replace(/\/+$/, "");

export const siteConfig = {
  name: "SRFEC Stones & Granite",
  url: normalizedSiteUrl,
  website: "www.srfec.com",

  /** Set to false to remove the optional "Our Stones" section. */
  showStones: true,

  contact: {
    // Phone from Brand Book Page 13 (letterhead)
    phone: "+966 12 345 6789",
    email: "info@srfec.com",
    whatsapp: "+966 50 000 0000", // TODO: real WhatsApp number
    whatsappLink: "https://wa.me/966500000000", // TODO: real wa.me link (digits only)
    address: {
      ar: "[الرياض - المملكة العربية السعودية]",
      en: "[Riyadh - Saudi Arabia]",
    },
    hours: {
      ar: "[ساعات العمل: الأحد - الخميس 8:00 ص - 5:00 م]",
      en: "[Working hours: Sun - Thu 8:00 AM - 5:00 PM]",
    },
  },

  /** Social links from Brand Book Page 14 (Instagram: @srfec). */
  social: [
    { id: "instagram", label: "Instagram", href: "https://instagram.com/srfec" },
    { id: "linkedin", label: "LinkedIn", href: "#" },
    { id: "x", label: "X", href: "#" },
    { id: "facebook", label: "Facebook", href: "#" },
  ] as const,

  /**
   * Paste a Google Maps "embed" URL here to replace the map placeholder.
   * Example: "https://www.google.com/maps/embed?pb=..."
   */
  mapEmbedUrl: "" as string,

  /**
   * API endpoint for the contact form.
   * Can be a local Route Handler (e.g. "/api/contact") or an external endpoint
   * like Formspree or Resend. Defaults to front-end simulation if unset.
   */
  contactEndpoint: (process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim() || "") as string,
};

export type SiteConfig = typeof siteConfig;
