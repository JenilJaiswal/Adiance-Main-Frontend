import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/cctv-camera-manufacturer-brazil");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/cctv-camera-manufacturer-brazil" />
    </>
  );
}
