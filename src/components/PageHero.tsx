import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type HeroButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  imageAlt?: string;
  imagePosition?: string;
  tone?: "light" | "dark";
  buttons?: HeroButton[];
  children?: ReactNode;
  contentAlign?: "left" | "right";
  overlay?: boolean;
  textPanel?: boolean;
  height?: "standard" | "full";
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  imagePosition = "center center",
  tone = "light",
  buttons = [],
  children,
  contentAlign = "left",
  overlay = false,
  textPanel = false,
  height = "standard",
}: PageHeroProps) {
  const isRight = contentAlign === "right";
  const isFullHeight = height === "full";
  const bodyText = description ?? subtitle;
  const hasActions = buttons.length > 0 || children;

  const textColorClass = tone === "dark" ? "text-white" : "text-[#071629]";
  const paragraphColorClass =
    tone === "dark" ? "text-white/90" : "text-[#18324a]";
  const eyebrowColorClass =
    tone === "dark" ? "text-[#f2d28b]" : "text-[#b7791f]";

  const textShadow =
    tone === "dark"
      ? "0 2px 16px rgba(0,0,0,0.45)"
      : "0 2px 18px rgba(255,255,255,0.9), 0 1px 3px rgba(255,255,255,0.75)";

  return (
    <section className="relative overflow-hidden bg-[#eef7fb]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />

        {overlay ? (
          <div
            className={
              tone === "dark"
                ? "absolute inset-0 bg-[#071629]/28"
                : "absolute inset-0 bg-white/16"
            }
          />
        ) : null}
      </div>

      <div
        className={`relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 ${
          isFullHeight
            ? "py-10 sm:py-12 lg:py-14"
            : "py-6 sm:py-7 lg:py-8"
        }`}
      >
        <div
          className={`grid items-center gap-8 ${
            isRight ? "lg:grid-cols-[1fr_0.82fr]" : "lg:grid-cols-[0.82fr_1fr]"
          }`}
          style={{
            minHeight: isFullHeight
              ? "calc(100svh - 86px)"
              : "clamp(280px, 38svh, 430px)",
          }}
        >
          {isRight ? <div className="hidden lg:block" /> : null}

          <div
            className={`max-w-[620px] ${
              isRight ? "lg:justify-self-end" : "lg:justify-self-start"
            } ${
              textPanel
                ? "rounded-[1.5rem] border border-white/70 bg-white/80 p-5 shadow-[0_14px_36px_rgba(15,23,42,0.10)] backdrop-blur-[2px] sm:p-6 lg:p-7"
                : ""
            }`}
          >
            {eyebrow ? (
              <p
                className={`text-xs font-semibold tracking-[0.2em] ${eyebrowColorClass}`}
                style={{ textShadow }}
              >
                {eyebrow}
              </p>
            ) : null}

            <h1
              className={`mt-3 font-semibold leading-tight tracking-[-0.045em] ${textColorClass} ${
                isFullHeight
                  ? "text-[clamp(2.2rem,4vw,4rem)]"
                  : "text-[clamp(2rem,3.4vw,3.15rem)]"
              }`}
              style={{ textShadow }}
            >
              {title}
            </h1>

            {bodyText ? (
              <p
                className={`mt-4 max-w-3xl leading-7 ${paragraphColorClass} ${
                  isFullHeight
                    ? "text-base sm:text-lg sm:leading-8"
                    : "text-sm sm:text-base"
                }`}
                style={{ textShadow }}
              >
                {bodyText}
              </p>
            ) : null}

            {hasActions ? (
              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                {buttons.map((button) => {
                  const isPrimary = button.variant !== "secondary";

                  return (
                    <Link
                      key={`${button.label}-${button.href}`}
                      href={button.href}
                      className={
                        isPrimary
                          ? "inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white shadow-[0_10px_26px_rgba(11,111,153,0.24)] transition hover:-translate-y-0.5 hover:bg-[#176347]"
                          : "inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white/92 px-6 py-3 text-sm font-semibold tracking-[0.08em] text-[#176347] shadow-[0_10px_24px_rgba(255,255,255,0.45)] transition hover:-translate-y-0.5 hover:bg-[#ecfff5]"
                      }
                    >
                      {button.label}
                    </Link>
                  );
                })}

                {children}
              </div>
            ) : null}
          </div>

          {!isRight ? <div className="hidden lg:block" /> : null}
        </div>
      </div>
    </section>
  );
}