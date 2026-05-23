import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/4k-face-recognition-camera");

export default function Page() {
  return <ClientPage />;
}
