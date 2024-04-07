import { pdf } from './pdf'
import { contact } from './contact'




document.addEventListener("DOMContentLoaded", e => {
    let root = document.getElementsByTagName("body")[0]
    console.log(root)


    pdf("https://github.com/sterling-holt/contact/blob/main/public/media/PROMOTION.pdf")
    contact(root)
})
