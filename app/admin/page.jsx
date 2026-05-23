import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/admin");

export default function Page() {
  return <ClientPage />;
}
