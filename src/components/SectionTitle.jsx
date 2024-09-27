import { Typography } from "@mui/joy"
import { motion } from "framer-motion"

function Underline(){
    return(
        <motion.div 
            style={{width:"0%", minHeight:"10px", backgroundColor:"#7de2fe", margin:"5px 0 20px 0", borderRadius:"25px"}}
            whileInView={{width:"25%"}}
            transition={{duration:1}}
        >
            {" "}
        </motion.div>
    )
}

export default function SectionTitle({title=""}){
    return(
        <>
            <Typography level="h2">{title}</Typography>
            <Underline/>
        </>
    )
}