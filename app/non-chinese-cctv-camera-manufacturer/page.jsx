import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/non-chinese-cctv-camera-manufacturer");

export default function Page() {
  return <ClientPage />;
}
