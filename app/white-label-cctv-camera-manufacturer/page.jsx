import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/white-label-cctv-camera-manufacturer");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/white-label-cctv-camera-manufacturer" landingSlug="white-label-cctv-camera-manufacturer" />
    </>
  );
}
