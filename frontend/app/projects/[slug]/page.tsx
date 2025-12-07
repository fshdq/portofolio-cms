import {formatDate} from '@/lib/formatDate'

import {client} from '@/sanity/lib/client'
import {projectQuery} from '@/sanity/lib/queries'
import PortableText from '@/app/components/PortableText'
import { ArrowLeft, ArrowUpRight, ChevronRight } from 'lucide-react'
import CoverImage from '@/app/components/CoverImage'
import Link from 'next/link'
import { BlurIn, Pop, SlideIn, TextReveal } from '@/lib/motion'

export const revalidate = 60

type Props = {
  params: {
    slug: string
  }
}

export default async function ProjectPage({params}: Props) {
  const slug = params.slug
  const project: any = await client.fetch(projectQuery, {slug})

  if (!project) {
    return <div className="max-w-7xl mx-auto px-6 py-12">Project not found</div>
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* <CaseStudyRevamp />  */}
      <div className="mb-12">
        <a href="#" className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 mb-6 group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Works
        </a>

        <TextReveal
          as="h1"
          text={project.title}
          split="char"
          className="text-4xl font-extrabold tracking-tight md:text-6xl"
          y={24}
          stagger={0.03}
        />
        <SlideIn
          from="up"
        >
          { project.excerpt && <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mt-4">
            {project.excerpt}
          </p>}
        </SlideIn>

        {/* New: Project Meta Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 py-6 border-y border-slate-100">
          <SlideIn
            from="up"
          >
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Role</span>
            <span className="font-medium">{project.role}</span>
          </SlideIn>
          <SlideIn
            from="up"
            delay={0.25}
          >
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Timeline</span>
            <span className="font-medium">{formatDate(project.date)}</span>
          </SlideIn>
          {project.team && (
            <SlideIn
              from="up"
              delay={0.5}
            >
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Team</span>
              <span className="font-medium">{project.team}</span>
            </SlideIn>
          )}
          <SlideIn
            from="up"
            delay={0.75}
          >
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Stack</span>
            <span className="font-medium">{project.tools}</span>
          </SlideIn>
        </div>
        {project.coverImage && (
          <Pop delay={0.85}>
            <CoverImage className="w-full mt-6 rounded-md" image={project.coverImage} priority />
          </Pop>
        )}
      </div>

      {/* Section: The Challenge */}
      <SlideIn from='up' className="grid md:grid-cols-3 gap-12 mb-20 bg-gray-50 p-6 rounded-lg">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-slate-900 m-0">The Challenge</h2>
        </div>
        <div className="md:col-span-2">
          {project.challenge && (
            <p className="text-slate-600 leading-relaxed mt-0">{project.challenge}</p>
          )}
        </div>
      </SlideIn>

      <article>
        {/* Product Thinking */}
        <SlideIn from='up' className="mb-10">
          {project.productThinking?.headline && <h2 className="text-2xl font-semibold mb-2">{project.productThinking.headline}</h2>}
          {project.productThinking?.content && (
            <div className="prose prose-a:text-brand">
              <PortableText value={project.productThinking.content} />
            </div>
          )}

          {project.productThinking?.gallery?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {project.productThinking.gallery.map((img: any, idx: number) => {
                // const src = urlForImage(img)?.width(1200).url()
                return (
                  <figure key={idx}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {/* <img src={src} alt={img?.alt || project.title} className="w-full rounded-md object-cover" /> */}
                    <CoverImage className="w-full mt-6 rounded-md border border-gray-100" image={img} priority />
                    {img?.caption && <figcaption className="text-sm text-slate-500 mt-1">{img.caption}</figcaption>}
                  </figure>
                )
              })}
            </div>
          ) : null}
        </SlideIn>

        {/* Process */}
        <SlideIn from='up' className="mb-10">
          {project.process?.headline && <h2 className="text-2xl font-semibold mb-2">{project.process.headline}</h2>}
          {project.process?.content && (
            <div className="prose prose-a:text-brand">
              <PortableText value={project.process.content} />
            </div>
          )}

          {project.process?.gallery?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {project.process.gallery.map((img: any, idx: number) => {
                // const src = urlForImage(img)?.width(1200).url()
                return (
                  <figure key={idx}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {/* <img src={src} alt={img?.alt || project.title} className="w-full rounded-md object-cover" /> */}
                    <CoverImage className="w-full mt-6 rounded-md border border-gray-100" image={img} priority />
                    {img?.caption && <figcaption className="text-sm text-slate-500 mt-1">{img.caption}</figcaption>}
                  </figure>
                )
              })}
            </div>
          ) : null}
        </SlideIn>

        {/* Impact */}
        {project.impact && (
          <SlideIn from='up' className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Impact & Results</h2>
              {project.impact.summary && <p className="text-slate-300 max-w-xl mb-8">{project.impact.summary}</p>}
              {project.impact.metrics?.length ? (
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  {project.impact.metrics.map((m: any, i: number) => (
                    <div key={i} className="border-l border-white/20 pl-6">
                      <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{m.value}</div>
                      <div className="text-slate-400 text-sm font-medium uppercase tracking-wide">{m.label}</div>
                      <div className="text-slate-400 text-sm font-medium uppercase tracking-wide">{m.source}</div>
                    </div>
                  ))}
                </ul>
              ) : null}

              {/* 6. CTA BUTTONS (Lebih solid dibanding link teks) */}
              <div className="flex flex-col sm:flex-row gap-4">
                {project.prototypeUrl && (
                  <Link href={project.prototypeUrl} className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all inline-flex items-center justify-center gap-2">
                    View Live Site
                    <ArrowUpRight size={18} />
                  </Link>
                )}
                {project.externalUrl && (
                  <Link href={project.externalUrl} className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-all inline-flex items-center justify-center gap-2">
                    Explore Prototype
                    <ChevronRight size={18} />
                  </Link>
                )}
              </div>
            </div>
          </SlideIn>
        )}
      </article>
    </main>
  )
}
