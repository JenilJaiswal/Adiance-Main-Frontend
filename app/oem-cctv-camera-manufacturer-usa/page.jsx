import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/oem-cctv-camera-manufacturer-usa");

export default function Page() {
  return <ClientPage />;
}
