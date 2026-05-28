import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/downloads");

export default function Page() {
  return (
    <>
      <PageSchema path="/downloads" />
      <ClientPage />
    </>
  );
}
