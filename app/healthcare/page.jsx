import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/healthcare");

export default function Page() {
  return <ClientPage />;
}
