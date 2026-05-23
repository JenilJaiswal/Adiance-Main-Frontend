import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/thank-you");

export default function Page() {
  return <ClientPage />;
}
