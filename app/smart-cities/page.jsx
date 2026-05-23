import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/smart-cities");

export default function Page() {
  return <ClientPage />;
}
