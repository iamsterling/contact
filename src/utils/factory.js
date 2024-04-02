



export const factory = {
    component: (type) => {
        const el = document.createElement(type)

        const url = new URLSearchParams(window.location.search)
        url.has("edit") && el.setAttribute("contenteditable", true)
        
        return el
    }
}