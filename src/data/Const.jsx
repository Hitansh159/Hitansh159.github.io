import { Car, Files, Star, Unplug } from "lucide-react";
import { Stack } from "@mui/joy";

export const ICONS = {
    doc: <Files />,
    star: <Star />,
    plug: <Unplug />,
    car: <Car />
  };

export function projectHighlight(text, icon) {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      {ICONS[icon]}
      {text}
    </Stack>
  );
};