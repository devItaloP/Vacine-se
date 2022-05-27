
const scriptURL = 'https://script.google.com/macros/s/AKfycbzT_Iudclr_VFeR65Qm266cxpJ_wuEgOGdQGy13dW6h1QXucpNyaANVVrn1IqeG-T84/exec'
      const form = document.forms['google-sheet']
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => alert("You have successfully submitted."))
          .catch(error => console.error('Error!', error.message))
      })