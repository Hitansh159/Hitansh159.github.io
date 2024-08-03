import { Button, Stack, Typography } from "@mui/joy";
import Grid from '@mui/joy/Grid';
import Divider from '@mui/joy/Divider';
import { ArrowBigDown, GitBranchPlus, GithubIcon, LinkedinIcon, Mail, ArrowUpRightFromSquare  } from "lucide-react";
import heroImage from "../assets/about.png"
import SectionTitle from "./SectionTitle";
import Link from "./Link";

export default function About() {
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" id="about" style={{paddingBlockStart:"70px"}}>
      <Grid md={6} xs={11}>
        
        <SectionTitle title="About" />
        <Typography level="h4"> Welcome to my digital space! </Typography> <br />
        <Typography>

        <p>
            I am a Full Stack Developer at <Link href="https://www.jpmorganchase.com/">JPMorgan Chase & Co. </Link> 
        </p>
        <p>
            My journey in the realm of technology began with the idea of making a game.
            From there I headed into all kind of different fields and domains in technology that fasinated me!
        </p>
        <p>
            Also I lead <Link href="https://gdsc.community.dev/thakur-college-of-engineering-and-technology-mumbai/">Google Developer Student Club</Link> on my campus! What an journey that was!
            From organizing and executing the first-ever college hackathon, to <Link href="https://www.youtube.com/watch?v=nwSUc3-dnyY&list=PLTA6lgriDl5PgXKgRd3GkSkdM3XUQI7wk">conducting workshops</Link> on cutting-edge topics, to community building.
            My professional trajectory includes spearheading the development of a comprehensive <Link href="https://github.com/tcet-opensource/erp-backend">ERP system</Link> for College.
        </p>
        <p>
            When I'm not immersed in code, you can find me exploring the latest advancements in technology, striving to push boundaries and make meaningful contributions to the ever-evolving tech landscape.
        </p>
        <p>
            <Link href="#contact" target="_self">Let's connect</Link> and explore the endless possibilities at the intersection of creativity and technology!
        </p>
        </Typography>

      </Grid>

      <Grid md={6} sx={{display:{xs:"none", md:"flex"}}}>
        {/* TODO: find another photo that suites the theme */}
        <img
          src={heroImage}
          alt="About image"
          loading="lazy"
          height="300px"
          style={{marginInline:"150px"}}
        />
      </Grid>
    </Grid>
  );
}
