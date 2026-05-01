import TextFx from "./components/TextFx";

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4 shrink-0"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const GITHUB_URL = "https://github.com/pritamtirpude/react-textfx";

function App() {
  return (
    <main className="relative min-h-screen bg-[#07070f] text-white overflow-x-hidden">
      {/* Aurora background blobs */}
      <div
        className="pointer-events-none fixed -top-60 -left-60 h-175 w-175 rounded-full bg-violet-600/25 blur-[140px] animate-blob"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed top-10 -right-60 h-150 w-150 rounded-full bg-blue-500/20 blur-[140px] animate-blob [animation-delay:4s]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed bottom-0 left-1/2 -translate-x-1/2 h-125 w-225 rounded-full bg-fuchsia-600/15 blur-[140px] animate-blob [animation-delay:8s]"
        aria-hidden="true"
      />

      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-xl bg-[#07070f]/60 border-b border-white/6">
        <span className="text-base font-bold tracking-tight">
          <span className="text-white/40">react</span>
          <span className="text-white">-textfx</span>
        </span>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 hover:border-white/30 hover:bg-white/10 hover:text-white transition-all duration-200"
        >
          <GithubIcon />
          GitHub
        </a>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-5xl px-6 md:px-12 pt-28 pb-20 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
          Lightweight · Zero config · TypeScript ready
        </div>

        <h1 className="mt-4 text-5xl md:text-7xl font-black">
          Make your text
          <br />
          <span className="inline-block">
            <TextFx
              text="unforgettable"
              variant="sunset"
              animation="shimmer"
              className="text-5xl md:text-7xl font-black"
            />
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-base md:text-lg text-white/50 leading-relaxed">
          <strong className="text-white/80 font-medium">react-textfx</strong> is
          a tiny React component for animated gradient text — shimmer, pop,
          slideUp and more. Drop it in and watch your typography come alive.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-white/90 active:scale-95 transition-all duration-150"
          >
            <GithubIcon />
            Star on GitHub
          </a>
          <a
            href="#preview"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-white/70 hover:border-white/30 hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            See it live ↓
          </a>
        </div>

        {/* npm install strip */}
        <div className="mt-10 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/4 px-5 py-3">
          <span className="text-xs text-white/30 font-mono uppercase tracking-widest select-none">
            install
          </span>
          <code className="font-mono text-sm text-emerald-400">
            npm install @pritamtirpude/react-textfx
          </code>
        </div>
      </section>

      {/* Live preview */}
      <section
        id="preview"
        className="relative mx-auto max-w-5xl px-6 md:px-12 py-16"
      >
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-white/25">
          Live preview
        </p>
        <h2 className="mb-10 text-center text-2xl md:text-3xl font-bold text-white/90">
          All animations. Zero effort.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/8 bg-white/3 p-8 text-center hover:border-white/20 hover:bg-white/6 transition-all duration-300">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
              Shimmer
            </p>
            <div className="mt-5">
              <TextFx
                text="Launch Faster"
                variant="gold"
                animation="shimmer"
                className="text-2xl font-bold"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/8 bg-white/3 p-8 text-center hover:border-white/20 hover:bg-white/6 transition-all duration-300">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
              Pop
            </p>
            <div className="mt-5">
              <TextFx
                text="Stand Out"
                variant="instagram"
                animation="pop"
                className="text-2xl font-bold"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/8 bg-white/3 p-8 text-center hover:border-white/20 hover:bg-white/6 transition-all duration-300">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
              Slide Up
            </p>
            <div className="mt-5">
              <TextFx
                text="Rise Above"
                variant="aurora"
                animation="slideUp"
                className="text-2xl font-bold"
              />
            </div>
          </div>

          <div className="sm:col-span-3 rounded-2xl border border-white/8 bg-white/3 p-8 text-center hover:border-white/20 hover:bg-white/6 transition-all duration-300">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
              Custom background image
            </p>
            <div className="mt-5">
              <TextFx
                text="Brand Aligned"
                animation="none"
                backgroundImage="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80"
                className="text-4xl font-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="relative mx-auto max-w-2xl px-6 md:px-12 py-16">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-white/25">
          Usage
        </p>
        <h2 className="mb-8 text-center text-2xl md:text-3xl font-bold text-white/90">
          Two lines to animated text.
        </h2>

        <div className="rounded-2xl border border-white/8 bg-white/3 overflow-hidden">
          {/* Fake traffic lights */}
          <div className="flex items-center gap-1.5 border-b border-white/6 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/50" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/50" />
            <span className="h-3 w-3 rounded-full bg-green-500/50" />
          </div>
          <pre className="overflow-x-auto p-6 text-sm leading-relaxed font-mono text-white/75">
            <code>{`import TextFx from "@pritamtirpude/react-textfx";

<TextFx
  text="Hello, world"
  variant="gold"
  animation="shimmer"
/>`}</code>
          </pre>
        </div>
      </section>

      {/* Features */}
      <section className="relative mx-auto max-w-5xl px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(
            [
              {
                icon: "⚡",
                title: "Tiny footprint",
                desc: "No heavy deps. Just React + Motion and you're done.",
              },
              {
                icon: "🎨",
                title: "13 built-in variants",
                desc: "sunset, gold, instagram, aurora, neon and more — ready instantly.",
              },
              {
                icon: "🔧",
                title: "Fully customizable",
                desc: "Pass any background image or CSS gradient as a prop.",
              },
            ] as const
          ).map(({ icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/8 bg-white/3 p-6"
            >
              <div className="mb-3 text-2xl">{icon}</div>
              <h3 className="mb-1 text-base font-semibold text-white">
                {title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/6 py-8 text-center text-sm text-white/25">
        <p>
          Built with ♥ &nbsp;·&nbsp;{" "}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="text-white/40 hover:text-white/70 transition-colors"
          >
            github.com/pritamtirpude/react-textfx
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;
