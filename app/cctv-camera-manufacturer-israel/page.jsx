import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/cctv-camera-manufacturer-israel");

export default function Page() {
  return <ClientPage />;
}
