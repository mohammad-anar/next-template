import HeroSection from "@/components/pages/home/HeroSection/HeroSection";
import { getDictionary, hasLocale } from "../dictionaries";
import { notFound } from "next/navigation";

const HompPage = async ({ params }: PageProps<"/[lang]">) => {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  
  return (
    <>
      <HeroSection localData={dict}/>
    </>
  );
};

export default HompPage;
