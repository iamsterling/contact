import * as pdfjsLib from 'pdfjs-dist'
import style from './pdf.module.scss'


const root = document.getElementById("pdf")
root.setAttribute("class", style.section)

export const pdf = (pdfPath) => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs"

    pdfjsLib.getDocument(pdfPath).promise.then((doc) => {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(style.active)
                } else {
                    entry.target.classList.remove(style.active)
                }
            })
        }, { rootMargin: "-50%" })
        
        for (let pageNum = 1; pageNum <= doc.numPages; pageNum++) {
            let container = document.createElement("div")
            
            let canvas = document.createElement("canvas")
            canvas.setAttribute("class", style.page)
            container.setAttribute("class", style.container)
            container.appendChild(canvas)
            root.appendChild(container)
            observer.observe(container)
            
            doc.getPage(pageNum).then((page) => {
                let viewport = page.getViewport({ scale: window.devicePixelRatio })
                canvas.height = viewport.height
                canvas.width = viewport.width
                
                let context = canvas.getContext('2d')
                page.render({ canvasContext: context, viewport: viewport })
            })
        }
    })
    /*
    */
}
