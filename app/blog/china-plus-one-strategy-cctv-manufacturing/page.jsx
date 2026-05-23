import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/blog/china-plus-one-strategy-cctv-manufacturing");

export default function Page() {
  return <ClientPage />;
}
