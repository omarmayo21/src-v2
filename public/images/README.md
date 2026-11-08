# SRFEC Website Asset Directory & Image Swap Guide

All images on the website load from fixed file paths in `/public/images/`.
To replace any placeholder or cropped mockup with an official high-resolution photograph, simply drop your file with the **exact file name** into the specified folder. No code changes are required.

## Image Slot Directory

| Slot / Page | File Path | Recommended Size | Current Status | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Home Hero** | `hero/placeholder-hero-architectural-stone.webp` | `1600x1000` | Cropped Mockup (Real Architecture) | Brand Book Page 14 (Architectural Stone Facade) |
| **Factory Mosaic 01 & Cap 01** | `factory/placeholder-factory-cnc-cutting.webp` | `1200x800` | Cropped Mockup (Granite Cantilever Architecture) | Brand Book Page 14 (Post 3 Architecture) |
| **Factory Mosaic 02 & Cap 02** | `factory/placeholder-factory-carving-shaping.webp` | `1200x800` | Cropped Mockup (Chiseled Granite Slabs) | Brand Book Page 12 (Engraved Stone Block) |
| **Factory Mosaic 03** | `factory/placeholder-factory-polishing-line.webp` | `1200x800` | Cropped Mockup (Polished Granite Ledge) | Brand Book Page 12 (Polished Stone Base) |
| **Factory Mosaic 04** | `factory/placeholder-factory-quality-inspection.webp` | `1200x800` | Cropped Mockup (Vertical Stone Slabs) | Brand Book Page 13 (Sample Slabs Display) |
| **Project 01** | `projects/placeholder-project-01.webp` | `1200x900` | Cropped Mockup (Granite Curtain Wall) | Brand Book Page 14 |
| **Project 02** | `projects/placeholder-project-02.webp` | `1200x900` | Cropped Mockup (Vein-matched Marble Lobby) | Brand Book Page 13 |
| **Project 03** | `projects/placeholder-project-03.webp` | `1200x900` | Cropped Mockup (Architectural Stone Portal) | Brand Book Page 14 |
| **Project 04** | `projects/placeholder-project-04.webp` | `1200x900` | Cropped Mockup (Granite Cantilever Structure) | Brand Book Page 14 |
| **Project 05** | `projects/placeholder-project-05.webp` | `1200x900` | Cropped Mockup (Polished Slab Displays) | Brand Book Page 13 |
| **Project 06** | `projects/placeholder-project-06.webp` | `1200x900` | Cropped Mockup (Veined Marble Detailing) | Brand Book Page 14 |
| **Project 07** | `projects/placeholder-project-07.webp` | `1200x900` | Cropped Mockup (Raw Quarry Stone Blocks) | Brand Book Page 13 |
| **Project 08** | `projects/placeholder-project-08.webp` | `1200x900` | Cropped Mockup (Natural Travertine Surface) | Brand Book Page 12 |
| **Project 09** | `projects/placeholder-project-09.webp` | `1200x900` | Cropped Mockup (Granite Stone Cladding) | Brand Book Page 12 |
| **Stones 01 (Marble)** | `stones/placeholder-stone-marble.webp` | `900x700` | Cropped Mockup (Veined Marble Slab) | Brand Book Page 14 |
| **Stones 02 (Granite)** | `stones/placeholder-stone-granite.webp` | `900x700` | Cropped Mockup (Natural Granite Grains) | Brand Book Page 12 |
| **Stones 03 (Travertine)** | `stones/placeholder-stone-travertine.webp` | `900x700` | Cropped Mockup (Porous Travertine Stone) | Brand Book Page 12 |
| **Stones 04 (Onyx)** | `stones/placeholder-stone-onyx.webp` | `900x700` | Procedural Polished Stone (Banded Amber Crystal) | Procedural Natural Stone Texture |
| **Stones 05 (Limestone)** | `stones/placeholder-stone-limestone.webp` | `900x700` | Procedural Polished Stone (Sedimentary Cream Grain) | Procedural Natural Stone Texture |
| **About Story Visual** | `misc/placeholder-story-heritage.webp` | `1200x800` | Cropped Mockup (Quarry Stone Blocks) | Brand Book Page 13 |
| **About Vision Visual** | `misc/placeholder-vision-future.webp` | `1200x800` | Cropped Mockup (Modern Stone Architecture) | Brand Book Page 14 |
| **About CEO Portrait** | `ceo/placeholder-ceo-portrait.webp` | `800x1000` | Architectural Stone Silhouette (Placeholder) | Brand Book Page 12 Mockup Backdrop |
| **Contact Map** | `map.jpg` | `800x500` | Architectural Navy/Gold Map Visual | Coordinates: Riyadh, Saudi Arabia |
| **Client Logo 01–10** | `clients/placeholder-client-01.svg` .. `10.svg` | `320x120` | SVG Frame Placeholder | Drop client PNG/SVGs into `clients/` |
| **Brand Applications 01** | `misc/brand-applications-mockups-01.webp` | `1536x1024` | Extracted Mockup Sheet | Brand Book P.12 (Stationery, hard hat, stone) |
| **Brand Applications 02** | `misc/brand-applications-mockups-02.webp` | `1536x1024` | Extracted Mockup Sheet | Brand Book P.13 (Reception desk, truck, slabs) |
| **Brand Applications 03** | `misc/brand-applications-digital-03.webp` | `1536x1024` | Extracted Mockup Sheet | Brand Book P.14 (Digital, social, web mockup) |
| **Slide Texture** | `misc/company-profile-slide-texture.webp` | `1920x1080` | Extracted Slide Texture | Company Profile P.3–9 repeated texture |

## How to Swap an Image

1. Name your new file to match the target slot (e.g. `placeholder-hero-architectural-stone.webp` or update the path in the corresponding component/data file).
2. For WebP format: compress using `cwebp` or Sharp (`quality: 85`) keeping file size under **300 KB** (hero under **500 KB**).
3. In `src/data/projects.ts`, toggle `isPlaceholder: false` once real project photography and records are populated.
