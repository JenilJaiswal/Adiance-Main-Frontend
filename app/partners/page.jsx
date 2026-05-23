import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/partners");

export default function Page() {
  return <ClientPage />;
}
