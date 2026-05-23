import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/product-engineering");

export default function Page() {
  return <ClientPage />;
}
