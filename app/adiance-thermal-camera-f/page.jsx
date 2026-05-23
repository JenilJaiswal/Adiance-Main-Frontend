import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/adiance-thermal-camera-f");

export default function Page() {
  return <ClientPage />;
}
