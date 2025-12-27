<div align="center">
  <a href="https://jaidev-portfolio.vercel.app"><h1 align="center">Jaidev Portfolio</h1></a>

My personal website showcasing my projects and skills, built with modern web technologies.

</div>

<br/>

## 🚀 Technologies Used

- [Next.js 13+](https://nextjs.org/) with App Router
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Contentlayer](https://www.contentlayer.dev/) for content management
- [Upstash Redis](https://upstash.com/) for analytics and page views
- [MDX](https://mdxjs.com/) for rich content
- [Framer Motion](https://www.framer.com/motion/) for animations

## 🎯 Features

- Responsive design that works on all devices
- Dark mode support
- Project showcase with detailed case studies
- Page view tracking with Upstash Redis
- Smooth animations and transitions
- SEO optimized
- Fast performance with Next.js

## 🏁 Getting Started

First, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/jaidevxb/jaidev-portfolio.git
cd jaidev-portfolio
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

You can get these values by signing up for a free account at [Upstash](https://upstash.com/).

### Install Dependencies

Using pnpm (recommended):

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/), the platform created by the makers of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/)

### Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign up to Vercel (it's free!)
3. Click the "Deploy" button above or go to [Vercel Dashboard](https://vercel.com/dashboard) and import your project
4. Vercel will automatically detect your Next.js app and configure the settings
5. Add your environment variables in the Vercel dashboard
6. Deploy!

## 📁 Project Structure

```
├── app/                 # Next.js app router pages
│   ├── components/      # Reusable components
│   ├── contact/         # Contact page
│   └── projects/        # Projects listing and detail pages
├── content/             # MDX content for projects
│   └── projects/        # Individual project files
├── public/              # Static assets
│   └── images/          # Images used in projects
├── util/                # Utility functions
└── types/               # TypeScript types
```

## 🛠️ Customization

### Adding Your Own Projects

1. Create a new MDX file in `content/projects/` with the following format:

```mdx
---
title: Your Project Name
description: Brief description of your project
date: "YYYY-MM-DD"
url: ""  # Live URL if available
published: true
repository: username/repository-name
---

![Project Image](/images/projects/your-project-image.png)

Detailed description of your project...
```

2. Add your project image to `public/images/projects/`

### Modifying Personal Information

Update the personal information in:
- `app/page.tsx` - Main page content
- `app/contact/page.tsx` - Contact information

## 📈 Analytics

This portfolio uses Upstash Redis to track page views. Each project page has a view counter that increments when the page is visited. The analytics data is stored in Upstash Redis.

To disable analytics:
1. Remove the `incr.ts` API route
2. Remove the analytics component from project pages
3. Remove Upstash Redis environment variables

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.