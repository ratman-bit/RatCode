import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cn } from "~/lib/utils";

function Switch({
  className,
  size = "default",
  mixed = false,
  ...props
}: SwitchPrimitive.Root.Props & { size?: "default" | "sm"; mixed?: boolean }) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        // Material switch: outlined track with a small thumb when off, filled with a larger thumb when on.
        "group/switch inline-flex h-[calc(var(--thumb-size)+4px)] w-[calc(var(--thumb-size)*2)] shrink-0 cursor-pointer items-center rounded-full p-[2px] outline-none inset-ring-2 inset-ring-muted-foreground/70 transition-[background-color,box-shadow] duration-200 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background data-checked:bg-primary data-checked:inset-ring-transparent data-unchecked:bg-input/40 data-disabled:cursor-not-allowed data-disabled:opacity-64 data-[mixed]:bg-input/40",
        size === "sm"
          ? "[--thumb-size:--spacing(4.5)] sm:[--thumb-size:--spacing(4)]"
          : "[--thumb-size:--spacing(5.5)] sm:[--thumb-size:--spacing(4.5)]",
        className,
      )}
      data-size={size}
      data-slot="switch"
      data-mixed={mixed ? "" : undefined}
      // Base UI overwrites aria-checked even with undefined; pass it only for mixed state.
      {...(mixed ? { "aria-checked": "mixed" as const } : {})}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block size-(--thumb-size) shrink-0 scale-[0.6] rounded-full bg-muted-foreground [transition:translate_350ms_var(--ease-spatial-fast),scale_350ms_var(--ease-spatial-fast),background-color_150ms] motion-reduce:transition-none in-[[role=switch]:active,[data-slot=label]:active,[data-slot=field-label]:active]:not-data-disabled:scale-100 data-checked:translate-x-[calc(var(--thumb-size)-4px)] data-checked:scale-[0.85] data-checked:bg-primary-foreground",
          mixed &&
            "translate-x-[calc((var(--thumb-size)-4px)/2)] opacity-70 data-checked:translate-x-[calc((var(--thumb-size)-4px)/2)]",
        )}
        data-slot="switch-thumb"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
