import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/gdpr-compliant-surveillance-manufacturer");

export default function Page() {
  return <ClientPage />;
}
