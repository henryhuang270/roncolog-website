import Image from "next/image";


export default function Home() {
  const heroBackground = `
    linear-gradient(
      90deg,
      rgba(4, 18, 40, 0.98) 0%,
      rgba(4, 18, 40, 0.88) 34%,
      rgba(4, 18, 40, 0.48) 60%,
      rgba(4, 18, 40, 0.18) 100%
    ),
    url("https://cwcqspxufigntuefwxqi.supabase.co/storage/v1/object/public/ronco-public-assets/homepage/banner/ronco-homepage-banner-v1.png")
  `;

  return (
    <main className="min-h-screen bg-[#061426] text-white">
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: heroBackground }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(214,180,109,0.16),transparent_30%)]" />

        <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a
  href="#home"
  className="flex items-center"
  aria-label="RONCO Home"
>
  <Image
    src="/brand/ronco-logo-v4-light-bg.png"
    alt="RONCO 荣程国际"
    width={320}
    height={126}
    priority
    className="h-auto w-[180px] sm:w-[220px] lg:w-[260px]"
  />
</a>

          <div className="hidden items-center gap-8 text-sm text-slate-200 lg:flex">
            <a href="#home" className="transition hover:text-[#e5ca90]">
              Home
            </a>
            <a href="#logistics" className="transition hover:text-[#e5ca90]">
              Global Logistics
            </a>
            <a href="#trade" className="transition hover:text-[#e5ca90]">
              International Trade
            </a>
            <a href="#partnership" className="transition hover:text-[#e5ca90]">
              Partnership
            </a>
            <a href="#insights" className="transition hover:text-[#e5ca90]">
              Insights
            </a>
          </div>

          <a
            href="#contact"
            className="hidden border border-[#d9ba78] px-4 py-2 text-xs font-medium tracking-[0.08em] text-[#f1dbac] transition hover:bg-[#d9ba78] hover:text-[#071629] sm:inline-flex"
          >
            CONTACT RONCO
          </a>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-92px)] w-full max-w-7xl items-center px-6 pb-20 pt-10 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] text-[#e7cf9d]">
              <span className="h-px w-10 bg-[#d9ba78]" />
              GLOBAL SUPPLY CHAIN · CROSS-BORDER TRADE
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              Connecting Global
              <br />
              Supply Chains and
              <br />
              <span className="text-[#e4c681]">Market Opportunities.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              RONCO connects international logistics, cross-border trade and
              market-entry opportunities — helping businesses move goods,
              develop partnerships and reach new markets with confidence.
            </p>

            <p className="mt-4 text-sm tracking-[0.04em] text-slate-300">
              连接全球供应链，创造跨境市场机会。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#logistics"
                className="inline-flex items-center justify-center bg-[#d9ba78] px-6 py-3.5 text-sm font-semibold tracking-[0.08em] text-[#071629] transition hover:bg-[#ecd69d]"
              >
                获取物流方案
              </a>

              <a
                href="#partnership"
                className="inline-flex items-center justify-center border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold tracking-[0.08em] text-white backdrop-blur-sm transition hover:border-[#d9ba78] hover:text-[#f0d9a5]"
              >
                探讨贸易合作
              </a>
            </div>

            <div className="mt-14 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="border border-white/15 bg-[#081a2e]/50 px-4 py-4 backdrop-blur-sm">
                <p className="text-xs tracking-[0.14em] text-[#e1c483]">
                  LOGISTICS
                </p>
                <p className="mt-2 text-sm text-slate-100">
                  Sea · Air · Rail · Road
                </p>
              </div>

              <div className="border border-white/15 bg-[#081a2e]/50 px-4 py-4 backdrop-blur-sm">
                <p className="text-xs tracking-[0.14em] text-[#e1c483]">
                  TRADE
                </p>
                <p className="mt-2 text-sm text-slate-100">
                  Import · Export · Sourcing
                </p>
              </div>

              <div className="border border-white/15 bg-[#081a2e]/50 px-4 py-4 backdrop-blur-sm">
                <p className="text-xs tracking-[0.14em] text-[#e1c483]">
                  PARTNERSHIP
                </p>
                <p className="mt-2 text-sm text-slate-100">
                  Brands · Markets · Growth
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-6 z-10 flex items-center gap-3 text-[10px] tracking-[0.18em] text-slate-300 lg:left-10">
          <span className="h-8 w-px bg-[#d9ba78]" />
          RONCO INTERNATIONAL SUPPLY CHAIN TECHNOLOGY
        </div>
      </section>

      <section
        id="logistics"
        className="flex min-h-[220px] items-center justify-center bg-[#071629] px-6 text-center text-slate-400"
      >
        Global Logistics section — coming next
      </section>

      <section
        id="trade"
        className="flex min-h-[220px] items-center justify-center bg-[#0a1c31] px-6 text-center text-slate-400"
      >
        International Trade section — coming next
      </section>

      <section
        id="partnership"
        className="flex min-h-[220px] items-center justify-center bg-[#071629] px-6 text-center text-slate-400"
      >
        Partnership section — coming next
      </section>

      <section
        id="insights"
        className="flex min-h-[220px] items-center justify-center bg-[#0a1c31] px-6 text-center text-slate-400"
      >
        Insights section — coming next
      </section>

      <section
        id="contact"
        className="flex min-h-[220px] items-center justify-center bg-[#071629] px-6 text-center text-slate-400"
      >
        Contact section — coming next
      </section>
    </main>
  );
}