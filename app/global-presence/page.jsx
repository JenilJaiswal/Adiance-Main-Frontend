import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/global-presence");

export default function Page() {
  return <ClientPage />;
}
