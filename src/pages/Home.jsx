import React from "react";
import Header from "../components/Header";
import { Box, Typography } from "@mui/material";
import nook from "../assets/nook.png";
import { cards } from "../utils/cards";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ServiceHeader from "../components/ServiceHeader";
const styles = {
  main: {
    paddingX: 1.5,
    paddingY: 3,
    marginX: "auto",
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr", // mobile
      sm: "repeat(2, 1fr)", // tablet
      md: "repeat(3, 1fr)", // desktop
    },
    gap: "2rem",
    width: "100%",
    margin: "0 auto",
  },
};
const Home = () => {
  return (
    <div>
      <Header />
      <Box sx={styles.main}>
        <ServiceHeader
          icon={nook}
          title={"Welcome to Tom Nook's Prediction Shop!"}
          subtitle={
            "An AI-powered service where island analytics meets business instincts."
          }
          emojis={"🦝✨"}
        />
        <Box sx={styles.cardsContainer}>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
