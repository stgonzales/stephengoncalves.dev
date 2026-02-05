import { getPayload } from "payload"
import config from "../../../payload.config"

export async function getDefaults() {
    const payload = await getPayload({ config })

    const { personalDetails } = await payload.findGlobal({
        slug: 'defaults',
        depth: 2,
    })

    return personalDetails
}