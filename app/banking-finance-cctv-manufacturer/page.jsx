import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/banking-finance-cctv-manufacturer");

export default function Page() {
  return <ClientPage />;
}
