import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/complete-surveillance-solutions");

export default function Page() {
  return (
    <>
      <PageSchema path="/complete-surveillance-solutions" landingSlug="complete-surveillance-solutions" />
      <ClientPage />
    </>
  );
}
