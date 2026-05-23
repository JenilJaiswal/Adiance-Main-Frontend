import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/event/ifsec-india-2025");

export default function Page() {
  return <ClientPage />;
}
