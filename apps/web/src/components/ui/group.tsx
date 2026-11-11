import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "~/lib/utils";

// Material connected group (split button): members keep their outer corners, sit 2px apart and
// meet with small inner corners. The gap is the divider.
const groupVariants = cva(
  "flex w-fit gap-0.5 *:focus-visible:z-1 has-[>[data-slot=group]]:gap-2 *:has-focus-visible:z-1",
  {
    defaultVariants: {
      orientation: "horizontal",
    },
    variants: {
      orientation: {
        horizontal:
          "*:pointer-coarse:after:min-w-auto *:data-slot:has-[~[data-slot]]:rounded-e-xs *:[[data-slot]~[data-slot]]:rounded-s-xs",
        vertical:
          "flex-col *:pointer-coarse:after:min-h-auto *:data-slot:has-[~[data-slot]]:rounded-b-xs *:[[data-slot]~[data-slot]]:rounded-t-xs",
      },
    },
  },
);

function Group({
  className,
  orientation,
  children,
  ...props
}: {
  className?: string;
  orientation?: VariantProps<typeof groupVariants>["orientation"];
  children: React.ReactNode;
} & React.ComponentProps<"div">) {
  return (
    <div
      className={cn(groupVariants({ orientation }), className)}
      data-orientation={orientation}
      data-slot="group"
      role="group"
      {...props}
    >
      {children}
    </div>
  );
}

export { Group, Group as ButtonGroup, groupVariants };
