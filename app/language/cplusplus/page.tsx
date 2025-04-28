// app/lectures/javascript/page.tsx

import { GlareCard } from "@/components/ui/glare-card"; // assuming you have this component

const lectures = [
  { title: "Introduction", href: "/language/cplusplus/1" },
  { title: "Function and Arrays", href: "/language/cplusplus/2" },
  { title: "OOP", href: "/language/cplusplus/3" },
  { title: "Memory Management", href: "/language/cplusplus/4" },
  { title: "Standard Template Library", href: "/language/cplusplus/5" },
  { title: "Advanced C++", href: "/language/cplusplus/6" },
  { title: "Data Structures & Algorithms", href: "/language/cplusplus/7" },
  { title: "CP Techniques", href: "/language/cplusplus/8" },
  { title: "System Design", href: "/language/cplusplus/9" },
];

export default function JavaScriptLectures() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-8 text-white">Choose a C++ Lecture</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {lectures.map((lecture) => (
          <a key={lecture.href} href={lecture.href}>
            <GlareCard className="flex flex-col items-center justify-center p-6 cursor-pointer hover:scale-105 transition">
              {/* <svg
                width="66"
                height="65"
                viewBox="0 0 66 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
              >
                <path
                  d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                  stroke="currentColor"
                  strokeWidth="15"
                  strokeMiterlimit="3.86874"
                  strokeLinecap="round"
                />
              </svg> */}
              <p className="text-white font-bold text-lg mt-4 text-center">{lecture.title}</p>
            </GlareCard>
          </a>
        ))}
      </div>
    </main>
  );
}
