import { GoogleSpreadsheet } from "google-spreadsheet"

export const googleCreds = {
  type: "service_account",
  project_id: "api-project-83701362725",
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  private_key: (process.env.GOOGLE_PRIVATE_KEY as string).replace(
    /\\n/gm,
    "\n"
  ),
  client_email: process.env.GOOGLE_EMAIL,
  client_id: process.env.GOOGLE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.GOOGLE_CERT_URL
}

export const googleSheet = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)

export const loadGoogleSheet = async () => {
  try {
    await googleSheet.useServiceAccountAuth(googleCreds)
    await googleSheet.loadInfo()
    return googleSheet
  } catch (e: any) {
    console.log("error in initial google response: ", e.message)
    return e.message as string
  }
}
