import { getPayload } from 'payload'
import config from '../../../payload.config'

export async function getMetadata() {
    const payload = await getPayload({ config })

    const metadata = await payload.findGlobal({
        slug: 'metadata',
        depth: 2,
    })

    return metadata.seo;
}