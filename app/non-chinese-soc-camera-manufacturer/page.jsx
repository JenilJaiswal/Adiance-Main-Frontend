import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/non-chinese-soc-camera-manufacturer");

export default function Page() {
  return <ClientPage />;
}
