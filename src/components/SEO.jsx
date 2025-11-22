import React from 'react';

export default function SEO() {
  return (
    <>
      <title>Pulse Tech — Premium Tech Blog on Cybersecurity, Cloud & AI</title>
      <meta name="description" content="Premium tech blog delivering deep insights on cybersecurity, cloud computing, AI, and developer practices. Tutorials, guides, and expert analyses." />
      <meta name="keywords" content="tech blog, cybersecurity, cloud computing, AI, artificial intelligence, devops, kubernetes, finops, mlops, security" />
      <meta name="author" content="Pulse Tech" />

      <meta property="og:title" content="Pulse Tech — Premium Tech Blog" />
      <meta property="og:description" content="Deep-dive articles on Security, Cloud, and AI with practical insights and tutorials." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/" />
      <meta property="og:image" content="/og-image.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Pulse Tech — Premium Tech Blog" />
      <meta name="twitter:description" content="Deep-dive articles on Security, Cloud, and AI with practical insights and tutorials." />
      <meta name="twitter:image" content="/og-image.png" />

      <link rel="canonical" href="/" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#0b1220" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          'name': 'Pulse Tech',
          'description': 'Premium tech blog on Cybersecurity, Cloud and AI.',
          'url': '/',
          'publisher': {
            '@type': 'Organization',
            'name': 'Pulse Tech'
          },
          'inLanguage': 'en-US'
        })
      }} />
    </>
  );
}
