import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const styles = {
  card: {
    textDecoration: "none",
    display: "block",
    height: "100%",
    margin: "8px",
  },
  cardContainer: {
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    backdropFilter: "blur(12px)",
    borderRadius: 3,
    padding: 4,
    minHeight: "150px",
    border: "2px solid #8B6F47",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      borderColor: "#FF9E5E",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    },
  },
  image: {
    height: "100px",
    width: "100px",
    marginRight: "16px",
  },
};
const Card = (props) => {
  const { title, icon, subtitle, navigateTo } = props;
  return (
    <Link to={`/service/${navigateTo}`} style={styles.card}>
      <Box sx={styles.cardContainer}>
        <Box>
          <img src={icon} alt={subtitle} style={styles.image} />
        </Box>
        <Box>
          <Typography variant="h5">{title}</Typography>

          <Typography variant="body2">{subtitle}</Typography>
          <Typography variant="subtitle2">
            Click here to check it out!
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
