


fetch("api.mercadolibre.com/sites/MLA/search?q=:query#json")
  .then((response) => response.json())
  .then((data) => {
  console.log(data)
  }
  )
  .catch(console.log)
