// @Architecture(descriptionShort="Decodes images before they are painted on stage", type="util", icon="image")
/**
 * Browser `img.src` swaps keep showing the previous bitmap until the new file
 * decodes. On a cold CDN that gap is visible. Decode off-DOM first; `complete`
 * means the bytes are already in memory and the caller may paint now.
 *
 * jsdom never fetches `assets/*.webp`, so waiting there hangs unit tests.
 * Production browsers are not jsdom. A stubbed `Image` (used to gate decode
 * in tests) still waits.
 */

export function decodeUrl(url: string): Promise<void> | null {
  if (!url) return null;
  const img = new Image();
  img.src = url;
  if (img.complete) return null;
  if (!shouldWaitForBitmap()) return null;
  return waitForBitmap(img);
}

export function warmUrls(urls: string[]): void {
  for (const url of urls) {
    if (!url) continue;
    const img = new Image();
    img.src = url;
  }
}

function shouldWaitForBitmap(): boolean {
  if (typeof navigator === 'undefined') return true;
  if (!/jsdom/i.test(navigator.userAgent)) return true;
  return Image.name !== 'HTMLImageElement' && Image.name !== 'Image';
}

function waitForBitmap(img: HTMLImageElement): Promise<void> {
  return new Promise((resolve) => {
    const done = () => resolve();
    img.onload = done;
    img.onerror = done;
    if (typeof img.decode === 'function') {
      void img.decode().then(done, done);
    }
  });
}
