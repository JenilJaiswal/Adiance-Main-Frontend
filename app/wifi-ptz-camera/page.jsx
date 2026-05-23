import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/wifi-ptz-camera");

export default function Page() {
  return <ClientPage />;
}
