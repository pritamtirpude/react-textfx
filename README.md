<div align="center">

# ✨ react-textfx

**Animated gradient text for React — drop-in, zero config, TypeScript ready.**

[![npm version](https://img.shields.io/npm/v/react-textfx?style=flat-square&color=7c3aed)](https://www.npmjs.com/package/react-textfx)
[![license](https://img.shields.io/npm/l/react-textfx?style=flat-square&color=7c3aed)](./LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/react-textfx?style=flat-square&color=7c3aed)](https://bundlephobia.com/package/react-textfx)
[![React](https://img.shields.io/badge/React-%3E%3D18-61dafb?style=flat-square)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178c6?style=flat-square)](https://www.typescriptlang.org)

[Demo](#demo) · [Installation](#installation) · [Quick Start](#quick-start) · [API](#api) · [Variants](#gradient-variants) · [Animations](#animation-variants)

</div>

---

## Overview

`react-textfx` is a tiny, performant React component that wraps any string in a **clip-masked gradient** and optionally animates it with fluid, physics-inspired motion.

- **13 built-in gradient presets** — instagram, fire, aurora, neon, and more
- **5 animation modes** — shimmer, fadeIn, slideUp, pop, or none
- **Custom background image** support for photo or texture fills
- **Full prop passthrough** — every `HTMLSpanElement` attribute is accepted
- **Tree-shakeable** — ships ESM + CJS with TypeScript declarations
- **Powered by [Motion](https://motion.dev)** (the successor to Framer Motion)

---

## Demo

The showcase app (`src/App.tsx`) runs locally and demonstrates every variant and animation. Start it with:

```bash
npm run dev
```

---

## Installation

```bash
# npm
npm install react-textfx

# pnpm
pnpm add react-textfx

# yarn
yarn add react-textfx
```

### Peer Dependencies

`react-textfx` requires the following packages to be installed in your project:

| Package     | Version |
| ----------- | ------- |
| `react`     | `>= 18` |
| `react-dom` | `>= 18` |
| `motion`    | `>= 12` |

```bash
npm install react react-dom motion
```

> **Tailwind CSS is NOT required** — gradient classes are generated at build time and inlined. You can use `react-textfx` in any project without Tailwind installed.

---

## Quick Start

```tsx
import { TextFx } from "react-textfx";

export default function Hero() {
  return (
    <h1>
      Make your text{" "}
      <TextFx
        text="unforgettable"
        variant="sunset"
        animation="shimmer"
        className="text-6xl font-black"
      />
    </h1>
  );
}
```

---

## API

### `<TextFx />`

The single named export of this library.

```tsx
import { TextFx } from "react-textfx";
```

#### Props

| Prop              | Type                                    | Default         | Description                                                                |
| ----------------- | --------------------------------------- | --------------- | -------------------------------------------------------------------------- |
| `text`            | `string`                                | **required**    | The string to render with the gradient effect                              |
| `variant`         | `TextFxVariant`                         | `"instagram"`   | Gradient color preset (see [Gradient Variants](#gradient-variants))        |
| `animation`       | `TextFxAnimationVariant`                | `"none"`        | Entry or looping animation (see [Animation Variants](#animation-variants)) |
| `backgroundImage` | `string`                                | `undefined`     | URL of a custom image to use as the text fill — overrides `variant`        |
| `className`       | `string`                                | `undefined`     | Additional Tailwind or CSS classes, merged safely via `tailwind-merge`     |
| `duration`        | `number`                                | variant default | Override the animation duration in **seconds**                             |
| `delay`           | `number`                                | `0`             | Delay before the animation starts in **seconds**                           |
| `...rest`         | `React.HTMLAttributes<HTMLSpanElement>` | —               | Every standard span attribute (`id`, `aria-*`, `style`, etc.) is forwarded |

#### Type Exports

```ts
import type { TextFxVariant, TextFxAnimationVariant } from "react-textfx";
```

---

## Gradient Variants

Set the `variant` prop to choose a gradient preset. All gradients flow **left-to-right**.

| Variant     | Colors                       |
| ----------- | ---------------------------- |
| `instagram` | Pink → Purple → Yellow       |
| `ocean`     | Blue → Cyan                  |
| `fire`      | Red → Orange → Yellow        |
| `sunset`    | Orange → Rose → Fuchsia      |
| `aurora`    | Emerald → Teal → Sky         |
| `neon`      | Lime → Cyan → Blue           |
| `candy`     | Pink → Rose → Orange         |
| `forest`    | Green → Emerald → Lime       |
| `royal`     | Indigo → Violet → Purple     |
| `gold`      | Amber → Yellow → Orange      |
| `berry`     | Fuchsia → Pink → Rose        |
| `ice`       | Slate → Sky → Cyan           |
| `twilight`  | Dark Slate → Indigo → Purple |

```tsx
<TextFx text="On fire 🔥"      variant="fire"     />
<TextFx text="Deep ocean"       variant="ocean"    />
<TextFx text="Aurora borealis"  variant="aurora"   />
<TextFx text="Northern lights"  variant="twilight" />
```

### Custom Background Image

Pass any image URL via `backgroundImage` to fill the text with a photo, texture, or pattern. The `variant` prop is ignored when this is set.

```tsx
<TextFx
  text="Nature"
  backgroundImage="https://example.com/forest.jpg"
  className="text-7xl font-black"
/>
```

---

## Animation Variants

Set the `animation` prop to bring the text to life. All animations are powered by [Motion](https://motion.dev).

| Animation | Behaviour                                          | Default Duration                    |
| --------- | -------------------------------------------------- | ----------------------------------- |
| `none`    | Static — no animation                              | —                                   |
| `fadeIn`  | Fades in from fully transparent                    | `0.45s` · ease `[0, 0, 0.2, 1]`     |
| `slideUp` | Slides up 24 px while fading in                    | `0.55s` · ease `[0.22, 1, 0.36, 1]` |
| `pop`     | Scales up from 90 % while fading in                | `0.40s` · ease `[0, 0, 0.2, 1]`     |
| `shimmer` | Continuously pans the gradient left → right → left | `4s` · infinite loop                |

```tsx
// One-shot entry animations
<TextFx text="Appear"   animation="fadeIn"  />
<TextFx text="Rise up"  animation="slideUp" />
<TextFx text="Burst"    animation="pop"     />

// Infinite shimmer — best with multi-stop gradients
<TextFx text="Shimmer ✨" animation="shimmer" variant="neon" />

// Custom timing
<TextFx
  text="Slow entrance"
  animation="fadeIn"
  duration={1.2}
  delay={0.5}
/>
```

---

## Advanced Usage

### Composing inside headings

`TextFx` renders a `<span>`, so it sits naturally inside any block-level container.

```tsx
<h2 className="text-4xl font-bold text-white">
  Welcome to <TextFx text="the future" variant="aurora" animation="pop" />
</h2>
```

### Layering Tailwind classes

`className` is merged with internal classes using `tailwind-merge`, so conflicting utilities resolve automatically — no `!important` hacks needed.

```tsx
<TextFx
  text="Heading"
  variant="royal"
  animation="slideUp"
  className="text-8xl font-extrabold tracking-tighter leading-none"
/>
```

### Accessibility

The component renders a plain `<span>` containing the raw text string. Screen readers announce the content normally. No additional `aria` attributes are necessary.

---

## Project Structure

```
react-textfx/
├── src/
│   ├── index.ts                      # Public entry — exports TextFx
│   ├── components/
│   │   └── TextFx.tsx                # Core component
│   └── utils/
│       ├── index.ts                  # cn() helper (clsx + tailwind-merge)
│       ├── variants.ts               # Gradient preset map & TextFxVariant type
│       └── animationVariants.ts      # Animation config map & TextFxAnimationVariant type
├── index.html                        # Showcase app shell
├── vite.config.ts                    # Vite — dev server & preview
├── package.json                      # tsup builds ESM + CJS + .d.ts
├── tsconfig.json
├── tsconfig.app.json
└── tsconfig.node.json
```

---

## Development

```bash
# 1. Clone the repo
git clone https://github.com/pritamtirpude/react-textfx.git
cd react-textfx

# 2. Install dependencies
npm install

# 3. Start the live showcase
npm run dev

# 4. Lint
npm run lint

# 5. Build the library (ESM + CJS + types → dist/)
npm run build
```

### Build Output

`tsup` compiles `src/index.ts` into the `dist/` directory:

| File              | Format     | Purpose                                |
| ----------------- | ---------- | -------------------------------------- |
| `dist/index.js`   | ESM        | Bundlers — Vite, webpack, Rollup, etc. |
| `dist/index.cjs`  | CJS        | Node.js `require()`                    |
| `dist/index.d.ts` | TypeScript | Type declarations for IDE support      |

---

## Tech Stack

| Tool                                                        | Role                                          |
| ----------------------------------------------------------- | --------------------------------------------- |
| [React 19](https://react.dev)                               | UI library                                    |
| [Motion](https://motion.dev)                                | Animation engine                              |
| [Tailwind CSS v4](https://tailwindcss.com)                  | Utility-class gradients (dev / showcase only) |
| [clsx](https://github.com/lukeed/clsx)                      | Conditional class construction                |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Conflict-free class merging                   |
| [Vite](https://vite.dev)                                    | Dev server and showcase bundler               |
| [tsup](https://tsup.egoist.dev)                             | Library bundler (ESM + CJS + types)           |
| [TypeScript](https://www.typescriptlang.org)                | Full type safety                              |

---

## License

MIT © [Pritam Tirpude](https://github.com/pritamtirpude)
