import { Grid, Paper, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { OutlinedInput, InputAdornment, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const CustomInput = () => {
  return (
    <Paper
      sx={{ p: 3, bgcolor: "#283241", maxWidth: 700, mx: "auto", width: 550 }}
    >
      <Paper
        sx={{
          p: 3,
          bgcolor: "#0b1423",
          maxWidth: 700,
          mx: "auto",
          border: 0,
          borderRadius: 3,
          height: 120,
          width: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Grid container gap={1}>
          <Grid item>
            <PersonAddIcon sx={{ color: "#75fbb1", fontSize: "45px" }} />
          </Grid>
          <Grid item>
            <Typography
              fontWeight={300}
              color="white"
              sx={{
                fontSize: "27px",
                pl: 2,
                pt: 1,
              }}
            >
              Add contact
            </Typography>
          </Grid>
        </Grid>
        <Box position="relative" sx={{}}>
          <SearchIcon
            sx={{
              position: "absolute",
              color: "white",
              zIndex: "9999",
              left: 10,
              top: 17,
              pl: 1,
            }}
          />
          <OutlinedInput
            placeholder="@Username"
            size="small"
            aria-label=""
            autoFocus
            sx={{
              color: "white",
              bgcolor: "#293343",
              borderRadius: 10,
              mt: 1,
              pl: 4,
            }}
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <QrCodeScannerIcon sx={{ color: "#fff", pr: 1 }} />
                </IconButton>
              </InputAdornment>
            }
            color="info"
          />
        </Box>
      </Paper>
    </Paper>
  );
};

export default CustomInput;
