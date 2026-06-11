import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/bank-finance");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/bank-finance" />
    </>
  );
}
