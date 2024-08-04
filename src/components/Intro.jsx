import { Button, Stack, Typography } from "@mui/joy";
import Grid from '@mui/joy/Grid';
import Divider from '@mui/joy/Divider';
import { ArrowBigDown, GithubIcon, LinkedinIcon, Mail, ArrowUpRightFromSquare  } from "lucide-react";
import heroImage from "../assets/hero img.png"

export default function Intro() {
  return (
    <Grid container sx={{flexDirection:{md:"row", xs:"column"}, marginTop:{xs:5}, alignItems:{md:"center", xs:"start"}}} justifyContent="space-between" alignItems="center">
      <Grid md={4} xs={10}>
        <h1>Hello There 👋,</h1>I am{" "}
        <Typography level="body-lg"> Hitansh Doshi. </Typography> <br />
        A software engineer with a curious mindset, exploring various domains
        and gaining valuable experience. <br />
        You can know more about me by scrolling. <br /> <br/>
        <Divider />

        <Grid container direction="row" justifyContent="space-evenly" alignItems="center" sx={{padding:"15px 0"}}>
            <Grid sx={2}>
                <Button component="a" href="/resume/Resume.pdf" startDecorator={<ArrowUpRightFromSquare size={20} />} target="_blank">Resume</Button>
            </Grid>
            <Grid sx={2}>
                <a href='mailto:hkd159@gmail.com' target='_blank'>                    
                    <Mail size={36} absoluteStrokeWidth stroke="black"/>
                </a>
            </Grid>
            <Grid sx={2}>
                <a href='https://www.linkedin.com/in/hitansh-doshi-b81530197/' target='_blank'>                    
                    <LinkedinIcon size={36} absoluteStrokeWidth stroke="black"/>
                </a>
            </Grid>
            <Grid sx={2}>
                <a href='https://github.com/Hitansh159' target='_blank'>                    
                    <GithubIcon size={36} absoluteStrokeWidth stroke="black"/>
                </a>
            </Grid>
        </Grid>

        <Grid container justifyContent="center" sx={{display:{xs:"none", md:"flex"}}}>
            <ArrowBigDown size={90} stroke="0" fill="#7de2fe" />
        </Grid>


      </Grid>

      <Grid md={5} sx={{display:{xs:"none", md:"flex"}}}>
        <img
          src={heroImage}
          alt="Hero image"
          width="100%"
          height="auto"
          loading="lazy"
        />
      </Grid>
    </Grid>
  );
}
