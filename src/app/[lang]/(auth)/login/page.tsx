import React from "react";
import { getDictionary, hasLocale } from "../../dictionaries";
import { notFound } from "next/navigation";

const LoginPage = async ({ params }: PageProps<"/[lang]">) => {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    return notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <div className="">
      <div className="container min-h-[90vh] flex items-center justify-center py-10">
        {dict.login_page.title}
      </div>
    </div>
  );
};

export default LoginPage;
