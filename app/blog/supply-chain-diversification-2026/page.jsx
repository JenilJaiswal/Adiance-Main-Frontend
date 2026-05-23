import { buildMetadata } from "@/seo/pageMetadata";
import ClientPage from "./ClientPage";

export const metadata = buildMetadata("/blog/supply-chain-diversification-2026");

export default function Page() {
  return <ClientPage />;
}
