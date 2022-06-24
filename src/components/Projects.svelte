<script>
  // import {allProjects} from '../dataProjects.js'
  import {fade} from 'svelte/transition'
 // import fetch from 'cross-fetch';
  
  let quantity = 1,
      price,
      showProjects = true,
      showCredit = false
    
  const projects = (async () => {
    const response = await fetch('http://localhost:4242/projects')
    return await response.json()
  })()

  function payNow(){
    fetch('http://localhost:4242/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price: price,
      })
    })
    .then((response) => response.json())
    .then((session) => {
      stripe.redirectToCheckout({ sessionId: session.id })
    })
    .catch((error) => {
      console.log('Error:', error)
    })
  }
</script>
<div transition:fade>
  {#await projects}
	<p>Loading Donation Projects...</p>
  {:then data}
    <article>
      <h2>{data[0].name}</h2>
      <h3>{data[0].description}</h3>
      <img src="{data[0].images}" alt="Project picture of {data[0].name}" />
      <hr />
      <button on:click={payNow}>Donate</button>
      <select bind:value={price}>
        <option value="price_1JLicuF8TEfMHbpWdnsd4Tcv">$5.00 once</option>
        <option value="price_1JLicWF8TEfMHbpWxGQG9K2c">$10.00 once</option>
        <option value="price_1JLidOF8TEfMHbpW8NcYxC7a">$25.00 once</option>
        <option value="price_1JLidgF8TEfMHbpWPTS5vpc5">$50.00 once</option>
      </select>
    </article>
  {:catch error}
	<p>An error occurred!</p>
  {/await}
</div>
