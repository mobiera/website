// Old Hugo URLs to new ones (spec/redirects.txt). 410s are in proxy.ts.
export const REDIRECTS = [
  { source: "/dev-sec-ops", destination: "/services", permanent: true },
  { source: "/innovation", destination: "/trust", permanent: true },
  { source: "/about-us", destination: "/company", permanent: true },
  { source: "/careers", destination: "/company/careers", permanent: true },
  { source: "/apply", destination: "/company/careers", permanent: true },
  { source: "/blog", destination: "/news", permanent: true },
  { source: "/blog/the-end-of-affiliation-campaigns-in-telecom", destination: "/news/the-end-of-affiliation-campaigns-in-telecom", permanent: true },
  { source: "/blog/cybersecurity-the-new-frontier-for-telecom-providers", destination: "/news/cybersecurity-the-new-frontier-for-telecom-providers", permanent: true },
  { source: "/blog/:slug", destination: "/news", permanent: true },
  { source: "/success", destination: "/contact", permanent: true },
  { source: "/privacy-policy", destination: "/privacy", permanent: true },
];
