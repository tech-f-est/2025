import { recipe } from "@vanilla-extract/recipes";
import { theme } from "./theme.css";

export const card = recipe({
  base: {
    border: theme.border,
    padding: theme.spacing.medium,
    borderRadius: 16,
  },
});
