<script>
  import { onMount } from 'svelte';

  let lang = 'en'
  let nativeShare = false;
  let title;
  let url;

  const locale = {};
    locale['en'] = {
        "share_this": "Share This"
      }
    locale['nl'] = {
        "share_this": "Deel dit"
      }


  onMount(() => {
    if (navigator.share) {
      nativeShare = true;
    }
    title=document.title;
    url=location.href;
  });

  function shareThis() {
    navigator.share({
      title: title,
      url: url
    })
      .then(() => {
        console.info('Thanks for Sharing')
      })
      .catch(console.error);
  }
</script>


<section id="share-linkcast" class="section">
  <div class="container">
    <div class="artkids-social">
      {#if !nativeShare}
        <h4
          class="subtitle is-size-6-mobile is-size-5-tablet is-size-4-widescreen is-size-4-fullhd has-text-grey-dark is-uppercase has-text-weight-normal">
          { locale[lang].share_this }:</h4>
        <a class="button is-social is-medium facebook fbc-has-badge fbc-UID_1"
           href="https://www.facebook.com/sharer/sharer.php?u={encodeURIComponent(url)}"
           target="_blank" title="Share {title} on Facebook" area-label="Share {title} on Facebook">
          <span class="icon is-large">
            <!-- <Icon client:only icon={faFacebook} /> -->
          </span>
        </a>
        <a class="button is-social is-medium twitter"
           href="https://twitter.com/intent/tweet?text={encodeURIComponent(title)}&amp;url={encodeURIComponent(url)}&amp;via={encodeURIComponent(url)}"
           target="_blank" title="Share {title} on Twitter" area-label="Share {title} on Twitter">
          <span class="icon is-large">
            <!-- <Icon client:only icon={faTwitter} /> -->
          </span>
        </a>
        <a class="button is-social is-medium whatsapp"
           href="whatsapp://send?text={encodeURIComponent(title)} {encodeURIComponent(url)}"
           target="_blank" title="Share {title} on WhatsApp" area-label="Share {title} on WhatsApp">
          <span class="icon is-large">
            <!-- <Icon client:only icon={faWhatsapp} /> -->
          </span>
        </a>
        <a class="button is-social is-medium googleplus"
           href="https://plus.google.com/share?url={encodeURIComponent(url)}"
           target="_blank" title="Share {title} on Google+" area-label="Share {title} on Google+">
          <span class="icon is-large">
            <!-- <Icon client:only icon={faGooglePlus} /> -->
          </span>
        </a>
        <a class="button is-social is-medium linkedin"
        href="https://www.linkedin.com/shareArticle?mini=true&amp;url={encodeURIComponent(url)}&amp;title={encodeURIComponent(title)}"
           target="_blank" title="Share {title} on LinkedIn" area-label="Share {title} on LinkedIn">
          <span class="icon is-large">
            <!-- <Icon client:only icon={faLinkedin} /> -->
          </span>
        </a>
        <a class="button is-social is-medium pinterest"
           href="https://pinterest.com/pin/create/button/?url={encodeURIComponent(url)}&amp;description={encodeURIComponent(title)}"
           data-pin-custom="true" target="_blank" title="Share {title} on Pinterest" area-label="Share {title} on Pinterest">
          <span class="icon is-large">
            <!-- <Icon client:only icon={faPinterest} /> -->
          </span>
        </a>
      {:else}
        <button on:click={shareThis} class="button is-social is-fullwidth is-white" title="Share {title}" area-label="Share {title}">
          <span class="icon is-large">
            <!-- <Icon client:only icon={faShareAlt} /> -->
          </span>
          <span>{ locale[lang].share_this }</span>
        </button>
      {/if}
    </div>
  </div>
</section>
