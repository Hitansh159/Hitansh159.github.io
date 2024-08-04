import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import JobModal from './JobModal';
import ProjectModal from './ProjectModal';

export default function GradientCard({imgSrc, cardTitle, cardSubTitle, type, modalData}) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
    
    <Card sx={{ minHeight: '280px', width: 270 }} id={`card-${cardTitle}`} onClick={()=>setOpen(true)}>
      <CardCover>
        <img
          src={`/assets/${imgSrc}`}
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="title-lg" textColor="#fff">
          {cardTitle}
        </Typography>
        <Typography
          textColor="neutral.300"
        >
          {cardSubTitle}
        </Typography>
      </CardContent>
    </Card>
      <Modal type={type} open={open} setOpen={setOpen} modalData={modalData}/>

    </>
  );
}
function Modal({type, open, setOpen, modalData}){
  if(type=="job")
    return(
      <JobModal open={open} setOpen={setOpen} job={modalData}/>
    );
  return <ProjectModal open={open} setOpen={setOpen} project={modalData}/>;

}