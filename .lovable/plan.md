
## Fix: Hero Section Button & Trust Bar Overlap on Mobile

### Problem

On phone-sized screens (≤ 390px wide), two things happen simultaneously:
- The CTA buttons row wraps to stacked lines (each button is ~full width)
- The 5 trust bar items wrap across multiple rows, making the trust bar taller

The hero content's bottom padding (`120px`) is a fixed value that does not account for the variable height of the wrapping buttons or the taller trust bar. Since the trust bar is `position: absolute` pinned to the bottom of the hero, the content can overlap it.

### Root Cause

- Hero content (`hero-content`) has `padding-bottom: 120px` on mobile, which is a static value
- The trust bar is `position: absolute; bottom: 0` — its height grows as items wrap on small screens
- The CTA button container uses `flexWrap: wrap`, so on narrow screens both buttons stack vertically, pushing content down further

### Fix — Two targeted changes in `src/components/HeroSection.tsx`

**1. Switch hero layout to flex column with space-between on mobile**

Instead of relying on a fixed bottom padding to clear the trust bar, make the section itself a flex column that pushes the trust bar down naturally — but since the trust bar is absolutely positioned, the simpler fix is:

**2. Add accurate bottom padding on mobile that accounts for the trust bar height + button stacking**

- On screens ≤ 560px: increase `hero-content` bottom padding to `220px` so there is always enough clearance for the wrapped trust bar (which can be ~140–160px tall when all 5 items wrap to individual rows) plus comfortable breathing room
- On screens ≤ 900px (tablet-ish): keep `180px` bottom padding (trust bar wraps to ~2 rows)
- Stack the CTA buttons vertically on small screens so the layout is predictable: on ≤ 560px, set the buttons container to `flex-direction: column` and make each button `width: 100%`

### Files to Edit

**`src/components/HeroSection.tsx`** — update the `<style>` block at the bottom:

```css
/* Current */
@media (max-width: 900px) {
  .hero-content {
    padding: 120px 24px 120px !important;
  }
  .trust-bar {
    padding: 16px 24px !important;
    gap: 20px !important;
  }
}
@media (max-width: 560px) {
  .hero-content h1 {
    font-size: 54px !important;
  }
}

/* Fixed */
@media (max-width: 900px) {
  .hero-content {
    padding: 120px 24px 180px !important;   /* more bottom clearance */
  }
  .trust-bar {
    padding: 16px 24px !important;
    gap: 20px !important;
  }
}
@media (max-width: 560px) {
  .hero-content {
    padding: 120px 24px 240px !important;   /* extra room for tall wrapped trust bar */
  }
  .hero-content h1 {
    font-size: 54px !important;
  }
  .hero-cta-row {
    flex-direction: column !important;
  }
  .hero-cta-row a {
    width: 100% !important;
    justify-content: center !important;
  }
}
```

Also add `className="hero-cta-row"` to the CTA buttons `<div>` so the CSS selector can target it.

### Summary of Changes

| What | Why |
|---|---|
| Increase bottom padding to `180px` at ≤ 900px | Trust bar wraps to ~2 rows on tablets, needs more clearance |
| Increase bottom padding to `240px` at ≤ 560px | Trust bar wraps to 3–5 rows on phones, needs maximum clearance |
| Stack CTA buttons vertically + full width at ≤ 560px | Prevents unpredictable wrapping, makes layout height deterministic |
| Add `hero-cta-row` class to button wrapper | Enables the CSS targeting without inline style changes |
