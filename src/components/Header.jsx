import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Leaf from "../assets/leaf.png";

const styles = {
  appbar: {
    backdropFilter: "blur(12px)",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderBottom: "2px solid rgba(#8B6F47, 0.2)",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  toolbar: {
    margin: 1,
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "50px",
    width: "50px",
    margin: "0px 16px",
  },
};
const Header = () => {
  return (
    <AppBar position="sticky" sx={styles.appbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={styles.toolbar}>
          <img src={Leaf} alt="logo" style={styles.logo} />
          <Typography variant="h4">Tom Nook's Prediction Shop</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
