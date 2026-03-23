import { MDXRemote } from "next-mdx-remote/rsc"
import components from "./MDXCompontents"
import remarkGfm from "remark-gfm";

export default function MDXRenderer({ source }: { source: string }) {
  return (
    <div className="relative">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* 🔴 MAIN GLOW (center) */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/20 blur-[180px] rounded-full" />

        {/* 🟠 SECONDARY GLOW (top right) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-400/10 blur-[140px] rounded-full" />

        {/* 🔴 AMBIENT GLOW (bottom left) */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-400/10 blur-[120px] rounded-full" />

        {/* 🌫️ GLOBAL LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent" />

        {/* 🔲 GRID TEXTURE */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,_white_1px,_transparent_1px)] [background-size:22px_22px]" />
      </div>

      {/* 📄 CONTENT */}
      <article className="max-w-5xl mx-auto px-6 py-24 text-white">

        {/* Glass container */}
        <div className="
  relative
  backdrop-blur-2xl 
  bg-white/[0.04]
  border border-white/10
  rounded-3xl
  shadow-[0_0_80px_rgba(255,0,0,0.08)]
  p-8 md:p-12
  overflow-hidden
">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-red-500/10 blur-[100px]" />
          </div>

          

          <div
            className="
            prose prose-invert max-w-none

            /* 📏 BETTER TYPOGRAPHY */
            prose-p:text-zinc-300 prose-p:leading-8 prose-p:text-[17px]

            /* 🔑 STRONG */
            prose-strong:text-white prose-strong:font-semibold

            /* 📋 LISTS */
            prose-li:text-zinc-300 prose-li:marker:text-red-400
            prose-ul:pl-6 prose-ul:space-y-2

            /* 🔗 LINKS */
            prose-a:text-red-400 hover:prose-a:text-red-300 prose-a:no-underline

            /* 💻 INLINE CODE */
            prose-code:text-red-300 prose-code:bg-zinc-800/80 
            prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md

            /* 🧱 CODE BLOCKS */
            prose-pre:bg-zinc-950/80 
            prose-pre:border prose-pre:border-zinc-800
            prose-pre:rounded-2xl 
            prose-pre:p-5 
            prose-pre:shadow-xl

            /* 💬 BLOCKQUOTE */
            prose-blockquote:border-l-4 prose-blockquote:border-red-500 
            prose-blockquote:bg-zinc-900/50 
            prose-blockquote:py-3 prose-blockquote:px-5 
            prose-blockquote:rounded-r-xl 
            prose-blockquote:text-zinc-300

            /* ✨ DIVIDER */
            prose-hr:border-zinc-800 prose-hr:my-12
          "
          >
            <MDXRemote source={source} components={components} options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm], // 👈 Add the plugin here
              },
            }} />
          </div>

        </div>

      </article>
    </div>
  )
}