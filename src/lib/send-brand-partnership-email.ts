import "server-only";
import { Resend } from "resend";

type BrandPartnershipEmailData = {
  locale: "en" | "zh";
  brandName: string;
  countryRegion: string;
  website: string;
  foundedYear: string;
  companyName: string;
  productCategories: string;
  keyProducts: string;
  targetConsumers: string;
  chinaMarketStatus: string;
  cooperationModels: string[];
  availableMaterials: string[];
  chinaExpectations: string;
  contactName: string;
  position: string;
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

function displayArray(values: string[]) {
  if (!values.length) return "—";

  return values.map((item) => escapeHtml(item)).join("<br />");
}

function detailRow(label: string, value: string) {
  return `
    <tr>
      <td style="width: 205px; padding: 10px 14px; border: 1px solid #d9e0e8; background: #f6f8fa; color: #334155; font-weight: 600;">
        ${label}
      </td>
      <td style="padding: 10px 14px; border: 1px solid #d9e0e8; color: #0f172a; line-height: 1.6;">
        ${displayValue(value)}
      </td>
    </tr>
  `;
}

function detailArrayRow(label: string, values: string[]) {
  return `
    <tr>
      <td style="width: 205px; padding: 10px 14px; border: 1px solid #d9e0e8; background: #f6f8fa; color: #334155; font-weight: 600;">
        ${label}
      </td>
      <td style="padding: 10px 14px; border: 1px solid #d9e0e8; color: #0f172a; line-height: 1.7;">
        ${displayArray(values)}
      </td>
    </tr>
  `;
}

export async function sendBrandPartnershipEmail(
  data: BrandPartnershipEmailData,
) {
  const isZh = data.locale === "zh";

  const subject = isZh
    ? `【RONCO网站品牌合作】${data.brandName}｜${data.countryRegion}`
    : `[RONCO Website Brand Partnership] ${data.brandName} | ${data.countryRegion}`;

  const html = `
    <div style="margin: 0; padding: 28px 14px; background: #eef2f6; font-family: Arial, Helvetica, sans-serif;">
      <div style="max-width: 760px; margin: 0 auto; background: #ffffff; border: 1px solid #d9e0e8;">
        <div style="padding: 24px 28px; background: #081b31; color: #ffffff;">
          <div style="font-size: 12px; letter-spacing: 2px; color: #d9ba78; font-weight: 700;">
            RONCO WEBSITE NOTIFICATION
          </div>

          <h1 style="margin: 10px 0 0; font-size: 24px; line-height: 1.35;">
            ${
              isZh
                ? "收到新的海外品牌合作资料"
                : "New Overseas Brand Partnership Submission"
            }
          </h1>
        </div>

        <div style="padding: 28px;">
          <p style="margin: 0 0 22px; color: #334155; line-height: 1.7;">
            ${
              isZh
                ? "网站已收到一份海外品牌合作资料。建议先核对品牌定位、产品线、可提供文件及中国市场合作预期，再决定是否进入下一轮沟通。"
                : "A new overseas brand partnership submission has been received through the RONCO website. Please review brand positioning, product lines, available materials and China-market expectations before deciding on next-step communication."
            }
          </p>

          <h2 style="margin: 26px 0 12px; color: #081b31; font-size: 18px;">
            ${isZh ? "品牌基本信息" : "Brand Information"}
          </h2>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            ${detailRow(isZh ? "品牌名称" : "Brand Name", data.brandName)}
            ${detailRow(
              isZh ? "所属国家 / 地区" : "Country / Region",
              data.countryRegion,
            )}
            ${detailRow(isZh ? "品牌官网" : "Official Website", data.website)}
            ${detailRow(isZh ? "成立年份" : "Year Established", data.foundedYear)}
            ${detailRow(isZh ? "公司名称" : "Company Name", data.companyName)}
          </table>

          <h2 style="margin: 30px 0 12px; color: #081b31; font-size: 18px;">
            ${isZh ? "产品与市场信息" : "Product & Market Information"}
          </h2>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            ${detailRow(
              isZh ? "主要产品类别" : "Main Product Categories",
              data.productCategories,
            )}
            ${detailRow(
              isZh ? "代表性产品 / 重点 SKU" : "Representative Products / Key SKUs",
              data.keyProducts,
            )}
            ${detailRow(
              isZh ? "主要目标消费者" : "Target Consumers",
              data.targetConsumers,
            )}
            ${detailRow(
              isZh ? "中国市场状态" : "Current China Market Status",
              data.chinaMarketStatus,
            )}
          </table>

          <h2 style="margin: 30px 0 12px; color: #081b31; font-size: 18px;">
            ${isZh ? "合作预期" : "Cooperation Expectations"}
          </h2>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            ${detailArrayRow(
              isZh ? "希望合作方式" : "Preferred Cooperation Models",
              data.cooperationModels,
            )}
            ${detailArrayRow(
              isZh ? "可提供资料" : "Available Materials",
              data.availableMaterials,
            )}
            ${detailRow(
              isZh ? "中国市场合作预期" : "China Market Expectations",
              data.chinaExpectations,
            )}
          </table>

          <h2 style="margin: 30px 0 12px; color: #081b31; font-size: 18px;">
            ${isZh ? "联系人信息" : "Contact Information"}
          </h2>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            ${detailRow(isZh ? "联系人" : "Contact Name", data.contactName)}
            ${detailRow(isZh ? "职位 / 职务" : "Position / Title", data.position)}
            ${detailRow(isZh ? "商务邮箱" : "Business Email", data.email)}
            ${detailRow(
              isZh ? "电话 / WhatsApp / 微信" : "Phone / WhatsApp / WeChat",
              data.phone,
            )}
            ${detailRow(isZh ? "补充说明" : "Additional Message", data.message)}
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