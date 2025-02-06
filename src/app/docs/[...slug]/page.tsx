// 匹配: /docs/a, /docs/a/b, /docs/a/b/c 等
export default async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  return <div>Slug: {slug.join('/')}</div>
} 