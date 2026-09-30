import type { ImageMetadata } from 'astro';

// Every image inside src/content/projects/<slug>/images/ can be referenced
// from a project's index.mdx as "<slug>/<file name>", e.g. "swomni/pod-cad.png".
const files = import.meta.glob<{ default: ImageMetadata }>('/src/content/projects/*/images/*.{png,jpg,jpeg,webp,avif}', { eager: true });

export function projectImage(key: string): ImageMetadata {
  const [slug, file] = key.split('/');
  const hit = files[`/src/content/projects/${slug}/images/${file}`];
  if (!hit) throw new Error(`Image not found: "${key}". Put it in src/content/projects/${slug}/images/`);
  return hit.default;
}
