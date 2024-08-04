import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Chip, Grid } from "@mui/joy";

function SkillBadges({ skills }) {
  return (
    <>
      {skills.map((skill, index) => (
        <Chip
          className="p-2"
          sx={{ margin: "2px", backgroundColor: "rgb(63 155 181)" }}
          key={index}
          variant="solid"
        >
          {skill}
        </Chip>
      ))}
    </>
  );
}

export default function JobModal({ open, setOpen, job }) {
  const getDuration = (job) => {
    let start = new Date(job.startDate);
    let end = job.endDate ? new Date(job.endDate) : new Date();
    let days = (end - start) / (1000 * 60 * 60 * 24);
    let years = Math.floor(days / 365);
    let months = Math.floor((days % 365) / 30);
    let duration = years ? years + " years" : "";
    duration = months ? months + " months" : "";
    return duration;
  };

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => setOpen(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}
        >
          Expirence at {job.title}
        </Typography>

        <Typography id="modal-desc" textColor="text.tertiary">
          <Grid
            container
            direction="row"
            justifyContent="start"
            alignItems="center"
          >
            <Grid xs={12} md={8} order={{ xs: 2, md: 1 }} >
              <table>
                <tbody>
                  <tr>
                    <td>
                      <Typography level="title-lg"> Role: </Typography>
                    </td>
                    <td>{job.role}</td>
                  </tr>
                  <tr>
                    <td>
                      <Typography level="title-lg"> Duration: </Typography>
                    </td>
                    <td>{getDuration(job)}</td>
                  </tr>
                  <tr>
                    <td>
                      <Typography level="title-lg"> Skills: </Typography>
                    </td>
                    <td colSpan={2}>
                      <SkillBadges skills={job.skills} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </Grid>
            <Grid xs={12} md={2} order={{ xs: 1, md: 2 }}>
              <img src={`/assets/${job.imgSrc}`} height="250px" />
            </Grid>
            <Grid xs={12} order={{ xs: 3, md: 3 }}>
              <Typography level="title-lg"> Description: </Typography>
              <br />
              <ul>
                {job.details.map((i, _) => {
                  return <li key={_}>{i}</li>;
                })}
              </ul>
            </Grid>
          </Grid>
        </Typography>
      </Sheet>
    </Modal>
  );
}
