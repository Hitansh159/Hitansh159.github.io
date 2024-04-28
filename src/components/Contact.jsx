import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Typography,
} from "@mui/joy";
import SectionTitle from "./SectionTitle";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  return (
    <div id="contact" style={{ paddingBlockStart: "70px" }}>
      <SectionTitle title="Contact Me!" />
      <Card>
        <Typography level="title-lg" startDecorator={<Mail />}>
          Send an Email!
        </Typography>
        <Divider inset="none" />
        <form
          action="mailto:hkd159+website@gmail.com"
          method="get"
          style={{ width: "100%" }}
        >
          <CardContent
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
              gap: 1.5,
            }}
          >
            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel>Subject</FormLabel>
              <Input onChange={setSubject} />
            </FormControl>
            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel>Body</FormLabel>
              <Textarea minRows={5} onChange={setBody} />
            </FormControl>
            <CardActions sx={{ gridColumn: "1/-1" }}>
              <Button variant="solid" color="primary" type="submit">
                Send Mail
              </Button>
            </CardActions>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
