import Grid from "@mui/joy/Grid";
import SectionTitle from "./SectionTitle";
import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Typography,
} from "@mui/joy";

export default function Speaker() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      id="speaker"
      style={{ paddingBlockStart: "70px" }}
    >
      <Grid xs={12}>
        <SectionTitle title="Speaker At" />
      </Grid>
      <Grid xs={12}>
        <Card
          // orientation={{ xs: "vertical", md: "horizontal" }}
          sx={{flexDirection:{xs:"column", md:"row"}, justifyContent:{xs:"center", md:"start"}}}
          variant="outlined"
        >
          <CardOverflow>
            <AspectRatio ratio="1.3" sx={{ width: 270, marginInline:"5px" }}>
              <img
                src="/assets/logos/Docker Speaker.png"
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
              Taught docker in a 4 workshop series. Covering basics topics what
              is docker to running multiple instaces Follwed by introduction to
              kubernaties
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
