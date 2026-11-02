// Server-only Google service-account configuration.
// Set these values in your deployment environment; never commit credentials.
export const googleServiceAccount = {
  type: "service_account",
  project_id: process.env.GOOGLE_PROJECT_ID ?? "",
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID ?? "",
  private_key: (process.env.GOOGLE_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"),
  client_email: process.env.GOOGLE_CLIENT_EMAIL ?? "",
  client_id: process.env.GOOGLE_CLIENT_ID ?? "",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL ?? "",
};
export const CAMPAIGN_SHEET_ID = process.env.CAMPAIGN_SHEET_ID ?? "";
