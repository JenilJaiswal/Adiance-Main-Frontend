import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/cloud-application");

export default function Page() {
  return <ClientPage />;
}
