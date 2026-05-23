import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/blog/geopolitics-of-guts-why-non-chinese-soc-is-new-baseline");

export default function Page() {
  return <ClientPage />;
}
