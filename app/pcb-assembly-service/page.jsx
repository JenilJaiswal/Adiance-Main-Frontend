import { buildMetadata } from "@/seo/pageMetadata";
import { PageSchema } from "@/seo/PageSchema";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/pcb-assembly-service");

export default function Page() {
  return (
    <>
      <PageSchema path="/pcb-assembly-service" />
      <ClientPage />
    </>
  );
}
