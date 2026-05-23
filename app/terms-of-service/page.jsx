import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/terms-of-service");

export default function Page() {
  return <ClientPage />;
}
