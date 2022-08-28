<script>
  import CompanyInfo from './CompanyInfo.svelte';

  let lang = 'en'
  const locale = {}
  locale['en']= {
    title: "Have Questions?",
    gotquestions: "If you have any Questions or Remarks concerning ArtKids Foundation or ArtKids Foundation related Projects and Businesses, Please feel free to contact us anytime.",
    contactus: "Contact us",
    rightsreserved: ""
  }

  locale['nl']= {
    title: "Heeft u Vragen?",
    gotquestions: "Als u Vragen of Opmerkingen met betrekking tot ArtKids Foundation of ArtKids Foundation gerelateerde Projecten en Businesses, voelt u vrij om ons op elk moment te contacteren.",
    contactus: "Contact",
    rightsreserved: ""
  }

</script>

<style lang="scss">
  .is-secondary {
    color: yellow;

    &:hover {
      color: darkslategray;
    }
  }
	.scroll-animate-replace {
		opacity: 1;
	}
</style>


<!-- Footer -->
<footer class="footer">
  <div class="footer__builder">
    <div class="container align-center">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">

          <!-- titles -->
          <div class="h-titles">
            <div class="h-subtitle scrolla-element-anim-1 scroll-animate-replace" data-animate="active">{locale[lang].title}</div>
            <div class="h-text scrolla-element-anim-1 scroll-animate-replace" data-animate="active">
              <p>
                <a class="button is-secondary has-text-black" title="{locale[lang].contactus}!" href="/{lang}/contact-us/">
                  <span class="icon">
                    <!-- <Icon client:only icon={faWeixin} /> -->
                  </span>
                  <span>{locale[lang].contactus}</span>
                </a>
              </p>
              <p>{locale[lang].gotquestions}</p>
           </div>
          </div>

        </div>

       <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">

          <!-- titles -->
          <div class="h-titles">
            <div class="h-subtitle scrolla-element-anim-1 scroll-animate-replace" data-animate="active">Follow Us:</div>
          </div>

          <!-- social -->
          <div class="social-links footer-social-links">
            <a target="_blank" href="https://instagram.com/" class="scrolla-element-anim-1 scroll-animate-replace" data-animate="active">
              <i aria-hidden="true" class="fab fa-instagram"></i>
            </a>
            <a target="_blank" href="https://facebook.com/" class="scrolla-element-anim-1 scroll-animate-replace" data-animate="active">
              <i aria-hidden="true" class="fab fa-facebook-f"></i>
            </a>
            <a target="_blank" href="https://twitter.com/" class="scrolla-element-anim-1 scroll-animate-replace" data-animate="active">
              <i aria-hidden="true" class="fab fa-twitter"></i>
            </a>
            <a target="_blank" href="https://linkedin.com/" class="scrolla-element-anim-1 scroll-animate-replace" data-animate="active">
              <i aria-hidden="true" class="fab fa-linkedin-in"></i>
            </a>
          </div>

        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">

          <!-- titles -->
          <div class="h-titles">
            <CompanyInfo />
            <!-- <div class="h-subtitle scrolla-element-anim-1 scroll-animate-replace" data-animate="active">Address:</div> -->
            <!-- <div class="h-text scrolla-element-anim-1 scroll-animate-replace" data-animate="active">Ridgewood Queens, <br>NY 11385, USA</div> -->
          </div>

        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="copyright-text scrolla-element-anim-1 scroll-animate-replace" data-animate="active">
            <span class="logo">
              Powered by <a class="brand has-text-weight-bold is-italic has-text-shadow" href="/" title="visit ArtKids Foundation Website?">
                <span class="icon is-medium">
                  <img src="/favicon-32.png" alt="Stichting ArtKids Foundation: Funding Happiness" width="24" height="24">
                </span>
                <span class="artkids has-text-danger is-size-5">ArtKids</span><span class="foundation has-text-secondary is-size-5">foundation.org</span>
              </a>
            </span>
            <span>
              Copyright © 2022-2030 | All rights reserved to ArtKids Foundation
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
