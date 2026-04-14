import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  FormHelperText,
} from "@mui/material";

const styles = {
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  label: {
    color: "#8b6f47",
    "&.Mui-focused": {
      color: "#FF9E5E",
    },
  },
  inputRoot: {
    borderRadius: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    "& fieldset": {
      borderColor: "#8b6f47",
    },
    "&:hover fieldset": {
      borderColor: "#FF9E5E",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF9E5E",
    },
  },
  submitButton: {
    py: 2,
    px: 4,
    fontSize: "1.25rem",
    borderRadius: "16px",
    backgroundColor: "#FF9E5E",
    textTransform: "none",
    boxShadow: "0 4px 14px 0 rgba(0,0,0,0.1)",
    "&:hover": {
      backgroundColor: "#FF8640",
    },
  },
};
const ServiceForm = ({
  handleSubmit,
  handleInputChange,
  service,
  formData,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={styles.formContainer}>
        {service.inputs.map((input) => (
          <Box key={input.name}>
            {input.type === "select" ? (
              <FormControl fullWidth>
                <InputLabel sx={styles.label}>{input.label}</InputLabel>
                <Select
                  sx={styles.inputRoot}
                  value={formData[input.name] || ""}
                  label={input.label}
                  onChange={(e) =>
                    handleInputChange(input.name, e.target.value)
                  }
                >
                  {input.options?.map((opt) => (
                    <MenuItem key={opt} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText sx={{ color: "var(--ac-brown)", opacity: 0.8 }}>
                  {input.helper}
                </FormHelperText>
              </FormControl>
            ) : (
              <TextField
                fullWidth
                label={input.label}
                type={input.type}
                helperText={input.helper}
                sx={{ "& .MuiOutlinedInput-root": styles.inputRoot }}
                InputLabelProps={{ sx: styles.label }}
                onChange={(e) => handleInputChange(input.name, e.target.value)}
              />
            )}
          </Box>
        ))}
      </Box>

      <Box sx={{ marginTop: "32px" }}>
        <Button
          sx={styles.submitButton}
          type="submit"
          fullWidth
          variant="contained"
        >
          {service.actionLabel}
        </Button>
      </Box>
    </form>
  );
};

export default ServiceForm;
