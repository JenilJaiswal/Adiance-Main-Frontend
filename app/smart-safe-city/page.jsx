import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/smart-safe-city");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/smart-safe-city" />
    </>
  );
}
