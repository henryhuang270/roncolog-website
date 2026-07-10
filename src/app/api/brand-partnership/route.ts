import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";
import { sendBrandPartnershipEmail } from "@/lib/send-brand-partnership-email";

export const runtime = "nodejs";

type BrandPartnershipPayload = {
  locale?: "en" | "zh";
  brandName?: string;
  countryRegion?: string;
  website?: string;
  foundedYear?: string;
  companyName?: string;
  productCategories?: string;
  keyProducts?: string;
  targetConsumers?: string;
  chinaMarketStatus?: string;
  cooperationModels?: unknown;
  availableMaterials?: unknown;
  chinaExpectations?: string;
  contactName?: string;
  position?: string;
  email?: string;
  phone?: string;
  message?: string;
  websiteUrl?: string;
  sourceUrl?: string;
};

function cleanText(value: unknown, maxLength = 2000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function cleanTextArray(value: unknown, maxItems = 20, maxItemLength = 300) {
  if (!Array.isArray(value)) return [];

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim().slice(0, maxItemLength))
    .filter(Boolean)
    .slice(0, maxItems);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BrandPartnershipPayload;

    const locale = body.locale === "zh" ? "zh" : "en";

    const brandName = cleanText(body.brandName, 200);
    const countryRegion = cleanText(body.countryRegion, 150);
    const website = cleanText(body.website, 500);
    const foundedYear = cleanText(body.foundedYear, 20);
    const companyName = cleanText(body.companyName, 200);

    const productCategories = cleanText(body.productCategories, 2500);
    const keyProducts = cleanText(body.keyProducts, 4000);
    const targetConsumers = cleanText(body.targetConsumers, 500);
    const chinaMarketStatus = cleanText(body.chinaMarketStatus, 200);

    const cooperationModels = cleanTextArray(body.cooperationModels);
    const availableMaterials = cleanTextArray(body.availableMaterials);
    const chinaExpectations = cleanText(body.chinaExpectations, 4000);

    const contactName = cleanText(body.contactName, 150);
    const position = cleanText(body.position, 150);
    const email = cleanText(body.email, 200).toLowerCase();
    const phone = cleanText(body.phone, 100);
    const message = cleanText(body.message, 5000);

    const websiteUrl = cleanText(body.websiteUrl, 300);
    const sourceUrl = cleanText(body.sourceUrl, 500);

    // 隐藏字段被填写时，表面上返回成功，但不写入数据库。
    if (websiteUrl) {
      return NextResponse.json(
        {
          success: true,
          message:
            locale === "zh"
              ? "品牌合作资料已提交。RONCO 将先审核相关信息，再与您沟通下一步安排。"
              : "Your partnership information has been submitted. RONCO will review the materials before discussing next steps.",
        },
        { status: 201 },
      );
    }

    const missingRequired =
      !brandName ||
      !countryRegion ||
      !productCategories ||
      !contactName ||
      !email;

    if (missingRequired) {
      return NextResponse.json(
        {
          success: false,
          message:
            locale === "zh"
              ? "请完整填写品牌名称、所属国家或地区、主要产品类别、联系人和商务邮箱。"
              : "Please complete the brand name, country or region, main product categories, contact name and business email.",
        },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message:
            locale === "zh"
              ? "请输入有效的商务邮箱。"
              : "Please enter a valid business email address.",
        },
        { status: 400 },
      );
    }

    const subject =
      locale === "zh"
        ? `品牌合作资料：${brandName}｜${countryRegion}`
        : `Brand Partnership Information: ${brandName} | ${countryRegion}`;

    const { error } = await supabaseServer.from("inquiries").insert({
      inquiry_type: "brand_partnership",
      company_name: companyName || null,
      contact_name: contactName,
      position: position || null,
      email,
      phone: phone || null,
      country_region: countryRegion,
      website: website || null,
      subject,
      message: message || null,
      source_url: sourceUrl || null,
      status: "new",
      details: {
        locale,
        brand_name: brandName,
        founded_year: foundedYear || null,
        product_categories: productCategories,
        representative_products_or_key_skus: keyProducts || null,
        target_consumers: targetConsumers || null,
        china_market_status: chinaMarketStatus || null,
        preferred_cooperation_models: cooperationModels,
        available_materials: availableMaterials,
        china_market_expectations: chinaExpectations || null,
        submitted_from: "RONCO website brand partnership form",
      },
    });

    if (error) {
      console.error("Brand partnership insert failed:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            locale === "zh"
              ? "暂时无法提交资料，请稍后再试或直接发送邮件至 info@roncolog.com。"
              : "We could not submit your information at this time. Please try again later or email info@roncolog.com directly.",
        },
        { status: 500 },
      );
    }
    
    try {
  await sendBrandPartnershipEmail({
    locale,
    brandName,
    countryRegion,
    website,
    foundedYear,
    companyName,
    productCategories,
    keyProducts,
    targetConsumers,
    chinaMarketStatus,
    cooperationModels,
    availableMaterials,
    chinaExpectations,
    contactName,
    position,
    email,
    phone,
    message,
    sourceUrl,
  });

  console.info("Brand partnership email notification sent.");
} catch (emailError) {
  console.error(
    "Brand partnership saved, but email notification failed:",
    emailError,
  );
}

    return NextResponse.json(
      {
        success: true,
        message:
          locale === "zh"
            ? "品牌合作资料已提交。RONCO 将先审核相关信息，再与您沟通下一步安排。"
            : "Your partnership information has been submitted. RONCO will review the materials before discussing next steps.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Brand partnership API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Request format could not be processed. Please try again later.",
      },
      { status: 400 },
    );
  }
}