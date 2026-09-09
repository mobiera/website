import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export function ButtonLink({ href, children, variant = "default", className = "" }: { href: string; children: ReactNode; variant?: "default" | "primary"; className?: string }) {
  const cls = `btn ${variant === "primary" ? "btn-primary" : ""} ${className}`.trim();
  if (isExternal(href)) {
    return <a href={href} className={cls} rel="noopener">{children}<span className="arrow" aria-hidden="true">→</span></a>;
  }
  return <Link href={href} className={cls}>{children}<span className="arrow" aria-hidden="true">→</span></Link>;
}

export function MoreLink({ href, children }: { href: string; children: ReactNode }) {
  if (isExternal(href)) return <a href={href} className="more" rel="noopener">{children} →</a>;
  return <Link href={href} className="more">{children} →</Link>;
}

export function PageHero({ eyebrow, title, lead, children, ground = true }: { eyebrow?: string; title: string; lead?: ReactNode; children?: ReactNode; ground?: boolean }) {
  return (
    <div className={ground ? "ground" : undefined}>
      <section className="hero container-x">
        <div className="hero-inner">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-3">{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children && <div className="ctas">{children}</div>}
        </div>
      </section>
    </div>
  );
}

export function Section({ id, eyebrow, title, lead, children, className = "" }: { id?: string; eyebrow?: string; title?: string; lead?: ReactNode; children?: ReactNode; className?: string }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="container-x">
        {(eyebrow || title || lead) && (
          <div className="sec-head">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && <h2>{title}</h2>}
            {lead && <p className="sec-lead">{lead}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`card ${className}`.trim()}>{children}</div>;
}

export function Grid({ cols = 2, children, className = "" }: { cols?: 2 | 3 | 4; children: ReactNode; className?: string }) {
  return <div className={`grid-${cols} ${className}`.trim()}>{children}</div>;
}

export function Chips({ items }: { items: readonly string[] }) {
  return (
    <div className="chips">
      {items.map((c) => <span key={c} className="chip">{c}</span>)}
    </div>
  );
}

export function ProofStrip({ items }: { items: { value: string; label: string; tone?: "green" | "violet" }[] }) {
  return (
    <div className="stripe" role="list">
      {items.map((s) => (
        <div key={s.label} className={`stat ${s.tone ?? ""}`.trim()} role="listitem">
          <b>{s.value}</b>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

export function Steps({ items }: { items: { title: string; body: ReactNode }[] }) {
  return (
    <ol className="steps">
      {items.map((s, i) => (
        <li key={s.title}>
          <span className="num">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Feature({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="feature">
      <h3>{title}</h3>
      <div className="text-muted">{children}</div>
    </div>
  );
}

export function CtaBand({ title, lead, href, label }: { title: string; lead?: string; href: string; label: string }) {
  return (
    <section className="section">
      <div className="container-x cta-band">
        <div>
          <h2>{title}</h2>
          {lead && <p className="text-muted mt-2">{lead}</p>}
        </div>
        <ButtonLink href={href} variant="primary">{label}</ButtonLink>
      </div>
    </section>
  );
}
