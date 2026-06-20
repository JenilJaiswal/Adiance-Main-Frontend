import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/pcb-assembly-service");

export default function Page() {
  return (
    <>
      <ClientPage />
      <PageSchema path="/pcb-assembly-service" />
    </>
  );
}
