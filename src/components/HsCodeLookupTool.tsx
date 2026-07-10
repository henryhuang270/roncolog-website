"use client";

import { useMemo, useState } from "react";

type Locale = "en" | "zh";

type HsItem = {
  code: string;
  zhTitle: string;
  enTitle: string;
  zhKeywords: string[];
  enKeywords: string[];
  zhNote: string;
  enNote: string;
  confirm: string[];
};

const hsData: HsItem[] = [
  {
    code: "4202",
    zhTitle: "箱包、背包、旅行袋等容器类制品",
    enTitle: "Trunks, suitcases, bags, backpacks and similar containers",
    zhKeywords: ["背包", "双肩包", "旅行袋", "箱包", "户外包", "电脑包", "手提包"],
    enKeywords: ["backpack", "bag", "travel bag", "luggage", "suitcase"],
    zhNote: "常用于箱包、背包、旅行袋等方向。需确认外层材质、用途、结构和是否为特殊功能包。",
    enNote: "Commonly related to bags, backpacks and luggage. Material, usage, structure and special functions need confirmation.",
    confirm: ["外层材质", "用途", "是否带保温/工具/专业功能", "品牌与包装信息"],
  },
  {
    code: "6403 / 6404",
    zhTitle: "鞋类产品，包括皮面鞋、纺织面鞋、运动鞋等",
    enTitle: "Footwear, including leather shoes, textile shoes and sports shoes",
    zhKeywords: ["鞋", "徒步鞋", "登山鞋", "运动鞋", "户外鞋", "靴", "皮鞋"],
    enKeywords: ["shoes", "boots", "hiking boots", "sports shoes", "outdoor shoes"],
    zhNote: "鞋类通常需确认鞋面材质、外底材质、用途、是否运动鞋或专业户外鞋。",
    enNote: "Footwear classification depends on upper material, outsole material, usage and whether it is sports or professional outdoor footwear.",
    confirm: ["鞋面材质", "外底材质", "是否覆盖脚踝", "用途和销售名称"],
  },
  {
    code: "6306",
    zhTitle: "帐篷、篷布、遮阳篷及类似露营用品",
    enTitle: "Tents, tarpaulins, awnings and similar camping goods",
    zhKeywords: ["帐篷", "露营帐篷", "天幕", "篷布", "遮阳篷", "露营"],
    enKeywords: ["tent", "camping tent", "tarpaulin", "awning"],
    zhNote: "帐篷及露营篷类产品需确认材质、结构、用途、是否充气或带支架。",
    enNote: "Tents and camping shelters require confirmation of material, structure, usage and whether they are inflatable or frame-supported.",
    confirm: ["面料材质", "支架材质", "是否充气", "包装和用途"],
  },
  {
    code: "9404",
    zhTitle: "寝具及类似用品，包括睡袋、床垫、枕垫等",
    enTitle: "Bedding and similar furnishings, including sleeping bags and cushions",
    zhKeywords: ["睡袋", "露营睡袋", "床垫", "充气垫", "枕头", "垫子"],
    enKeywords: ["sleeping bag", "camping sleeping bag", "mattress", "cushion", "pillow"],
    zhNote: "睡袋、床垫类需确认填充物、面料、用途、是否充气或带加热功能。",
    enNote: "Sleeping bags and mattresses require confirmation of filling, fabric, usage and whether inflatable or heated.",
    confirm: ["填充材料", "面料", "是否充气", "是否带电热功能"],
  },
  {
    code: "7615 / 7323 / 3924",
    zhTitle: "水壶、保温瓶、餐厨及日用容器类产品",
    enTitle: "Bottles, flasks, kitchenware and household containers",
    zhKeywords: ["水壶", "保温壶", "保温杯", "瓶", "杯", "户外水瓶", "运动水壶"],
    enKeywords: ["water bottle", "flask", "thermos", "bottle", "cup"],
    zhNote: "水壶类归类与材质关系很大，需确认是不锈钢、铝、塑料、玻璃还是复合材料。",
    enNote: "Bottle classification depends heavily on material, such as stainless steel, aluminium, plastic, glass or composite material.",
    confirm: ["主体材质", "是否保温", "容量", "是否带过滤/加热/电子功能"],
  },
  {
    code: "9004",
    zhTitle: "太阳镜、护目镜及类似眼镜产品",
    enTitle: "Sunglasses, goggles and similar eyewear",
    zhKeywords: ["太阳镜", "墨镜", "护目镜", "运动眼镜", "滑雪镜", "户外眼镜"],
    enKeywords: ["sunglasses", "goggles", "sports glasses", "protective eyewear"],
    zhNote: "眼镜类需确认是否矫正视力、是否太阳镜、防护用途、镜片材质和功能。",
    enNote: "Eyewear requires confirmation of whether it is corrective, sunglasses, protective eyewear, lens material and function.",
    confirm: ["是否有度数", "镜片材质", "是否防护用途", "是否太阳镜"],
  },
  {
    code: "8513",
    zhTitle: "便携式电灯、头灯、手电筒等",
    enTitle: "Portable electric lamps, headlamps and flashlights",
    zhKeywords: ["头灯", "手电筒", "露营灯", "便携灯", "LED灯", "户外灯"],
    enKeywords: ["headlamp", "flashlight", "camping lamp", "portable lamp", "led lamp"],
    zhNote: "便携灯具需确认是否自带电源、电池类型、是否可充电及用途。",
    enNote: "Portable lamps require confirmation of built-in power source, battery type, rechargeability and usage.",
    confirm: ["是否自带电池", "电池类型", "是否可充电", "用途和功率"],
  },
  {
    code: "9506",
    zhTitle: "体育用品、健身用品及部分户外运动用品",
    enTitle: "Sports goods, fitness goods and some outdoor sports equipment",
    zhKeywords: ["运动用品", "健身器材", "瑜伽垫", "登山杖", "运动配件", "训练用品"],
    enKeywords: ["sports goods", "fitness", "yoga mat", "trekking poles", "training gear"],
    zhNote: "体育用品范围较广，需确认具体用途、材质、是否专业器械或普通配件。",
    enNote: "Sports goods are broad. Usage, material and whether professional equipment or general accessory need confirmation.",
    confirm: ["具体用途", "材质", "是否电动/电子", "是否专业器械"],
  },
  {
    code: "3304",
    zhTitle: "美容护肤、护肤霜、防晒及类似化妆品",
    enTitle: "Beauty, skincare, creams, sunscreen and similar cosmetics",
    zhKeywords: ["护肤品", "面霜", "防晒", "洁面", "精华", "乳液", "化妆品"],
    enKeywords: ["skincare", "cream", "sunscreen", "cleanser", "serum", "cosmetics"],
    zhNote: "化妆品需确认成分、用途、是否特殊化妆品、防晒或功效宣称。",
    enNote: "Cosmetics require confirmation of ingredients, usage, whether special cosmetics, sunscreen or functional claims apply.",
    confirm: ["成分表", "用途", "是否防晒", "是否特殊化妆品"],
  },
  {
    code: "2106",
    zhTitle: "未列名食品制剂、营养补充类食品方向",
    enTitle: "Food preparations not elsewhere specified, including some nutrition products",
    zhKeywords: ["营养品", "膳食补充剂", "维生素", "鱼油", "益生菌", "蛋白粉", "软糖"],
    enKeywords: ["supplement", "vitamin", "fish oil", "probiotics", "protein powder", "gummies"],
    zhNote: "营养补充类产品归类和监管要求复杂，可能涉及食品、保健食品、药品或特殊监管要求。",
    enNote: "Nutrition products can be complex and may involve food, health food, medicine or special regulatory requirements.",
    confirm: ["完整成分", "剂型", "用途宣称", "是否保健食品/药品", "进口国家规则"],
  },
  {
    code: "8507",
    zhTitle: "蓄电池、锂电池及类似电池产品",
    enTitle: "Electric accumulators, lithium batteries and similar battery products",
    zhKeywords: ["电池", "锂电池", "蓄电池", "充电电池", "移动电源", "电池包"],
    enKeywords: ["battery", "lithium battery", "power bank", "accumulator"],
    zhNote: "电池类需要确认电池类型、容量、是否单独电池、是否随设备出口及运输限制。",
    enNote: "Battery classification needs battery type, capacity, whether standalone or packed with equipment, and transport restrictions.",
    confirm: ["电池类型", "容量/Wh", "是否随设备", "UN38.3/MSDS等资料"],
  },
  {
    code: "8517",
    zhTitle: "通信设备及其零件方向",
    enTitle: "Communication equipment and parts",
    zhKeywords: ["手机", "手机屏幕", "通信设备", "路由器", "电话", "平板通信", "手机配件"],
    enKeywords: ["phone", "mobile phone", "phone screen", "router", "communication device"],
    zhNote: "通信设备及零件需要确认是否整机、零件、屏幕模组、是否带通信功能。",
    enNote: "Communication devices and parts require confirmation of whether complete unit, parts, display module or with communication function.",
    confirm: ["整机还是零件", "是否带通信功能", "是否屏幕模组", "型号和用途"],
  },
  {
    code: "8471",
    zhTitle: "自动数据处理设备、电脑及相关设备",
    enTitle: "Automatic data processing machines, computers and related equipment",
    zhKeywords: ["电脑", "笔记本电脑", "主机", "服务器", "平板电脑", "计算机"],
    enKeywords: ["computer", "laptop", "server", "desktop", "tablet"],
    zhNote: "电脑及相关设备需确认是否完整设备、部件、是否带通信功能及配置。",
    enNote: "Computers and related equipment require confirmation of complete unit, parts, communication function and configuration.",
    confirm: ["整机还是配件", "配置", "是否带通信功能", "用途"],
  },
  {
    code: "8544",
    zhTitle: "电线、电缆、连接线及类似导体",
    enTitle: "Insulated wires, cables and similar conductors",
    zhKeywords: ["电线", "电缆", "连接线", "数据线", "充电线", "线束"],
    enKeywords: ["wire", "cable", "charging cable", "data cable", "wiring harness"],
    zhNote: "线缆类需确认用途、电压、是否带接头、是否光缆或普通电缆。",
    enNote: "Cables require confirmation of usage, voltage, connectors and whether optical or ordinary cable.",
    confirm: ["用途", "电压", "是否带接头", "材质和规格"],
  },
  {
    code: "8708",
    zhTitle: "机动车辆零件及附件方向",
    enTitle: "Motor vehicle parts and accessories",
    zhKeywords: ["汽车配件", "汽车零件", "刹车片", "保险杠", "车灯", "滤清器"],
    enKeywords: ["auto parts", "vehicle parts", "brake pad", "bumper", "car lamp"],
    zhNote: "汽车配件需确认适用车型、功能、是否通用件、是否电气部件。",
    enNote: "Auto parts require vehicle application, function, whether universal part and whether electrical component.",
    confirm: ["适用车型", "功能", "材质", "是否电气/电子部件"],
  },
  {
    code: "9503",
    zhTitle: "玩具、模型、智力玩具及类似儿童用品",
    enTitle: "Toys, models, puzzles and similar children's products",
    zhKeywords: ["玩具", "模型", "积木", "儿童玩具", "益智玩具", "娃娃"],
    enKeywords: ["toy", "model", "blocks", "puzzle", "doll"],
    zhNote: "玩具类需确认年龄段、材质、是否电动、是否带电池及安全资料。",
    enNote: "Toys require age range, material, whether electric, battery-powered and safety documents.",
    confirm: ["年龄段", "材质", "是否带电", "安全认证或检测资料"],
  },
  {
    code: "3926",
    zhTitle: "其他塑料制品方向",
    enTitle: "Other articles of plastics",
    zhKeywords: ["塑料制品", "塑胶件", "塑料配件", "收纳盒", "塑料外壳"],
    enKeywords: ["plastic product", "plastic part", "plastic case", "storage box"],
    zhNote: "塑料制品范围很广，需确认具体用途、结构、材质及是否属于其他专门品目。",
    enNote: "Plastic articles are broad. Usage, structure, material and whether covered by another specific heading need confirmation.",
    confirm: ["具体用途", "塑料材质", "结构", "是否机器/车辆/电子产品零件"],
  },
  {
    code: "7326",
    zhTitle: "其他钢铁制品方向",
    enTitle: "Other articles of iron or steel",
    zhKeywords: ["钢铁制品", "铁件", "金属支架", "五金件", "铁架", "钢架"],
    enKeywords: ["steel product", "iron part", "metal bracket", "hardware"],
    zhNote: "钢铁制品需确认用途、材质、加工方式以及是否属于机械、车辆或家具零件。",
    enNote: "Iron or steel articles require usage, material, processing method and whether machine, vehicle or furniture part.",
    confirm: ["用途", "材质", "加工方式", "是否其他设备零件"],
  },
  {
    code: "8483",
    zhTitle: "传动轴、齿轮、轴承座及传动部件方向",
    enTitle: "Transmission shafts, gears, bearing housings and transmission parts",
    zhKeywords: ["齿轮", "传动轴", "轴承座", "联轴器", "传动件", "机械传动"],
    enKeywords: ["gear", "shaft", "bearing housing", "coupling", "transmission part"],
    zhNote: "机械传动部件需确认功能、工作原理、适用设备和材质。",
    enNote: "Mechanical transmission parts require function, working principle, applicable equipment and material.",
    confirm: ["适用设备", "功能", "材质", "结构图或图纸"],
  },
  {
    code: "8536",
    zhTitle: "开关、连接器、插座及低压电气装置",
    enTitle: "Switches, connectors, sockets and low-voltage electrical apparatus",
    zhKeywords: ["开关", "连接器", "插座", "端子", "继电器", "接插件"],
    enKeywords: ["switch", "connector", "socket", "terminal", "relay"],
    zhNote: "低压电气件需确认电压、电流、用途、结构和是否属于专用设备部件。",
    enNote: "Low-voltage electrical parts require voltage, current, usage, structure and whether part of a specific device.",
    confirm: ["电压电流", "用途", "结构", "是否专用设备零件"],
  },
];

const ui = {
  zh: {
    title: "HS Code 辅助查询",
    subtitle:
      "输入货物信息后，系统会从内置商品归类库中匹配可能相关的编码方向。结果仅作初步参考，不作为最终申报依据。",
    productName: "商品名称",
    productNamePlaceholder: "例如：手机屏幕、户外背包、保温水壶、锂电池",
    usage: "用途 / 使用场景",
    usagePlaceholder: "例如：用于手机维修；用于户外徒步；用于工业设备",
    material: "材质 / 成分 / 结构",
    materialPlaceholder: "例如：塑料、铝合金、不锈钢、纺织面料、电子模组",
    destination: "进口国 / 出口方向",
    destinationPlaceholder: "例如：中国、美国、越南、德国",
    search: "开始查询",
    clear: "清空",
    resultTitle: "候选 HS Code 方向",
    noInput: "请先输入商品名称，建议同时填写用途、材质和目的地。",
    noResult:
      "暂未匹配到明确方向。请补充商品用途、材质、成分、结构、规格型号或产品图片说明。",
    matched: "匹配关键词",
    needConfirm: "还需确认",
    note: "说明",
    warning:
      "重要提示：以下结果为系统辅助匹配方向，不代表最终 HS Code。最终编码、税率、监管条件和申报要求，以官方规则、报关行及实际审核结果为准。",
  },
  en: {
    title: "HS Code Assistance Search",
    subtitle:
      "Enter cargo information and the system will match possible code directions from the built-in classification library. Results are for preliminary reference only.",
    productName: "Product name",
    productNamePlaceholder: "e.g. phone screen, outdoor backpack, thermos bottle, lithium battery",
    usage: "Usage / scenario",
    usagePlaceholder: "e.g. mobile repair, outdoor hiking, industrial equipment",
    material: "Material / ingredients / structure",
    materialPlaceholder: "e.g. plastic, aluminium, stainless steel, textile, electronic module",
    destination: "Import country / export direction",
    destinationPlaceholder: "e.g. China, United States, Vietnam, Germany",
    search: "Search",
    clear: "Clear",
    resultTitle: "Candidate HS Code Directions",
    noInput: "Please enter a product name first. Usage, material and destination are also recommended.",
    noResult:
      "No clear match yet. Please add usage, material, ingredients, structure, model or product image description.",
    matched: "Matched keywords",
    needConfirm: "Need to confirm",
    note: "Note",
    warning:
      "Important: The following results are assisted matching directions only and are not final HS Codes. Final code, duty rate, regulatory conditions and declaration requirements depend on official rules, customs brokers and actual review results.",
  },
} as const;

function normalize(value: string) {
  return value.toLowerCase().replace(/\s+/g, "");
}

export default function HsCodeLookupTool({ locale }: { locale: Locale }) {
  const copy = ui[locale];

  const [productName, setProductName] = useState("");
  const [usage, setUsage] = useState("");
  const [material, setMaterial] = useState("");
  const [destination, setDestination] = useState("");
  const [searched, setSearched] = useState(false);

  const query = useMemo(
    () => normalize(`${productName} ${usage} ${material} ${destination}`),
    [productName, usage, material, destination]
  );

  const results = useMemo(() => {
    if (!query) return [];

    return hsData
      .map((item) => {
        const keywords = locale === "zh" ? item.zhKeywords : item.enKeywords;
        const matchedKeywords = keywords.filter((keyword) =>
          query.includes(normalize(keyword))
        );

        const score = matchedKeywords.length;

        return {
          ...item,
          score,
          matchedKeywords,
        };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
  }, [locale, query]);

  const showEmptyInput = searched && !query;
  const showNoResult = searched && query && results.length === 0;

  return (
    <section className="bg-[#eef7fb] px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#24775b]">
            HS CODE LOOKUP
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#071629] sm:text-4xl lg:text-5xl">
            {copy.title}
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
            {copy.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#dcebf0] bg-white p-6 shadow-[0_18px_46px_rgba(31,93,122,0.10)] sm:p-8">
            <div className="grid gap-5">
              <label className="block">
                <span className="text-sm font-semibold text-[#071629]">
                  {copy.productName}
                </span>
                <input
                  value={productName}
                  onChange={(event) => setProductName(event.target.value)}
                  placeholder={copy.productNamePlaceholder}
                  className="mt-2 w-full rounded-2xl border border-[#cfe0e8] bg-[#f7fbfc] px-4 py-3 text-sm text-[#071629] outline-none transition focus:border-[#39a773] focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#071629]">
                  {copy.usage}
                </span>
                <input
                  value={usage}
                  onChange={(event) => setUsage(event.target.value)}
                  placeholder={copy.usagePlaceholder}
                  className="mt-2 w-full rounded-2xl border border-[#cfe0e8] bg-[#f7fbfc] px-4 py-3 text-sm text-[#071629] outline-none transition focus:border-[#39a773] focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#071629]">
                  {copy.material}
                </span>
                <input
                  value={material}
                  onChange={(event) => setMaterial(event.target.value)}
                  placeholder={copy.materialPlaceholder}
                  className="mt-2 w-full rounded-2xl border border-[#cfe0e8] bg-[#f7fbfc] px-4 py-3 text-sm text-[#071629] outline-none transition focus:border-[#39a773] focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#071629]">
                  {copy.destination}
                </span>
                <input
                  value={destination}
                  onChange={(event) => setDestination(event.target.value)}
                  placeholder={copy.destinationPlaceholder}
                  className="mt-2 w-full rounded-2xl border border-[#cfe0e8] bg-[#f7fbfc] px-4 py-3 text-sm text-[#071629] outline-none transition focus:border-[#39a773] focus:bg-white"
                />
              </label>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => setSearched(true)}
                className="inline-flex items-center justify-center rounded-full bg-[#0b6f99] px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:bg-[#176347]"
              >
                {copy.search}
              </button>

              <button
                type="button"
                onClick={() => {
                  setProductName("");
                  setUsage("");
                  setMaterial("");
                  setDestination("");
                  setSearched(false);
                }}
                className="inline-flex items-center justify-center rounded-full border border-[#6bbf95] bg-white px-6 py-3.5 text-sm font-semibold tracking-[0.06em] text-[#176347] transition hover:-translate-y-0.5 hover:bg-[#ecfff5]"
              >
                {copy.clear}
              </button>
            </div>

            <p className="mt-6 rounded-3xl border border-[#f0d7a2] bg-[#fff8e8] p-4 text-sm leading-7 text-[#7a5a1e]">
              {copy.warning}
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#dcebf0] bg-white p-6 shadow-[0_18px_46px_rgba(31,93,122,0.10)] sm:p-8">
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#071629]">
              {copy.resultTitle}
            </h3>

            {showEmptyInput ? (
              <p className="mt-6 rounded-3xl bg-[#f7fbfc] p-5 text-sm leading-7 text-slate-600">
                {copy.noInput}
              </p>
            ) : null}

            {showNoResult ? (
              <p className="mt-6 rounded-3xl bg-[#f7fbfc] p-5 text-sm leading-7 text-slate-600">
                {copy.noResult}
              </p>
            ) : null}

            {!searched ? (
              <p className="mt-6 rounded-3xl bg-[#f7fbfc] p-5 text-sm leading-7 text-slate-600">
                {copy.noInput}
              </p>
            ) : null}

            {results.length > 0 ? (
              <div className="mt-6 grid gap-5">
                {results.map((item) => (
                  <article
                    key={item.code}
                    className="rounded-3xl border border-[#dcebf0] bg-[#f7fbfc] p-5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold tracking-[0.16em] text-[#39a773]">
                          HS CODE DIRECTION
                        </p>

                        <h4 className="mt-2 text-2xl font-semibold text-[#071629]">
                          {item.code}
                        </h4>

                        <p className="mt-2 text-base font-semibold text-[#071629]">
                          {locale === "zh" ? item.zhTitle : item.enTitle}
                        </p>
                      </div>

                      <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#24775b]">
                        Match {item.score}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.matchedKeywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full border border-[#cfe6ee] bg-white px-3 py-1.5 text-xs text-[#49697d]"
                        >
                          {copy.matched}: {keyword}
                        </span>
                      ))}
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-700">
                      <span className="font-semibold text-[#071629]">
                        {copy.note}：
                      </span>
                      {locale === "zh" ? item.zhNote : item.enNote}
                    </p>

                    <div className="mt-5">
                      <p className="text-sm font-semibold text-[#071629]">
                        {copy.needConfirm}：
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.confirm.map((confirmItem) => (
                          <span
                            key={confirmItem}
                            className="rounded-full bg-white px-3 py-1.5 text-xs text-slate-600"
                          >
                            {confirmItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}