import { tv } from "tailwind-variants";

export const titleWrapper = tv({
  base: "flex flex-col gap-2 items-start justify-center w-full",
});

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#0088ff] to-[#006dd9]",
      yellow: "from-[#00ffff] to-[#0088ff]",
      blue: "from-[#0088ff] to-[#0052b3]",
      cyan: "from-[#00ffff] to-[#0088ff]",
      green: "from-[#40a9ff] to-[#0088ff]",
      pink: "from-[#69c0ff] to-[#0088ff]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#40a9ff]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.5rem] lg:text-5xl",
      lg: "text-4xl lg:text-6xl",
      xl: "text-5xl md:text-6xl lg:text-7xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
});

export const sectionWrapper = tv({
  base: "relative z-10 flex flex-col gap-2 w-full",
  variants: {
    isBlurred: {
      true: [
        "bg-transparent",
        "dark:bg-transparent",
        "before:bg-background/10",
        "before:content-['']",
        "before:block",
        "before:z-[-1]",
        "before:absolute",
        "before:inset-0",
        "before:backdrop-blur-md",
        "before:backdrop-saturate-200",
      ],
    },
  },
});
