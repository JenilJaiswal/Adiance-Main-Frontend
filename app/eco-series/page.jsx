import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/eco-series");

export default function Page() {
  return <ClientPage />;
}
