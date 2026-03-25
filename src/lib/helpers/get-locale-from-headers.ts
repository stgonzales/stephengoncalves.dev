import { headers } from "next/headers"

export async function getLocaleFromHeaders() {
    const headersList = await headers()
    const acceptLanguage = headersList.get('accept-language')
  
    return acceptLanguage?.split(',')[0] ?? 'en'
  }