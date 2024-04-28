import { Typography } from "@mui/joy"

function Underline(){
    return(
        <div style={{width:"25%", minHeight:"10px", backgroundColor:"#7de2fe", margin:"5px 0 20px 0", borderRadius:"25px"}}>
            {" "}
        </div>
    )
}

export default function SectionTitle({title=""}){
    return(
        <>
            <Typography level="h2">{title}</Typography>
            <Underline/>
        </>
    )
}