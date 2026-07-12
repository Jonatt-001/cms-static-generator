# NexusCMS - Static Site Generator

A modern, headless CMS powered by Eleventy with a web-based admin interface for managing content.

## Features

✨ **Core Features**
- Fast static site generation with Eleventy
- Web-based admin dashboard for content management
- GitHub integration for version control
- Supabase storage for images and media
- Automatic deployment hooks
- RSS feed generation
- SEO optimization
- Reading time calculation

🎨 **Design**
- Dark theme with yellow/red accent colors
- Responsive mobile-first design
- Smooth animations and transitions
- Material Icons support

## Quick Start

### 1. Installation

```bash
npm install
```

### 2. Configuration

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Fill in your values:
```
GITHUB_TOKEN=your_token_here
GITHUB_REPO=username/repo
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

### 3. Local Development

```bash
npm run build
```

Or watch for changes:
```bash
npx @11ty/eleventy --serve
```

Visit `http://localhost:8080` for the site and `/admin/` for the CMS dashboard.

## Project Structure

```
.
├── _data/                    # Site configuration
│   └── site.json            # Global site settings
├── _includes/               # Layout templates
│   └── base.html            # Base layout
├── admin/                   # Admin dashboard
│   └── index.html           # CMS interface
├── content/                 # Content files
│   └── articles/            # Markdown articles
├── public/                  # Static assets
├── .eleventy.js             # Eleventy configuration
├── index.html               # Homepage
├── articles.html            # Articles listing
└── article.html             # Article template
```

## Creating Articles

### Via Admin Dashboard

1. Go to `/admin/`
2. Navigate to "Content Editor"
3. Fill in title, description, content
4. Upload featured image
5. Click "Publish"

### Via File System

Create a new file in `content/articles/my-article.md`:

```markdown
---
title: "My Article Title"
description: "Article description"
date: 2026-07-12
image: "https://example.com/image.jpg"
tags: ["tag1", "tag2"]
layout: article.html
---

# Article Content

Your markdown content here...
```

## Configuration

### Site Settings (`_data/site.json`)

```json
{
  "title": "Your Site Title",
  "description": "Your site description",
  "author": "Author Name",
  "url": "https://yourdomain.com",
  "language": "en"
}
```

### GitHub Setup

1. Create a Personal Access Token at https://github.com/settings/tokens
2. Select scopes: `repo`, `workflow`
3. Add to admin dashboard Settings

### Supabase Setup

1. Create a Supabase project at https://supabase.com
2. Create a storage bucket named `cms-images`
3. Add your URL and anon key to admin Settings

## Deployment

### Netlify

1. Connect your GitHub repository
2. Set build command: `npx @11ty/eleventy`
3. Set publish directory: `_site`
4. Get deploy hook from Site Settings > Build & Deploy > Deploy notifications

### Vercel

1. Import your GitHub repository
2. Vercel auto-detects Eleventy
3. Deploy!

### GitHub Pages

1. Configure GitHub Actions to run Eleventy
2. Push generated `_site` to `gh-pages` branch

## Troubleshooting

### Articles not loading?
- Check GitHub token is valid
- Verify repository name is correct
- Ensure `content/articles/` directory exists

### Images not uploading?
- Verify Supabase URL and key
- Check `cms-images` bucket exists
- Ensure bucket has public read permissions

### Site not deploying?
- Verify deploy hook URL is correct
- Check GitHub Actions logs
- Ensure build command runs without errors

## License

MIT

## Support

For issues and questions:
1. Check [GitHub Issues](https://github.com/Jonatt-001/cms-static-generator/issues)
2. Review documentation
3. Create a new issue with details

---

**Built with ❤️ using Eleventy**