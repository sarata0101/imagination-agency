import { notFound } from "next/navigation";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { ServiceDetail } from "@/components/sections/service-detail";
import { SERVICES } from "@/components/sections/services-data";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = SERVICES[slug];
  if (!service) notFound();

  return (
    <main>
      <Header />
      <ServiceDetail service={service} />
      <Footer />
    </main>
  );
}