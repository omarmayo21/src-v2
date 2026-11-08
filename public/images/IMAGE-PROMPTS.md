# SRFEC Stones & Granite — Image Slots & Generation Prompts

This document lists every image slot required by the multi-page SRFEC website, compares it against the assets extracted from the two source PDFs (`SRFEC BRICKS BRANDBOOK.pdf` and `Srfec Company Profile.pdf`), and provides exact photographic prompts for replacing any `"placeholder-*"` files in `/public/images/`.

---

## 1. Comparison: Required Website Slots vs. Extracted PDF Assets

| Slot Group | Target Folder | In Source PDFs? | Status in Repo |
| --- | --- | --- | --- |
| **Brand Logos (12 variants)** | `/public/brand/` | **Yes** — Exact vectors on Brand Book Page 2 & Page 5 | Extracted as exact vector SVGs |
| **Brand Pattern & Organic Veins** | `/public/brand/` | **Yes** — Brand Book Page 1 (`obj 113`) & Page 11 (`obj 44`) | Extracted as exact vector SVGs (`pattern.svg`, `pattern-light.svg`, `pattern-dark.svg`, `flowing-veins.svg`) |
| **Brand Application Mockups (3 sheets)** | `/public/images/misc/` | **Yes** — Brand Book Pages 12, 13, 14 (`obj 28, 37, 58`) | Extracted at full `1536×1024` resolution as WebP (reference only) |
| **Company Profile Slide Texture** | `/public/images/misc/` | **Yes** — Company Profile Pages 3–9 (`obj 23`) | Extracted at full `1920×1080` resolution as WebP |
| **Home Hero Showcase** | `/public/images/hero/` | **No** — Company Profile Page 1 is a blank slide titled `"Cover"` | Generated WebP placeholder: `placeholder-hero-architectural-stone.webp` |
| **About — Story & Vision Visuals** | `/public/images/misc/` | **No** — Company Profile Pages 3–4 contain text cards only | Generated WebP placeholders: `placeholder-story-heritage.webp`, `placeholder-vision-future.webp` |
| **About — CEO Portrait** | `/public/images/ceo/` | **No** — Company Profile Page 2 is a placeholder slide (`"كلمة ال CEO / صورة لل ceo"`) | Generated WebP placeholder: `placeholder-ceo-portrait.webp` |
| **Factory Mosaic & Capabilities (×4)** | `/public/images/factory/` | **No** — Company Profile Page 7 contains text only | Generated WebP placeholders (`placeholder-factory-*.webp`) |
| **Projects Grid & Detail Galleries (×9)** | `/public/images/projects/` | **No** — Company Profile Page 9 contains text only | Generated WebP placeholders (`placeholder-project-01.webp` .. `09.webp`), marked `placeholder: true` in `src/data/projects.ts` |
| **Natural Stones Collection (×5)** | `/public/images/stones/` | **No** — Not in PDFs | Generated WebP placeholders (`placeholder-stone-marble.webp`, `-granite.webp`, `-travertine.webp`, `-onyx.webp`, `-limestone.webp`) |
| **Client Logos (×10)** | `/public/images/clients/` | **No** — Company Profile Page 10 is a placeholder slide (`"عملاؤنا"`) | Clearly labeled SVG placeholders (`placeholder-client-01.svg` .. `10.svg`) |

---

## 2. Exact Generation Prompts (Editorial Architectural Photography Style)

All prompts follow the SRFEC visual direction:
- **Lighting & Color Grading:** Warm natural sunlight, neutral stone/sand/cream tones (`#F5F0E6`), deep navy shadows (`#192D4C`), subtle warm champagne gold highlights (`#C9A96A`), high architectural sharpness, no harsh neon or oversaturated colors.
- **Format:** Convert output to optimized `.webp` (`< 300 KB` for standard cards, `< 500 KB` for hero) and drop into the target path below.

### 2.1 Hero (`hero/`)

- **File:** `/public/images/hero/placeholder-hero-architectural-stone.webp`
  - **Aspect Ratio:** `4:5` or `16:10` (`1600×1000`)
  - **Prompt:**
    > Ultra-high-resolution editorial architectural photograph of a contemporary monumental building facade in Riyadh, Saudi Arabia, clad in large-format honed warm cream limestone and dark grey-blue granite panels. Precision mitered stone joints, warm late-afternoon golden-hour sunlight casting soft architectural shadows across the natural stone veins, minimalist landscaping in the foreground, shot on medium format camera, tilt-shift lens, architectural digest style, natural color grading.

### 2.2 About — Story & Vision (`misc/`)

- **File:** `/public/images/misc/placeholder-story-heritage.webp`
  - **Aspect Ratio:** `3:2` (`1200×800`)
  - **Prompt:**
    > Close-up architectural photograph of stacked raw quarry blocks and precision-cut natural Riyadh limestone slabs in a sunlit Saudi stone yard, warm sand and cream tones, showing the transition from raw rough-hewn natural stone to finely honed architectural panels, shallow depth of field, warm natural daylight, timeless industrial craftsmanship.

- **File:** `/public/images/misc/placeholder-vision-future.webp`
  - **Aspect Ratio:** `3:2` (`1200×800`)
  - **Prompt:**
    > Wide-angle architectural photograph of a modern civic colonnade in Saudi Arabia crafted from pale cream travertine and honed granite, geometric arches and crisp shadow lines under a clear warm sky, showcasing contemporary engineering precision and timeless stone architecture.

### 2.3 Factory Mosaic & Capabilities (`factory/`)

- **File:** `/public/images/factory/placeholder-factory-cnc-cutting.webp`
  - **Aspect Ratio:** `3:2` (`1200×800`)
  - **Prompt:**
    > Industrial editorial photograph inside a modern stone and granite manufacturing facility in Saudi Arabia: a large multi-blade bridge saw and automated CNC diamond-blade cutting machine slicing through a thick slab of natural granite with cooling water spray, warm ambient industrial lighting contrasting with deep navy steel machinery frames, clean organized factory floor, sharp focus.

- **File:** `/public/images/factory/placeholder-factory-carving-shaping.webp`
  - **Aspect Ratio:** `3:2` (`1200×800`)
  - **Prompt:**
    > Close-up editorial photograph of a master stone carver's hands and a 5-axis CNC milling head shaping an intricate geometric Islamic and classical architectural relief into a block of warm cream limestone, fine stone dust catching warm side-lighting, high texture detail, authentic craftsmanship.

- **File:** `/public/images/factory/placeholder-factory-polishing-line.webp`
  - **Aspect Ratio:** `3:2` (`1200×800`)
  - **Prompt:**
    > Wide-angle photograph of a modern automated stone slab polishing and calibration line inside a bright industrial stone factory, mirror-polished marble and granite slabs moving along rollers, warm architectural reflections on the wet stone surface, high technical precision.

- **File:** `/public/images/factory/placeholder-factory-quality-inspection.webp`
  - **Aspect Ratio:** `3:2` (`1200×800`)
  - **Prompt:**
    > Editorial photograph of a stone quality control engineer in a navy safety hard hat inspecting vertically racked bookmatched marble and granite slabs inside a sunlit stone warehouse, checking dimensional tolerance and vein alignment, warm neutral color palette.

### 2.4 Projects (`projects/`)

> **Note:** Until real SRFEC project photographs are supplied, keep `placeholder: true` in `src/data/projects.ts`.

- **File:** `/public/images/projects/placeholder-project-01.webp`
  - **Prompt:**
    > Exterior architectural photograph of a modern high-rise commercial tower in Riyadh featuring a ventilated curtain wall clad in honed dark granite and warm cream stone spandrels, crisp geometric lines, golden hour light.

- **File:** `/public/images/projects/placeholder-project-02.webp`
  - **Prompt:**
    > Interior architectural photograph of a luxury five-star hotel lobby in Jeddah with bookmatched warm cream and gold-veined Calacatta marble flooring, monumental fluted stone columns, and soft warm architectural lighting.

- **File:** `/public/images/projects/placeholder-project-03.webp`
  - **Prompt:**
    > Architectural photograph of a prestigious governmental landmark building in Saudi Arabia clad in carved Riyadh limestone with tall Najdi-inspired geometric stone colonnades and recessed arches in warm daylight.

- **File:** `/public/images/projects/placeholder-project-04.webp`
  - **Prompt:**
    > Exterior photograph of a luxury private residential palace and villa compound in Al Khobar featuring bespoke carved cream limestone facades, cornices, balustrades, and flamed granite courtyard paving.

- **File:** `/public/images/projects/placeholder-project-05.webp`
  - **Prompt:**
    > Architectural photograph of a contemporary corporate plaza walkway in Riyadh paved with interlocking thermal-flamed grey and beige Saudi granite slabs, stone benches, and water features.

- **File:** `/public/images/projects/placeholder-project-06.webp`
  - **Prompt:**
    > Architectural detail photograph of a contemporary mosque facade and minaret clad in precision-carved warm cream natural stone with subtle geometric relief patterns illuminated by warm sunlight.

- **File:** `/public/images/projects/placeholder-project-07.webp`
  - **Prompt:**
    > Architectural photograph of a cultural center in Riyadh's Diplomatic Quarter featuring textured split-face and honed limestone facade panels that blend organically with the desert landscape.

- **File:** `/public/images/projects/placeholder-project-08.webp`
  - **Prompt:**
    > Interior architectural photograph of a luxury Red Sea resort reception featuring vein-cut warm travertine walls and a dramatic backlit honey onyx feature desk.

- **File:** `/public/images/projects/placeholder-project-09.webp`
  - **Prompt:**
    > Interior architectural photograph of a corporate headquarters atrium in Dammam featuring a cantilevered monumental staircase clad in honed dark granite and warm limestone wall panels.

### 2.5 Natural Stones Collection (`stones/`)

- **File:** `/public/images/stones/placeholder-stone-marble.webp`
  - **Prompt:**
    > Macro studio photograph of a polished natural white and warm cream marble slab with flowing soft champagne-gold and dove-grey veins, angled raking light highlighting the crystalline stone texture, seamless full-frame slab view.

- **File:** `/public/images/stones/placeholder-stone-granite.webp`
  - **Prompt:**
    > Macro studio photograph of a honed and partially flamed natural Saudi granite slab showing dense crystalline mineral grains in deep slate navy, charcoal, warm taupe, and quartz flecks, architectural material sample lighting.

- **File:** `/public/images/stones/placeholder-stone-travertine.webp`
  - **Prompt:**
    > Macro studio photograph of a vein-cut natural warm beige and ivory travertine stone slab showing horizontal sedimentary layers and natural porous texture, soft warm side lighting.

- **File:** `/public/images/stones/placeholder-stone-onyx.webp`
  - **Prompt:**
    > Macro studio photograph of a translucent honey and champagne-gold natural onyx stone slab softly backlit to reveal warmamber and ivory banded crystalline layers, luxury architectural stone.

- **File:** `/public/images/stones/placeholder-stone-limestone.webp`
  - **Prompt:**
    > Macro studio photograph of a honed natural Riyadh cream limestone slab with fine organic sedimentary grain, warm desert sand and alabaster tones, crisp architectural lighting.

