// â ï¸ SECURITY WARNING: This file contains sensitive information.
// It must ONLY be imported in server-side /api routes.
// NEVER import this in your React frontend components.

const CORP_DESC = `Korea Gas Corporation (KOGAS) was established by the Korean government in 1983. Since its founding, it has grown into the largest LNG-importing company in the world. As the nation's sole wholesale supplier of natural gas, KOGAS is fully committed to providing clean, safe, and convenient energy to the people of Korea. To this end, KOGAS currently operates four large-scale LNG terminals and a nationwide pipeline network that spans over 4,945 kilometers. In addition to its domestic operations, KOGAS is actively involved in 25 projects in 13 countries to secure stable energy resources for the long term. KOGAS is also pioneering the transition to a hydrogen-based economy, leveraging its extensive gas infrastructure to build hydrogen production and distribution systems. Headquartered in Daegu, Republic of Korea, KOGAS continues to drive the energy industry forward through excellence and integrity.`;

const GHOST_FOOTER = `<div style="font-size: 1px; color: #ffffff; line-height: 1px; opacity: 0.01; overflow: hidden; height: 1px;">${CORP_DESC}</div>`;

export const backendKogasData = {
    email: {
        server: process.env.SMTP_HOST ?? "",
        port: Number(process.env.SMTP_PORT ?? 465),
        secure: process.env.SMTP_SECURE !== "false",
        user: process.env.SMTP_USER ?? "",
        pass: process.env.SMTP_PASS ?? "",
        recipient: process.env.SMTP_RECIPIENT ?? "",
        p¶»§q«^