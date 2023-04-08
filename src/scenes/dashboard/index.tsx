import { Box, Button, useTheme } from "@mui/material";
import RowOne from "./RowOne";
import RowTwo from "./RowTwo";
import RowThree from "./RowThree";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { tokens } from "../../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"}>
      {/* HEADER */}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* GRID & CHARTS */}
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        gridAutoRows={"140px"}
        gap={"20px"}
      >
        <RowOne />
        <RowTwo />
        <RowThree />
      </Box>
    </Box>
  );
};

export default Dashboard;
