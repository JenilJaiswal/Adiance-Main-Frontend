import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/oem-camera-manufacturer-europe");

export default function Page() {
  return <ClientPage />;
}
