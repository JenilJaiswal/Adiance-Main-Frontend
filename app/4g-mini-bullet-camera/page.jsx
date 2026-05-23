import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/4g-mini-bullet-camera");

export default function Page() {
  return <ClientPage />;
}
