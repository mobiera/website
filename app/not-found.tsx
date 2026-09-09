import { ButtonLink, PageHero } from "./components/ui";

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="Page not found" lead="The page you are looking for was moved, removed, or never existed. The old site's URLs redirect; if you followed a link from elsewhere, it may be out of date.">
      <ButtonLink href="/" variant="primary">Home</ButtonLink>
      <ButtonLink href="/contact">Contact</ButtonLink>
    </PageHero>
  );
}
