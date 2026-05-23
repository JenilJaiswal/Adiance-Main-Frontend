import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/blog-thank-you");

export default function Page() {
  return <ClientPage />;
}
