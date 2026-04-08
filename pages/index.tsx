import Head from 'next/head';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const products = [
  {
    name: 'BookTranslator',
    tagline: 'Translate entire books with AI in minutes',
    description:
      'Upload EPUB, PDF, or DOCX files and get AI-powered translations in 150+ languages. Features bilingual comparison, context-aware accuracy, and lightning-fast processing.',
    stats: '150+ languages · EPUB/PDF/DOCX · From $8/mo',
    href: 'https://www.booktranslator.app',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        <path d="M9 10h6" />
        <path d="M12 7v6" />
      </svg>
    ),
  },
  {
    name: 'PhotoBetter (Cooking)',
    tagline: 'AI-powered photography',
    description:
      'Enhance, upscale, and transform your photos with AI. Professional-quality results in seconds — no design skills required.',
    stats: 'AI Enhancement · Upscaling · One-click editing',
    // href: 'https://www.photobetter.ai',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Lovin Studio</title>
        <meta
          name="description"
          content="Lovin Studio builds tools that make life easier."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/lovin-logo.png" />
        <meta property="og:title" content="Lovin Studio" />
        <meta
          property="og:description"
          content="We build tools that make life easier."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lovinstudio.com" />
      </Head>

      {/* Navigation */}
      <nav className="bg-[var(--bg-base)]/80 sticky top-0 z-50 border-b border-[var(--bg-border)] backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/lovin-logo.png"
              alt="Lovin Studio"
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-base font-semibold text-[var(--label-title)]">
              Lovin Studio
            </span>
          </div>
          <div className="hidden items-center gap-8 sm:flex">
            <a
              href="#products"
              className="text-sm text-[var(--label-muted)] transition-colors hover:text-[var(--label-title)]"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-sm text-[var(--label-muted)] transition-colors hover:text-[var(--label-title)]"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-[var(--label-muted)] transition-colors hover:text-[var(--label-title)]"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-shade)] to-[var(--bg-base)]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, var(--label-muted) 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
            />
          </div>
          <div className="mx-auto max-w-5xl px-6 pb-24 pt-24 sm:pb-32 sm:pt-32">
            <motion.div
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center"
            >
              <motion.h1
                custom={0}
                variants={fadeIn}
                className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[var(--label-title)] sm:text-5xl"
              >
                We build tools that make life easier.
              </motion.h1>
              <motion.p
                custom={1}
                variants={fadeIn}
                className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--label-muted)]"
              >
                Lovin Studio is a software company making AI technology
                accessible to everyone.
              </motion.p>
              <motion.div
                custom={2}
                variants={fadeIn}
                className="mt-10 flex gap-4"
              >
                <a
                  href="#products"
                  className="rounded-lg bg-[var(--label-title)] px-6 py-3 text-sm font-medium text-[var(--bg-base)] transition-opacity hover:opacity-90"
                >
                  See our products
                </a>
                <a
                  href="mailto:team@lovinstudio.com"
                  className="rounded-lg border border-[var(--bg-border)] px-6 py-3 text-sm font-medium text-[var(--label-base)] transition-colors hover:bg-[var(--bg-shade)]"
                >
                  Get in touch
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="border-t border-[var(--bg-border)]">
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.p
                custom={0}
                variants={fadeIn}
                className="text-sm font-medium uppercase tracking-widest text-[var(--accent-base)]"
              >
                Products
              </motion.p>
              <motion.h2
                custom={1}
                variants={fadeIn}
                className="mt-3 text-3xl font-bold text-[var(--label-title)] sm:text-4xl"
              >
                Tools people love to use
              </motion.h2>
              <motion.p
                custom={2}
                variants={fadeIn}
                className="mt-4 max-w-2xl text-lg text-[var(--label-muted)]"
              >
                Every product we build is designed to solve a real problem with
                the power of AI and a focus on simplicity.
              </motion.p>
            </motion.div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2">
              {products.map((product, i) => (
                <motion.a
                  key={product.name}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  custom={i}
                  variants={fadeIn}
                  className="group rounded-xl border border-[var(--bg-border)] p-8 transition-all hover:border-[var(--bg-border-strong)] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--bg-shade)] text-[var(--label-title)] transition-colors group-hover:bg-[var(--accent-base)] group-hover:text-white">
                    {product.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[var(--label-title)]">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--accent-base)]">
                    {product.tagline}
                  </p>
                  <p className="mt-4 leading-relaxed text-[var(--label-muted)]">
                    {product.description}
                  </p>
                  <p className="mt-4 text-sm text-[var(--label-faint)]">
                    {product.stats}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--label-title)] transition-colors group-hover:text-[var(--accent-base)]">
                    Visit {product.name}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-t border-[var(--bg-border)] bg-[var(--bg-sub)]"
        >
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.p
                custom={0}
                variants={fadeIn}
                className="text-sm font-medium uppercase tracking-widest text-[var(--accent-base)]"
              >
                About
              </motion.p>
              <motion.h2
                custom={1}
                variants={fadeIn}
                className="mt-3 text-3xl font-bold text-[var(--label-title)] sm:text-4xl"
              >
                Small team, big ambition
              </motion.h2>
              <motion.p
                custom={2}
                variants={fadeIn}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--label-muted)]"
              >
                Founded in 2023 and headquartered in Delaware, USA, Lovin Studio
                is a small but ambitious team building AI-first products. We
                believe technology should be accessible to everyone and make
                people's lives easier.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-[var(--bg-border)] bg-[var(--bg-sub)]"
        >
          <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="text-center"
            >
              <motion.h2
                custom={0}
                variants={fadeIn}
                className="text-3xl font-bold text-[var(--label-title)] sm:text-4xl"
              >
                Get in touch
              </motion.h2>
              <motion.p
                custom={1}
                variants={fadeIn}
                className="mt-4 text-lg text-[var(--label-muted)]"
              >
                Have a question or want to work with us? We&apos;d love to hear
                from you.
              </motion.p>
              <motion.div
                custom={2}
                variants={fadeIn}
                className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              >
                <a
                  href="mailto:team@lovinstudio.com"
                  className="flex items-center gap-2 rounded-lg bg-[var(--label-title)] px-6 py-3 text-sm font-medium text-[var(--bg-base)] transition-opacity hover:opacity-90"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  team@lovinstudio.com
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--bg-border)]">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <img
              src="/lovin-logo.png"
              alt="Lovin Studio"
              className="h-5 w-5 rounded"
            />
            <span className="text-sm text-[var(--label-muted)]">
              &copy; 2026 Lovin Studio. All rights reserved.
            </span>
          </div>
          <p className="text-sm text-[var(--label-faint)]">Delaware, USA</p>
        </div>
      </footer>
    </>
  );
}
