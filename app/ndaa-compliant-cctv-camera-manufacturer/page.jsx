import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/ndaa-compliant-cctv-camera-manufacturer");

export default function Page() {
  return <ClientPage />;
}
