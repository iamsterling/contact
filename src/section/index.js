import { factory } from "../utils/factory"


export const Sections = () => {
    console.log(style)

    const section = factory.component("section")
    //  section.setAttribute("class", style.section)
    console.log(section)

    return section
}