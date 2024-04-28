import Grid from '@mui/joy/Grid';
import SectionTitle from "./SectionTitle";
import achievements from "../data/Achivements.json"; 

export default function Achievement() {
  achievements.achievements.map((data, i)=>console)
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      <Grid xs={12}>
      <SectionTitle title="Achievement" />
    </Grid>
    <Grid xs={12}>
      {achievements.achievements.map((data, i)=>{
        return(
          <li key = {i}>
            Title:{data.title}
            description: {
              data.description.map((line, idx)=><>{line}<br/></>)
            }
          </li>
        )
      })}
    </Grid>
        
    </Grid>
  );
}
