import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/odm-services");

export default function Page() {
  return <ClientPage />;
}
