import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/case-study/white-label-edge-ai-camera-japan");

export default function Page() {
  return <ClientPage />;
}
