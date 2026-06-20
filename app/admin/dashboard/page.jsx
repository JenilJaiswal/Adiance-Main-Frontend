import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/admin/dashboard");

export default function Page() {
  return <ClientPage />;
}
