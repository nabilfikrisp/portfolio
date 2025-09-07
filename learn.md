### **Custom Tailwind Utility (Creating Our Own Class)**

Define a reusable class that appears in autocomplete:

```css
@utility max-width-app {
  @apply mx-auto max-w-5xl px-4;
}
```

Or using plain CSS:

```css
@utility max-width-app {
  margin-left: auto;
  margin-right: auto;
}
```

Use it like a normal Tailwind class:

```html
<section class="max-width-app">
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

### **Animate Tab Switch**

https://github.com/shadcn-ui/ui/discussions/2108

### **Named Group**

Named groups allow you to target specific parent elements for hover/focus states instead of affecting all grouped elements.

**Syntax:**

```
group/{name}          // Define a named group
group-hover/{name}:   // Target specific named group on hover
group-focus/{name}:   // Target specific named group on focus
```

**Basic Example:**

```html
<div class="group/skills rounded border p-4">
  <h3>Skills Section</h3>
  <div class="ml-4 transition-all group-hover/skills:ml-0">
    Slides left on hover
  </div>
</div>
```

**Multiple Named Groups:**

```html
<div class="space-y-4">
  <!-- Skills group -->
  <div class="group/skills rounded bg-blue-100 p-4">
    <h3>Skills</h3>
    <p class="opacity-50 group-hover/skills:opacity-100">
      Reveals on skills hover
    </p>
  </div>

  <!-- Projects group -->
  <div class="group/projects rounded bg-green-100 p-4">
    <h3>Projects</h3>
    <p class="opacity-50 group-hover/projects:opacity-100">
      Reveals on projects hover
    </p>
  </div>
</div>
```

**Nested Named Groups:**

```html
<div class="group/card rounded-lg border p-6 hover:shadow-lg">
  <h2 class="group-hover/card:text-blue-600">Card Title</h2>

  <div class="group/button mt-4">
    <button
      class="group-hover/button:bg-blue-500 group-hover/card:border-blue-300"
    >
      Button
    </button>
  </div>
</div>
```

**Common Use Cases:**

- Navigation menus with sub-items
- Card components with multiple interactive elements
- Sidebar sections that expand/collapse independently
- Form sections with conditional styling
