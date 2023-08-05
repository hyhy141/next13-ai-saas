"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Markéta Brodská",
    avatar: "J",
    title: "Student",
    description:
      "Dřív jsem zírala na obrazovku hodiny, ale Kynex AI mě zachránil na poslední chvíli. Je to jako mít géniusovského kamaráda, co mi pomáhá s všemi školními projekty. Díky Kynexu jsem vynikající ve škole!",
  },
  {
    name: "Eva Procházková",
    avatar: "E",
    title: "Designer",
    description:
      "Kynex AI nám umožnil objevit nové perspektivy v našem výzkumu. Jeho schopnost generovat inovativní nápady je fascinující. Jsme rádi, že jsme ho začlenili do našeho týmu",
  },
  {
    name: "Petr Vlček",
    avatar: "P",
    title: "Datový analytik",
    description:
      "Jsem naprosto ohromen výkonností Kynex AI. Díky jeho inteligentním algoritmům jsme ušetřili spoustu času při analýze dat a vytváření strategií. Doporučuji ho každému, kdo pracuje s umělou inteligencí.",
  },
  {
    name: "Martina Nováková",
    avatar: "M",
    title: "Kreativní ředitelka",
    description:
      "Kynex AI nám opravdu změnil způsob, jakým pracujeme. Díky tomuto úžasnému nástroji jsme schopni generovat nápady a řešení rychleji než kdy dřív. Je to neocenitelný společník pro naši kreativní práci!!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Reference
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
