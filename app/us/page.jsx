import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/us");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/us" />
    </>
  );
}
