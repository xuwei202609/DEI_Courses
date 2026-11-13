# BELONG V3

这是独立于 V2 的原生 HTML、CSS、JavaScript 版本。V2 未被修改。

## 启动

在此文件夹运行 `node serve.mjs`，然后访问 http://127.0.0.1:4183/ 。使用 HTTP 服务打开，避免直接双击 HTML 导致本地存储和 API 无法正常工作。

- `index.html`：保留原首页，Courses 和 Start learning 跳转到独立页面。
- `courses.html`：导师引导的课程对话；三个模块、12 道原题、Role play 视频和回答。
- `companion.html`：V2 原有的自由聊天 AI Companion。
- `courses.js`：对话状态、进度保存、视频弹窗、答题及后台提交。
- `assets/model_moving.mp4`、`assets/model_standing.mp4`：导师视频原文件，静音循环，无播放控件。

导师对话为确定性学习流程，不调用生成式 AI。文字显示期间播放 moving，等待用户操作时播放 standing。普通课程对话无聊天输入框；原有 Role play 回答和 Participant code 在弹窗中填写，二者都必填。

课程视频首次观看不能跳到未观看位置，关闭弹窗或切换页面会暂停并保存进度。完整观看才解锁练习，四题选完才能提交；后台确认保存后才解锁下一模块。多选题保留精确匹配计分，数字编码和计分由原后台处理。

进度保存在当前浏览器、当前网站来源的 localStorage 中；换浏览器、清空数据、换域名不会自动恢复。V3 使用独立于 V2 的进度和匿名编号，V3 内的练习、Role play、AI 记录关联一致。后台沿用现有管理页和记录格式；并未新增或清空数据库。

本地 AI Companion 复用 V2 已配置的私有 AI 配置。密钥不在网页或此文件夹内。上线后仍通过现有公开 Worker 后端连接。如果更换网站域名，需同步后台允许的域名；现有 deitraining.website 已支持。V3 未自动发布到线上。

没有提供真实 Qualtrics 地址，结束时保留原提示语，不编造跳转。

## 验证

Chrome 检查包括：三章 12 题、单选/多选、空白禁用、提交后跳转、Role play 必填与草稿恢复、桌面及窄屏、视频加载/防快进/关闭续播/自然 ended 跳转、真实 AI 回复。

全流程提交测试使用隔离模拟接口，不向研究数据库写入测试答案。视频结束事件测试使用独立浏览器中的接近结束进度，并播放到真实结束；未将测试进度写入用户浏览器。课程后端和计分规则继续使用 V2 的既有接口。

## V2 / V3 独立数据记录

V3 的答题与 Role play 存入 v3_answer_records，AI 记录存入 v3_ai_activity。V2 的原始表不迁移或删除。V3 保持相同的 18 列答案导出格式及 AI 会话记录格式。

V3 答案管理：https://belong-dei-chat-api.happycharm35.chatgpt.site/v3/admin/responses

V3 AI 记录：https://belong-dei-chat-api.happycharm35.chatgpt.site/v3/admin/activity

本次改动前已提交到共用接口的历史记录不自动移走，因为历史接口未携带来源标识，不能可靠区分 V2 / V3。新提交使用明确的 /v3 接口。
