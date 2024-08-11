import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SectionTitle from "./SectionTitle";
import { Grid, Typography } from "@mui/joy";
import { Quote } from "lucide-react";
import AchievementData from "../data/Achivements.json";
import { Paper } from "@mui/material";
import { useAnimate, motion } from "framer-motion";

export default function Achievement() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const achivementLength = AchievementData.achievements.length;
  const [scope, animation] = useAnimate();
  let autoScroll = React.useRef();
  const autoScrollInterval = 5000;

  const resetAutoScroll = ()=>{
    clearInterval(autoScroll.current);
    autoScroll.current = setInterval(handleNext, autoScrollInterval);
  }

  const handleNext = () => {
    const AnimationScequence = [
      [scope.current, { opacity: [1, 0], x: [0, "-10vw"] }],
      [scope.current, { opacity: [0, 1], x: ["10vw", 0] }],
    ];
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % achivementLength);
    animation(AnimationScequence, { duration: 1 });
    resetAutoScroll();
  };

  const handleBack = () => {
    const AnimationScequenceReversed = [
      [scope.current, { opacity: [1, 0], x: [0, "10vw"] }],
      [scope.current, { opacity: [0, 1], x: ["-10vw", 0] }],
    ];
    setActiveStep(
      (prevActiveStep) =>
        (prevActiveStep -= prevActiveStep == 0 ? -achivementLength + 1 : 1)
    );
    animation(AnimationScequenceReversed, { duration: 1 });
    resetAutoScroll();
  };

  React.useEffect(() => {
    autoScroll.current = setInterval(handleNext, autoScrollInterval);
  }, []);

  return (
    <div id="achivement" style={{ paddingBlockStart: "70px" }}>
      <SectionTitle title="Achivement" />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 6, md: 12 }}
        sx={{ flexGrow: 1 }}
        justifyContent="center"
        alignItems="center"
        direction={{ xs: "column" }}
        gap={2}
      >
        <Grid ref={scope} xs={1} sm={6} md={12} sx={{minHeight:{xs:"325px", sm:"250px", md:"225px"}}}>
          <Paper elevation={6} style={{ padding: "20px" }}>
            <Quote display={"block"} style={{ marginBlockEnd: "20px" }} />
            <Typography level="h4">
              {AchievementData.achievements[activeStep]["title"]}
            </Typography>
            <Typography style={{ padding: "10px" }}>
              {AchievementData.achievements[activeStep]["description"].join(". ")}
            </Typography>
          </Paper>
        </Grid>
        <Grid>
          <MobileStepper
            variant="dots"
            steps={achivementLength}
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: 500, flexGrow: 1 }}
            nextButton={
              <Button size="small" onClick={handleNext}>
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack}>
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Grid>
      </Grid>
    </div>
  );
}
