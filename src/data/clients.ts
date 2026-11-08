/**
 * Client logos (placeholders).
 * The grid handles 6 to 20 logos. Drop real logos into /public/images/clients/
 * (PNG/SVG with transparent background) and update `name` + `logo`.
 */
import type { Bilingual } from "./projects";

export type Client = { id: string; name: Bilingual; logo: string };

const client = (n: string): Client => ({
  id: `c${n}`,
  name: { ar: `[اسم العميل ${n}]`, en: `[Client name ${n}]` },
  logo: `/images/clients/placeholder-client-${n}.svg`,
});

export const clients: Client[] = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"].map(client);
