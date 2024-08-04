import GradientCard from "./GradientCard";
import SectionTitle from "./SectionTitle";
import Grid from '@mui/joy/Grid';
import expirenceData from "../data/experience.json";


export default function Experience() {
  return (
    <div id="expirence" style={{paddingBlockStart:"70px"}}>
      <SectionTitle title="Experience" />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
        sx={{ flexGrow: 1 }}
        justifyContent="center"
        alignItems="center"
        direction={{xs:"column", md:"row"}}
      >
        {expirenceData.jobs.map((job, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <GradientCard imgSrc={job.imgSrc} cardTitle={job.title} cardSubTitle={job.role} type="job" modalData = {job}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
