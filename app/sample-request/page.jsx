import { buildMetadata } from "@/seo/pageMetadata";
import ClientForm from "./ClientForm";

export const metadata = buildMetadata("/sample-request");

export default function Page() {
  return <ClientForm />;
}
