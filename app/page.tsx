import { FocusCards } from "@/components/ui/focus-cards";

export default function Home() {
  const cards = [
    {
      title: "Languages",
      src: "/languages.png",
      href: "/language",
    },
    {
      title: "Front End",
      src: "/frontend.png",
      href: "/development",
    },
    {
      title: "Backend",
      src: "/backend.png",
      href: "/cloud",
    },
    {
      title: "CP",
      src: "/cp.png",
      href: "/cp",
    },
  ];
  

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <FocusCards cards={cards} />
    </main>
  );
}
