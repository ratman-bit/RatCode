import type { ComponentProps } from "react";

import { cn } from "../../lib/utils";

export function SettingsGroup({
  variant = "grouped",
  divided = true,
  className,
  ...props
}: ComponentProps<"div"> & {
  variant?: "grouped" | "plain";
  divided?: boolean;
}) {
  return (
    <div
      data-slot="settings-group"
      {...props}
      className={cn(
        "relative overflow-visible text-foreground",
        variant === "plain" && "space-y-1",
        variant === "grouped" && !divided && "rounded-xl bg-card",
        // Segmented list: each row is its own tonal card, 2px apart, and only the ends of the
        // stack get large corners.
        variant === "grouped" &&
          divided &&
          "flex flex-col gap-0.5 [&>*]:rounded-xs [&>*]:bg-card [&>*:first-child]:rounded-t-xl [&>*:last-child]:rounded-b-xl",
        className,
      )}
    />
  );
}
