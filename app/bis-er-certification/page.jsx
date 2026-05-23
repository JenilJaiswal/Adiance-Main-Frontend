import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/bis-er-certification");

export default function Page() {
  return <ClientPage />;
}
