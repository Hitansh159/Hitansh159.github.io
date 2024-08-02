import Grid from "@mui/joy/Grid";
import SectionTitle from "./SectionTitle";

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
      <Grid xs={12}></Grid>
      <img src="assets/logos/python.png" alt="Python" className="logo" />
      <img src="assets/logos/js.png" alt="javascript" className="logo" />
      <img src="assets/logos/node.png" alt="node" className="logo" />
      <img src="assets/logos/react.png" alt="react" className="logo" />
      <img src="assets/logos/express.png" alt="express" className="logo" />
      <img src="assets/logos/mongo.png" alt="mongo" className="logo" />
      <img src="assets/logos/cpp.png" alt="c++" className="logo" />
      <img src="assets/logos/django.png" alt="Django" className="logo" />
      <img src="assets/logos/git.png" alt="git" className="logo" />
      <img src="assets/logos/docker.png" alt="docker" className="logo" />
      <img
        src="assets/logos/tensorflow.png"
        alt="tensorflow"
        className="logo"
      />
    </Grid>
  );
}
