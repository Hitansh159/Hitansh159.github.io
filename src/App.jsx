import NavBar from "./components/Navbar"
import Intro from "./components/Intro"
import About from "./components/About"
import Experience from "./components/Experience"
import Project from "./components/Project"
import Skill from "./components/Skill"
import Achievement from "./components/Achievement"
import Speaker from "./components/Speaker"
import Contact from "./components/Contact"
import './app.css'
import { Typography, Stack } from "@mui/joy"

function App() {

  return (
    <>
        <NavBar />
        <Stack gap={2} style={{width:"min(80%, 1200px)", marginInline:"auto", paddingBlockEnd:"50px"}}>
          <Intro />
          <About />
          <Experience />
          <Project />
          <Skill />
          <Speaker/>
        {/* 
        <Contact/>
        */}
        </Stack>
        <Typography level="h4" textAlign={"center"}>  
          Thats All Folks! Made while groveing with Songs 🎧 and React 👨‍💻
        </Typography>
    </>
  )
}

export default App
