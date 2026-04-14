import React from "react";
import { Box, Typography } from "@mui/material";

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
  },
  nook: {
    height: "100px",
    weight: "100px",
  },
};
const ServiceHeader = ({ icon, title, subtitle, emojis, instruction }) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.cardContent}>
        <img src={icon} alt={title} style={styles.nook} />
        <Box sx={{ ...styles.cardContent, flexDirection: "column" }}>
          <Typography variant="body1">{emojis}</Typography>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body1" sx={{ marginTop: 1, maxWidth: "75%" }}>
            {subtitle}
          </Typography>
          {instruction && (
            <Typography
              variant="caption"
              sx={{ marginTop: 1, maxWidth: "75%" }}
            >
              ({instruction})
            </Typography>
          )}
        </Box>
        <img src={icon} alt={title} style={styles.nook} />
      </Box>
    </Box>
  );
};

export default ServiceHeader;
