"use client"

import slugify from "slugify"
import { useState } from "react"

////////////////////////////////////////////////////////////////////////////////
// 🔥 COPY BUTTON
////////////////////////////////////////////////////////////////////////////////

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 text-xs bg-zinc-800 hover:bg-zinc-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  )
}

////////////////////////////////////////////////////////////////////////////////
// 🔥 CALLOUT
////////////////////////////////////////////////////////////////////////////////

/* eslint-disable @typescript-eslint/no-explicit-any */
function Callout({ type = "info", children }: any) {
  const styles: any = {
    info: "border-blue-500 bg-blue-500/10",
    success: "border-green-500 bg-green-500/10",
    warning: "border-yellow-500 bg-yellow-500/10",
    danger: "border-red-500 bg-red-500/10",
  }

  return (
    <div className={`border-l-4 p-4 rounded-lg my-6 ${styles[type]}`}>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}

////////////////////////////////////////////////////////////////////////////////
// 🔥 COMPONENTS
////////////////////////////////////////////////////////////////////////////////

const components = {
  Callout,

  // 🔥 H1 (FIXES your original issue)
  /* eslint-disable @typescript-eslint/no-explicit-any */
  h1: ({ children }: any) => {
    const id = slugify(children.toString(), { lower: true })

    return (
      <h1
        id={id}
        className="
          text-5xl md:text-6xl font-extrabold mb-8
          bg-gradient-to-r from-red-500 to-orange-400
          bg-clip-text text-transparent
        "
      >
        {children}
      </h1>
    )
  },
/* eslint-disable @typescript-eslint/no-explicit-any */
  // 🔗 H2 with anchor
  h2: ({ children }: any) => {
    const id = slugify(children.toString(), { lower: true })

    return (
      <h2 id={id} className="group scroll-mt-24">
        <a
          href={`#${id}`}
          className="opacity-0 group-hover:opacity-100 mr-2 text-red-400"
        >
          #
        </a>
        {children}
      </h2>
    )
  },
/* eslint-disable @typescript-eslint/no-explicit-any */
  // 🔗 H3 with anchor
  h3: ({ children }: any) => {
    const id = slugify(children.toString(), { lower: true })

    return (
      <h3 id={id} className="group scroll-mt-24">
        <a
          href={`#${id}`}
          className="opacity-0 group-hover:opacity-100 mr-2 text-red-400"
        >
          #
        </a>
        {children}
      </h3>
    )
  },

  // Divider
  hr: () => <div className="my-12 border-t border-zinc-800" />,
/* eslint-disable @typescript-eslint/no-explicit-any */
  // Inline code
  code: (props: any) => (
    <code
      className="text-red-400 bg-zinc-800 px-1.5 py-0.5 rounded-md"
      {...props}
    />
  ),
/* eslint-disable @typescript-eslint/no-explicit-any */
  // Code block
  pre: (props: any) => {
    const code = props.children?.props?.children || ""

    return (
      <div className="relative group">
        <CopyButton code={code} />
        <pre {...props} />
      </div>
    )
  },
}

export default components