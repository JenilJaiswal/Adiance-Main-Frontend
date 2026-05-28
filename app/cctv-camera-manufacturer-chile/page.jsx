import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/cctv-camera-manufacturer-chile");

export default function Page() {
  return (
    <>
      <PageSchema path="/cctv-camera-manufacturer-chile" />
      <ClientPage />
    </>
  );
}
