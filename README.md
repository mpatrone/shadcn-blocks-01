# Vibe coding using Bytegrad's flow 

This is a Next.js template with shadcn/ui. Bytegrad's vibe coding flow as
discussed in https://www.youtube.com/watch?v=qutWPWDlzRw.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```

## Flow

Create the Nxet.js application using https://ui.shadcn.com/create using the
shuffle option until we get a nice looking preset.

Add dark mode and the dsahboard-01 block using Claude code

Screen copy the rsult into Figma and ask it to implement a "Spending anomaly" banner using the project's existing design system.

Export the result to builder.io using "smart copy" feature provided by the builder.io Figma plugin.

Import the project into builder.io and further paste the figma design into builder.io and ask it to implement it in code.

Finally copy the builder.io code changes into the project. I could not create the github PR from builder.io because builder.io got stuck in "starting development server". Since I'm on the free plan, that's not very surprinig...