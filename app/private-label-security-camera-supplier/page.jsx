import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/private-label-security-camera-supplier");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/private-label-security-camera-supplier" landingSlug="private-label-security-camera-supplier" />
    </>
  );
}
