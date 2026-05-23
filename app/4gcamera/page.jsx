import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/4gcamera");

export default function Page() {
  return <ClientPage />;
}
