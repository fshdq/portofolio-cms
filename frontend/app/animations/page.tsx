"use client"
import Link from 'next/link'
import {useState} from 'react'
import {TextReveal, MotionDiv, MotionSection, MotionImage, SlideIn, BlurIn, StaggerGrid, StaggerItem, Pop} from '@/lib/motion'

export default function AnimationsShowcasePage() {
  const [headlineKey, setHeadlineKey] = useState(0)
  const [slideKey, setSlideKey] = useState(0)
  const [motionKey, setMotionKey] = useState(0)
  const [blurPopKey, setBlurPopKey] = useState(0)
  const [staggerKey, setStaggerKey] = useState(0)
  const cards = Array.from({ length: 8 }).map((_, i) => ({
    id: `card-${i}`,
    title: `Card ${i + 1}`,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }));

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 py-14 md:py-20" key={`headline-${headlineKey}`}>
        <div className="text-center">
          <TextReveal
            as="h1"
            text="Motion Playground"
            split="char"
            className="text-4xl font-extrabold tracking-tight md:text-6xl"
            y={24}
            stagger={0.03}
          />
          <TextReveal
            as="p"
            text="A tiny gallery of Framer Motion utilities — word and char reveals, slides, blur, pop, and staggered grids."
            split="word"
            className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg"
            delay={0.2}
            stagger={0.02}
            y={10}
          />
          <div className="mt-6">
            <button onClick={() => setHeadlineKey((k) => k + 1)} className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm">
              Restart Animation
            </button>
          </div>
        </div>
      </section>

      {/* SlideIn showcase */}
      <section className="mx-auto max-w-5xl px-6 pb-10" key={`slide-${slideKey}`}>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">
          SlideIn
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SlideIn
            from="left"
            className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <h3 className="text-lg font-semibold">From Left</h3>
            <p className="mt-1 text-sm text-slate-600">
              Elements slide into view from the left.
            </p>
          </SlideIn>
          <SlideIn
            from="up"
            className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <h3 className="text-lg font-semibold">From Bottom</h3>
            <p className="mt-1 text-sm text-slate-600">
              Default direction (up).
            </p>
          </SlideIn>
          <SlideIn
            from="right"
            className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <h3 className="text-lg font-semibold">From Right</h3>
            <p className="mt-1 text-sm text-slate-600">
              Slide in from the right.
            </p>
          </SlideIn>
          <SlideIn
            from="down"
            className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <h3 className="text-lg font-semibold">From Top</h3>
            <p className="mt-1 text-sm text-slate-600">
              Slide in from the top.
            </p>
          </SlideIn>
        </div>
        <div className="mt-6">
          <button onClick={() => setSlideKey((k) => k + 1)} className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm">Restart SlideIn</button>
        </div>
      </section>

      {/* MotionDiv / MotionSection / MotionImage */}
      <section className="mx-auto max-w-5xl px-6 pb-12" key={`motion-${motionKey}`}>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">MotionDiv / MotionSection / MotionImage</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <MotionDiv className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold m-0">MotionDiv</h3>
            <p className="mt-1 text-sm text-slate-600">Fades + slides up on scroll.</p>
          </MotionDiv>

          <MotionSection className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold m-0">MotionSection</h3>
            <p className="mt-1 text-sm text-slate-600">Same behavior, semantic section.</p>
          </MotionSection>

          <MotionImage className="rounded-xl overflow-hidden shadow-sm ring-1 ring-slate-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://picsum.photos/seed/motion-image/800/500" alt="MotionImage demo" className="w-full" />
          </MotionImage>
        </div>
        <div className="mt-6">
          <button onClick={() => setMotionKey((k) => k + 1)} className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm">Restart MotionDiv/Section/Image</button>
        </div>
      </section>

      {/* BlurIn + Pop */}
      <section className="mx-auto max-w-5xl px-6 pb-12" key={`blurPop-${blurPopKey}`}>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">
          BlurIn & Pop
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <BlurIn className="rounded-xl bg-gradient-to-br from-indigo-200 via-blue-200 to-teal-200 p-0">
            <div className="aspect-[16/10] w-full rounded-xl" />
          </BlurIn>

          <Pop className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:col-span-2">
            <Pop className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-indigo-700">
              <span className="inline-block h-2 w-2 rounded-full bg-indigo-600" />
              <span className="text-xs font-semibold uppercase tracking-wide">
                New
              </span>
            </Pop>
            <h3 className="mt-3 text-xl font-semibold">
              Pop makes CTAs feel alive
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Great for badges, chips, or primary buttons — springy but subtle.
              Respects{" "}
              <code className="rounded bg-slate-100 px-1 py-0.5">
                prefers-reduced-motion
              </code>
              .
            </p>
          </Pop>
        </div>
        <div className="mt-6">
          <button onClick={() => setBlurPopKey((k) => k + 1)} className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm">Restart Blur/Pop</button>
        </div>
      </section>

      {/* Staggered cards */}
      <section className="mx-auto max-w-5xl px-6 pb-20" key={`stagger-${staggerKey}`}>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">
          StaggerGrid + StaggerItem
        </h2>
        <StaggerGrid
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          delay={0.12}
          stagger={0.08}
        >
          {cards.map((c, i) => (
            <StaggerItem key={c.id} from={i % 2 ? "up" : "down"}>
              <article className="h-full rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {i % 2 ? "From Up" : "From Down"}
                  </span>
                  <Pop>
                    <span className="rounded bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-700">
                      #{i + 1}
                    </span>
                  </Pop>
                </div>
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{c.desc}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>
        <div className="mt-6">
          <button onClick={() => setStaggerKey((k) => k + 1)} className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm">Restart Stagger Grid</button>
        </div>
      </section>

      {/* Footer tip */}
      <footer className="mx-auto max-w-5xl px-6 pb-24 text-center text-sm text-slate-500">
        Toggle “Reduce Motion” in your OS settings to see how these components
        gracefully disable animations.
      </footer>
    </main>
  );
}
