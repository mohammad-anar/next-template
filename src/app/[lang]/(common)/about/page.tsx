import HeroSection from "@/components/pages/home/HeroSection/HeroSection";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../../dictionaries";

const AboutPage = async ({ params }: PageProps<"/[lang]">) => {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  return (
    <>
      <HeroSection localData={dict} />
    </>
  );
};

export default AboutPage;
