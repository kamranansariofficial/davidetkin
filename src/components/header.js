import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid, Typography, Box, Button } from "@mui/material";

const RootStyled = styled("div")(({ theme }) => ({
  background: "#F6F6F6",
  padding: theme.spacing(5, 0),
  marginTop: theme.spacing(6),
  minHeight: 500,
  position: "relative",
  "& .scroll-btn": {
    position: "absolute",
    left: "50%",
    bottom: 30,
    transform: "translate(-50%, 0%)",
  },
}));

export default function header() {
  return (
    <RootStyled>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Typography
              variant="h3"
              color="text.primary"
              mt={2}
              fontWeight={600}
            >
              Best Quality
            </Typography>
            <Typography variant="h3" color="text.primary" fontWeight={600}>
              Largest Selection
            </Typography>
            <Typography variant="h3" color="text.primary" fontWeight={600}>
              Unmatched Expertise
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box
        component="img"
        src="/flower.png"
        alt="flower"
        sx={{
          width: 200,
          position: "absolute",
          left: { md: 40, xs: "auto" },
          right: { md: "auto", xs: 40 },
          bottom: { md: 100, xs: 140 },
        }}
      />
      <Box
        component="img"
        src="/cloud.webp"
        alt="cloud"
        sx={{
          width: 200,
          position: "absolute",
          left: 300,
          bottom: 180,
          display: { md: "block", xs: "none" },
        }}
      />
      <Box
        component="img"
        src="/tree1.webp"
        alt="tree1"
        sx={{
          width: 200,
          position: "absolute",
          right: 40,
          top: 50,
          display: { md: "block", xs: "none" },
        }}
      />
      <Box
        component="img"
        src="/tree2.png"
        alt="tree2"
        sx={{
          width: 200,
          position: "absolute",
          right: 300,
          top: 100,
          display: { md: "block", xs: "none" },
        }}
      />
      <Button
        variant="text"
        color="primary"
        className="scroll-btn"
        href="#sec1"
      >
        outfit your landscape
      </Button>
    </RootStyled>
  );
}
