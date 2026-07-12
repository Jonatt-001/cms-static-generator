---
title: "Getting Started with Eleventy"
description: "A beginner's guide to the Eleventy static site generator"
date: 2026-07-11
image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800"
tags: ["eleventy", "static-site", "guide"]
layout: article.html
---

# Getting Started with Eleventy

Eleventy is a simpler static site generator that can generate your content in the format you prefer.

## Why Choose Eleventy?

- **Zero Config** - Works with minimal configuration
- **Multiple Template Languages** - Use your preferred template language
- **Incremental Builds** - Only rebuilds what changed
- **Flexibility** - Output to any format

## Installation

```bash
npm install -g @11ty/eleventy
```

## Creating Your First Site

1. Create a new directory for your project
2. Initialize npm and install Eleventy
3. Create your first template file
4. Run `eleventy` to generate your site

## Template Languages

Eleventy supports:
- Liquid
- Nunjucks
- Handlebars
- Mustache
- EJS
- Haml
- Pug
- Markdown

## Building Your Site

Once you have your content and templates ready:

```bash
eleventy --serve
```

This will build your site and watch for changes, rebuilding automatically.

## Deploying

Your static site can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

Eleventy is perfect for blogs, documentation, portfolios, and more!