import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/blog/how-to-choose-oem-cctv-manufacturer-checklist");

export default function Page() {
  return <ClientPage />;
}
