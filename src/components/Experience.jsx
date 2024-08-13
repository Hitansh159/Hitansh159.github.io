import GradientCard from "./GradientCard";
import SectionTitle from "./SectionTitle";
import Grid from '@mui/joy/Grid';
import experienceData from "../data/experience.json";
import { motion } from "framer-motion";


export default function Experience() {
  return (
    <div id="experience" style={{paddingBlockStart:"70px"}}>
      <SectionTitle title="Experience" />
      <Grid
        container
        spacing={{ xs: 2, md: 5 }}
        columns={{ xs: 1, sm: 6, md: 12 }}
        sx={{ flexGrow: 1 }}
        justifyContent="center"
        alignItems="center"
        direction={{xs:"column", md:"row"}}
      >
        {experienceData.jobs.map((job, index) => (
          <Grid xs={1} sm={4} md={5} lg={4} key={index}>
            <motion.div 
              whileInView={{x:["-50vh", "0px"], opacity:[0,1]}}
              transition={{duration: index*0.2}}
            >
              <GradientCard imgSrc={job.imgSrc} cardTitle={job.title} cardSubTitle={job.role} type="job" modalData = {job}/>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
