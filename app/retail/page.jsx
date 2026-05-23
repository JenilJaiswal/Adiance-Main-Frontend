import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/retail");

export default function Page() {
  return <ClientPage />;
}
