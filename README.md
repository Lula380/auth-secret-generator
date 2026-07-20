# Auth Secret Generator

![Auth Secret Generator](https://img.shields.io/badge/Auth-Secret%20Generator-FFD43B?style=for-the-badge&labelColor=1a1a1a)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

> Generate high-entropy, secure random secrets for Next.js, Supabase, and more. 100% local generation, never leaves your browser.

![Neo-Brutalism UI Preview](https://raw.githubusercontent.com/Lula380/auth-secret-generator/main/public/preview.png)

## Features

- 🔐 **Secure Generation** — Uses `crypto.getRandomValues()` for cryptographically secure random bytes
- ⚡ **100% Local** — All generation happens in your browser, secrets never transmitted anywhere
- 🎨 **Neo-Brutalism UI** — Bold, punchy design that stands out from typical developer tools
- 📋 **One-Click Copy** — Copy secrets or full `.env` templates instantly
- 📱 **Responsive** — Works perfectly on desktop, tablet, and mobile
- 🌙 **Dark Mode Ready** — Clean styling ready for dark theme

## Supported Templates

| Platform | Variables |
|----------|-----------|
| **NextAuth.js** | `NEXTAUTH_SECRET`, `NEXTAUTH_URL` |
| **Supabase** | `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `NEXTAUTH_SECRET` |
| **General** | `AUTH_SECRET` |

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Lula380/auth-secret-generator.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans + Geist Mono

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?filter=next.js)

1. Fork this repo
2. Click "Deploy" above
3. Connect your GitHub account
4. Done! 🎉

## Usage

1. Open the app — a secure secret is generated automatically
2. Click **Generate New Secret** to create a new one
3. Select your framework template (NextAuth.js / Supabase / General)
4. Copy the secret or full `.env` template with one click

## License

MIT © 2024
