import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import ProgressCircle from "../../components/ProgressCircle";

const RowThree = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        gridColumn={"span 4"}
        gridRow={"span 2"}
        sx={{ backgroundColor: colors.primary[400] }}
        p={"30px"}
      >
        <Typography variant="h5" fontWeight={600}>
          Campaign
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          mt={"25px"}
        >
          <ProgressCircle size={125} />
          <Typography
            variant="h5"
            color={colors.greenAccent[500]}
            sx={{ mt: "15px" }}
          >
            £48,352 revenue generated
          </Typography>
          <Typography>Includes extra misc expenditures and costs</Typography>
        </Box>
      </Box>
      <Box
        gridColumn={"span 4"}
        gridRow={"span 2"}
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{ p: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <Box height={"250px"} mt={"-25px"}>
          <BarChart isDashboard={true} />
        </Box>
      </Box>
      <Box
        gridColumn={"span 4"}
        gridRow={"span 2"}
        sx={{ backgroundColor: colors.primary[400] }}
        p={"30px"}
      >
        <Typography variant="h5" fontWeight={600} sx={{ mb: "15px" }}>
          Geography Based Traffic
        </Typography>
        <Box height={"200px"}>
          <GeographyChart isDashboard={true} />
        </Box>
      </Box>
    </>
  );
};

export default RowThree;
