import type { Metadata } from "next";
import { faBuilding, faLink, faRoute } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "@/app/components/ContactForm";
import { Card, CardTitle, PageHero, Section } from "@/app/components/ui";
import { LEGAL, LINKS } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to Mobiera about Aircast, AI One, trust services, Verana integrator certification, partnerships, careers or press. Every message is routed to the right person.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to us." lead="Every message is routed to the right person. No email address to guess, no sales queue." ground={false} />

      <Section>
        <div className="grid-2 gap-10 items-start">
          <div className="max-w-[720px]">
            <ContactForm />
          </div>
          <div className="grid gap-5">
            <Card>
              <CardTitle icon={faRoute}>Routed internally</CardTitle>
              <ul>
                <li>No email addresses exposed on the site.</li>
                <li>Self-hosted anti-abuse: a honeypot and timing checks, no CAPTCHA.</li>
                <li>Inquiries go by email to the right Mobiera mailbox. No CRM, no third parties.</li>
                <li>This form sets no cookies.</li>
              </ul>
            </Card>
            <Card>
              <CardTitle icon={faLink}>Other ways</CardTitle>
              <ul>
                <li><a className="text-link" href={LINKS.github} rel="noopener">github.com/mobiera</a></li>
                <li><a className="text-link" href={LINKS.docs} rel="noopener">docs.mobiera.io</a></li>
                <li><a className="text-link" href={LINKS.linkedin} rel="noopener">linkedin.com/company/mobiera-sas</a></li>
                <li>In person: telecom industry events in Latin America, the Internet Identity Workshop and Verana community events.</li>
              </ul>
            </Card>
            <Card>
              <CardTitle icon={faBuilding}>Who you are talking to</CardTitle>
              <address className="not-italic text-muted">
                <strong className="text-ink block">{LEGAL.name}, NIT {LEGAL.nit}</strong>
                {LEGAL.address}
              </address>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
