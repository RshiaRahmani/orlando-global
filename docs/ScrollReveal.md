# ScrollReveal Component

A powerful React component that adds smooth scroll-triggered text animations using GSAP. It splits text into individual words and animates them with blur, opacity, and rotation effects as they come into view.

## Features

- **Word-by-word animation**: Text is split into individual words that animate with staggered timing
- **Blur animation**: Optional blur-to-focus effect for a modern look
- **Rotation animation**: Subtle rotation that eases to 0 as text comes into view
- **Opacity animation**: Words fade in from a low opacity
- **Customizable styling**: Full control over typography and spacing
- **Element flexibility**: Works with h1, h2, h3, h4, h5, h6, and p elements
- **Performance optimized**: Uses GSAP ScrollTrigger for smooth 60fps animations

## Usage

```tsx
import ScrollReveal from '@/components/scroll-reveal';

// Basic usage for a heading
<ScrollReveal 
  element="h1" 
  containerClassName="mb-6"
  textClassName="text-4xl font-bold text-white"
>
  Your Title Text Here
</ScrollReveal>

// Advanced usage with custom settings
<ScrollReveal 
  element="p" 
  containerClassName="max-w-3xl mx-auto"
  textClassName="text-lg text-muted-foreground"
  baseOpacity={0.1}
  baseRotation={1}
  enableBlur={true}
  blurStrength={2}
  rotationEnd="bottom bottom"
  wordAnimationEnd="bottom bottom"
>
  Your paragraph text here
</ScrollReveal>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | The text content to animate |
| `element` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'p'` | `'h2'` | HTML element to render |
| `scrollContainerRef` | `React.RefObject<HTMLElement>` | - | Optional custom scroll container |
| `enableBlur` | `boolean` | `true` | Whether to enable blur animation |
| `baseOpacity` | `number` | `0.1` | Starting opacity for words |
| `baseRotation` | `number` | `3` | Starting rotation in degrees |
| `blurStrength` | `number` | `4` | Blur amount in pixels |
| `containerClassName` | `string` | `""` | CSS classes for the container element |
| `textClassName` | `string` | `""` | CSS classes for the text content |
| `rotationEnd` | `string` | `"bottom bottom"` | ScrollTrigger end point for rotation |
| `wordAnimationEnd` | `string` | `"bottom bottom"` | ScrollTrigger end point for words |

## Styling Guidelines

The component automatically applies responsive text sizing based on the element type:

- **h1**: `clamp(2.5rem, 6vw, 4rem)` - Largest headings
- **h2**: `clamp(2rem, 5vw, 3.5rem)` - Section headings
- **h3**: `clamp(1.8rem, 4vw, 3rem)` - Subsection headings
- **h4**: `clamp(1.5rem, 3.5vw, 2.5rem)` - Smaller headings
- **h5**: `clamp(1.3rem, 3vw, 2rem)` - Minor headings
- **h6**: `clamp(1.1rem, 2.5vw, 1.5rem)` - Smallest headings
- **p**: `clamp(1rem, 2vw, 1.2rem)` - Body text

You can override these with custom `textClassName` props.

## Performance Tips

1. **Use sparingly**: Don't animate every text element on a page
2. **Optimize for mobile**: Consider reducing animation complexity on smaller screens
3. **Test scroll performance**: Monitor performance on slower devices
4. **GSAP loading**: The component automatically loads GSAP scripts if not already present

## Examples in the Codebase

Check out the implementation in:
- `/src/app/starlux-mall/page.tsx` - Hero sections and titles
- `/src/app/cyberx-gaming/page.tsx` - Gaming club page headers
- `/src/app/shop-and-coffee/page.tsx` - Cafe page animations

## Animation Timeline

1. **Initial state**: Text has rotation, low opacity, and blur
2. **Scroll trigger**: When element enters viewport (ScrollTrigger start)
3. **Animation**: Words animate in sequence with stagger
4. **Final state**: Text is straight, fully opaque, and sharp

The animations use `scrub: true` for smooth, scroll-linked movement that feels natural and responsive to user scroll speed.
