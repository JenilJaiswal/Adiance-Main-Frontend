import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/traffic-management");

export default function Page() {
  return (
    <>
      <PageSchema path="/traffic-management" />
      <ClientPage />
    </>
  );
}
