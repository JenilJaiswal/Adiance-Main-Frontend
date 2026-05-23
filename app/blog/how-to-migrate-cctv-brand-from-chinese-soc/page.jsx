import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/blog/how-to-migrate-cctv-brand-from-chinese-soc");

export default function Page() {
  return <ClientPage />;
}
