import Link from "next/link";
import { LEGAL, LINKS } from "@/app/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container-x">
        <div className="fcols">
          <div>
            <p className="font-display font-semibold text-ink">Mobiera</p>
            <p className="mt-2 max-w-[34ch]">Trust networks and Verifiable Credentials built on Verana, and the platforms behind 25+ mobile networks.</p>
          </div>
          <div>
            <h4>Verifiable Credentials</h4>
            <ul>
              <li><Link href="/trust">Trust networks</Link></li>
              <li><Link href="/trust/services">Trust services</Link></li>
              <li><Link href="/certification">Certification</Link></li>
              <li><a href={LINKS.foundation} rel="noopener">Verana Foundation ↗</a></li>
              <li><a href={LINKS.verana} rel="noopener">verana.io ↗</a></li>
              <li><a href={LINKS.council} rel="noopener">Verana Council ↗</a></li>
            </ul>
          </div>
          <div>
            <h4>Telecom</h4>
            <ul>
              <li><Link href="/telecom">Platforms</Link></li>
              <li><Link href="/telecom/aircast">Aircast</Link></li>
              <li><Link href="/telecom/ai-agents">AI One</Link></li>
              <li><a href={LINKS.docs} rel="noopener">Documentation ↗</a></li>
              <li><a href={LINKS.github} rel="noopener">GitHub ↗</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/company">About</Link></li>
              <li><Link href="/company#open-source">Open source</Link></li>
              <li><Link href="/company/careers">Careers</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="fbottom">
          <span>© {LEGAL.founded}-{year} {LEGAL.name}, {LEGAL.city}</span>
          <span className="flex flex-wrap gap-x-3">
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Cookies</Link>
            <a href={LINKS.linkedin} rel="noopener">LinkedIn</a>
            <a href={LINKS.github} rel="noopener">GitHub</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
