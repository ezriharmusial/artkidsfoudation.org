<script>
  export let metadata = {};
</script>

<svelte:head>
  {#if metadata.title}
    <title>{metadata.title}</title>
    <meta name="title" content={metadata.title} />
    <meta property="og:title" content={metadata.title} />
    <meta property="twitter:title" content={metadata.title} />
  {/if}

  {#if metadata.description || metadata.hook}
    <meta name="description" content="{metadata.description || metadata.hook}" />
    <meta property="og:description" content="{metadata.description || metadata.hook}" />
    <meta property="twitter:description" content="{metadata.description || metadata.hook}" />
  {/if}

  {#if metadata.image}
    <meta property="og:image" content="{metadata.image}" />
    <meta
      property="twitter:image"
      content="{metadata.image}"
    />
  {/if}

  {#if metadata.imageAlt}
    <meta property="og:image:alt" content={metadata.imageAlt} />
    <meta property="twitter:image:alt" content={metadata.imageAlt} />
  {/if}

  {#if metadata.url}
    <meta property="og:url" content={metadata.url} />
    <meta property="twitter:url" content={metadata.url} />
  {/if}

  <meta property="og:type" content={metadata.type || "article"} />

  <meta property="twitter:card" content={metadata.twitterCard || "summary_large_image"} />
</svelte:head>


