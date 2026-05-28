import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/global-presence");

export default function Page() {
  return (
    <>
      <PageSchema path="/global-presence" landingSlug="global-presence" />
      <ClientPage />
    </>
  );
}
