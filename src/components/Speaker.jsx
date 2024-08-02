import Grid from '@mui/joy/Grid';
import SectionTitle from "./SectionTitle";
import { AspectRatio, Card, CardContent, CardOverflow, Typography } from '@mui/joy';

export default function Speaker() {
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" id="speaker" style={{paddingBlockStart:"70px"}}>
      <Grid xs={12}>
      <SectionTitle title="Speaker At" />
    </Grid>
    <Grid xs={12}>
        <Card orientation="horizontal" variant="outlined" >
        <CardOverflow>
        <AspectRatio ratio="1.3" sx={{ width: 270 }}>
          <img
            src='/assets/logos/Docker Speaker.png'
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="lg" textColor="success.plainColor">
          Hands On session on Docker 
        </Typography>
        <Typography level="body-md">
            <pre>
                Taught docker in a 4 workshop series.<br/>
                Covering basics topics what is docker to running multiple instaces <br/>
                Follwed by introduction to kubernaties
            </pre>
        </Typography>
      </CardContent>
        </Card>
    </Grid>
        
    </Grid>
  );
}
