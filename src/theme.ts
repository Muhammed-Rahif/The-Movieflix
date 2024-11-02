import { ButtonStyleTypes, ListStylesType } from "@material-tailwind/react";

export const theme = {
  button: {
    defaultProps: {
      color: "red",
    },
    styles: {
      variants: {
        filled: {
          gray: {
            background: "bg-accent",
            color: "text-white-900",
            shadow: "shadow-md shadow-white-500/10",
            hover: "hover:shadow-lg hover:shadow-white-500/20",
            focus: "focus:opacity-[0.85] focus:shadow-none",
            active: "active:opacity-[0.85] active:shadow-none",
          },
        },
      },
    },
  } as ButtonStyleTypes,
  list: {
    styles: {
      base: {
        item: {
          initial: {
            bg: "bg-accent",
            color:
              "text-white/70 hover:text-white/55 focus:text-white/55 active:text-white/70",
            gap: "gap-2",
            padding: " px-2 py-3",
            duration: "duration-100",
          },
        },
        itemPrefix: {
          padding: "px-2",
          margin: "m-0",
        },
      },
    },
  } as ListStylesType,
};
