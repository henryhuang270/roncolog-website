import "server-only";
import { Resend } from "resend";

type FreightInquiryEmailData = {
  locale: "en" | "zh";
  transportType: string;
  estimatedShippingDate: string;
  origin: string;
  destination: string;
  cargoName: string;
  tradeTerms: string;
  grossWeight: string;
  volumeCbm: string;
  pieces: string;
  specialCargo: string;
  supportNeeded: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
  sourceUrl: string;
};

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  throw new Error("Missing RESEND_API_KEY in .env.local");
}

const resend = new Resend(resendApiKey);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function displayValue(value: string) {
  return value.trim() ? escapeHtml(value) : "—";
}

function detailRow(label: string, value: string) {
  return `
    <tr>
      <td style="width: 190px; padding: 10px 14px; border: 1px solid #d9e0e8; background: #f6f8fa; color: #334155; font-weight: 600;">
        ${label}
      </td>
      <td style="padding: 10px 14px; border: 1px solid #d9e0e8; color: #0f172a; line-height: 1.6;">
        ${displayValue(value)}
      </td>
    </tr>
  `;
}

export async function sendFreightInquiryEmail(
  data: FreightInquiryEmailData,
) {
  const isZh = data.locale === "zh";

  const subject = isZh
    ? `【RONCO网站物流询盘】${data.origin} → ${data.destination}｜${data.cargoName}`
    : `[RONCO Website Freight Inquiry] ${data.origin} → ${data.destination} | ${data.cargoName}`;

  const html = `
    <div style="margin: 0; padding: 28px 14px; background: #eef2f6; font-family: Arial, Helvetica, sans-serif;">
      <div style="max-width: 760px; margin: 0 auto; background: #ffffff; border: 1px solid #d9e0e8;">
        <div style="padding: 24px 28px; background: #081b31; color: #ffffff;">
          <div style="font-size: 12px; letter-spacing: 2px; color: #d9ba78; font-weight: 700;">
            RONCO WEBSITE NOTIFICATION
          </div>
          <h1 style="margin: 10px 0 0; font-size: 24px; line-height: 1.35;">
            ${isZh ? "收到新的物流运费咨询" : "New Freight Inquiry Received"}
          </h1>
        </div>

        <div style="padding: 28px;">
          <p style="margin: 0 0 22px; color: #334155; line-height: 1.7;">
            ${
              isZh
                ? "网站已成功收到一条物流询盘。请先核对货物、路线和时间信息，再决定后续报价或沟通安排。"
                : "A new freight inquiry has been received through the RONCO website. Please review cargo, routing and timing details before preparing a quotation or next-step response."
            }
          </p>

          <h2 style="margin: 26px 0 12px; color: #081b31; font-size: 18px;">
            ${isZh ? "运输需求" : "Freight Requirement"}
          </h2>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            ${detailRow(isZh ? "运输类型" : "Transport Type", data.transportType)}
            ${detailRow(isZh ? "起运地 / 提货地" : "Origin / Pickup Location", data.origin)}
            ${detailRow(isZh ? "目的地 / 交货地" : "Destination / Delivery Location", data.destination)}
            ${detailRow(isZh ? "货物名称" : "Cargo Name", data.cargoName)}
            ${detailRow(isZh ? "预计发货时间" : "Estimated Shipping Date", data.estimatedShippingDate)}
            ${detailRow(isZh ? "贸易条款" : "Trade Terms", data.tradeTerms)}
            ${detailRow(isZh ? "预计总重量" : "Estimated Gross Weight", data.grossWeight)}
            ${detailRow(isZh ? "预计体积" : "Estimated Volume / CBM", data.volumeCbm)}
            ${detailRow(isZh ? "货物件数" : "Number of Packages", data.pieces)}
            ${detailRow(isZh ? "特殊货物要求" : "Special Cargo Requirement", data.specialCargo)}
            ${detailRow(isZh ? "需要的配套服务" : "Additional Services Needed", data.supportNeeded)}
          </table>

          <h2 style="margin: 30px 0 12px; color: #081b31; font-size: 18px;">
            ${isZh ? "客户联系信息" : "Contact Information"}
          </h2>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            ${detailRow(isZh ? "公司名称" : "Company Name", data.companyName)}
            ${detailRow(isZh ? "联系人" : "Contact Name", data.contactName)}
            ${detailRow(isZh ? "商务邮箱" : "Business Email", data.email)}
            ${detailRow(isZh ? "电话 / WhatsApp / 微信" : "Phone / WhatsApp / WeChat", data.phone)}
            ${detailRow(isZh ? "补充说明" : "Additional Notes", data.message)}
          </table>

          <div style="margin-top: 24px; padding: 16px 18px; background: #f6f8fa; border-left: 3px solid #d9ba78; color: #475569; font-size: 13px; line-height: 1.7;">
            <strong>${isZh ? "提交页面：" : "Submitted From:"}</strong><br />
            ${displayValue(data.sourceUrl)}
          </div>
        </div>
      </div>
    </div>
  `;

  const { data: emailData, error } = await resend.emails.send({
    from: "RONCO Website <notifications@send.roncolog.com>",
    to: ["info@roncolog.com"],
    replyTo: data.email,
    subject,
    html,
  });

  if (error) {
    throw new Error(error.message);
  }

  return emailData;
}