# 免费使用 Claude Opus 完全指南

![App Preview](https://imgix.cosmicjs.com/2f679c70-58cf-11f1-876b-2597f2099e23-autopilot-photo-1554224155-6726b3ff858f-1779778230191.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

一个使用 Next.js 15 和 Cosmic CMS 构建的现代化中文资源网站，专门为想免费使用 Claude Opus 模型的用户提供实用技巧和免费替代方案。

## Features

- 🎨 现代化深色主题设计
- 💡 丰富的技巧和教程内容
- 🆓 免费 AI 替代方案目录
- 🏷️ 分类筛选系统
- 📱 完全响应式设计
- ⚡ 基于 Next.js 16 App Router
- 🔍 SEO 优化
- 🌐 中文界面

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a15428ef2c683f5f2b32d4c&clone_repository=6a154351f2c683f5f2b32d71)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: 我很想用Claude opus模型但是不想付钱怎么办？我就是要免费的opus。"

### Code Generation Prompt

> Build a Next.js application for a website called "我很想用Claude opus模型但是不想付钱怎么办？我就是要免费的opus。但". The content is managed in Cosmic CMS with the following object types: tips, free-alternatives. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Cosmic CMS** - Content management
- **React 19** - UI library

## Getting Started

### Prerequisites

- Bun (or Node.js 18+)
- A Cosmic account and bucket

### Installation

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

## Cosmic SDK Examples

```typescript
// Fetch all tips
const tips = await cosmic.objects
  .find({ type: 'tips' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch all free alternatives
const alternatives = await cosmic.objects
  .find({ type: 'free-alternatives' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses two object types from your Cosmic bucket:

- **Tips** (`tips`): Articles with title, content, category, and featured image
- **Free Alternatives** (`free-alternatives`): Free AI alternatives with name, description, what they replace, website URL, and logo

## Deployment Options

- **Vercel** (recommended for Next.js)
- **Netlify**

Set environment variables in your hosting platform dashboard.

<!-- README_END -->