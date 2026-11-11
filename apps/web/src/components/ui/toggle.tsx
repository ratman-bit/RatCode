import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

// Material 3 Expressive toggle: a pill at rest that squares off once selected. Each size sets
// --btn-h so the radius interpolates from a real length; `before` is the state layer.
const morph =
  "rounded-[calc(var(--btn-h)/2)] hover:rounded-[calc(var(--btn-h)*0.34)] active:rounded-[calc(var(--btn-h)*0.22)] data-pressed:rounded-[calc(var(--btn-h)*0.3)]";
const pill = "rounded-[calc(var(--btn-h)/2)]";

const toggleVariants = cva(
  "[&_svg]:-mx-0.5 relative inline-flex h-(--btn-h) min-w-(--btn-h) shrink-0 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap border font-medium text-base text-foreground outline-none [transition:border-radius_350ms_var(--ease-spatial-fast),background-color_150ms_var(--ease-effects-fast),color_150ms_var(--ease-effects-fast)] motion-reduce:transition-none before:pointer-events-none before:absolute before:-inset-px before:rounded-[inherit] before:bg-current before:opacity-0 before:transition-opacity before:duration-150 hover:before:opacity-8 active:before:opacity-12 pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 aria-disabled:opacity-64 data-pressed:bg-secondary data-pressed:text-secondary-foreground sm:text-sm [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        compact:
          "[--btn-h:--spacing(7)] px-[calc(--spacing(1)-1px)] text-xs [&_svg:not([class*='size-'])]:size-3.5",
        default: "[--btn-h:--spacing(9)] px-[calc(--spacing(2)-1px)] sm:[--btn-h:--spacing(8)]",
        lg: "[--btn-h:--spacing(10)] px-[calc(--spacing(2.5)-1px)] sm:[--btn-h:--spacing(9)]",
        segmented: "[--btn-h:--spacing(7)] min-w-0 px-3 text-xs",
        sm: "[--btn-h:--spacing(8)] px-[calc(--spacing(1.5)-1px)] sm:[--btn-h:--spacing(7)]",
        xs: "[--btn-h:--spacing(7)] px-[calc(--spacing(1)-1px)] sm:[--btn-h:--spacing(6)]",
      },
      variant: {
        default: `${morph} border-transparent`,
        pill: `${pill} border-transparent px-3 font-normal text-muted-foreground`,
        ghost: `${morph} border-transparent text-foreground disabled:opacity-100 disabled:text-muted-foreground disabled:[&_svg]:opacity-100`,
        outline: `${morph} border-input bg-transparent data-pressed:border-transparent`,
        // Connected button group segment: small inner corners, full outer ends, and the
        // selected segment springs back to a pill.
        segmented: `rounded-xs border-transparent bg-input/40 text-muted-foreground first:rounded-s-[calc(var(--btn-h)/2)] last:rounded-e-[calc(var(--btn-h)/2)] hover:text-foreground data-pressed:rounded-[calc(var(--btn-h)/2)]`,
      },
    },
  },
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      className={cn(toggleVariants({ className, size, variant }))}
      data-slot="toggle"
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
