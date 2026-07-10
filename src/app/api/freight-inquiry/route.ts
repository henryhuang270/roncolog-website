import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";
import { sendFreightInquiryEmail } from "@/lib/send-freight-inquiry-email";

export const runtime = "nodejs";

type FreightInquiryPayload = {
  locale?: "en" | "zh";
  transportType?: string;
  estimatedShippingDate?: string;
  origin?: string;
  destination?: string;
  cargoName?: string;
  tradeTerms?: string;
  grossWeight?: string;
  volumeCbm?: string;
  pieces?: string;
  specialCargo?: string;
  supportNeeded?: string;
  companyName?: string;
  contactName?: string;
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

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FreightInquiryPayload;

    const locale = body.locale === "zh" ? "zh" : "en";

    const transportType = cleanText(body.transportType, 120);
    const estimatedShippingDate = cleanText(body.estimatedShippingDate, 50);
    const origin = cleanText(body.origin, 300);
    const destination = cleanText(body.destination, 300);
    const cargoName = cleanText(body.cargoName, 300);
    const tradeTerms = cleanText(body.tradeTerms, 80);

    const grossWeight = cleanText(body.grossWeight, 100);
    const volumeCbm = cleanText(body.volumeCbm, 100);
    const pieces = cleanText(body.pieces, 100);
    const specialCargo = cleanText(body.specialCargo, 200);
    const supportNeeded = cleanText(body.supportNeeded, 200);

    const companyName = cleanText(body.companyName, 200);
    const contactName = cleanText(body.contactName, 150);
    const email = cleanText(body.email, 200).toLowerCase();
    const phone = cleanText(body.phone, 100);
    const message = cleanText(body.message, 5000);
    const websiteUrl = cleanText(body.websiteUrl, 300);
    const sourceUrl = cleanText(body.sourceUrl, 500);

if (websiteUrl) {
  return NextResponse.json(
    {
      success: true,
      message:
        locale === "zh"
          ? "物流需求已提交。RONCO 将先审核相关信息，再与您沟通下一步安排。"
          : "Your freight inquiry has been submitted. RONCO will review the information before discussing next steps.",
    },
    { status: 201 },
  );
}

    const missingRequired =
      !transportType ||
      !origin ||
      !destination ||
      !cargoName ||
      !contactName ||
      !email;

    if (missingRequired) {
      return NextResponse.json(
        {
          success: false,
          message:
            locale === "zh"
              ? "请完整填写运输类型、起运地、目的地、货物信息、联系人和邮箱。"
              : "Please complete the transport type, origin, destination, cargo information, contact name and email.",
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
        ? `物流询价：${cargoName}｜${origin} → ${destination}`
        : `Freight Inquiry: ${cargoName} | ${origin} → ${destination}`;

    const { error } = await supabaseServer.from("inquiries").insert({
      inquiry_type: "logistics",
      company_name: companyName || null,
      contact_name: contactName,
      email,
      phone: phone || null,
      subject,
      message: message || null,
      source_url: sourceUrl || null,
      status: "new",
      details: {
        locale,
        transport_type: transportType,
        estimated_shipping_date: estimatedShippingDate || null,
        origin,
        destination,
        cargo_name: cargoName,
        trade_terms: tradeTerms || null,
        gross_weight: grossWeight || null,
        volume_cbm: volumeCbm || null,
        pieces: pieces || null,
        special_cargo: specialCargo || null,
        support_needed: supportNeeded || null,
        submitted_from: "RONCO website freight inquiry form",
      },
    });

    if (error) {
      console.error("Freight inquiry insert failed:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            locale === "zh"
              ? "暂时无法提交请求，请稍后再试或直接发送邮件至 info@roncolog.com。"
              : "We could not submit your request at this time. Please try again later or email info@roncolog.com directly.",
        },
        { status: 500 },
      );
    }
    try {
  await sendFreightInquiryEmail({
    locale,
    transportType,
    estimatedShippingDate,
    origin,
    destination,
    cargoName,
    tradeTerms,
    grossWeight,
    volumeCbm,
    pieces,
    specialCargo,
    supportNeeded,
    companyName,
    contactName,
    email,
    phone,
    message,
    sourceUrl,
  });

  console.info("Freight inquiry email notification sent.");
} catch (emailError) {
  console.error(
    "Freight inquiry saved, but email notification failed:",
    emailError,
  );
}

    return NextResponse.json(
      {
        success: true,
        message:
          locale === "zh"
            ? "物流需求已提交。RONCO 将先审核相关信息，再与您沟通下一步安排。"
            : "Your freight inquiry has been submitted. RONCO will review the information before discussing next steps.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Freight inquiry API error:", error);

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