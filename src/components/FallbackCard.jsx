import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const styles = {
  notFoundCountainer: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  backHome: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",

    padding: "0.75rem 1.5rem",
    borderRadius: "9999px",

    backgroundColor: "#FF9E5E",
    color: "white",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#FF8640",
    },
  },
};
const FallbackCard = ({ text, goBack }) => {
  return (
    <Box sx={styles.notFoundCountainer}>
      <Box>
        <Typography variant="h2">{text}</Typography>

        <Button onClick={goBack} style={styles.backHome}>
          <ArrowBackIcon sx={{ fontSize: 20 }} />
          <Typography variant="body2" sx={{ color: "white" }}>
            {" "}
            Back to Home
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default FallbackCard;
