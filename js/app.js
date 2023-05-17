const form = document.querySelector('#formulario')

form.addEventListener('submit', async(e)=>{
    e.preventDefault()

    const target = e.target,
       name = target.querySelector('#name').value,
       from = target.querySelector('#email').value,
       subject = target.querySelector('#subject').value,
       message = target.querySelector('#message').value

    const response = await fetch('https://ecoplantrd1.onrender.com/api/mail', {
        method: 'POST',
        body: JSON.stringify({
            name,
            from,
            subject,
            message
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }),
    data = await response.json()

    if (response.status === 200) {
        alert(data.message)
        form.reset()
    } else {
        alert(data.message)
    }

})