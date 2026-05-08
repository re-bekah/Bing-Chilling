# Rebekah in DUEN

A tiny Next.js starter website for Rebekah.

## Repository Contents

- `app/page.tsx` - main website page.
- `app/globals.css` - colors and layout styles.
- `public/duen-pattern.svg` - background image asset.
- `temp.py` - placeholder Python file from the original repository.

## What You Need First

You need Node.js installed on your computer. Node.js lets your computer run this website while you work on it.

1. Go to <https://nodejs.org/>
2. Download the version marked **LTS**
3. Install it using the default options
4. Close and reopen your terminal

## How To Start The Website

Open a terminal in this project folder, then run these commands:

```bash
npm install
npm run dev
```

After the second command runs, open this address in your browser:

```text
http://localhost:3000
```

You should see Rebekah's starter website.

## How To Stop The Website

Go back to the terminal where the website is running and press:

```text
Control + C
```

On a Mac keyboard, that means holding the `control` key and pressing `c`.

## How To Edit The Page

The main page lives here:

```text
app/page.tsx
```

Change the words in that file, save it, and refresh your browser. Most changes will appear automatically.

The colors and layout live here:

```text
app/globals.css
```

The background image lives here:

```text
public/duen-pattern.svg
```

## Useful Commands

```bash
npm run dev
```

Starts the website for editing.

```bash
npm run build
```

Checks that the website can be prepared for publishing.

```bash
npm run start
```

Runs the published version after `npm run build`.

```bash
npm run lint
```

Checks the code for common mistakes.

```bash
npm run typecheck
```

Checks that the TypeScript code is valid.

## Pull Request Checks

This project has a GitHub Actions workflow in `.github/workflows/ci.yml`.

Whenever someone opens a pull request, GitHub will run:

- `npm ci`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm audit --omit=dev`

If all checks pass, the pull request is in good shape. If a check fails, click the failed check in GitHub to see the error message.

## If Something Goes Wrong

If `npm install` fails, make sure Node.js is installed and that you reopened your terminal after installing it.

If `http://localhost:3000` does not open, check the terminal. If it says another port is being used, it may give you a different address such as `http://localhost:3001`.
