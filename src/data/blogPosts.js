export const blogPosts = [
  {
    id: 'first-post',
    title: 'Getting Started with Vue 3 and Vite',
    author: 'I.Fabrice Boncoeur',
    date: 'January 15, 2024',
    excerpt:
      'A comprehensive guide to setting up your first Vue 3 project using Vite for a blazing fast development experience...',
    content: [
      'Setting up a Vue 3 project used to mean configuring Webpack, Babel, and a dozen loaders by hand. With Vite, that entire setup disappears. Vite starts a development server instantly by serving native ES modules, so your app boots in milliseconds no matter how large it grows.',
      'To get started, run npm create vue@latest and answer a few prompts: do you want TypeScript, JSX, Router, Pinia, or unit testing? Vite generates a clean project structure with a src folder, an entry point, and sensible defaults so you can start building components immediately.',
      'During development, Hot Module Replacement (HMR) updates only the file you changed instead of reloading the whole page. State in other components survives the update, which makes iterating on UI details dramatically faster.',
      'When you are ready to ship, npm run build produces an optimized bundle in the dist folder. Vite uses Rollup under the hood, which tree-shakes unused code, splits chunks, and compresses assets automatically. Deploying that folder to Vercel, Netlify, or any static host takes seconds.'
    ]
  },
  {
    id: 'understanding-composition-api',
    title: 'Understanding Vue 3 Composition API',
    author: 'I.Fabrice Boncoeur',
    date: 'February 1, 2024',
    excerpt:
      'Dive deep into the Composition API, exploring its benefits and how it changes component organization...',
    content: [
      'The Composition API is a function-based way to organize component logic. Instead of splitting code into data, methods, and computed options, related logic lives together in a single setup function. A counter, its state, and the functions that modify it are declared side by side, which makes components much easier to read.',
      'Building blocks include ref for primitive reactive values, reactive for objects, computed for derived values, and watch for side effects. Lifecycle hooks such as onMounted and onUnmounted are imported directly instead of declared as options.',
      'The biggest win is reusable logic. Any stateful logic can be extracted into a composable - a plain function like useFetch or useTheme - and shared across components without mixins, naming collisions, or "this" binding confusion.',
      'TypeScript also benefits: because ref and computed are generic functions, editors give accurate autocomplete and catch bugs before you run the code. For any non-trivial Vue 3 application, the Composition API is the recommended default.'
    ]
  },
  {
    id: 'css-tips-for-responsive-design',
    title: 'CSS Tips for Responsive Design',
    author: 'I.Fabrice Boncoeur',
    date: 'March 10, 2024',
    excerpt:
      'Learn effective CSS techniques to make your web applications look great on any device...',
    content: [
      'Responsive design starts with a mobile-first mindset: build the layout for the smallest screen first, then enhance it with min-width media queries as space allows. This keeps your base CSS small and guarantees the experience works on phones.',
      'Flexbox and Grid remove most of the need for brittle percentage math. Grid with repeat(auto-fit, minmax(300px, 1fr)) creates card layouts that reflow automatically, while Flexbox handles alignment and spacing inside a single row.',
      'Fluid typography with clamp() prevents headings from overflowing on small screens: clamp(1.75rem, 4vw, 3rem) scales smoothly between a minimum and maximum without breakpoints.',
      'Finally, never forget the viewport meta tag, use object-fit: cover for images inside fixed boxes, and test with real devices or browser emulation. A layout that only works at 1920px is not finished.'
    ]
  }
]
