AI Coding 执行级规格协议 (SSOT v5.5 · 元模板·细节版)

  0. 核心声明与自检协议 (General Protocol)
     0.1 权威性：本文档为项目唯一权威规格。AI 禁止参考本文档以外的任何推测。
     0.2 角色定义：AI 仅担任“实现工程师”，严禁擅自进行产品、设计或架构决策。
     0.3 完备性规则：No placeholder logic in runtime paths.
     [TBD] items must be listed in a TBD section and are not implemented unless
     explicitly in-scope.
     0.4 冲突优先级：Rule 0 > Scope (In/Out) > Hard Rules > Tech Stack > IA/Tree
     > IPOE > Design/Non-functional
     0.5 决策模式 (Mode)：Scaffold-only / Full-implementation

  - Scaffold-only MUST：仅生成目录树、路由壳、UI 框架空状态、README、TBD 清单
  - Scaffold-only MUST NOT：实现 IPOE、实现导出/解析、引入非必要依赖、写业务算法
  - Scaffold-only may apply only explicitly stated template defaults; otherwise
    keep as [TBD]/[N/A]. No implicit choices.
  - Full-implementation MUST：逐条实现 In-Scope 的 IPOE，并为每个 Feature 写对应
    状态机与错误文案
  - Full-implementation MUST NOT：实现 Non-Goals 或任何未列入 In-Scope 的
    Feature
    0.6 TBD 输出要求：每次交付必须输出
  - Frozen items
  - TBD questions (<=10)
  - Not implemented items with SSOT clause references
    0.7 In-Scope 唯一开关：Only items explicitly listed in In-Scope are
    implemented.
    Tree / IPOE / Design 中出现但未列入 In-Scope 的内容，视为 Not implemented。
    0.8 字段填写约定：所有字段状态必须显式标注为 [SET] / [TBD] / [N/A]
  - [SET]：已冻结，必须实现
  - [TBD]：未决策，进入 TBD Section；除非 In-Scope 明确要求，否则不实现
  - [N/A]：本项目不适用，AI 不得实现也不得询问
    0.9 TBD 关系澄清：
  - [TBD] ≠ [N/A]
  - [TBD] 必须列入第 16 章
  - 未列入第 16 章的 [TBD] 视为无效，不得实现
  - AI may propose new TBD items, but MUST append them into Section 16 in the
    same delivery before asking questions. Until appended, they are not
    actionable.
    0.10 [SET] 必须携带具体值：
  - [SET] must include concrete values (enum/value/number). If not, treat as
    [TBD].

  1. 项目目标与边界 (Goals & Scope)
     1.1 核心目标 (Primary Goal)：[SET]
     提供免登录的孕期计算工具站，支持 LMP/受孕日/IVF 三种入口与多语言界面，统一
     输出可视化时间轴，并支持隐私安全的结果导出。

  1.2 转化行为 (Core Conversion)：[SET]
  用户成功输入 LMP、受孕日或 IVF 相关参数，并获得完整的孕期计算结果时间轴展示。

  1.3 迭代版本与范围：

  - 当前版本：[SET] MVP v1
  - 本次必做 (In-Scope)：[SET]
      - Feature: LMP 计算器（含周期长度校正）
          - Page: /
          - Constraint: LMP 输入默认 28 天，范围 22–45
      - Feature: 受孕日计算器
          - Page: /
          - Constraint: 虚拟 LMP = 受孕日 - 14 天
      - Feature: IVF 计算器（D3/D5 + 冻/鲜胚文案）
          - Page: /ivf
          - Constraint: 虚拟 LMP = 移植日期 - 胚胎天数 - 14 天；移植类型仅用于文
            案
      - Feature: 统一时间轴展示（含状态、双日期、区间、倒计时）
          - Page: /、/ivf
          - Constraint: 产检节点基于美国通用模板；36 周后仅阶段提示
      - Feature: 节点说明弹出（简短通用说明）
          - Page: /、/ivf
          - Constraint: 一般性说明，不提供个性化医疗建议
      - Feature: 结果导出（隐私模式默认）
          - Page: /、/ivf
          - Constraint: 9:16；隐私模式隐藏输入日期，仅保留预产期与孕周进度
      - Feature: 本地状态保存（仅最后一次）
          - Page: /、/ivf
          - Constraint: localStorage；清除数据不影响语言偏好
      - Feature: 多语言 UI（i18n-ready）
          - Page: /、/ivf
          - Constraint: EN/FR/DE/ZH-CN/JA/ES
  - 明确排除 (Non-Goals)：[SET]
      - 用户登录/账户系统
      - 历史记录管理（多条记录）
      - 个性化医疗建议或诊断
      - 多地区产检节点内容（仅美国通用模板）
      - IVF 子页面（D3/D5/冻胚/鲜胚分 URL）
      - 外部 API 调用或云端同步

  2. 页面架构与组件树 (IA & Tree)
     2.1 路由定义：

  - 页面数量：[SET] 2
  - Pages：[SET] /、/ivf
  - 说明：[SET] 隐私声明与免责声明不作为独立页面存在，作为文本模块嵌入在 / 与 /
    ivf 页面中。

  2.2 禁入区域：

  - Forbidden pages：[SET]
      - /account
      - /login
      - /signup
      - /history
  - Forbidden modules：[SET]
      - 账户系统
      - 历史记录管理
      - 个性化医疗建议
      - 在线支付
  - Forbidden dependencies：[SET]
      - 需要网络请求的外部 API SDK

  2.3 组件结构 (Page Tree)
  规则：按页面组织，自上而下。所有文案/素材/交互必须写在对应模块内。
  Component granularity: page sections as components; avoid over-fragmentation
  unless reused 2+ times.

  Page /：

  - Module: Header
      - Purpose：[SET] 站点识别 + 语言切换
      - UI：[SET] 站点名/Logo + 语言切换入口
      - Copy：[SET] 站点名占位
      - Assets：[TBD] Logo（如无则纯文本）
      - Interactions：[SET] SwitchLanguage (Secondary)
  - Module: Hero / Intro
      - Purpose：[SET] 解释产品用途与三种入口
      - UI：[SET] 标题 + 简短说明
      - Copy：[SET] “Pregnancy Due Date Calculator” + 简述
      - Assets：[N/A]
      - Interactions：[N/A]
  - Module: Calculator Tabs
      - Purpose：[SET] 在 LMP / 受孕日 两种入口间切换
      - UI：[SET] Tab 或 segmented control
      - Copy：[SET] “LMP” / “Conception”
      - Assets：[N/A]
      - Interactions：[SET] SwitchCalculator (Secondary)
  - Module: Input Form (LMP)
      - Purpose：[SET] 采集 LMP 日期与周期长度
      - UI：[SET] 日期输入 + 周期长度滑块/步进器
      - Copy：[SET] LMP label + Cycle Length helper
      - Assets：[N/A]
      - Interactions：[SET] SubmitLMP (Primary)
  - Module: Input Form (Conception)
      - Purpose：[SET] 采集受孕日
      - UI：[SET] 日期输入
      - Copy：[SET] Conception date helper
      - Assets：[N/A]
      - Interactions：[SET] SubmitConception (Primary)
  - Module: Results Summary
      - Purpose：[SET] 展示预产期、孕周、进度
      - UI：[SET] 关键数值卡片
      - Copy：[SET] EDD / Gestational age / Days remaining
      - Assets：[N/A]
      - Interactions：[SET] ResetRecalculate (Secondary)
  - Module: Timeline
      - Purpose：[SET] 展示产检节点与状态
      - UI：[SET] 移动端纵向时间轴，桌面端横向时间轴
      - Copy：[SET] 节点标题 + 简短说明入口
      - Assets：[N/A]
      - Interactions：[SET] OpenNodeInfo (Secondary)
  - Module: Export
      - Purpose：[SET] 导出时间轴图片
      - UI：[SET] 导出按钮 + 隐私模式开关
      - Copy：[SET] “Export timeline”
      - Assets：[N/A]
      - Interactions：[SET] ExportTimeline (Primary), TogglePrivacy (Secondary)
  - Module: Footer Notes
      - Purpose：[SET] 免责声明与医疗提示
      - UI：[SET] 小字说明
      - Copy：[SET] “Not medical advice” 等
      - Assets：[N/A]
      - Interactions：[N/A]

  Page /ivf：

  - Module: Header
      - Purpose：[SET] 站点识别 + 语言切换
      - UI：[SET] 站点名/Logo + 语言切换入口
      - Copy：[SET] 站点名占位
      - Assets：[TBD] Logo（如无则纯文本）
      - Interactions：[SET] SwitchLanguage (Secondary)
  - Module: Hero / Intro
      - Purpose：[SET] IVF 专页说明
      - UI：[SET] 标题 + 简述
      - Copy：[SET] “IVF Due Date Calculator”
      - Assets：[N/A]
      - Interactions：[N/A]
  - Module: Input Form (IVF)
      - Purpose：[SET] 采集移植日期 + 胚胎天数 + 移植类型
      - UI：[SET] 日期输入 + D3/D5 选择 + 冻/鲜胚选择
      - Copy：[SET] IVF helper text
      - Assets：[N/A]
      - Interactions：[SET] SubmitIVF (Primary)
  - Module: Results Summary
      - Purpose：[SET] 展示预产期、孕周、进度 + 虚拟 LMP 提示
      - UI：[SET] 关键数值卡片 + 提示文案
      - Copy：[SET] “Equivalent LMP: …”
      - Assets：[N/A]
      - Interactions：[SET] ResetRecalculate (Secondary)
  - Module: Timeline
      - Purpose：[SET] 与首页一致
      - UI：[SET] 同 /
      - Copy：[SET] 同 /
      - Assets：[N/A]
      - Interactions：[SET] OpenNodeInfo (Secondary)
  - Module: Export
      - Purpose：[SET] 与首页一致
      - UI：[SET] 同 /
      - Copy：[SET] 同 /
      - Assets：[N/A]
      - Interactions：[SET] ExportTimeline (Primary), TogglePrivacy (Secondary)
  - Module: Footer Notes
      - Purpose：[SET] 免责声明
      - UI：[SET] 小字说明
      - Copy：[SET] 同 /
      - Assets：[N/A]
      - Interactions：[N/A]

  3. 交互状态机 (Interaction Specs)
     3.1 并发策略 (Concurrency)：[SET]

  - Default：所有 Primary 交互单飞（single-flight），同一时间仅允许一个 Primary
    进行
  - Secondary 交互：默认允许，但不可触发与 Primary 冲突的状态写入
  - Primary 定义：会触发保存/导出/计算或改变持久状态
  - Secondary 定义：仅本地 UI 切换或参数调整

  3.2 状态流转模板：[SET]

  - Initial → Event → Loading → Success/Error

  3.3 交互质量要求：[SET]

  - Primary
      - 防重复点击：[SET]
      - 可取消：[N/A]
      - 失败保留输入：[SET]
      - 进度显示：[SET]
      - Disable scope during Primary Loading：[SET] only triggering control
  - Secondary
      - 防重复点击：[N/A]
      - 可取消：[N/A]
      - 失败保留输入：[N/A]
      - 进度显示：[N/A]
      - Disable scope：[N/A]

  3.4 边界状态：[SET]

  - 空状态 UI：结果区/时间轴未计算前显示空状态
  - 加载中 UI：Primary 触发后显示局部 loading（按钮/区域）
  - 错误反馈：输入校验 Inline；导出失败 Toast 或 Inline

  3.5 Success / Error 补充：[SET]

  - Success side effects：
      - 计算类成功：更新结果区 + 时间轴 + 写入 localStorage
      - 导出成功：触发文件下载
  - Error recovery：
      - 保持已输入内容
      - 允许重试当前操作

  交互清单与标注：[SET]

  - SwitchCalculator (Secondary)
  - SubmitLMP (Primary)
  - SubmitConception (Primary)
  - SubmitIVF (Primary)
  - ResetRecalculate (Secondary)
  - OpenNodeInfo (Secondary)
  - ExportTimeline (Primary)
  - TogglePrivacy (Secondary)
  - SwitchLanguage (Secondary)

  4. 功能逻辑 (IPOE)
     Feature: LMP 计算器（含周期长度校正）

  - Input：[SET] LMP 日期；周期长度（默认 28，范围 22–45）
  - Processing：[SET]
      - EDD = LMP + 280 天 + (周期长度 − 28 天)
      - 计算孕周、已过/剩余天数、当前周+天
  - Output：[SET] 预产期、孕周/天数、已过/剩余天数、结果时间轴数据
  - Error Handling：[SET] 日期为空/无效、超出范围 → Inline 校验错误

  Feature: 受孕日计算器

  - Input：[SET] 受孕日
  - Processing：[SET] 虚拟 LMP = 受孕日 − 14 天；EDD = 虚拟 LMP + 280 天
  - Output：[SET] 同 LMP 输出；附“受孕日通常按排卵日计算”提示
  - Error Handling：[SET] 日期为空/无效 → Inline 校验错误

  Feature: IVF 计算器（D3/D5 + 冻/鲜胚文案）

  - Input：[SET] 移植日期、胚胎天数（D3/D5）、移植类型（冻胚/鲜胚）
  - Processing：[SET]
      - 虚拟 LMP = 移植日期 − 胚胎天数 − 14 天
      - EDD = 虚拟 LMP + 280 天
      - 移植类型仅影响文案
  - Output：[SET] 同 LMP 输出；附“等效 LMP 日期”提示
  - Error Handling：[SET] 日期为空/无效 → Inline 校验错误

  Feature: 统一时间轴展示

  - Input：[SET] LMP（真实/虚拟）、节点模板（美国通用）
  - Processing：[SET]
      - 将节点孕周/区间映射为实际日期
      - 计算节点状态（Past/Current/Future）
      - 生成双日期显示与倒计时
  - Output：[SET] 时间轴节点列表 + 状态
  - Error Handling：[SET] 日期缺失/计算失败 → 显示空状态

  Feature: 节点说明弹出

  - Input：[SET] 节点 ID
  - Processing：[SET] 返回简短通用说明（尽量简短，无固定字数）
  - Output：[SET] 节点说明文本
  - Error Handling：[N/A]

  Feature: 结果导出（隐私模式默认）

  - Input：[SET] 当前结果数据 + 时间轴
  - Processing：[SET] 生成 9:16 PNG；隐私模式隐藏输入日期，仅保留预产期与孕周进
    度
  - Output：[SET] 图片文件下载
  - Error Handling：[SET] 导出失败 → Toast/Inline 提示，可重试

  Feature: 本地状态保存（仅最后一次）

  - Input：[SET] 最近一次计算结果与入口类型
  - Processing：[SET] 写入 localStorage；恢复时自动加载
  - Output：[SET] 自动恢复结果页
  - Error Handling：[SET] localStorage 不可用 → 不阻塞计算

  Feature: 多语言 UI（i18n-ready）

  - Input：[SET] 用户选择的语言
  - Processing：[SET] 加载对应文案资源
  - Output：[SET] UI 文案切换
  - Error Handling：[SET] 语言资源缺失 → 回退英文

  5. 技术栈白名单 (Tech Stack)
     5.1 框架 (Framework)：[SET] Next.js（App Router）
     5.2 语言/类型系统：[SET] TypeScript
     5.3 样式 (Styling)：[SET] CSS Modules
     5.4 组件库/图标/表单：[SET] 无组件库（自写基础组件）
     5.5 数据请求：[N/A]
     5.6 关键依赖版本：[SET]

  - Primary Dependencies Version：Next.js 14.2.35
  - Version Pinning Policy：Pinned
    5.7 包管理器与命令：[SET]
  - Package Manager：npm
  - Install Command：npm install
    5.8 数据源策略：[SET] 静态本地数据（内置节点模板与文案）
    5.9 禁止清单 (Hard Ban)：[SET] 外部 API 调用

  6. 数据规格与解析 (Data Schema & Parsing)
     6.1 Schema 定义：[SET]

  6.1.1 PregnancyResult（核心计算结果结构）
  表示一次完整孕期计算的统一结果对象。
  所有入口（LMP / Conception / IVF）最终必须产出该结构。

  source

  - Type: enum
  - Allowed values: [LMP, CONCEPTION, IVF]
  - Semantics:
      - LMP：基于末次月经输入
      - CONCEPTION：基于受孕日（虚拟 LMP）
      - IVF：基于胚胎移植（虚拟 LMP）

  reference_lmp_date

  - Type: string
  - Format: YYYY-MM-DD
  - Semantics:
      - 所有孕周、日期、时间轴计算所使用的实际起算 LMP
      - 对 Conception / IVF 为虚拟 LMP

  estimated_due_date

  - Type: string
  - Format: YYYY-MM-DD
  - Semantics:
      - 预产期，计算规则为 reference_lmp_date + 280 days

  gestational_age

  - Type: object
  - Fields:
      - weeks: number
      - days: number
  - Semantics:
      - 当前孕周与“当前周内已过天数”组合表示
      - 不使用拼接字符串

  days_elapsed

  - Type: number
  - Semantics:
      - 自 reference_lmp_date 起已过天数

  days_remaining

  - Type: number
  - Semantics:
      - 距离 estimated_due_date 的剩余天数

  calculated_at

  - Type: string
  - Format: ISO-8601 datetime
  - Semantics:
      - 本次结果生成时间
      - 用于导出标注与本地状态恢复

  6.1.2 TimelineNode（时间轴节点实例结构）
  表示一个已绑定具体日期的时间轴节点实例，用于展示、状态判断与导出。

  id

  - Type: string
  - Semantics:
      - 节点唯一标识
      - 来源于静态模板
      - 不直接展示给用户

  title

  - Type: string
  - Semantics:
      - 节点主标题
      - 用于 Timeline 与导出展示

  week_range

  - Type: object
  - Fields:
      - start_week: number
      - end_week: number
  - Semantics:
      - 单点节点：start_week = end_week
      - 区间节点：start_week < end_week
      - 所有周数均为 1-based gestational weeks

  date_range

  - Type: object
  - Fields:
      - start_date: YYYY-MM-DD
      - end_date: YYYY-MM-DD
  - Semantics:
      - 由 reference_lmp_date + week_range 派生
      - 用于展示与导出

  status

  - Type: enum
  - Allowed values: [PAST, CURRENT, FUTURE]
  - Semantics:
      - PAST：end_date < today
      - CURRENT：today ∈ [start_date, end_date]
      - FUTURE：start_date > today
      - today 为用户本地日期

  description

  - Type: string
  - Semantics:
      - 节点简短说明（约 30–50 字）
      - 一般性信息说明
      - 非个性化医疗建议

  6.1.3 localStorage 存储结构
  本地状态仅用于无登录场景下的结果恢复。
  规则：

  - 仅存储：最后一次 PregnancyResult
  - 不存储：原始输入表单值 / Timeline 模板 / 多条历史记录
  - 清除数据：不影响 UI 语言偏好

  6.2 解析细节：[SET]

  6.2.1 时间轴节点生成规则

  - 使用静态产检节点模板（美国通用模板）
  - 模板节点不包含任何具体日期
  - 解析流程：
      - 读取 PregnancyResult.reference_lmp_date
      - 根据模板的 week_range 计算 date_range
      - 根据用户本地日期计算 status
      - 生成完整 TimelineNode 实例列表

  6.2.2 文件 / 外部数据解析

  - [N/A]
  - 当前版本不涉及：CSV / 文件上传 / 外部 API 数据解析

  7. 输出规格 (Output Specification)
     7.1 文件类型：[SET] PNG 图片
     7.2 文件命名规则：[SET] pregnancy-timeline-edd-YYYY-MM-DD.png
     7.3 尺寸/分辨率：[SET] 1080×1920（9:16）
     7.4 背景：[SET] 纯色
     7.5 DPI：[SET] 300 DPI
     7.6 样式/字体策略：[SET] 系统字体优先，不嵌入自定义字体
  8. 设计常量与视觉基调 (Design Tokens)
     8.1 视觉风格关键词：[SET]

  - Clean
  - Calm
  - Informational
  - Neutral
  - Print-friendly
    8.2 禁用元素：[SET]
  - 插画型人物（母婴插画、卡通角色）
  - 渐变背景
  - 强情绪色（高饱和粉、紫、红）
  - 动画过渡或动效强调
  - 医疗器械 / 胎儿写实图片
    8.3 核心 Tokens：[SET]
  - Color:
      - Primary text: neutral dark gray
      - Secondary text: muted gray
      - Background: white
      - Accent: single low-saturation neutral color
  - Typography:
      - System font stack
      - Max 3 font sizes (title / body / caption)
  - Spacing:
      - Consistent vertical spacing scale
      - Avoid dense layouts
  - Radius:
      - Small, subtle rounding
      - Avoid pill or full-round shapes
  - Shadow:
      - Minimal or none
      - No elevated card emphasis
        8.4 实现约束：[SET]
  - 视觉实现不得影响信息可读性（正文对比度需保持高对比，符合 WCAG AA 级别）
  - 不得因样式需求引入额外依赖
  - 所有样式需兼容导出图片与打印场景（避免依赖透明/叠加效果）
  - UI 表现不得暗示医疗诊断或建议

  9. 响应式与设备策略 (Responsive)
     9.1 优先策略：[SET]

  - Mobile-first
  - 所有核心功能在移动端必须完整可用
    9.2 断点 (Breakpoints)：[SET]
  - Small：≤ 640px
  - Medium：641–1024px
  - Large：≥ 1025px
    说明：
  - 采用三断点策略，避免过度响应式复杂度
  - 断点仅用于布局结构调整，不用于功能差异化
    9.3 关键适配逻辑：[SET]
  - 采用单列纵向布局作为基础结构
  - 桌面端仅调整容器宽度与留白，不改变信息结构
  - 所有设备均需完整展示结果区、时间轴与导出入口
  - 导出图片尺寸与当前设备尺寸无关
  - 小屏交互优先优化触控可用性（如更大的点击区域）

  10. SEO 与非功能性需求 (Non-Functional)
     10.1 SEO 规格：[SET]

  一、页面与搜索意图结构（已冻结）

  - 仅两页可索引：/ 与 /ivf
  - /：通用孕期计算页
      - 主入口：LMP
      - 辅助入口：受孕日/排卵日
      - 核心关键词：due date calculator
  - /ivf：IVF 专用计算页
      - 入口：D3/D5（冻胚/鲜胚仅文案区分）
      - 核心关键词：IVF due date calculator
  - LMP 为主搜索意图承担者
  - 受孕日不拆 SEO 子页

  二、SEO 页面原则

  - 一个页面仅服务一个主搜索意图
  - 页面覆盖该意图下相关语义关键词
  - 禁止混合不相关搜索意图
  - 入口/参数变化不产生新 URL

  三、索引与 canonical 规则

  - 仅 / 与 /ivf 允许 index
  - canonical 固定：/ → /，/ivf → /ivf
  - 不因参数/入口/语言/用户输入生成新 canonical 或索引页
  - / 与 /ivf 必须返回 200（避免软 404）

  四、关键词使用与内容策略

  - 核心关键词仅使用正确拼写
  - 核心关键词自然出现在 Title/Description/H1/正文关键位置
  - 核心关键词需在页面中多次自然出现，形成清晰的主题信号
  - 不设定硬性关键词密度百分比
  - 优先保证自然可读性与语义流畅
  - 禁止为满足任何指标而进行关键词堆砌

  五、内容深度与长度要求（已确认）

  - 正文需充分覆盖核心搜索意图
  - 在正常写作前提下：正文长度通常不低于 800 词
  - 禁止无关内容填充

  六、结构与元信息规范

  - 每页必须且仅有一个 H1，且 H1 必须包含本页面核心关键词
  - H2/H3 用于语义层级
  - Heading 不作纯样式
  - Title/Description 可随页面类型变化，不随用户输入动态变化

  七、社媒与结构化数据

  - Open Graph / Twitter Card
  - FAQ / HowTo（英文优先）
  - 仅标注真实内容
  - 禁止滥用、伪造或堆叠结构化数据

  八、多语言与 SEO 的关系

  - 架构 i18n-ready
  - SEO 主体以英文为核心
  - 本版本需补齐 EN/FR/DE/ZH-CN/JA/ES 的 FAQ / HowTo 结构化数据文本
  - hreflang 规则：仅为已完整本地化语言生成；未本地化语言不输出 hreflang

  10.2 性能预算：[SET]

  - 目标：轻量首屏加载
  - JS 体积：<= 250 KB（gzip）
  - LCP：<= 2.5s（移动端）
  - CLS：<= 0.1
  - TBT：<= 200ms

  10.3 可访问性（a11y）：[SET]

  - 表单输入具备 label 与提示文案
  - 颜色对比度符合 WCAG AA
  - 键盘可达（可 tab 到主要交互）
  - 导出按钮与时间轴节点具备可读文本（非图标独占）
  - 时间轴节点说明可被屏幕阅读器读取

  10.4 容错机制：[SET]

  - 输入为空/无效 → inline 错误提示
  - localStorage 不可用 → 功能降级但不阻塞计算
  - 导出失败 → 可重试提示
  - 语言资源缺失 → 回退英文

  11. 隐私、安全与合规 (Privacy)
     11.1 数据存储：[SET]

  - 仅本地存储（localStorage）
  - 不进行服务端存储

  11.2 第三方脚本：[SET]

  - 不引入第三方追踪或用户行为分析脚本
  - 允许引入广告投放脚本（如 Google AdSense），但仅用于广告展示

  11.3 隐私合规：[SET]

  - 若启用广告脚本，隐私说明中需提示可能由第三方设置 Cookie

  11.4 Console logs：[SET]

  - 禁止输出任何用户输入数据

  11.5 Cookies：[SET]

  - 可使用，但仅限广告脚本或必要场景
  - 不用于站内追踪或用户行为分析

  11.6 localStorage：[SET]

  - 仅存最后一次 PregnancyResult；清除数据不影响语言偏好

  11.7 sessionStorage：[N/A]

  11.8 URL query state：[SET]

  - 不使用（不写入任何用户输入数据到 URL）

  12. 目录结构与代码约定 (Structure)
     12.1 路由根路径：[SET]

  - /

  12.2 目录树规范（必须提供完整树）：[SET]

  - 在生成任何文件内容前，必须先输出完整 ASCII 目录树

  12.3 命名约定：[SET]

  - 文件/目录：kebab-case
  - 组件/类型：PascalCase
  - 变量/函数：camelCase

  12.4 Tree Integrity Rule：[SET]

  - Step 1 输出完整 ASCII tree + file manifest
  - Step 2（按 Tree Approval Mode）再输出文件内容

  12.5 Tree Approval Mode：[SET]

  - Auto-proceed
  - 前提：目录结构必须严格遵守本 SSOT 的 Scope、IA、命名与禁入规则

  12.6 File batching & atomicity：[SET]

  - 每批 ≤ 5 个文件
  - 单文件必须完整
  - 超长文件允许 Part 1 / Part 2

  13. 资产与素材清单 (Assets)
     13.1 来源规范：[SET]

  - 不允许使用外部图片素材库（Unsplash / Pexels / 等）
  - 不允许生成型图片素材（插画 / 写实图）
  - 不使用装饰性背景图
  - 仅允许代码生成的 UI 元素（文本、线条、色块）
  - 若后续引入素材，必须具备明确可商用授权

  13.2 图像与图标规范：[SET]

  - 图标来源：内置 SVG（不引入第三方图标库）
  - 图标风格：线性（outline）
  - 不使用图片素材（人物 / 医疗器械 / 写实图全部禁止）
  - 图标仅用于辅助理解，不作为主要信息载体

  13.3 文案规格：[SET]

  - 文案以功能说明为主
  - 节点说明长度：尽量简短（无固定字数）
  - 单段不超过 2 行
  - 不撰写长篇科普或情绪性内容
  - 本版本需补齐 EN/FR/DE/ZH-CN/JA/ES 的节点标题与说明（含节点弹出说明）

  13.4 Copy policy：[SET]

  - 语气：中性、专业、工具导向
  - 禁止医疗诊断、治疗建议或结论性判断
  - 禁止使用“保证”“一定”“最准确”等绝对化用语
  - 所有说明需与全站免责声明保持一致

  13.5 Asset placeholder rule：[SET]

  - Solid block height (px)：48
  - Aspect ratio：N/A
  - Border radius token：sm
  - Background token：neutral-100

  13.6 导出图素材规则：[SET]

  - 不强制显示水印或品牌标识
  - 允许显示生成日期（不包含任何用户输入日期）
  - 默认不显示来源 URL 或推广性文案
  - 后续版本可考虑在不影响专业性的前提下引入可选弱署名
  - 隐私模式下隐藏所有可识别用户输入信息

  14. 交付范围与验收标准 (Acceptance)
     14.1 交付文件：[SET]

  - 完整源代码（符合第 12 章目录规范）
  - README（包含项目说明、运行方式、构建方式）
  - 不要求提交构建产物（dist/.next）

  14.2 验收命令：[SET]

  - Acceptance Strictness：Standard
  - Required scripts: build / lint / typecheck / test
      - build：Yes — npm run build
      - lint：No
      - typecheck：Yes — npm run typecheck
      - test：No
  - allowed_warning_patterns：none

  14.3 关键测试用例（Given/When/Then）：[SET]

  - Given LMP 日期与周期长度，When 提交计算，Then 输出 EDD/孕周/已过与剩余天数并
    生成时间轴
  - Given 受孕日，When 提交计算，Then 使用虚拟 LMP 计算并提示“受孕日按排卵日处
    理”
  - Given IVF 移植日期 + D3/D5 + 移植类型，When 提交计算，Then 输出等效 LMP 提示
    且结果一致
  - Given 结果页，When 导出时间轴，Then 输出 1080×1920 PNG 且隐私模式隐藏输入日
    期
  - Given 结果已生成，When 刷新页面，Then 自动恢复结果页（localStorage）
  - Given 输入为空/无效，When 提交，Then inline 错误提示

  15. 执行硬约束 (Hard Rules)
     15.1 禁止扩展：[SET]

  - 禁止新增任何未列入 1.3 In-Scope 的功能
  - 禁止引入新的页面、入口或用户流程
  - 禁止新增配置项、开关或参数
  - 禁止因“体验优化”理由引入新行为

  15.2 禁止重构：[SET]

  - 禁止重构未涉及的模块或目录
  - 禁止为抽象目的调整既有文件结构
  - 禁止在未明确要求下拆分或合并组件
  - 若发现设计缺陷，应记录为 TBD，不得自行重构

  15.3 部署平台兼容：[SET]

  - 应兼容主流前端部署平台（如 Vercel、Netlify）
  - 不得使用平台专有 API 或配置
  - 构建与运行不依赖服务端能力
  - 代码应保持平台无关性

  16. TBD Section (Required)
     Blocking TBD：None
     Non‑blocking TBD：None
  17. 输出格式要求 (Delivery Summary Format)

  - Delivery Summary must be a markdown table with fixed columns
  - 固定列：Section / Status / Notes / References
  - Frozen items：按章节分组（Scope / IA / Tech / Design / Acceptance）
  - TBD：引用第 16 章编号，分 Blocking / Non‑blocking
  - Not Implemented：列表 + 引用条款（如 0.7 + 1.3）



• 还有一个需要你拍板的小项：Header 的 Logo 目前标的是 [TBD]。
  你希望：

  1. [N/A] 不做 Logo，仅用文本站点名
  2. [SET] 具体 Logo（你提供文件/名称）
