// URL: /posts/123
export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    return <div>Post: {id}</div>
} 