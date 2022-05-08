import { Button, Container, Stack, styled, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { BsArrowRightShort } from "react-icons/bs";

const ScreenContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Home: NextPage = () => {
  const router = useRouter();

  const toExamples = () => {
    router.push("/examples");
  };

  return (
    <ScreenContainer>
      <Stack spacing={3} alignItems="center">
        <Typography variant="h4">MUI Boilerplate for NextJS</Typography>
        <Typography variant="body1" sx={{ opacity: 0.7 }}>
          See the preconfigured components at /examples
        </Typography>
        <Button variant="contained" onClick={toExamples}>
          Go to examples <BsArrowRightShort style={{ marginLeft: "7px"}} size="1.4rem"/>
        </Button>
      </Stack>
    </ScreenContainer>
  );
};

export default Home;
