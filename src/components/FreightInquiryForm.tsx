"use client";

import { FormEvent, ReactNode, useState } from "react";

type Locale = "en" | "zh";

type FreightInquiryFormProps = {
  locale: Locale;
};

const content = {
  en: {
    required: "Required information",
    optional: "Additional information",
    contact: "Contact information",
    transportType: "Transport requirement",
    estimatedTime: "Estimated shipping date",
    origin: "Origin / pickup location",
    destination: "Destination / delivery location",
    cargoName: "Cargo name or product category",
    tradeTerms: "Trade terms",
    grossWeight: "Estimated gross weight",
    volume: "Estimated volume / CBM",
    pieces: "Number of packages",
    specialCargo: "Special cargo / handling requirements",
    supportNeeded: "Additional services needed",
    companyName: "Company name",
    contactName: "Contact name",
    email: "Business email",
    phone: "Phone / WhatsApp / WeChat",
    message: "Additional notes",
    select: "Please select",
    submit: "SUBMIT FREIGHT INQUIRY",
    submitting: "SUBMITTING...",
    successFallback:
      "Your freight inquiry has been submitted. RONCO will review the information before discussing next steps.",
    errorFallback:
      "We could not submit your request. Please try again later or email info@roncolog.com.",
    transportOptions: [
      "Sea Freight",
      "Air Freight",
      "Rail Freight",
      "Road Freight",
      "Multimodal Transport",
      "Project Logistics",
      "Factory Relocation",
      "Not sure — need advice",
    ],
    terms: ["EXW", "FOB", "CIF", "DDP", "DAP", "Other / not confirmed"],
    specialCargoOptions: [
      "None / regular cargo",
      "Temperature-sensitive cargo / need to confirm",
      "Dangerous goods / need to confirm",
      "Oversized cargo",
      "High-value cargo",
      "Other special requirement",
    ],
    supportOptions: [
      "Transport only",
      "Customs clearance support",
      "Warehousing inquiry",
      "Cargo insurance",
      "Final-mile delivery",
      "Packaging support",
      "Need logistics recommendation",
    ],
  },

  zh: {
    required: "必填信息",
    optional: "补充信息",
    contact: "联系信息",
    transportType: "运输需求类型",
    estimatedTime: "预计发货时间",
    origin: "货物起运地 / 提货地",
    destination: "目的地 / 交货地",
    cargoName: "货物名称或产品类别",
    tradeTerms: "贸易条款",
    grossWeight: "预计总重量",
    volume: "预计体积 / CBM",
    pieces: "货物件数",
    specialCargo: "特殊货物 / 操作要求",
    supportNeeded: "需要的配套服务",
    companyName: "公司名称",
    contactName: "联系人姓名",
    email: "商务邮箱",
    phone: "电话 / WhatsApp / 微信",
    message: "补充说明",
    select: "请选择",
    submit: "提交运输咨询",
    submitting: "正在提交...",
    successFallback:
      "运输需求已提交。荣程国际将先审核相关信息，再与您沟通下一步安排。",
    errorFallback:
      "暂时无法提交请求，请稍后再试或直接发送邮件至 info@roncolog.com。",
    transportOptions: [
      "海运",
      "空运",
      "铁路运输",
      "陆运",
      "多式联运",
      "项目物流",
      "工厂搬迁",
      "暂不确定，需要方案建议",
    ],
    terms: ["EXW", "FOB", "CIF", "DDP", "DAP", "其他 / 尚未确认"],
    specialCargoOptions: [
      "普通货物 / 无特殊要求",
      "温控货物 / 需要进一步确认",
      "危险品 / 需要进一步确认",
      "超尺寸货物",
      "高价值货物",
      "其他特殊要求",
    ],
    supportOptions: [
      "仅需要运输",
      "需要清关支持",
      "仓储需求咨询",
      "需要货物保险",
      "需要末端配送",
      "需要货物包装",
      "需要物流方案建议",
    ],
  },
} as const;

const inputClass =
  "w-full rounded-2xl border border-[#cfe0e8] bg-[#f7fbfc] px-4 py-3.5 text-sm text-[#071629] outline-none transition placeholder:text-slate-400 focus:border-[#39a773] focus:bg-white focus:ring-4 focus:ring-[#39a773]/10";

const selectClass =
  "w-full rounded-2xl border border-[#cfe0e8] bg-[#f7fbfc] px-4 py-3.5 text-sm text-[#071629] outline-none transition focus:border-[#39a773] focus:bg-white focus:ring-4 focus:ring-[#39a773]/10";

const sectionClass =
  "rounded-[2rem] border border-[#dcebf0] bg-white p-6 shadow-sm sm:p-8";

export default function FreightInquiryForm({
  locale,
}: FreightInquiryFormProps) {
  const copy = content[locale];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setResult(null);

    const payload = {
      locale,
      transportType: String(formData.get("transportType") || ""),
      estimatedShippingDate: String(
        formData.get("estimatedShippingDate") || "",
      ),
      origin: String(formData.get("origin") || ""),
      destination: String(formData.get("destination") || ""),
      cargoName: String(formData.get("cargoName") || ""),
      tradeTerms: String(formData.get("tradeTerms") || ""),
      grossWeight: String(formData.get("grossWeight") || ""),
      volumeCbm: String(formData.get("volumeCbm") || ""),
      pieces: String(formData.get("pieces") || ""),
      specialCargo: String(formData.get("specialCargo") || ""),
      supportNeeded: String(formData.get("supportNeeded") || ""),
      companyName: String(formData.get("companyName") || ""),
      contactName: String(formData.get("contactName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
      websiteUrl: String(formData.get("websiteUrl") || ""),
      sourceUrl: window.location.href,
    };

    try {
      const response = await fetch("/api/freight-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || copy.errorFallback);
      }

      setResult({
        type: "success",
        message: data.message || copy.successFallback,
      });

      form.reset();
    } catch (error) {
      setResult({
        type: "error",
        message: error instanceof Error ? error.message : copy.errorFallback,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="relative space-y-8" onSubmit={handleSubmit}>
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="website-url">Website</label>
        <input
          id="website-url"
          name="websiteUrl"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <section className={sectionClass}>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#071629]">
          01 · {copy.required}
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <FormField label={copy.transportType}>
            <select name="transportType" required className={selectClass}>
              <option value="">{copy.select}</option>
              {copy.transportOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label={copy.estimatedTime}>
            <div className="relative">
              <input
                id="estimated-shipping-date"
                name="estimatedShippingDate"
                type="date"
                className={`${inputClass} pr-14`}
              />

              <button
                type="button"
                aria-label={locale === "zh" ? "选择日期" : "Choose date"}
                className="absolute right-0 top-0 flex h-full w-14 items-center justify-center text-[#0b6f99] transition hover:text-[#176347]"
                onClick={() => {
                  const input = document.getElementById(
                    "estimated-shipping-date",
                  ) as HTMLInputElement | null;

                  if (!input) return;

                  if (typeof input.showPicker === "function") {
                    input.showPicker();
                  } else {
                    input.focus();
                  }
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </button>
            </div>
          </FormField>

          <FormField label={copy.origin}>
            <input
              name="origin"
              type="text"
              required
              className={inputClass}
              placeholder={
                locale === "en"
                  ? "Country, city, port or pickup address"
                  : "国家、城市、港口或提货地址"
              }
            />
          </FormField>

          <FormField label={copy.destination}>
            <input
              name="destination"
              type="text"
              required
              className={inputClass}
              placeholder={
                locale === "en"
                  ? "Country, city, port or delivery address"
                  : "国家、城市、港口或交货地址"
              }
            />
          </FormField>

          <FormField label={copy.cargoName}>
            <input
              name="cargoName"
              type="text"
              required
              className={inputClass}
              placeholder={
                locale === "en"
                  ? "Example: electronics, machinery, outdoor gear"
                  : "例如：电子产品、机械设备、户外用品等"
              }
            />
          </FormField>

          <FormField label={copy.tradeTerms}>
            <select name="tradeTerms" className={selectClass}>
              <option value="">{copy.select}</option>
              {copy.terms.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </FormField>
        </div>
      </section>

      <section className={sectionClass}>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#071629]">
          02 · {copy.optional}
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <FormField label={copy.grossWeight}>
            <input
              name="grossWeight"
              type="text"
              className={inputClass}
              placeholder={locale === "en" ? "Example: 1,200 kg" : "例如：1,200 kg"}
            />
          </FormField>

          <FormField label={copy.volume}>
            <input
              name="volumeCbm"
              type="text"
              className={inputClass}
              placeholder={locale === "en" ? "Example: 8.5 CBM" : "例如：8.5 CBM"}
            />
          </FormField>

          <FormField label={copy.pieces}>
            <input
              name="pieces"
              type="text"
              className={inputClass}
              placeholder={locale === "en" ? "Example: 120 cartons" : "例如：120 箱"}
            />
          </FormField>

          <FormField label={copy.specialCargo}>
            <select name="specialCargo" className={selectClass}>
              <option value="">{copy.select}</option>
              {copy.specialCargoOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </FormField>

          <div className="md:col-span-2">
            <FormField label={copy.supportNeeded}>
              <select name="supportNeeded" className={selectClass}>
                <option value="">{copy.select}</option>
                {copy.supportOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </FormField>
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#071629]">
          03 · {copy.contact}
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <FormField label={copy.companyName}>
            <input name="companyName" type="text" className={inputClass} />
          </FormField>

          <FormField label={copy.contactName}>
            <input
              name="contactName"
              type="text"
              required
              className={inputClass}
            />
          </FormField>

          <FormField label={copy.email}>
            <input
              name="email"
              type="email"
              required
              className={inputClass}
            />
          </FormField>

          <FormField label={copy.phone}>
            <input name="phone" type="text" className={inputClass} />
          </FormField>

          <div className="md:col-span-2">
            <FormField label={copy.message}>
              <textarea
                name="message"
                rows={6}
                className={`${inputClass} resize-y`}
                placeholder={
                  locale === "en"
                    ? "Please share any additional cargo, routing, timing or operational details."
                    : "请补充货物、路线、时间安排或其他操作相关信息。"
                }
              />
            </FormField>
          </div>
        </div>
      </section>

      {result && (
        <div
          className={`rounded-3xl border px-5 py-4 text-sm leading-7 ${
            result.type === "success"
              ? "border-[#b8e2c8] bg-[#effcf5] text-[#176347]"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {result.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-[#0b6f99] px-7 py-4 text-sm font-semibold tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#176347] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? copy.submitting : copy.submit}
      </button>
    </form>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[#071629]">
        {label}
      </span>
      {children}
    </label>
  );
}