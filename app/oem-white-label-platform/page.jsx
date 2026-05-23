import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/oem-white-label-platform");

export default function Page() {
  return <ClientPage />;
}
