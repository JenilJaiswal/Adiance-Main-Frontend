import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/edge-ai-camera-manufacturer");

export default function Page() {
  return <ClientPage />;
}
