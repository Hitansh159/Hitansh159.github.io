import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import JobModal from "./JobModal";
import ProjectModal from "./ProjectModal";
import { AnimatePresence, motion, useAnimate } from "framer-motion";

export default function GradientCard({
  imgSrc,
  cardTitle,
  cardSubTitle,
  type,
  modalData,
}) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [scope, animate] = useAnimate();

  const onMouseEnter = () => {
    const hoverAnimation = [
      [
        "#cardBackground",
        {
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 300px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 400px)",
        },
        {
          duration: 0.1,
        },
      ],
      ["#cardTitle", { justifyContent: "start", y:["100%", 0] }, { duration: 0.2 }],
    ];
    setHover(true);
    animate(scope.current, { y: -15 }, { duration: 0.1 });
    animate(hoverAnimation);
  };

  const onMouseLeave = () => {
    const hoverAnimation = [
      [
        "#cardBackground",
        {
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        },
        {
          duration: 0.1,
        },
      ],
      ["#cardTitle", { justifyContent: "end", y:["-80%", 0] }, { duration: 0.2 }],
    ];
    setHover(false);
    animate(scope.current, { y: 15 }, { duration: 0.1 });
    animate(hoverAnimation);
  };

  return (
    <>
      <Card
        sx={{ minHeight: "280px", width: 270 }}
        id={`card-${cardTitle}`}
        onClick={() => setOpen(true)}
        ref={scope}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <CardCover>
          <img src={`/assets/${imgSrc}`} loading="lazy" alt="" />
        </CardCover>
        <CardCover
          id="cardBackground"
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent id="cardTitle" sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg" textColor="#fff">
            {cardTitle}
          </Typography>
          <Typography textColor="neutral.300">{cardSubTitle}</Typography>
        </CardContent>
        <AnimatePresence >
          {hover ? (
            <CardContent id="cardKnowMore">
              <motion.div
                animate ={{y:[15, 0], opacity:[0,1]}}
                transition={{duration:0.5}}
              >
                <Typography level="h3" textColor="#fff">
                  Click to Know More
                </Typography>
              </motion.div>
            </CardContent>
          ) : null}
        </AnimatePresence>
      </Card>
      <Modal type={type} open={open} setOpen={setOpen} modalData={modalData} />
    </>
  );
}
function Modal({ type, open, setOpen, modalData }) {
  if (type == "job")
    return <JobModal open={open} setOpen={setOpen} job={modalData} />;
  return <ProjectModal open={open} setOpen={setOpen} project={modalData} />;
}
