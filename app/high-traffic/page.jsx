import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/high-traffic");

export default function Page() {
  return <ClientPage />;
}
