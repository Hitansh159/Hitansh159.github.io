import Grid from "@mui/joy/Grid";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

function Logo({logoName}){
  return(
    <Grid xs={4} md={1}>
      <motion.img src={`assets/logos/${logoName}.png`} alt={logoName} className="logo" whileInView={{opacity:[0,1], y:[15,0]}} transition={{duration:1}} />
    </Grid>
  )
}

export default function Skill() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      id="skill"
      style={{ paddingBlockStart: "70px" }}
    >
      <Grid xs={12}>
        <SectionTitle title="Skills" />
      </Grid>
      <Grid xs={12}>
        <Grid container justifyContent="space-evenly" direction="row" alignItems="center" >
          <Logo logoName={"python"}/>
          <Logo logoName={"js"}/>
          <Logo logoName={"node"}/>
          <Logo logoName={"react"}/>
          <Logo logoName={"express"}/>
          <Logo logoName={"mongo"}/>
          <Logo logoName={"cpp"}/>
          <Logo logoName={"django"}/>
          <Logo logoName={"git"}/>
          <Logo logoName={"docker"}/>
          <Logo logoName={"tensorflow"}/>
        </Grid>
      </Grid>
    </Grid>
  );
}
