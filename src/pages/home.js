import React from "react";
import Header from "../components/header";
import { Container, Card, Typography, Button, Box } from "@mui/material";
export default function home() {
  return (
    <div>
      <Header />
      <Container fixed>
        <Card
          sx={{
            textAlign: "center",
            mt: 4,
            boxShadow: "none",
            border: "1px solid #eee",
            pb: 3,
          }}
          id="sec1"
        >
          <Box
            component="img"
            alt="truck1"
            src="/truck1.png"
            sx={{
              width: { md: "500px", xs: "50%" },
            }}
          />
          <Typography variant="h2" color="text.primary">
            Heading1
          </Typography>
          <Typography variant="h6" color="text.primary" fontWeight={400}>
            Sub Heading1
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Begin
          </Button>
        </Card>
        <Card
          sx={{
            textAlign: "center",
            my: 4,
            boxShadow: "none",
            border: "1px solid #eee",
            pb: 3,
          }}
        >
          <Box
            component="img"
            alt="truck2"
            src="/truck2.png"
            sx={{
              width: { md: "500px", xs: "50%" },
            }}
          />
          <Typography variant="h2" color="text.primary">
            Heading1
          </Typography>
          <Typography variant="h6" color="text.primary" fontWeight={400}>
            Sub Heading1
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Begin
          </Button>
        </Card>
      </Container>
    </div>
  );
}
