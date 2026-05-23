import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/full-solution-oem-camera-manufacturer");

export default function Page() {
  return <ClientPage />;
}
