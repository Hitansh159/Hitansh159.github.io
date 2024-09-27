import { Tooltip } from "@mui/joy";
import { motion } from "framer-motion";

export function Linkedin() {
  return (
    <Tooltip title="Linkedin">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        stroke-width="0.8333333333333334"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-linkedin"
      >
        <motion.path
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 1 }}
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        />
        <motion.rect
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 1 }}
          width="4"
          height="12"
          x="2"
          y="9"
        />
        <motion.circle
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 1 }}
          cx="4"
          cy="4"
          r="2"
        />
      </svg>
    </Tooltip>
  );
}
