import type { Metadata } from "next";
import { PageHero } from "@/app/components/ui";
import { LEGAL } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Mobiera SAS handles personal data on mobiera.com: the contact form, analytics with consent, retention, your rights, and how to reach our data-protection contact.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" lead="Last updated: at launch. This policy is pending legal review." ground={false} />
      <div className="container-x prose pb-20">
        <h2>Who is responsible</h2>
        <p>{LEGAL.name}, NIT {LEGAL.nit}, {LEGAL.address}, is the data controller for mobiera.com. Data-protection contact: <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>.</p>
        <h2>What we collect</h2>
        <p><strong>Contact form.</strong> Name, email, organization, topic and message, and a CV if you apply for a role. We use them to answer you and, for applications, to assess your profile. Submissions are stored for 24 months, applications for 12 months unless you ask us to delete them sooner.</p>
        <p><strong>Analytics.</strong> With your consent, anonymized usage statistics (pages visited, device type, approximate region) to improve the site. No analytics cookie is set before you accept. See the <a href="/cookies">cookie policy</a>.</p>
        <p><strong>Server logs.</strong> IP address, user agent and requested URL, kept for 30 days for security and troubleshooting.</p>
        <p>We do not sell personal data and do not use it for advertising.</p>
        <h2>Legal basis</h2>
        <p>Your consent for analytics; our legitimate interest in answering your message and keeping the site secure; the steps needed before a contract when you ask about our products.</p>
        <h2>Processors</h2>
        <p>The site runs on infrastructure operated by Mobiera. Form submissions are delivered by email to Mobiera mailboxes; analytics, if you consent, go to our analytics provider.</p>
        <h2>Your rights</h2>
        <p>Access, correction, deletion, restriction, portability and objection, under Colombian Law 1581 of 2012 and, where it applies, the GDPR. Write to <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>. We answer within 15 business days.</p>
        <h2>Changes</h2>
        <p>We publish changes here with the date of the update.</p>
      </div>
    </>
  );
}
