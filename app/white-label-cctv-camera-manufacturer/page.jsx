import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/white-label-cctv-camera-manufacturer");

export default function Page() {
  return <ClientPage />;
}
