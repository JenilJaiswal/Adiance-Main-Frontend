import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/blog/ndaa-compliant-cctv-cameras-buyers-guide");

export default function Page() {
  return <ClientPage />;
}
