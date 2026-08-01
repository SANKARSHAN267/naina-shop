How to host the privacy policy (and extension repo) on GitHub Pages

1) Create a GitHub repository
   - Name it e.g. `naina-shop-extension` or any name you prefer.

2) Push the extension folder to the repository
   - From your local machine:
     git init
     git add .
     git commit -m "Initial commit: Naina shop extension"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
     git push -u origin main

3) Enable GitHub Pages
   - On GitHub, go to the repository Settings → Pages
   - Under 'Source' choose branch `main` and folder `/ (root)`, then Save
   - Wait a minute — GitHub will publish the site at: https://YOUR_USERNAME.github.io/REPO_NAME/

4) Privacy policy URL
   - Once published, the privacy policy will be available at:
     https://YOUR_USERNAME.github.io/REPO_NAME/privacy-policy.html
   - Use that URL in your Chrome Web Store listing in the privacy policy field.

5) Notes
   - If you want a custom domain, configure the DNS and add it in Pages settings.
   - If you need, I can generate a repository-ready .gitignore and a README updated for GitHub.

If you want, provide your GitHub username and I can create the repo files (locally ready). I cannot push to your account without your credentials; you'll need to push the prepared files to GitHub and enable Pages as described above.