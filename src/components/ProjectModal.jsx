import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Chip, Grid } from "@mui/joy";
import { ArrowUpRightFromSquare, Github, Globe } from "lucide-react";
import { projectHighlight } from "../data/Const";

const LinkIcon = { Github: <Github />, Website: <Globe /> };

function Links({ links }) {
  return (
    <>
      {links.map((link, index) => (
        <Chip
          className="p-5"
          sx={{ margin: "2px"}}
          size="lg"
          key={index}
          variant="outlined"
          startDecorator={LinkIcon[link.type]}
          endDecorator={<ArrowUpRightFromSquare />}
          slotProps={{ action: { component: 'a', href: link.href, target: "_blank"  } }}
        >
          {link.type}
        </Chip>
      ))}
    </>
  );
}

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

export default function ProjectModal({ open, setOpen, project }) {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => setOpen(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", width:"80vw", left:"10vw" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
          maxHeight: "80vh",
          overflowY: "auto"
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
          {project.name}
        </Typography>

        <Typography id="modal-desc" textColor="text.tertiary">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid xs={12} md={8} order={{xs:2, md:1}}>
              <table>
              <tr>
                  <td>
                    <Typography level="title-lg"> Highlight: </Typography>
                  </td>
                  <td>
                    {projectHighlight(project.highlight, project.icon)}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography level="title-lg"> Links: </Typography>
                  </td>
                  <td>
                    <Links links={project.links} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography level="title-lg"> Skills: </Typography>
                  </td>
                  <td colSpan={2}>
                    <SkillBadges skills={project.techUsed} />
                  </td>
                </tr>
              </table>
            </Grid>
            <Grid xs={12} md={2} order={{xs:1, md: 2}}>
              <img
                src={`/assets/${project.src}`}
                width="100%"
              />
            </Grid>
            <Grid xs={12} order={{xs:3}}>
              <Typography level="title-lg"> Description: </Typography>
              <br />
              <ul>
                {project.details.map((detail, idx)=>{
                  return <li key={idx}>{detail}</li>
                })}
              </ul>
            </Grid>
          </Grid>
        </Typography>
      </Sheet>
    </Modal>
  );
}
