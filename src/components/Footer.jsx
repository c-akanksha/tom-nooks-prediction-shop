import React from "react";
import { Typography } from "@mui/material";

const styles = {
  footer: {
    textAlign: "center",
    padding: "2rem 0",
    color: "#6B5D4F",
  },
  emoji: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1.5,
    marginBottom: 2,
  },
  link: {
    textDecoration: "underline",
    transition: "color 0.3s ease",
    color: "#FF9E5E",
    "&:hover": {
      color: "#FF8640",
    },
  },
};
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.emoji}>
        <span>🌸</span>
        <span>🍃</span>
        <span>🦋</span>
        <span>🍃</span>
        <span>🌸</span>
      </div>
      <Typography variant="subtitle2">
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/c-akanksha"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Akanksha
        </a>
      </Typography>
    </footer>
  );
};

export default Footer;
