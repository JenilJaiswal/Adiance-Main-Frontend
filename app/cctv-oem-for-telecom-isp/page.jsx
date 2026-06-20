import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/cctv-oem-for-telecom-isp");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/cctv-oem-for-telecom-isp" landingSlug="cctv-oem-for-telecom-isp" />
    </>
  );
}
