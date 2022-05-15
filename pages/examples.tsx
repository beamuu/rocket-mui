import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  IconButton,
  LinearProgress,
  Slider,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import Navbar from "../src/components/Navbar";
import StyledLinearProgress from "../src/components/styled/StyledLinearProgress";

const Section = styled(Box)`
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Examples: NextPage = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: "40px", marginBottom: "40px" }}>
        <Section>
          <Typography variant="h4">Preconfigured theme</Typography>
          <Divider />
          <Typography>
            This theme is configured as a dark theme. You can customize these theme in
            `src/themes/mui-dark`.
          </Typography>
        </Section>
        <Section>
          <Typography variant="h4">Typography</Typography>
          <Divider />
          <Stack spacing={2}>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
            <Typography variant="body1">
              (body1) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt
              laboriosam delectus voluptas quae aperiam aut placeat fugit eum magni? Libero
              reprehenderit, perspiciatis eum at amet autem quia impedit molestiae?
            </Typography>
            <Typography variant="body2">
              (body2) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt
              laboriosam delectus voluptas quae aperiam aut placeat fugit eum magni? Libero
              reprehenderit, perspiciatis eum at amet autem quia impedit molestiae?
            </Typography>
          </Stack>
        </Section>
        <Section>
          <Typography variant="h4">Buttons</Typography>
          <Divider />
          <Stack direction="row" spacing={2} sx={{ my: 2 }}>
            <Button variant="contained">Primary Button</Button>
            <Button variant="contained" color="error">
              Secondary Button
            </Button>
            <Button variant="contained" color="warning">
              Warning Button
            </Button>
            <Button variant="contained" color="info">
              Info Button
            </Button>
            <Button variant="contained" color="success">
              Success Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ my: 2 }}>
            <Button variant="outlined">Primary Button</Button>
            <Button variant="outlined" color="secondary">
              Secondary Button
            </Button>
            <Button variant="outlined" color="warning">
              Warning Button
            </Button>
            <Button variant="outlined" color="info">
              Info Button
            </Button>
            <Button variant="outlined" color="success">
              Success Button
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ my: 2 }}>
            <Button variant="text">Primary Button</Button>
            <Button variant="text" color="error">
              Secondary Button
            </Button>
            <Button variant="text" color="warning">
              Warning Button
            </Button>
            <Button variant="text" color="info">
              Info Button
            </Button>
            <Button variant="text" color="success">
              Success Button
            </Button>
          </Stack>
        </Section>
        <Section>
          <Typography variant="h4">TextField</Typography>
          <Divider />
          <Stack spacing={2}>
            <TextField placeholder="This is Filled" />
            <TextField placeholder="This is Outlined" variant="outlined" />
          </Stack>
        </Section>
        <Section>
          <Typography variant="h4">Card</Typography>
          <Divider />
          <Stack direction="row" spacing={2}>
            <Card
              sx={{
                width: "fit-content",
                maxWidth: "500px",
                height: "fit-content",
              }}
            >
              <CardContent sx={{ p: "30px" }}>
                <Typography variant="h5">🎉 We did it bro, this is awesome.</Typography>
                <Divider />
                <Typography variant="body1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae
                  reprehenderit eligendi, voluptatum maxime voluptatibus corrupti, autem, unde
                  cupiditate excepturi nemo sit debitis molestiae! A voluptas aliquam itaque
                  dignissimos esse.
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: "fit-content",
                maxWidth: "500px",
                height: "fit-content",
                display: "flex",
                position: "relative",
                minHeight: "200px",
              }}
            >
              <CardContent sx={{ p: "30px", minWidth: "200px", width: "30vw" }}>
                <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: 700 }}>
                  My Universe
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "14px", marginTop: "3px" }}>
                  Coldplay, BTS
                </Typography>
                <StyledLinearProgress
                  variant="determinate"
                  value={40}
                  sx={{ color: "white", marginTop: 2, marginBottom: 2 }}
                />
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                  <IconButton>
                    <SkipPreviousIcon />
                  </IconButton>
                  <IconButton>
                    <PauseCircleFilledIcon fontSize="large" />
                  </IconButton>
                  <IconButton>
                    <SkipNextIcon />
                  </IconButton>
                </Stack>
              </CardContent>
              <Box
                sx={{
                  backgroundImage:
                    "url(https://cdns-images.dzcdn.net/images/cover/b9133002f605093482a187335b2dac24/500x500.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minWidth: "200px",
                  aspectRatio: "1/1",
                }}
              ></Box>
            </Card>
          </Stack>
        </Section>
      </Container>
    </>
  );
};

export default Examples;
