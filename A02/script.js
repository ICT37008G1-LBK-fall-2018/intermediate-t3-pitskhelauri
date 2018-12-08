et btn = document.getElementById('highlight-product')

btn.addEventListener('click', (getElementById) => {
    let px = prompt('Enter px')
    let brandname = prompt('Enter brand')

    let brand = document.querySelectorAll([data-brand="${brandname}"])

    if(brand.length = 0) return alert('Can not found')

    brand.forEach(x => {
       x.style.fontSize = px;
       x.style.fontWeight = 'bold'
    })
})