"use client";

import { FormEvent, ReactNode, useState } from "react";

type Locale = "en" | "zh";

type BrandPartnershipFormProps = {
  locale: Locale;
};

const content = {
  en: {
    sectionBrand: "Brand Information",
    sectionProducts: "Product & Market Information",
    sectionCooperation: "Cooperation Expectations",
    sectionContact: "Contact Information",

    brandName: "Brand name",
    country: "Country / region of origin",
    website: "Official website",
    foundedYear: "Year established",
    companyName: "Company name",

    productCategories: "Main product categories",
    keyProducts: "Representative products / key SKUs",
    targetConsumers: "Target consumers",
    chinaStatus: "Current China market status",
    chinaStatusOptions: [
      "No current China market presence",
      "Selling through cross-border e-commerce",
      "Has China distributor or agent",
      "Exploring China market entry",
      "Other / not confirmed",
    ],

    cooperationModels: "Preferred cooperation models",
    cooperationOptions: [
      "B2B bulk purchase / supply cooperation",
      "Cross-border e-commerce market testing",
      "Regional distribution discussion",
      "China-market product selection",
      "Long-term brand development cooperation",
      "Other cooperation model",
    ],

    availableMaterials: "Available materials",
    materialsOptions: [
      "Product catalogue",
      "Commercial price list",
      "Ingredient information",
      "Certificates / test reports",
      "Free sale certificate",
      "Brand authorization materials",
      "Product images / marketing materials",
    ],

    chinaExpectations: "Expectations for China market cooperation",
    contactName: "Contact name",
    position: "Position / title",
    email: "Business email",
    phone: "Phone / WhatsApp / WeChat",
    message: "Additional message",

    select: "Please select",
    submit: "Submit Brand Partnership Information",
    submitting: "Submitting...",
    successFallback:
      "Your partnership information has been submitted. RONCO will review the materials before discussing next steps.",
    errorFallback:
      "We could not submit your information. Please try again later or email info@roncolog.com.",
    requiredHint: "Fields marked with * are required.",
    checkboxHint: "Select all that apply.",
  },

  zh: {
    sectionBrand: "品牌基本信息",
    sectionProducts: "产品与市场信息",
    sectionCooperation: "合作预期",
    sectionContact: "联系信息",

    brandName: "品牌名称",
    country: "品牌所属国家 / 地区",
    website: "品牌官网",
    foundedYear: "品牌成立年份",
    companyName: "公司名称",

    productCategories: "主要产品类别",
    keyProducts: "代表性产品 / 重点 SKU",
    targetConsumers: "主要目标消费者",
    chinaStatus: "目前在中国市场的状态",
    chinaStatusOptions: [
      "目前尚未进入中国市场",
      "已通过跨境电商销售",
      "已有中国经销商或代理商",
      "正在探索进入中国市场",
      "其他 / 尚未确认",
    ],

    cooperationModels: "希望合作的方式",
    cooperationOptions: [
      "B2B 批量采购 / 供货合作",
      "跨境电商市场测试",
      "区域分销合作探讨",
      "中国市场产品筛选",
      "长期品牌市场开发合作",
      "其他合作方式",
    ],

    availableMaterials: "目前可提供的资料",
    materialsOptions: [
      "产品目录",
      "商业报价表",
      "成分资料",
      "证书 / 检测报告",
      "自由销售证明",
      "品牌授权资料",
      "产品图片 / 市场宣传资料",
    ],

    chinaExpectations: "对中国市场合作的预期",
    contactName: "联系人姓名",
    position: "职位 / 职务",
    email: "商务邮箱",
    phone: "电话 / WhatsApp / 微信",
    message: "补充说明",

    select: "请选择",
    submit: "提交品牌合作资料",
    submitting: "正在提交...",
    successFallback:
      "品牌合作资料已提交。荣程国际将先审核相关信息，再与您沟通下一步安排。",
    errorFallback:
      "暂时无法提交资料，请稍后再试或直接发送邮件至 info@roncolog.com。",
    requiredHint: "标记 * 的项目为必填项。",
    checkboxHint: "可多选。",
  },
} as const;

const fieldClass =
  "min-h-[48px] w-full rounded-2xl border border-[#cfe6ee] bg-white px-4 py-3 text-sm text-[#071629] outline-none transition placeholder:text-slate-400 focus:border-[#6bbf95] focus:ring-4 focus:ring-[#6bbf95]/15";

const textareaClass =
  "w-full rounded-2xl border border-[#cfe6ee] bg-white px-4 py-3 text-sm leading-7 text-[#071629] outline-none transition placeholder:text-slate-400 focus:border-[#6bbf95] focus:ring-4 focus:ring-[#6bbf95]/15";

function normalizeWebsite(value: string) {
  const rawWebsite = value.trim();

  if (!rawWebsite) {
    return "";
  }

  if (/^https?:\/\//i.test(rawWebsite)) {
    return rawWebsite;
  }

  return `https://${rawWebsite}`;
}

export default function BrandPartnershipForm({
  locale,
}: BrandPartnershipFormProps) {
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
      brandName: String(formData.get("brandName") || ""),
      countryRegion: String(formData.get("countryRegion") || ""),
      website: normalizeWebsite(String(formData.get("website") || "")),
      foundedYear: String(formData.get("foundedYear") || ""),
      companyName: String(formData.get("companyName") || ""),
      productCategories: String(formData.get("productCategories") || ""),
      keyProducts: String(formData.get("keyProducts") || ""),
      targetConsumers: String(formData.get("targetConsumers") || ""),
      chinaMarketStatus: String(formData.get("chinaMarketStatus") || ""),
      cooperationModels: formData.getAll("cooperationModels"),
      availableMaterials: formData.getAll("availableMaterials"),
      chinaExpectations: String(formData.get("chinaExpectations") || ""),
      contactName: String(formData.get("contactName") || ""),
      position: String(formData.get("position") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
      websiteUrl: String(formData.get("websiteUrl") || ""),
      sourceUrl: window.location.href,
    };

    try {
      const response = await fetch("/api/brand-partnership", {
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
        message:
          error instanceof Error ? error.message : copy.errorFallback,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="brand-website-url">Website</label>
        <input
          id="brand-website-url"
          name="websiteUrl"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <p className="rounded-full border border-[#cfe6ee] bg-[#f7fbfc] px-5 py-3 text-sm leading-7 text-slate-600">
        {copy.requiredHint}
      </p>

      <section className="rounded-[2rem] border border-[#dcebf0] bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-[#071629]">
          01 · {copy.sectionBrand}
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <FormField label={`${copy.brandName} *`}>
            <input
              name="brandName"
              type="text"
              required
              className={fieldClass}
            />
          </FormField>

          <FormField label={`${copy.country} *`}>
            <input
              name="countryRegion"
              type="text"
              required
              className={fieldClass}
            />
          </FormField>

          <FormField label={copy.website}>
            <input
              name="website"
              type="text"
              inputMode="url"
              className={fieldClass}
              placeholder={
                locale === "zh"
                  ? "请输入品牌官网，可不加 https://"
                  : "Enter the official website. https:// is optional"
              }
            />
          </FormField>

          <FormField label={copy.foundedYear}>
            <input
              name="foundedYear"
              type="text"
              className={fieldClass}
              placeholder={locale === "zh" ? "例如：2012" : "Example: 2012"}
            />
          </FormField>

          <div className="md:col-span-2">
            <FormField label={copy.companyName}>
              <input name="companyName" type="text" className={fieldClass} />
            </FormField>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#dcebf0] bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-[#071629]">
          02 · {copy.sectionProducts}
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <FormField label={`${copy.productCategories} *`}>
            <textarea
              name="productCategories"
              required
              rows={4}
              className={`${textareaClass} resize-y`}
              placeholder={
                locale === "zh"
                  ? "例如：成人营养、儿童营养、天然护肤、美妆、户外生活方式产品等"
                  : "Example: adult nutrition, children's nutrition, natural skincare, beauty, outdoor lifestyle products"
              }
            />
          </FormField>

          <FormField label={copy.keyProducts}>
            <textarea
              name="keyProducts"
              rows={4}
              className={`${textareaClass} resize-y`}
              placeholder={
                locale === "zh"
                  ? "请列出 3–5 个代表性产品，包含名称、规格或核心方向。"
                  : "Please list 3–5 representative products, including name, size or key positioning."
              }
            />
          </FormField>

          <FormField label={copy.targetConsumers}>
            <input
              name="targetConsumers"
              type="text"
              className={fieldClass}
              placeholder={
                locale === "zh"
                  ? "例如：儿童、职场人士、中老年、敏感肌消费者等"
                  : "Example: children, professionals, healthy ageing consumers, sensitive-skin users"
              }
            />
          </FormField>

          <FormField label={copy.chinaStatus}>
            <select name="chinaMarketStatus" className={fieldClass}>
              <option value="">{copy.select}</option>
              {copy.chinaStatusOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </FormField>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#dcebf0] bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-[#071629]">
          03 · {copy.sectionCooperation}
        </h2>

        <div className="mt-8 grid gap-8">
          <CheckboxGroup
            label={copy.cooperationModels}
            hint={copy.checkboxHint}
            name="cooperationModels"
            options={copy.cooperationOptions}
          />

          <CheckboxGroup
            label={copy.availableMaterials}
            hint={copy.checkboxHint}
            name="availableMaterials"
            options={copy.materialsOptions}
          />

          <FormField label={copy.chinaExpectations}>
            <textarea
              name="chinaExpectations"
              rows={5}
              className={`${textareaClass} resize-y`}
              placeholder={
                locale === "zh"
                  ? "请说明您希望在中国市场开展的合作方向、供货条件、授权方式或其他重点要求。"
                  : "Please describe your expectations for China-market cooperation, supply terms, authorization approach or other key requirements."
              }
            />
          </FormField>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#dcebf0] bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-[#071629]">
          04 · {copy.sectionContact}
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <FormField label={`${copy.contactName} *`}>
            <input
              name="contactName"
              type="text"
              required
              className={fieldClass}
            />
          </FormField>

          <FormField label={copy.position}>
            <input name="position" type="text" className={fieldClass} />
          </FormField>

          <FormField label={`${copy.email} *`}>
            <input
              name="email"
              type="email"
              required
              className={fieldClass}
            />
          </FormField>

          <FormField label={copy.phone}>
            <input name="phone" type="text" className={fieldClass} />
          </FormField>

          <div className="md:col-span-2">
            <FormField label={copy.message}>
              <textarea
                name="message"
                rows={6}
                className={`${textareaClass} resize-y`}
                placeholder={
                  locale === "zh"
                    ? "请补充品牌背景、合作目标、计划供货方式或其他需要荣程国际了解的信息。"
                    : "Please add any brand background, cooperation goals, supply considerations or other information RONCO should know."
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
              ? "border-[#a8dbc6] bg-[#f3fff8] text-[#176347]"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {result.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-[#0b6f99] px-7 py-4 text-sm font-semibold tracking-[0.06em] text-white shadow-[0_12px_28px_rgba(11,111,153,0.18)] transition hover:-translate-y-0.5 hover:bg-[#176347] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
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
      <span className="mb-2 block text-sm font-medium text-[#23445c]">
        {label}
      </span>
      {children}
    </label>
  );
}

function CheckboxGroup({
  label,
  hint,
  name,
  options,
}: {
  label: string;
  hint: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-[#23445c]">{label}</legend>
      <p className="mt-2 text-xs text-slate-500">{hint}</p>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {options.map((item) => (
          <label
            key={item}
            className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#dcebf0] bg-[#f7fbfc] px-4 py-3 text-sm leading-6 text-slate-700 transition hover:border-[#6bbf95] hover:bg-[#f3fff8]"
          >
            <input
              name={name}
              type="checkbox"
              value={item}
              className="mt-1 h-4 w-4 accent-[#39a773]"
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}