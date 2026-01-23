# 🚀 GitHub + Hostinger Auto-Deployment Setup

## Step 1: Create GitHub Repository

Run these commands in your terminal:

```bash
# Navigate to project (if not already there)
cd "q:/SUBTITLE APP"

# Create GitHub repo (you'll need to do this manually on github.com)
# OR use browser to create at: https://github.com/new
# Repository name: subtitle-studio
# Keep it Public or Private
```

## Step 2: Push Code to GitHub

```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/subtitle-studio.git

# Rename branch to main
git branch -M main

# Push code
git push -u origin main
```

## Step 3: Configure GitHub Secrets for Auto-Deployment

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these 3 secrets:

   **Secret 1: FTP_SERVER**
   - Name: `FTP_SERVER`
   - Value: Your Hostinger FTP hostname (e.g., `ftp.yourdomain.com` or IP)

   **Secret 2: FTP_USERNAME**
   - Name: `FTP_USERNAME`
   - Value: Your Hostinger FTP username

   **Secret 3: FTP_PASSWORD**
   - Name: `FTP_PASSWORD`
   - Value: Your Hostinger FTP password

## Step 4: Get Hostinger FTP Credentials

1. Login to Hostinger control panel
2. Go to **Files** → **FTP Accounts**
3. Note down:
   - Server/Host
   - Username
   - Password (create new if needed)

## Step 5: Test Auto-Deployment

Make a small change to your code:
```bash
# Edit any file
echo "/* Updated */" >> src/index.css

# Commit and push
git add .
git commit -m "Test auto-deployment"
git push
```

GitHub Actions will automatically:
1. Build your project (`npm run build`)
2. Deploy `dist/` folder to Hostinger
3. Your site updates live!

## View Deployment Status

- Go to your GitHub repo → **Actions** tab
- Watch the deployment progress live
- Green checkmark = Success ✅
- Red X = Failed (check logs)

## Important Notes

⚠️ **First deployment**: May take 3-5 minutes  
🔒 **Secrets**: Never share FTP credentials publicly  
📁 **Server path**: Adjust `server-dir` in `.github/workflows/deploy.yml` if your Hostinger path differs from `/public_html/`  
🌍 **Environment**: Add `.env` manually to Hostinger server (API keys stay secret)

## Troubleshooting

**Build fails?**
- Check the Actions log for errors
- Ensure `package.json` scripts are correct

**FTP connection fails?**
- Verify FTP credentials in GitHub Secrets
- Check if FTP is enabled in Hostinger
- Try IP address instead of hostname

**Files not updating?**
- Clear browser cache
- Check deployment logs for errors
- Verify `server-dir` path matches your Hostinger structure
