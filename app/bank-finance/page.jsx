import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/bank-finance");

export default function Page() {
  return <ClientPage />;
}
