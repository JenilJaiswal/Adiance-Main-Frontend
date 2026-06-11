import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/non-chinese-soc-camera-manufacturer");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/non-chinese-soc-camera-manufacturer" landingSlug="non-chinese-soc-camera-manufacturer" />
    </>
  );
}
