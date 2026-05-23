import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/blog/the-complete-guide-to-ndaa-compliant-surveillance-cameras");

export default function Page() {
  return <ClientPage />;
}
