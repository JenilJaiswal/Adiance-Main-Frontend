import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/white-label-baby-monitor-manufacturer");

export default function Page() {
  return <ClientPage />;
}
