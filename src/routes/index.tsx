import { createFileRoute } from "@tanstack/react-router";
import {
  Accessibility,
  ArrowDown,
  Eye,
  Leaf,
  Recycle,
  Sparkles,
  Sprout,
} from "lucide-react";

import arvoreUrucum from "@/assets/trilha/arvore-urucum.webp.asset.json";
import beneficiosUrucum from "@/assets/trilha/beneficios-urucum.webp.asset.json";
import cartazFloraPovos from "@/assets/trilha/cartaz-flora-povos.webp.asset.json";
import cartazSimbolo from "@/assets/trilha/cartaz-simbolo.webp.asset.json";
import coletaSeletiva from "@/assets/trilha/coleta-seletiva.webp.asset.json";
import frutoUrucum from "@/assets/trilha/fruto-urucum.webp.asset.json";
import lixeirasColeta from "@/assets/trilha/lixeiras-coleta.webp.asset.json";
import pinturaUrucum from "@/assets/trilha/pintura-urucum.webp.asset.json";
import sementesETinta from "@/assets/trilha/sementes-e-tinta.webp.asset.json";
import urucumNaArvore from "@/assets/trilha/urucum-na-arvore.webp.asset.json";
import fichaInvestigativa from "@/assets/trilha/ficha-investigativa.jpg.asset.json";
import simbolosAcessibilidade from "@/assets/trilha/simbolos-acessibilidade.jpg.asset.json";
import materiaisColeta from "@/assets/trilha/materiais-coleta.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trilha da Diversidade Ambiental | 7º ano A" },
      {
        name: "description",
        content:
          "Projeto de Ciências do 7º ano A da E.E. Professor Luiz Gonzaga Costa sobre natureza, cultura indígena, acessibilidade e coleta seletiva.",
      },
      { property: "og:title", content: "Trilha da Diversidade Ambiental" },
      {
        property: "og:description",
        content:
          "Uma experiência de Ciências que uniu flora, cultura indígena, inclusão e consciência ecológica.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const themes = [
  {
    number: "01",
    icon: Sprout,
    title: "Urucum, ciência e cultura",
    text: "O contato direto com a árvore e seus frutos abriu caminhos para o letramento científico. A turma conheceu o nome Bixa orellana, investigou as sementes e seus usos como tempero, colorau e tinta, valorizando também os saberes dos povos originários.",
    image: frutoUrucum.url,
    alt: "Mãos segurando um fruto de urucum aberto",
    tone: "bg-urucum text-urucum-foreground",
  },
  {
    number: "02",
    icon: Accessibility,
    title: "Acessibilidade e inclusão",
    text: "Ao percorrer os espaços abertos da escola, os estudantes observaram caminhos, acessos e barreiras. A prática aproximou o debate sobre mobilidade urbana, trilhas ambientais inclusivas e o direito de todas as pessoas à natureza.",
    image: arvoreUrucum.url,
    alt: "Árvore de urucum nos espaços abertos da escola",
    tone: "bg-primary text-primary-foreground",
  },
  {
    number: "03",
    icon: Recycle,
    title: "Coleta seletiva",
    text: "A separação correta dos resíduos foi estudada como uma atitude coletiva. Reduzir resíduos sólidos, fortalecer hábitos de limpeza e evitar a poluição terrestre são ações pequenas que transformam o ambiente.",
    image: lixeirasColeta.url,
    alt: "Conjunto colorido de lixeiras para coleta seletiva",
    tone: "bg-sun text-sun-foreground",
  },
  {
    number: "04",
    icon: Eye,
    title: "Natureza para todos",
    text: "A turma refletiu sobre o uso do braille em parques ecológicos e Unidades de Conservação. Informações acessíveis tornam a experiência ambiental mais autônoma, inclusiva e rica para pessoas cegas.",
    image: cartazFloraPovos.url,
    alt: "Mãos sobre cartaz de preservação da flora e valorização dos povos indígenas",
    tone: "bg-sky text-sky-foreground",
  },
];

const gallery = [
  {
    image: urucumNaArvore.url,
    alt: "Frutos de urucum entre as folhas da árvore",
    caption: "Observação da riqueza da flora presente na escola.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    image: pinturaUrucum.url,
    alt: "Mãos desenhando com pigmento natural de urucum",
    caption: "O pigmento natural transformado em tinta e expressão.",
    className: "",
  },
  {
    image: sementesETinta.url,
    alt: "Sementes e pó vermelho de urucum sobre uma mesa",
    caption: "Sementes, colorau e descobertas científicas.",
    className: "",
  },
  {
    image: coletaSeletiva.url,
    alt: "Infográfico educativo sobre separação do lixo",
    caption: "Aprender a separar para reduzir a poluição terrestre.",
    className: "md:col-span-2",
  },
  {
    image: beneficiosUrucum.url,
    alt: "Material educativo sobre o urucum e seus benefícios",
    caption: "Pesquisa e leitura ampliaram o conhecimento sobre a espécie.",
    className: "",
  },
  {
    image: cartazSimbolo.url,
    alt: "Cartaz Urucum, Bixa orellana, nosso símbolo",
    caption: "Bixa orellana: um símbolo escolhido pela turma.",
    className: "",
  },
  {
    image: fichaInvestigativa.url,
    alt: "Ficha investigativa de campo sobre observação ambiental e acessibilidade",
    caption:
      "Ficha investigativa de campo preenchida durante a trilha pelos espaços abertos e verdes da escola, registrando as observações sobre acessibilidade e ambiente.",
    className: "",
    imgPosition: "object-top",
  },
  {
    image: simbolosAcessibilidade.url,
    alt: "Símbolos de sinalização acessível para diferentes pessoas",
    caption:
      "Sinalização acessível: símbolos que representam a diversidade de pessoas e o direito de todas à acessibilidade.",
    className: "",
    imgPosition: "object-top",
  },
  {
    image: materiaisColeta.url,
    alt: "Materiais educativos sobre a importância da coleta seletiva",
    caption:
      "Materiais produzidos pela turma sobre a importância da coleta seletiva e a separação correta dos resíduos.",
    className: "md:col-span-2",
    imgPosition: "object-top",
  },
];

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative min-h-[92svh] overflow-hidden bg-forest text-primary-foreground">
        <img
          src={urucumNaArvore.url}
          alt="Frutos de urucum na árvore da escola"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col px-6 py-7 sm:px-10 lg:px-16">
          <header className="flex items-start justify-between gap-6 border-b border-primary-foreground/30 pb-5">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-primary-foreground text-primary">
                <Leaf className="size-5" aria-hidden="true" />
              </span>
              <p className="max-w-52 text-xs font-bold uppercase leading-relaxed tracking-[0.12em] sm:max-w-none">
                Ciências • 7º ano A
              </p>
            </div>
            <p className="max-w-52 text-right text-xs leading-relaxed text-primary-foreground/80 sm:max-w-none">
              E.E. Professor Luiz Gonzaga Costa
            </p>
          </header>

          <div className="mt-auto max-w-5xl pb-10 pt-20">
            <p className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-leaf-light">
              <Sparkles className="size-4" aria-hidden="true" />
              Aprender, observar e transformar
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[0.98] sm:text-7xl lg:text-[6.8rem]">
              Trilha da
              <span className="block text-leaf-light">Diversidade Ambiental</span>
            </h1>
            <div className="mt-8 flex flex-col gap-8 border-t border-primary-foreground/30 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                Uma experiência construída nos espaços da escola, onde ciência, cultura, inclusão e consciência ecológica se encontram.
              </p>
              <a
                href="#jornada"
                className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-primary-foreground/50 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
                aria-label="Conhecer a jornada"
              >
                <ArrowDown className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="jornada" className="bg-leaf-light py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
          <div>
            <p className="eyebrow">Nossa jornada</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest sm:text-6xl">
              A escola também é território de descoberta.
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-xl leading-relaxed text-forest/85 sm:text-2xl">
              A turma percorreu os espaços abertos da escola observando a acessibilidade e reconhecendo a riqueza da flora que vive ao nosso redor.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-forest/20 pt-6 sm:grid-cols-4">
              {[
                ["4", "temas integrados"],
                ["1", "trilha pela escola"],
                ["7º A", "turma participante"],
                ["Ciências", "conhecimento em prática"],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong className="block font-display text-3xl text-primary">{value}</strong>
                  <span className="mt-1 block text-xs font-semibold uppercase leading-relaxed tracking-[0.08em] text-forest/65">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow">Temas trabalhados</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-forest sm:text-6xl">
              Quatro caminhos, um mesmo compromisso
            </h2>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {themes.map((theme, index) => {
              const Icon = theme.icon;
              return (
                <article key={theme.number} className="grid gap-7 py-10 lg:grid-cols-[5rem_1fr_1.15fr] lg:items-center lg:gap-10">
                  <span className="font-display text-2xl text-muted-foreground">{theme.number}</span>
                  <div>
                    <div className={`mb-5 grid size-11 place-items-center rounded-full ${theme.tone}`}>
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-3xl font-semibold text-forest sm:text-4xl">{theme.title}</h3>
                    <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{theme.text}</p>
                  </div>
                  <figure className={`overflow-hidden rounded-sm bg-muted ${index % 2 ? "lg:order-none" : ""}`}>
                    <img src={theme.image} alt={theme.alt} className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
                  </figure>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-end">
            <div>
              <p className="eyebrow eyebrow-light">Registros da experiência</p>
              <h2 className="mt-4 font-display text-4xl font-semibold sm:text-6xl">Ciência que se faz com as mãos</h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
              Observar, tocar, pesquisar, comparar e criar: cada registro guarda um momento de construção coletiva do conhecimento.
            </p>
          </div>

          <div className="mt-12 grid auto-rows-[18rem] gap-4 md:grid-cols-4">
            {gallery.map((item) => (
              <figure key={item.image} className={`group relative overflow-hidden rounded-sm bg-primary ${item.className}`}>
                <img src={item.image} alt={item.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-caption px-5 pb-5 pt-16">
                  <figcaption className="text-sm font-semibold leading-relaxed text-primary-foreground">{item.caption}</figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-urucum px-6 py-20 text-urucum-foreground sm:px-10 sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <Sprout className="mx-auto size-10" aria-hidden="true" />
          <blockquote className="mt-7 font-display text-3xl font-semibold leading-tight sm:text-5xl">
            “Quando a aprendizagem ultrapassa a sala de aula, cada espaço da escola pode se tornar um lugar de investigação, cuidado e pertencimento.”
          </blockquote>
        </div>
      </section>

      <footer className="bg-background py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-10 md:flex-row md:items-end md:justify-between lg:px-16">
          <div>
            <p className="font-display text-2xl font-semibold text-forest">Trilha da Diversidade Ambiental</p>
            <p className="mt-2 text-sm text-muted-foreground">E.E. Professor Luiz Gonzaga Costa • 7º ano A</p>
          </div>
          <div className="md:text-right">
            <p className="text-sm font-bold text-foreground">Professora Meirian Barbosa dos Santos</p>
            <p className="mt-1 text-sm text-muted-foreground">Aulas de Ciências</p>
          </div>
        </div>
      </footer>
    </main>
  );
}