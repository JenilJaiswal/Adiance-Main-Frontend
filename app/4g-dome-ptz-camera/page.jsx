import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/4g-dome-ptz-camera");

export default function Page() {
  return <ClientPage />;
}
