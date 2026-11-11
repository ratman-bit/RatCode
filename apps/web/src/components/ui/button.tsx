import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "~/lib/utils";

// Material 3 Expressive shape morph: a button rests as a pill (half its height), relaxes toward
// a rounded square on hover and tightens on press. Each size sets --btn-h so the radius can
// interpolate from a real length. `before` is the state layer.
const buttonVariants = cva(
  "[--control-icon-color:currentColor] [&_svg]:-mx-0.5 relative inline-flex h-(--btn-h) shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[calc(var(--btn-h)/2)] border font-medium text-base outline-none [transition:border-radius_350ms_var(--ease-spatial-fast),background-color_150ms_var(--ease-effects-fast),color_150ms_var(--ease-effects-fast),box-shadow_150ms_var(--ease-effects-fast)] motion-reduce:transition-none hover:rounded-[calc(var(--btn-h)*0.34)] active:rounded-[calc(var(--btn-h)*0.22)] data-pressed:rounded-[calc(var(--btn-h)*0.3)] before:pointer-events-none before:absolute before:-inset-px before:rounded-[inherit] before:bg-current before:opacity-0 before:transition-opacity before:duration-150 hover:before:opacity-8 active:before:opacity-12 data-pressed:before:opacity-12 pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 aria-disabled:cursor-not-allowed aria-disabled:opacity-64 sm:text-sm [&_svg:not([class*='text-'])]:text-[var(--control-icon-color)] [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        compact:
          "[--btn-h:--spacing(7)] gap-1 px-[calc(--spacing(2.5)-1px)] text-xs [&_svg:not([class*='size-'])]:size-3.5",
        default: "[--btn-h:--spacing(9)] px-[calc(--spacing(3.5)-1px)] sm:[--btn-h:--spacing(8)]",
        icon: "[--btn-h:--spacing(9)] w-(--btn-h) sm:[--btn-h:--spacing(8)]",
        "icon-lg": "[--btn-h:--spacing(10)] w-(--btn-h) sm:[--btn-h:--spacing(9)]",
        "icon-micro": "[--btn-h:--spacing(5)] w-(--btn-h) p-0 [&_svg:not([class*='size-'])]:size-3",
        "icon-tiny": "[--btn-h:--spacing(4)] w-(--btn-h) p-0 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "[--btn-h:--spacing(8)] w-(--btn-h) sm:[--btn-h:--spacing(7)]",
        "icon-sm-pill": "[--btn-h:--spacing(8)] w-(--btn-h) sm:[--btn-h:--spacing(7)]",
        "icon-xl":
          "[--btn-h:--spacing(11)] w-(--btn-h) sm:[--btn-h:--spacing(10)] [&_svg:not([class*='size-'])]:size-5 sm:[&_svg:not([class*='size-'])]:size-4.5",
        "icon-xs":
          "[--btn-h:--spacing(7)] w-(--btn-h) sm:[--btn-h:--spacing(6)] not-in-data-[slot=input-group]:[&_svg:not([class*='size-'])]:size-4 sm:not-in-data-[slot=input-group]:[&_svg:not([class*='size-'])]:size-3.5",
        lg: "[--btn-h:--spacing(10)] px-[calc(--spacing(4.5)-1px)] sm:[--btn-h:--spacing(9)]",
        micro:
          "[--btn-h:--spacing(5)] gap-1 px-[calc(--spacing(2)-1px)] text-[11px] sm:text-[11px] [&_svg:not([class*='size-'])]:size-3 sm:[&_svg:not([class*='size-'])]:size-3",
        multiline:
          "[--btn-h:--spacing(9)] h-auto min-h-(--btn-h) px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(1.5)-1px)] whitespace-normal sm:[--btn-h:--spacing(8)]",
        sm: "[--btn-h:--spacing(8)] gap-1.5 px-[calc(--spacing(3)-1px)] sm:[--btn-h:--spacing(7)]",
        "sm-pill": "[--btn-h:--spacing(8)] gap-1.5 px-3 sm:[--btn-h:--spacing(7)]",
        "sm-multiline":
          "[--btn-h:--spacing(8)] h-auto min-h-(--btn-h) gap-1.5 px-[calc(--spacing(3)-1px)] py-[calc(--spacing(1)-1px)] whitespace-normal sm:[--btn-h:--spacing(7)]",
        xl: "[--btn-h:--spacing(11)] px-[calc(--spacing(6)-1px)] text-lg sm:[--btn-h:--spacing(10)] sm:text-base [&_svg:not([class*='size-'])]:size-5 sm:[&_svg:not([class*='size-'])]:size-4.5",
        xs: "[--btn-h:--spacing(7)] gap-1 px-[calc(--spacing(2.5)-1px)] text-sm sm:[--btn-h:--spacing(6)] sm:text-xs [&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-3.5",
      },
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:shadow-elevation-1",
        destructive: "border-transparent bg-destructive text-white hover:shadow-elevation-1",
        "destructive-outline": "border-input bg-transparent text-destructive-foreground",
        ghost:
          "[--control-icon-color:var(--contrast-muted-foreground)] border-transparent text-foreground",
        "ghost-muted":
          "[--control-icon-color:currentColor] border-transparent text-muted-foreground [:hover,[data-pressed]]:text-foreground",
        "ghost-destructive":
          "[--control-icon-color:currentColor] border-transparent text-muted-foreground [:hover,[data-pressed]]:text-destructive",
        glass:
          "[--control-icon-color:var(--contrast-muted-foreground)] border-transparent bg-popover text-foreground shadow-elevation-1",
        link: "border-transparent underline-offset-4 before:hidden [:hover,[data-pressed]]:underline",
        "media-close":
          "[--control-icon-color:currentColor] border-transparent bg-black/65 text-white shadow-sm ring-1 ring-white/20 focus-visible:ring-white",
        "media-navigation":
          "[--control-icon-color:currentColor] absolute top-1/2 z-20 -translate-y-1/2 border-transparent text-white/90 [:hover,[data-pressed]]:text-white focus-visible:ring-white focus-visible:ring-offset-transparent",
        outline:
          "[--control-icon-color:var(--contrast-muted-foreground)] border-input bg-transparent text-foreground",
        overlay: "border-transparent bg-black/70 text-white/65",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:shadow-elevation-1",
        "warning-outline": "border-warning/32 bg-warning-surface text-warning-foreground",
      },
    },
  },
);

type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>;
type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>;

interface ButtonProps extends useRender.ComponentProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function Button({ className, variant, size, render, ...props }: ButtonProps) {
  const typeValue: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] = render
    ? undefined
    : "button";

  const defaultProps = {
    className: cn(buttonVariants({ className, size, variant })),
    "data-slot": "button",
    type: typeValue,
  };

  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(defaultProps, props),
    render,
  });
}

export { Button, buttonVariants, type ButtonSize, type ButtonVariant };

const inlineButtonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center gap-0.5 font-medium underline-offset-2 [text-align:var(--inline-button-text-align,center)] [white-space:var(--inline-button-white-space,nowrap)] hover:underline focus-visible:outline-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-64",
  {
    defaultVariants: { tone: "default" },
    variants: {
      touchTarget: {
        padded: "pointer-coarse:min-h-11 pointer-coarse:px-1.5",
      },
      tone: {
        default: "text-foreground",
        muted: "text-muted-foreground hover:text-foreground",
        destructive: "text-destructive/80 hover:text-destructive",
        picker:
          "gap-1 text-foreground decoration-from-font underline-offset-4 data-popup-open:underline",
      },
    },
  },
);

export function InlineButton({
  className,
  tone,
  touchTarget,
  render,
  ...props
}: useRender.ComponentProps<"button"> & VariantProps<typeof inlineButtonVariants>) {
  const defaultProps = {
    className: cn(inlineButtonVariants({ tone, touchTarget }), className),
    "data-slot": "inline-button",
    type: render ? undefined : ("button" as const),
  };
  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(defaultProps, props),
    render,
  });
}
