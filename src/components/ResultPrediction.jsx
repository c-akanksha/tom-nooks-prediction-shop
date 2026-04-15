import React from "react";
import { Box, Button, Typography } from "@mui/material";

const styles = {
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(16px)",
    borderRadius: 3,
    padding: 3,
    boxShadow: "0 25px 50px -12px rgba(#8B6F47, 0.25)",
    border: "2px solid rgba(93, 64, 55, 0.3)",
    textAlign: "center",
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  nook: {
    height: "100px",
    weight: "100px",
  },
  backHome: {
    margin: 2,
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

const ResultPrediction = ({ pred, message, icon, handleRetry }) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.cardContent}>
        <img src={icon} alt={pred} style={styles.nook} />
        <Box sx={{ ...styles.cardContent, flexDirection: "column" }}>
          <Typography variant="h4" sx={{ maxWidth: "90%" }}>
            Prediction is {pred}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginTop: 1, maxWidth: "85%" }}
          >
            {message}
          </Typography>
        </Box>
        <img src={icon} alt={pred} style={styles.nook} />
      </Box>
      <Button onClick={handleRetry} sx={styles.backHome}>
        Try Again
      </Button>
    </Box>
  );
};

export default ResultPrediction;
