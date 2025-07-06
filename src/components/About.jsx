import { Button, Stack, Typography } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import Divider from "@mui/joy/Divider";
import heroImage from "../assets/about.png";
import SectionTitle from "./SectionTitle";
import Link from "./Link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      id="about"
      style={{ paddingBlockStart: "70px" }}
    >
      <Grid md={6} xs={11}>
        <SectionTitle title="About" />
        <Typography level="h4"> Welcome to my digital space! </Typography>{" "}
        <br />
        <Typography>
          Outside of work, I lead and contribute to open-source projects like
          OpenRacer AI, a Unity + Python-based platform for training autonomous
          driving agents. I’ve also delivered technical workshops as a GDSC Lead
          and consistently ranked in top global coding competitions.
          <p>
            I am Hitansh Doshi, a Full Stack Developer with 2 years of
            experience at{" "}
            <Link href="https://www.jpmorganchase.com/">
              JPMorgan Chase & Co.{" "}
            </Link>{" "}
            where I’ve built and optimized large-scale backend systems. I’m
            passionate about clean architecture, performance tuning, and solving
            real-world problems through code. I enjoy working across the stack,
            with a particular focus on Python, distributed systems, and backend
            engineering. I’ve fixed performance-critical bugs and built internal tools
            and automations that save hours of manual effort each month.
          </p>
          <p>
            Outside of work, I lead and contribute to open-source projects like
            OpenRacer AI, a Unity + Python-based platform for training
            autonomous driving agents. I’ve also delivered technical workshops
            as a GDSC Lead and consistently ranked in top global coding
            competitions.
          </p>
          <p>
            When I'm not immersed in code, you can find me exploring the
            advancements in technology, striving to push boundaries and make
            meaningful contributions to the ever-evolving tech landscape.
          </p>
          <p>
            <Link href="#contact" target="_self">
              Let's connect
            </Link>{" "}
            and explore the endless possibilities at the intersection of
            creativity and technology!
          </p>
        </Typography>
      </Grid>

      <Grid md={6} sx={{ display: { xs: "none", md: "flex" } }}>
        {/* TODO: find another photo that suites the theme */}
        <motion.img
          src={heroImage}
          alt="About image"
          loading="lazy"
          height="300px"
          style={{ marginInline: "150px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </Grid>
    </Grid>
  );
}
