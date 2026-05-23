import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/start-your-own-cctv-brand");

export default function Page() {
  return <ClientPage />;
}
