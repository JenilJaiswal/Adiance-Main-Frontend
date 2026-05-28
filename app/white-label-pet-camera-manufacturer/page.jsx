import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/white-label-pet-camera-manufacturer");

export default function Page() {
  return (
    <>
      <PageSchema path="/white-label-pet-camera-manufacturer" landingSlug="white-label-pet-camera-manufacturer" />
      <ClientPage />
    </>
  );
}
