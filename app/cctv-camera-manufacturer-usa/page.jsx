import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/cctv-camera-manufacturer-usa");

export default function Page() {
  return (
    <>
      <PageSchema path="/cctv-camera-manufacturer-usa" />
      <ClientPage />
    </>
  );
}
