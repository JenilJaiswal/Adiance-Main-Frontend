import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/remote-security");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/remote-security" />
    </>
  );
}
