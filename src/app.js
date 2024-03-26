let params = {}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
    for (const [key, value] of urlParams) {
        params[key] = value;
    }
console.log(params)

document.addEventListener("DOMContentLoaded", e => {
    const data = `BEGIN:VCARD\nVERSION:3.0\nFN:${params.name}\nTEL;TYPE=CELL:${params.phone && params.phone}\nEND:VCARD`
    const url = window.URL.createObjectURL(new Blob([data], { type: 'text/vcard' }))

    let a = document.createElement("a")
    a.href = url
    a.download = `${params.name}.vcf`
    document.body.appendChild(a)
    a.click()

    
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)

    console.log(data)
    console.log(url)
})




//  ----------------
//  append our app to root
document.getElementsByTagName("body")[0].appendChild(app)
//  ----------------