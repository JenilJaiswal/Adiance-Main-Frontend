import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/edgeaicamera");

export default function Page() {
  return <ClientPage />;
}
