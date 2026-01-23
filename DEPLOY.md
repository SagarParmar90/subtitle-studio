# 🚀 Deployment Guide - Hostinger

## Prerequisites
- Hostinger VPS or Web Hosting plan
- SSH access enabled
- Node.js 18+ installed on server

## Step 1: Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist/` folder.

## Step 2: Upload to Hostinger

### Option A: Via File Manager
1. Login to Hostinger control panel
2. Go to **File Manager**
3. Navigate to `public_html/` (or your domain folder)
4. Upload all files from `dist/` folder
5. Done!

### Option B: Via SSH/FTP
```bash
# Using SCP (from your local machine)
scp -r dist/* username@your-server-ip:/home/username/public_html/
```

## Step 3: Configure Environment Variables
1. Create `.env` file in your server's root directory
2. Add your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_production_api_key_here
   ```

## Step 4: Configure Hostinger
1. Point your domain to the `public_html` folder
2. Enable **HTTPS** via Hostinger SSL (free Let's Encrypt)
3. Set up **Gzip compression** for faster loading

## Step 5: Test
1. Visit your domain (e.g., `https://yourdomain.com`)
2. Upload a test audio/SRT file
3. Verify transcription and export work

## Important Notes
- ⚠️ **Never commit `.env`** - it's already in `.gitignore`
- 🔒 Keep your Gemini API key secret
- 📊 Monitor API usage at [Google AI Studio](https://aistudio.google.com/)
- 🌐 For custom domains, update DNS in Hostinger panel

## Troubleshooting
- **Build errors**: Run `npm install` and try again
- **API not working**: Check if `.env` is in the correct location
- **404 errors**: Ensure files are in `public_html/` or correct domain folder
