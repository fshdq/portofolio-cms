import Link from 'next/link'
import {formatDate} from '@/lib/formatDate'

import {client} from '@/sanity/lib/client'
import {allProjectsQuery} from '@/sanity/lib/queries'
import {urlForImage} from '@/sanity/lib/utils'

export const revalidate = 60

export default async function ProjectsPage() {
  const projects: any[] = await client.fetch(allProjectsQuery)

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>

      {projects.length === 0 ? (
        <p>No projects yet. Add a project in the Studio.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p) => {
            const imgUrl = urlForImage(p.coverImage)?.width(800).height(520).url()
            return (
              <article key={p._id} className="border rounded-lg overflow-hidden shadow-sm">
                <Link href={`/projects/${p.slug}`} className="block">
                  {imgUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={imgUrl} alt={p.coverImage?.alt || p.title} className="w-full h-48 object-cover" />
                  ) : (
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">No image</div>
                  )}
                </Link>

                <div className="p-4">
                  <h2 className="text-lg font-medium">
                    <Link href={`/projects/${p.slug}`}>{p.title}</Link>
                  </h2>
                  <p className="text-sm text-slate-600 mt-2">{p.excerpt}</p>
                  <div className="mt-3 text-xs text-slate-500">
                    {p.role && <span>{p.role}</span>}
                    {p.date && (
                      <span className="ml-2"> — {formatDate(p.date)}</span>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </main>
  )
}
