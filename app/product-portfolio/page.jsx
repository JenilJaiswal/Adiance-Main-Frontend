import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/product-portfolio");

export default function Page() {
  return <ClientPage />;
}
