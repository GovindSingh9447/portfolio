# Govind Singh — Portfolio

Modern personal site for selected work, about, and contact.

## Local preview

```bash
cd ~/Govind/portfolio
python3 -m http.server 5173
# open http://127.0.0.1:5173
```

## Customize

Edit `index.html`:

- Email / LinkedIn links in **Contact**
- Add more projects under **Selected work**
- Replace `assets/portrait.png` if you want a different photo

## Create GitHub repo & push

```bash
cd ~/Govind/portfolio
git remote add origin git@github.com:GovindSingh9447/portfolio.git
git push -u origin main
```

Then enable **Settings → Pages** → Deploy from branch `main` / `/` (root),
or use GitHub Actions later.
