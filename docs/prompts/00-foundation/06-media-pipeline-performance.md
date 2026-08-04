# Prompt: media pipeline для изображения, видео и будущего WebGL

```text
Read-only. Прочитай @AGENTS.md, Astro version, assets/public usage, build output и будущую home requirement.

Спроектируй media pipeline без установки библиотек:
- which images go to src/assets vs public;
- Astro Image/Picture use compatible with current version;
- AVIF/WebP fallback, sizes/srcset;
- LQIP/poster strategy without hiding LCP behind JS;
- explicit aspect ratio/dimensions;
- self-hosted WOFF2 font policy;
- home loop video codecs/size/duration/poster/preload/autoplay/muted/playsinline;
- reduced-motion/reduced-data/mobile fallback;
- naming/versioning because Timeweb Nginx caches static assets for a year;
- Git/LFS or external object storage threshold for large masters;
- future Canvas/OGL lifecycle: lazy load, offscreen pause, tab visibility, static fallback;
- performance budgets and how to measure.

Сделай Beginner checklist: как подготовить и проверить один hero poster и одно loop video на Windows. Не предлагай foreign runtime CDN. Код/файлы не менять.
```
