import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/4k-bullet-anpr-ptz-camera");

export default function Page() {
  return <ClientPage />;
}
