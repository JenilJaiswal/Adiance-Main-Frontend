import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/admin/verify");

export default function Page() {
  return <ClientPage />;
}
