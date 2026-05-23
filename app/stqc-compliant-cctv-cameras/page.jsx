import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/stqc-compliant-cctv-cameras");

export default function Page() {
  return <ClientPage />;
}
