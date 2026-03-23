import fs from "fs"
import path from "path"
import MDXRenderer from "@/components/MDXRenderer"
import { notFound } from "next/navigation"

export default async function MythPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params  // ✅ FIX HERE

  const filePath = path.join(
    process.cwd(),
    "app/others/dev-myths/content",
    `${slug}.mdx`
  )

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const source = fs.readFileSync(filePath, "utf-8")

  return (
    <div className="mt-10">
      <MDXRenderer source={source} />
    </div>
  )
}