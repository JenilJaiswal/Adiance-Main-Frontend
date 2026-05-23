import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/alternative-to-chinese-cameras");

export default function Page() {
  return <ClientPage />;
}
