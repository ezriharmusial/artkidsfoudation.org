<script>
  import { blur } from "svelte/transition";

  let lang = 'en'
  const locale = {};

  locale['en'] = {
    "reason": "Your reason for contacting us",
    "other": "Other",
    "required" :"field required",
    "your" : "Your",
    "name": "Name",
    "telephone": "Telephone",
    "message": "Message",
    "toUs": "to us",
    "consent": "I consent to",
    "store_use": "storing and using my personal information to contact me",
    "email_registration": "using my Emailaddress to confirm my registration",
    "giveConsent": "Please give Consent first",
    "registerFor": "Registrer for",
    "loading": "Sending your Message",
    "error": "An Error occcured",
    "tryEmail": "Please try again later, or send us an email manually to info@ekesolar.com.",
    "thankyou": "Thank You for Registering",
    "confirm": "Your registration will be confirmed by email, as soon as it has been reviewed by us.",
    "register": "register",
    "someone": "someone else",
  }

  locale['nl'] = {
    "reason": "Uw reden om ons te contacteren",
    "other": "Anders",
    "required" : "veld verplicht",
    "your" : "Uw",
    "name": "Naam",
    "telephone": "Telefoon",
    "message": "Bericht",
    "toUs": "aan ons",
    "consent": "Ik stem toe dat",
    "store_use": "mijn persoonlijke informatie opslaat en gebruikt om mij te contacteren over",
    "email_registration": "mijn Emailadres gebruikt om mijn registratie te bevestigen",
    "giveConsent": "Geeft eerst Toestemming",
    "registerFor": "Registreer mij voor",
    "loading": "Bezig met het versturen van uw Bericht",
    "error": "Er is iets mis gegaan",
    "tryEmail": "Probeert u het alstublieft later nog een keer of stuur ons handmatig een email naar info@ekesolar.com",
    "thankyou": "Bedankt voor uw Registratie",
    "confirm": "Uw registratie wordt via email bevestigd, zodra het door ons is behandeld.",
    "register": "Registreer",
    "someone": "iemand anders",
  }

  let form,
    formData,
    subject,
    sendMail = false,
    consent = false,
    loading = false,
    error = false,
    success = false;

  function reset(){
    sendMail = false,
    consent = false,
    loading = false,
    error = false,
    success = false;
  }

  function validateMessage(event) {
    error = false;
    loading = false;
    let textbox = event.target;
    if (textbox.value === '' && textbox.required == true) {
        textbox.setCustomValidity('Required ' + textbox.name);
    } else if (textbox.validity.typeMismatch){
        textbox.setCustomValidity('please enter a valid email address');
    } else {
       textbox.setCustomValidity('');
    }
    return true;
  }

  async function sendMessage(event) {
    const form = document.getElementById("formpje");
    console.info('form:', form);
    formData = new FormData(form)
    console.info('formData:', formData)

    var XHR = new XMLHttpRequest();
    // Define Loading State
    XHR.addEventListener( 'load', function(event) {
      console.info("loading:", event)
      loading = true;
    })

    // Define Error State
    XHR.addEventListener( 'error', function(event) {
      console.info("loading:", event)
      loading = false;
      error = true;
    })

    // Define Done state
    XHR.onload = function () {
      loading = false;
      error = false;
      success = true;
      console.info("done:", XHR.response)
    };

    //Set up Request
    XHR.open("POST", "http://localhost");

    // Add the required HTTP header for form data POST requests
    XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
    XHR.send(formData);
  }
</script>

<div role="form" lang="{lang}">
      <form
        on:submit|preventDefault={sendMessage}
        on:invalid={validateMessage}
        on:changed={validateMessage}
        on:input={validateMessage}
        bind:this={form}
        method="POST"
        action="http://localhost/index.php"
        id="formpje"
        class="columns is-multiline">
    <div class="column">
      <div class="field">
        <label class="label" for="subject">
          {locale[$lang].reason}
        </label>
        <div class="control has-icons-left">
          <div class="select">
            <span class="subject">
              <select id="subject" name="subject" bind:value={subject} aria-invalid="false" disabled={loading || success}>
                <option value="Shareholders Summit 2021">
                ShareHolders Summit 2021
                </option>
                <option value="PowerMyWater Project">
                PowerMyWater (PMW-Solar Water-pumps)
                </option>
                <option value="PowerMyHome Project">
                PowerMyHome
                </option>
                <option value="PowerMyBiz Project">
                PowerMyBiz
                </option>
                <option value="PowerMyIndustry Project">
                PowerMyIndustry
                </option>
                <option value="PowerMyHospital Project">
                PowerMyHospital
                </option>
                <option value="PowerMyGadgets Project">
                PowerMyGadgets
                </option>
                <option value="PowerMyCommunity Project">
                PowerMyCommunity
                </option>
                <option value="Other...">
                {locale[$lang].other}...
                </option>
              </select>
            </span>
          <span class="icon is-small is-left">
            <!-- <Icon client:only icon={faBriefcase} /> -->
          </span>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="label" for="name">
          {locale[$lang].name}
          <sup>
            *
          </sup>
        </div>
        <div class="control has-icons-left has-icons-right">
          <span class="name">
            <input class="input required requiredField" type="text" id="name" name="name" size="40" aria-required="true" aria-invalid="false" placeholder="{locale[$lang].your} {locale[$lang].name}*" disabled={loading || success}>
          </span>
          <br>
          <span class="icon is-small is-left">
            <!-- <Icon client:only icon={faUser} /> -->
          </span>
          <p class="help is-calm">
            <sup>*)</sup> {locale[$lang].required}
          </p>
        </div>
      </div>
      <div class="field">
        <label class="label" for="email">
          Email
          <sup>
            *
          </sup>
        </label>
        <div class="control has-icons-left has-icons-right">
          <span class="email">
            <input class="input required requiredField" type="email" id="email" name="email" aria-required="true" aria-invalid="false" placeholder="{locale[$lang].your} Email*" disabled={loading || success}>
          </span>
          <br>
          <span class="icon is-small is-left">
            <!-- <Icon client:only icon={faEnvelope} /> -->
          </span>
          <p class="help is-calm">
            <sup>*)</sup> {locale[$lang].required}
          </p>
        </div>
      </div>
      <div class="field">
        <label class="label" for="telephone">
          {locale[$lang].telephone}
        </label>
        <div class="control has-icons-left has-icons-right">
          <span class="telephone">
            <input class="input" type="tel" pattern="[0-9]*" id="telephone" name="telephone" aria-invalid="false" placeholder="{locale[$lang].your} {locale[$lang].telephone}" disabled={loading || success}>
          </span>
          <span class="icon is-small is-left">
            <!-- <Icon client:only icon={faPhone} /> -->
          </span>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="field">
        <label class="label" for="message">
          {locale[$lang].message}
        </label>
        <div class="control has-icons-left">
          <span class="message">
            <textarea class="textarea" id="message" name="message" cols="40" rows="10" aria-invalid="false" placeholder="{locale[$lang].your} {locale[$lang].message} {locale[$lang].toUs}" disabled={loading || success}></textarea>
          </span>
        </div>
      </div>
    </div>
    <div class="column is-full">

      <div class="field">
        <label class="checkbox" for="consent">
          <input type="checkbox" id="consent" name="consent" bind:checked={consent} disabled={loading || success}>
          { locale[$lang].consent } <a href="https://ekesolar.com/">EkeSolar</a> { locale[$lang].store_use } <i>{subject}</i>.
        </label>
      </div>

      <div class="field">
        <label class="checkbox" for="sendmail">
          <input type="checkbox" id="sendmail" name="sendmail" bind:checked={sendMail} disabled={loading || success}>
          { locale[$lang].consent } <a href="https://ekesolar.com/">EkeSolar</a> { locale[$lang].email_registration }.
        </label>
      </div>

      <div class="field">
        <div class="control">
          <input type="submit" name="submit" value={(!consent || !sendMail) ? locale[$lang].giveConsent : locale[$lang].registerFor + " " + subject } class="button is-secondary" disabled={!consent || !sendMail || loading || success}>
        </div>
      </div>

    </div>
  </form>
  <div class="screen-reader-response">
    {#if loading }
      <div class="notification is-info" transition:blur>
        <p>{ locale[$lang].loading }...</p>
      </div>
    {/if}
    {#if error }
      <div class="notification is-danger" transition:blur>
        <button class="delete" on:click={reset}></button>
        <p><b>{ locale[$lang].error }</b></p>
        <p>{ locale[$lang].tryEmail }</p>
      </div>
    {/if}
    {#if success }
      <div class="notification is-success" transition:blur>
        <button class="delete" on:click={reset}></button>
        <p><b>{ locale[$lang].thankyou }</b></p>
        <p>{ locale[$lang].confirmation }<a href="/contact-us/" title="relaod form" on:click|preventDefault={reset}>{ locale[$lang].register }</a> { locale[$lang].someone }someone Else</p>
      </div>
    {/if}
  </div>
</div>
<style>
.screen-reader-response {
  position:fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  z-index: 12;
  margin: 0.5rem 1rem;
}
</style>
