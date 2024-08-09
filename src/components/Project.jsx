import GradientCover from "./GradientCard";
import SectionTitle from "./SectionTitle";
import Grid from "@mui/joy/Grid";
import projectData from "../data/Project.json";
import { projectHighlight } from "../data/Const";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <div id="project" style={{ paddingBlockStart: "70px" }}>
      <SectionTitle title="Project" />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 6, md: 12 }}
        sx={{ flexGrow: 1 }}
        justifyContent="center"
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
      >
        {projectData.projects.map((project, index) => (
          <Grid xs={1} sm={4} md={5} lg={4} key={index}>
            <motion.div
              whileInView={{ x: ["50vh", "0px"], opacity: [0, 1] }}
              transition={{ duration: index * 0.2 }}
            >
              <GradientCover
                imgSrc={project.src}
                cardTitle={project.name}
                cardSubTitle={projectHighlight(project.highlight, project.icon)}
                type="project"
                modalData={project}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
