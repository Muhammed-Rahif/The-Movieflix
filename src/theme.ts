import { ButtonStyleTypes, ListStylesType } from "@material-tailwind/react";

export const theme = {
  button: {
    defaultProps: {
      className: "bg-primary",
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
