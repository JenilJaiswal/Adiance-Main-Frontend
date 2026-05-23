import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/smart-city-cctv-solutions");

export default function Page() {
  return <ClientPage />;
}
