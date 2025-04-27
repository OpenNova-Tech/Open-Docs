import { FocusCards } from "@/components/ui/focus-cards";

export default function Home() {
  const cards = [
    {
      title: "Languages",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c",
      href: "/language",
    },
    {
      title: "Development",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3",
      href: "/development",
    },
    {
      title: "Cloud",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0",
      href: "/cloud",
    },
    {
      title: "Dev Ops",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084",
      href: "/devops",
    },
    {
      title: "Artificial Intelligence",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97",
      href: "/ai",
    },
    {
      title: "Theory",
      src: "https://assets.aceternity.com/the-first-rule.png",
      href: "/theory",
    },
  ];
  

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <FocusCards cards={cards} />
    </main>
  );
}
