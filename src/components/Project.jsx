import GradientCover from "./GradientCard";
import SectionTitle from "./SectionTitle";
import Grid from "@mui/joy/Grid";
import projectData from "../data/Project.json";
import {projectHighlight} from "../data/Const";


export default function Project() {

  return (
    <div id="project" style={{paddingBlockStart:"70px"}}>
      <SectionTitle title="Project" />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1 }}
        justifyContent="center"
        alignItems="center"
      >
        {projectData.projects.map((project, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <GradientCover
              imgSrc={project.src}
              cardTitle={project.name}
              cardSubTitle={projectHighlight(project.highlight, project.icon)}
              type="project"
              modalData={project}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
