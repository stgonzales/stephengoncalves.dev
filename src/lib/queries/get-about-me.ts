import { getPayload } from "payload"
import config from "../../../payload.config"

export async function getAboutMe(locale: string) {
    const payload = await getPayload({ config })

    const { content } = await payload.findGlobal({
        slug: 'about-me',
        depth: 2,
        locale: locale as 'en' | 'en-US' | 'pt' | 'pt-BR',
    })

    return content
}