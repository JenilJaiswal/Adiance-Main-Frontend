import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/non-chinese-cctv-camera-manufacturer");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/non-chinese-cctv-camera-manufacturer" landingSlug="non-chinese-cctv-camera-manufacturer" />
    </>
  );
}
