import { Box, Button, Container, Divider, Stack, styled, Typography } from "@mui/material";
import type { NextPage } from "next";

const Section = styled(Box)`
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Examples: NextPage = () => {
  return (
    <Container sx={{ marginTop: "40px", marginBottom: "40px" }}>
      <Section>
        <Typography variant="h4">Typography</Typography>
        <Divider />
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
        <Typography variant="body1">
          (body1) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt laboriosam
          delectus voluptas quae aperiam aut placeat fugit eum magni? Libero reprehenderit,
          perspiciatis eum at amet autem quia impedit molestiae?
        </Typography>
      </Section>
      <Section>
        <Typography variant="h4">Buttons</Typography>
        <Divider />
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Hello World</Button>
          <Button variant="contained" color="secondary">Hello World</Button>
        </Stack>
      </Section>
    </Container>
  );
};

export default Examples;
