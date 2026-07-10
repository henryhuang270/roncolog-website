# RONCO 动态官网｜项目总控与交接记录

**更新时间：2026-07-06**  
**用途：** 作为 RONCO 动态官网的持续建设记录。后续修改页面、图片、表单或部署时，以本文件为准，不重复查找已确认的项目结构与路径。

---

## 1. 网站建设目标

建设 RONCO 的中英文动态企业官网，服务两条核心业务：

1. **全球物流**：展示国际空运、海运、铁路、陆运、冷链、货物包装与工厂搬迁等供应链服务能力。
2. **国际贸易**：展示海外优质品牌进入中国、中国优品出海、品牌合作、进口合规与供应链支持能力。

网站定位应为：**明亮、专业、现代、国际化、有真实业务承接能力**。  
不能做成传统货代模板站，也不能做成只有展示、没有表单和业务流程的静态宣传页。

---

## 2. 本地项目与技术架构

### 项目根目录

```text
D:\荣程国际\荣程官网建设\04_开发测试文件\ronco-dynamic-website
```

### 技术栈

- Next.js（App Router）
- TypeScript
- Tailwind CSS
- Supabase：存储询盘与合作资料
- Resend：向 `info@roncolog.com` 发送询盘/资料通知邮件
- Vercel：后续线上部署
- GitHub：代码版本管理

### 网站语言规则

- 中文路由：`/zh`
- 英文路由：`/en`
- 网站根路径 `/` 默认进入英文版本
- 中英文必须使用独立路由，不能只是局部翻译
- RONCO 品牌名不翻译

---

## 3. 已确认的项目目录和关键文件

### 页面路由

```text
src\app\[locale]\page.tsx
```
- 中英文首页
- 包含首页锚点：`#home`、`#logistics`、`#trade`、`#partnership`、`#insights`
- 此文件不是本轮 Banner 改造对象；除非明确要求，不要修改。

```text
src\app\[locale]\global-logistics\page.tsx
```
- 全球物流页面
- 下一张主视觉 Banner 的接入目标页面。

```text
src\app\[locale]\international-trade\page.tsx
```
- 国际贸易总览页面
- 已接入国际贸易 Banner。

```text
src\app\[locale]\international-trade\overseas-brand-partnership\page.tsx
```
- 海外品牌合作页面
- 已接入海外品牌合作 Banner。

```text
src\app\[locale]\layout.tsx
src\app\layout.tsx
src\app\globals.css
```
- 全站布局、语言页面布局、公共样式。
- 未经检查不要随意改动。

### 公共组件

```text
src\components\PageHero.tsx
```
- 页面统一首屏 Banner 组件。
- 当前已用于国际贸易页和海外品牌合作页。

```text
src\components\SiteHeader.tsx
src\components\SiteFooter.tsx
```
- 全站导航与页脚组件。

```text
src\components\FreightInquiryForm.tsx
```
- 全球物流运费询盘表单。

```text
src\components\BrandPartnershipForm.tsx
```
- 海外品牌合作资料提交表单。

### 服务器接口

```text
src\app\api\
```
- 已建立 Next.js Route Handler。
- 物流询盘和品牌合作资料会进行前端校验、隐藏字段防垃圾处理、Supabase 入库，并通过 Resend 通知到 `info@roncolog.com`。
- 当前会话尚未重新核对 API 子文件夹名称，后续不要凭空移动或重命名其中任何文件。

---

## 4. 图片资源目录和已完成的 Banner

所有公开图片必须放在：

```text
public\images\banners\
```

浏览器前端引用时使用：

```text
/images/banners/文件名.png
```

### 已完成图片

```text
public\images\banners\international-trade-hero.png
```
用途：国际贸易总览页面主视觉  
画面：货船、飞机、仓库、集装箱、国际网络、营养/护肤/生活方式产品包装。

```text
public\images\banners\brand-partnership-hero.png
```
用途：海外品牌合作页面主视觉  
画面：国际商务人士合作握手、产品陈列、全球网络与跨境合作场景。

### 当前已接入的页面调用

国际贸易总览页面：

```tsx
<PageHero
  eyebrow={copy.eyebrow}
  title={copy.title}
  subtitle={copy.subtitle}
  image="/images/banners/international-trade-hero.png"
  imagePosition="72% center"
  tone="light"
/>
```

海外品牌合作页面：

```tsx
<PageHero
  eyebrow={copy.eyebrow}
  title={copy.title}
  subtitle={copy.subtitle}
  image="/images/banners/brand-partnership-hero.png"
  imagePosition="74% center"
  tone="light"
/>
```

---

## 5. 已完成的功能

- 中英文独立路由框架已建立。
- 全站已有统一导航、页脚与基础视觉风格。
- 全球物流运费询盘表单已完成：
  - 前端必填校验
  - 隐藏字段防垃圾
  - Next.js 接口提交
  - Supabase 数据入库
  - Resend 邮件通知至 `info@roncolog.com`
- 海外品牌合作资料提交表单已完成上述同类流程。
- `PageHero.tsx` 已建立，用于统一页面主视觉。
- 国际贸易总览页已替换旧深蓝首屏，接入明亮国际贸易 Banner。
- 海外品牌合作页已替换旧深蓝首屏，接入明亮合作 Banner。
- 两张 Banner 的桌面端显示效果已检查，文字区域、人物/产品主体和整体风格均合格。

---

## 6. 当前待完成事项

### 必须先完成的小修改

海外品牌合作页顶部金色小标题不应继续显示“RONCO 国际贸易”。

文件：

```text
src\app\[locale]\international-trade\overseas-brand-partnership\page.tsx
```

将英文：

```tsx
eyebrow: "RONCO INTERNATIONAL TRADE",
```

改为：

```tsx
eyebrow: "RONCO BRAND PARTNERSHIP",
```

将中文：

```tsx
eyebrow: "RONCO 国际贸易",
```

改为：

```tsx
eyebrow: "RONCO 品牌合作",
```

保存后刷新该页面即可。

### 下一优先级

1. 为全球物流页制作专属 Banner。
   - 不能复用国际贸易 Banner。
   - 画面应更突出海运、空运、铁路、陆运、集装箱、仓储与运输网络。
   - 不应混入大量消费品包装，以免业务定位混淆。

2. 将物流 Banner 接入：

```text
src\app\[locale]\global-logistics\page.tsx
```

3. 分别检查中文、英文、电脑端和手机端：
   - `/zh/global-logistics`
   - `/en/global-logistics`
   - `/zh/international-trade`
   - `/en/international-trade`
   - `/zh/international-trade/overseas-brand-partnership`
   - `/en/international-trade/overseas-brand-partnership`

4. 再依次完善：
   - 新闻动态文章封面图
   - 首页重点板块视觉
   - 全站移动端布局
   - SEO 标题、描述、Open Graph 图片
   - 上线前性能和表单全流程测试

---

## 7. 当前工作方式

1. 用户是代码新手。每次操作必须按“小步骤、一次只改一个文件”的方式推进。
2. 后续要求用户找文件时，必须先给出**完整电脑路径**和 VS Code 左侧逐层目录路径；不要优先让用户使用全项目搜索。
3. 已确认的文件路径、页面关系、图片路径和功能状态，不要求用户反复截图或重新寻找。
4. 只有在某个文件被外部修改、用户未展示其当前代码、或下一次操作存在覆盖风险时，才请求用户提供该文件内容或截图。
5. 每次代码改动后，先保存，再刷新浏览器，最后用截图核对页面实际显示。
6. 未经确认，不随意改动：
   - `src\app\api\` 下的接口
   - Supabase/Resend 配置
   - 中英文路由结构
   - 已正常工作的表单逻辑

---

## 8. 本机开发运行情况

项目曾在独立的 `next-server (v16.2.1)` 窗口运行并支持自动刷新。

VS Code 内置 PowerShell 曾提示：

```text
npm : 无法将“npm”识别为 cmdlet...
```

这说明 VS Code 内置终端没有识别 Node.js/npm 的环境变量；但独立运行的 Next.js 服务仍能工作。  
当前不应为了这个问题中断页面建设。等核心页面视觉完成后，再单独修复 VS Code 的 Node/npm 环境。

---

## 9. 最新状态结论

国际贸易页和海外品牌合作页的 Banner 已基本定稿。  
下一次工作应先完成“RONCO 品牌合作”小标题修正，然后进入“全球物流主视觉 + 页面接入”。
