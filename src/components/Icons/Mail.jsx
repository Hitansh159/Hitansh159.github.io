import { Tooltip } from "@mui/joy";
import { motion } from "framer-motion"

export function Mail() {
  return (
    <Tooltip title="Mail">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        stroke-width="0.8333"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-mail"
      >
        <motion.rect
          width="20"
          height="16"
          x="2"
          y="4"
          rx="2"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 1 }}
        />
        <motion.path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" 
        
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 1 }}/>
      </svg>
    </Tooltip>
  );
}
