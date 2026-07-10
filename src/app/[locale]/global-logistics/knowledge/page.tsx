/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { notFound } from "next/navigation";

import PageHero from "../../../../components/PageHero";

type Locale = "en" | "zh";

const content = {
  zh: {
    eyebrow: "物流知识",
    title: "国际物流与贸易条款实用知识。",
    subtitle:
      "这里整理客户在发货、报价、清关和贸易沟通中经常遇到的问题。内容用于基础理解，具体操作仍需结合货物、路线、贸易条款和实际申报要求判断。",
    inquiryButton: "提交运输咨询",
    hsButton: "HS Code 辅助查询",
    listEyebrow: "知识列表",
    listTitle: "常见国际物流与贸易问题",
    noteTitle: "使用说明",
    noteText:
      "以下内容为基础知识说明，不替代合同条款、正式报价、报关行意见或官方审核结果。实际运输费用、税费、清关要求和交付责任，应以具体业务资料和正式沟通为准。",
    groups: [
      {
        title: "关税与清关基础",
        items: [
          {
            question: "什么是关税，关税怎么计算？",
            answer:
              "关税是进出口环节可能产生的税费之一，通常与商品 HS Code、完税价格、税率、原产地和贸易政策有关。常见从价计征方式下，基础公式为：关税 = 完税价格 × 关税税率。",
            points: [
              "完税价格通常会结合货值、运费、保险费等因素确定。",
              "进口环节增值税通常按组成计税价格计算。",
              "如商品涉及消费税，还需要把消费税因素纳入计算。",
              "最终税率和应缴税费以官方规则、报关行及实际审核结果为准。",
            ],
          },
          {
            question: "什么是 HS Code？",
            answer:
              "HS Code 是国际贸易中用于商品分类的编码。它会影响税率、监管条件、申报要素、检验检疫要求和清关资料准备。",
            points: [
              "不能只凭商品名称判断 HS Code。",
              "需要结合用途、材质、成分、规格型号、图片、出口国和进口国。",
              "同一商品在不同国家或不同用途下，可能有不同申报要求。",
              "可先使用站内 HS Code 辅助查询工具做初步判断。",
            ],
          },
          {
            question: "什么是报关资料？",
            answer:
              "报关资料是货物进出口申报时需要准备的文件和商品信息。常见资料包括商业发票、装箱单、合同、提单、申报要素、产品说明、原产地资料等。",
            points: [
              "不同商品和不同目的国需要的资料不同。",
              "涉及监管条件的商品可能需要额外证件或检测资料。",
              "资料不完整可能导致查验、退单、延误或补充申报。",
            ],
          },
        ],
      },
      {
        title: "常见贸易条款",
        items: [
          {
            question: "什么是 EXW？",
            answer:
              "EXW 是工厂交货。卖方通常只需要在自己的工厂或仓库把货物交给买方安排提取，后续提货、出口、运输、保险、进口清关和目的地交付通常由买方负责。",
            points: [
              "买方责任较重。",
              "适合对出口操作和运输安排较熟悉的买方。",
              "实际操作中要确认卖方是否配合装货、出口资料和报关。",
            ],
          },
          {
            question: "什么是 FOB？",
            answer:
              "FOB 通常用于海运，卖方负责将货物装上买方指定船舶。货物装船后，主要风险通常转移给买方，国际海运费和目的港后续费用通常由买方承担。",
            points: [
              "常用于中国出口海运报价。",
              "买方通常负责订舱和支付国际海运费。",
              "需要明确起运港、船期、截关时间和装船责任。",
            ],
          },
          {
            question: "什么是 CIF？",
            answer:
              "CIF 通常用于海运，卖方负责支付到目的港的海运费和基础保险费用，但风险通常在货物装上船后转移给买方。",
            points: [
              "价格里通常包含货值、海运费和保险费。",
              "目的港清关、税费和目的地配送通常由买方负责。",
              "买方仍需关注目的港费用和清关资料。",
            ],
          },
          {
            question: "什么是 DAP？",
            answer:
              "DAP 是目的地交货。卖方负责把货物运输到约定目的地，但进口清关和进口税费通常由买方负责。",
            points: [
              "适合买方希望卖方负责较多运输环节的场景。",
              "必须明确具体交货地点。",
              "进口清关责任和税费承担需要提前确认。",
            ],
          },
          {
            question: "什么是 DDP？",
            answer:
              "DDP 是完税后交货。卖方责任较重，通常需要负责运输、进口清关、税费和送达约定地点。",
            points: [
              "卖方风险和责任较大。",
              "并非所有国家、商品和渠道都适合做 DDP。",
              "报价前必须确认商品、税率、监管条件和目的地派送条件。",
            ],
          },
        ],
      },
      {
        title: "海运与空运基础",
        items: [
          {
            question: "什么是海运整柜 FCL？",
            answer:
              "FCL 是 Full Container Load，指一个客户的货物使用一个或多个集装箱运输。适合货量较大、装柜条件明确或希望减少拼箱环节的货物。",
            points: [
              "常见柜型包括 20GP、40GP、40HQ 等。",
              "费用通常涉及拖车、报关、码头、海运费、目的港费用等。",
              "需要提前确认货物体积、重量、装柜方式和截关时间。",
            ],
          },
          {
            question: "什么是海运拼箱 LCL？",
            answer:
              "LCL 是 Less than Container Load，指货量不足一个整柜时，与其他客户货物拼在同一个集装箱中运输。",
            points: [
              "适合小批量货物。",
              "费用通常按体积或重量折算计费。",
              "目的港可能涉及拆箱、仓储、文件和派送衔接。",
            ],
          },
          {
            question: "什么是空运计费重量？",
            answer:
              "空运通常比较实际重量和体积重量，取较大者作为计费重量。常见体积重量计算方式为：长 × 宽 × 高（厘米）÷ 6000，具体换算标准以航空公司或货代确认为准。",
            points: [
              "泡货通常体积重量大于实际重量。",
              "重货通常实际重量大于体积重量。",
              "报价前需要提供单件尺寸、件数、总重量和包装方式。",
            ],
          },
        ],
      },
      {
        title: "常见运输文件",
        items: [
          {
            question: "什么是提单 B/L？",
            answer:
              "提单是海运中非常重要的运输文件，通常用于证明承运人已接收货物，也可能涉及货权、提货和结算安排。",
            points: [
              "常见有正本提单、电放提单、海运单等形式。",
              "收货人、通知方、品名、件数、重量等信息需要准确。",
              "提单信息错误可能影响目的港提货。",
            ],
          },
          {
            question: "什么是商业发票 Commercial Invoice？",
            answer:
              "商业发票是贸易和清关中的核心文件，通常包含买卖双方、商品名称、数量、单价、总价、币种、贸易条款等信息。",
            points: [
              "发票金额会影响申报和完税价格判断。",
              "商品描述应尽量具体，不建议只写笼统名称。",
              "发票信息应与合同、装箱单、报关资料保持一致。",
            ],
          },
          {
            question: "什么是装箱单 Packing List？",
            answer:
              "装箱单用于说明货物包装情况，包括件数、毛重、净重、体积、包装方式和唛头等信息。",
            points: [
              "装箱单有助于订舱、报关、查验和目的地收货。",
              "重量体积要尽量准确。",
              "多 SKU 或多包装货物应清楚列明明细。",
            ],
          },
          {
            question: "什么是原产地证 Certificate of Origin？",
            answer:
              "原产地证用于证明货物原产地。部分国家或贸易协定项下，原产地证可能影响关税优惠、清关要求或客户收货资料。",
            points: [
              "是否需要原产地证取决于目的国、商品和客户要求。",
              "不同类型原产地证适用范围不同。",
              "应在发货前确认是否需要办理。",
            ],
          },
        ],
      },
    ],
  },

  en: {
    eyebrow: "Logistics Knowledge",
    title: "Practical knowledge for international logistics and trade terms.",
    subtitle:
      "This page explains common questions in shipment, quotation, customs clearance and trade communication. The content is for basic understanding only and should be reviewed together with actual cargo, route, trade terms and declaration requirements.",
    inquiryButton: "Submit Freight Inquiry",
    hsButton: "HS Code Lookup",
    listEyebrow: "Knowledge List",
    listTitle: "Common logistics and trade questions",
    noteTitle: "Usage Note",
    noteText:
      "The following content is for basic reference only. It does not replace contract terms, formal quotations, customs-broker advice or official review results. Actual costs, taxes, clearance requirements and delivery responsibilities depend on each shipment.",
    groups: [
      {
        title: "Duties and Customs Basics",
        items: [
          {
            question: "What is customs duty and how is it calculated?",
            answer:
              "Customs duty is a tax that may apply during import or export. It is usually related to HS Code, customs value, duty rate, origin and trade policy. Under an ad valorem basis, a common formula is: Duty = Customs value × Duty rate.",
            points: [
              "Customs value may include product value, freight, insurance and other relevant costs.",
              "Import VAT is usually calculated based on a composite taxable value.",
              "If consumption tax applies, it may also affect the final taxable value.",
              "Final tax depends on official rules, customs brokers and actual review results.",
            ],
          },
          {
            question: "What is HS Code?",
            answer:
              "HS Code is a product-classification code used in international trade. It affects duty rate, regulatory conditions, declaration elements, inspection requirements and customs documentation.",
            points: [
              "HS Code cannot be decided by product name alone.",
              "Usage, material, ingredients, model, images, export country and import country may all matter.",
              "The same product may have different requirements in different countries or use cases.",
              "The HS Code Lookup tool can be used for preliminary direction checking.",
            ],
          },
          {
            question: "What are customs documents?",
            answer:
              "Customs documents are the documents and product information required for import or export declaration. Common documents include commercial invoice, packing list, contract, bill of lading, declaration elements, product description and origin documents.",
            points: [
              "Required documents vary by product and destination country.",
              "Regulated products may require additional certificates or test documents.",
              "Incomplete documents can lead to inspection, correction, delay or supplementary declaration.",
            ],
          },
        ],
      },
      {
        title: "Common Trade Terms",
        items: [
          {
            question: "What is EXW?",
            answer:
              "EXW means Ex Works. The seller usually makes the goods available at its factory or warehouse. Pickup, export, transport, insurance, import clearance and final delivery are usually handled by the buyer.",
            points: [
              "The buyer carries more responsibility.",
              "Suitable for buyers familiar with export and logistics operations.",
              "Loading support, export documents and customs cooperation should be confirmed in advance.",
            ],
          },
          {
            question: "What is FOB?",
            answer:
              "FOB is commonly used for sea freight. The seller delivers the goods on board the vessel nominated by the buyer. After loading, the main risk usually transfers to the buyer, and international freight is usually paid by the buyer.",
            points: [
              "Common in China export sea-freight quotations.",
              "The buyer usually books and pays for ocean freight.",
              "Port, vessel schedule, cut-off time and loading responsibility should be confirmed.",
            ],
          },
          {
            question: "What is CIF?",
            answer:
              "CIF is commonly used for sea freight. The seller pays the freight and basic insurance to the destination port, while the risk usually transfers once the goods are loaded on board.",
            points: [
              "Price usually includes cargo value, ocean freight and insurance.",
              "Import clearance, taxes and destination delivery are usually handled by the buyer.",
              "Destination charges and customs documents should still be reviewed.",
            ],
          },
          {
            question: "What is DAP?",
            answer:
              "DAP means Delivered at Place. The seller delivers the goods to an agreed place, while import clearance and import taxes are usually handled by the buyer.",
            points: [
              "Suitable when the buyer wants the seller to handle more transport steps.",
              "The exact delivery place must be clearly defined.",
              "Import clearance responsibility and taxes should be confirmed in advance.",
            ],
          },
          {
            question: "What is DDP?",
            answer:
              "DDP means Delivered Duty Paid. The seller usually takes heavier responsibility, including transport, import clearance, taxes and delivery to the agreed place.",
            points: [
              "The seller carries high responsibility and risk.",
              "Not all countries, products or channels are suitable for DDP.",
              "Product, duty rate, regulatory conditions and final delivery requirements must be checked before quoting.",
            ],
          },
        ],
      },
      {
        title: "Sea and Air Freight Basics",
        items: [
          {
            question: "What is FCL?",
            answer:
              "FCL means Full Container Load. One customer uses one or more full containers. It is suitable for larger cargo volume, clear loading conditions or shipments that should avoid consolidation.",
            points: [
              "Common container types include 20GP, 40GP and 40HQ.",
              "Costs may include trucking, customs, terminal charges, ocean freight and destination charges.",
              "Cargo volume, weight, loading method and cut-off time should be confirmed.",
            ],
          },
          {
            question: "What is LCL?",
            answer:
              "LCL means Less than Container Load. Cargo that does not fill a full container is consolidated with cargo from other customers.",
            points: [
              "Suitable for smaller shipments.",
              "Costs are usually calculated by volume or chargeable weight.",
              "Destination deconsolidation, warehousing, documentation and delivery should be considered.",
            ],
          },
          {
            question: "What is air-freight chargeable weight?",
            answer:
              "Air freight usually compares actual weight and volumetric weight, then uses the larger value as chargeable weight. A common volumetric formula is: length × width × height in cm ÷ 6000, subject to airline or forwarder confirmation.",
            points: [
              "Light and bulky cargo often uses volumetric weight.",
              "Dense cargo often uses actual weight.",
              "Dimensions, pieces, gross weight and packaging should be provided before quotation.",
            ],
          },
        ],
      },
      {
        title: "Common Shipping Documents",
        items: [
          {
            question: "What is Bill of Lading?",
            answer:
              "A bill of lading is an important sea-freight transport document. It usually confirms that the carrier has received the cargo and may be related to title, cargo release and settlement.",
            points: [
              "Common forms include original B/L, telex release and sea waybill.",
              "Consignee, notify party, cargo description, packages and weight must be accurate.",
              "Incorrect B/L information may affect cargo release at destination.",
            ],
          },
          {
            question: "What is Commercial Invoice?",
            answer:
              "A commercial invoice is a core trade and customs document. It usually includes buyer, seller, product description, quantity, unit price, total value, currency and trade terms.",
            points: [
              "Invoice value may affect declaration and customs value review.",
              "Product descriptions should be specific rather than overly general.",
              "Invoice, contract, packing list and customs documents should be consistent.",
            ],
          },
          {
            question: "What is Packing List?",
            answer:
              "A packing list explains how the cargo is packed, including packages, gross weight, net weight, volume, packing method and marks.",
            points: [
              "It supports booking, customs declaration, inspection and destination receiving.",
              "Weight and volume should be as accurate as possible.",
              "Multiple SKUs or package types should be listed clearly.",
            ],
          },
          {
            question: "What is Certificate of Origin?",
            answer:
              "A certificate of origin proves the origin of goods. Under some countries or trade agreements, it may affect duty preference, customs requirements or customer receiving documents.",
            points: [
              "Whether it is needed depends on destination country, product and buyer requirements.",
              "Different types of origin certificates apply to different situations.",
              "It should be confirmed before shipment.",
            ],
          },
        ],
      },
    ],
  },
} as const;

export default async function LogisticsKnowledgePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "zh") {
    notFound();
  }

  const currentLocale = locale as Locale;
  const copy = content[currentLocale];

  const hrefWithLocale = (path: string) => `/${currentLocale}${path}`;

  return (
    <main className="bg-[#f7fbfc] text-[#071629]">
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
        image="/images/banners/logistics-knowledge-hero.png"
        imagePosition="70% center"
        tone="light"
        contentAlign="right"
        overlay={false}
        textPanel
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href={hrefWithLocale("/global-logistics/freight-inquiry")}
            className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-7 py-4 text-sm font-semibold tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#176347]"
          >
            {copy.inquiryButton}
          </Link>

          <Link
            href={hrefWithLocale("/global-logistics/hs-code")}
            className="inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white/85 px-7 py-4 text-sm font-semibold tracking-[0.08em] text-[#176347] transition hover:-translate-y-0.5 hover:bg-[#ecfff5]"
          >
            {copy.hsButton}
          </Link>
        </div>
      </PageHero>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
              {copy.listEyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl">
              {copy.listTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-8">
            {copy.groups.map((group) => (
              <section
                key={group.title}
                className="rounded-[2rem] border border-[#dcebf0] bg-[#f7fbfc] p-5 shadow-sm sm:p-7"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#071629]">
                  {group.title}
                </h3>

                <div className="mt-6 grid gap-4">
                  {group.items.map((item, index) => (
                    <details
                      key={item.question}
                      className="group rounded-3xl border border-[#dcebf0] bg-white p-5 shadow-sm open:shadow-[0_14px_34px_rgba(31,93,122,0.10)]"
                      open={index === 0}
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-5">
                        <div className="flex gap-4">
                          <span className="mt-1 text-xs font-semibold tracking-[0.16em] text-[#39a773]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <h4 className="text-lg font-semibold leading-7 text-[#071629]">
                            {item.question}
                          </h4>
                        </div>

                        <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#6bbf95] text-[#24775b] transition group-open:rotate-45 group-open:bg-[#39a773] group-open:text-white">
                          +
                        </span>
                      </summary>

                      <div className="mt-5 border-t border-[#e1edf2] pt-5">
                        <p className="text-sm leading-7 text-slate-700">
                          {item.answer}
                        </p>

                        <ul className="mt-4 grid gap-2">
                          {item.points.map((point) => (
                            <li
                              key={point}
                              className="rounded-2xl bg-[#f7fbfc] px-4 py-3 text-sm leading-7 text-slate-600"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef7fb] px-6 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#dcebf0] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-[#071629]">
            {copy.noteTitle}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-700">
            {copy.noteText}
          </p>
        </div>
      </section>
    </main>
  );
}