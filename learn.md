### **Custom Tailwind Utility (Creating Our Own Class)**

Define a reusable class that appears in autocomplete:

```css
@utility my-max-width {
  @apply mx-auto max-w-5xl px-4;
}
```

Or using plain CSS:

```css
@utility my-max-width {
  margin-left: auto;
  margin-right: auto;
}
```

Use it like a normal Tailwind class:

```html
<section class="my-max-width">
  <!-- content -->
</section>
```

- `@utility` creates the custom class.
- `@apply` reuses existing Tailwind utilities for convenience.

---

### **Custom Keyframes with Inline Theme Variables**

```css
@theme inline {
  --animate-fade-left: fade-left 0.5s ease forwards;

  @keyframes fade-left {
    0% {
      opacity: 0;
      transform: translateX(2rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
```

- `@theme inline` → allows you to define CSS variables and keyframes **without tailwind.config.js** .
- `--animate-fade-left` → can be used as a **custom animation variable**.

**Usage example in JSX/HTML:**

```html
<div class="animate-fade-left">Animated content</div>
```

- Keeps your animation **reusable and inline with Tailwind utilities**.
