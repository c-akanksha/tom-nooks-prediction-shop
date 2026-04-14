import React, { useState } from "react";
import Header from "../components/Header";
import { cards } from "../utils/cards";
import Footer from "../components/Footer";
import {
  Box,
  Typography,
  FormControl,
  Button,
  Select,
  TextField,
  InputLabel,
  MenuItem,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector, useDispatch } from "react-redux";
import LeafLoader from "../components/LeafLoader";
import ServiceHeader from "../components/ServiceHeader";
import FallbackCard from "../components/FallbackCard";
import ServiceForm from "../components/ServiceForm";
import ResultPrediction from "../components/ResultPrediction";
import { useParams, useNavigate } from "react-router-dom";

const styles = {
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
  content: {
    margin: 2,
  },
  formContent: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(12px)",
    borderRadius: 3,
    padding: 3,
    boxShadow: "0 25px 50px -12px rgba(#8B6F47, 0.25)",
    border: "2px solid rgba(93, 64, 55, 0.3)",
    textAlign: "center",
    marginY: 3,
  },
};

const Service = () => {
  const { serviceId } = useParams();
  const service = cards.find((s) => s.navigateTo === `/${serviceId}`);

  if (!service) {
    return <FallbackCard text="Service not found" goBack={goBack} />;
  }

  const [formData, setFormData] = useState({});

  const { loading, data, error } = useSelector(
    (state) => state[service.selector],
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(service.findResult(formData));
  };

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({});
    dispatch(service.resetData());
  };

  const goBack = () => {
    setFormData({});
    dispatch(service.resetData());
    navigate("/");
  };

  if (error || (data && data.error)) {
    return <FallbackCard text="Error occured!" goBack={goBack} />;
  }

  if (loading) {
    return <LeafLoader />;
  }

  return (
    <div>
      <Header />
      <Box sx={styles.content}>
        <Button style={styles.backHome} onClick={goBack}>
          <ArrowBackIcon sx={{ fontSize: 20 }} />
          <Typography variant="body2" sx={{ color: "white" }}>
            {" "}
            Back to Home
          </Typography>
        </Button>
        <Box sx={styles.content}>
          {!data ? (
            <>
              <ServiceHeader
                icon={service.icon}
                title={service.title}
                subtitle={service.character.greeting}
                instruction={service.subtitle}
              />
              <Box sx={styles.formContent}>
                <ServiceForm
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  service={service}
                  formData={formData}
                />
              </Box>
            </>
          ) : (
            <ResultPrediction
              pred={
                data.predicted_price ||
                data.sell_price ||
                data.result ||
                data.prediction ||
                data.recommended_gift ||
                data.result
              }
              message={data.message}
              icon={service.icon}
              handleRetry={resetForm}
            />
          )}
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Service;
