import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "../../components/StatBox";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

const RowOne = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const iconStyle = { color: colors.greenAccent[600], fontSize: "26px" };

  const stats = [
    {
      title: "12,361",
      subtitle: "Emails Sent",
      progress: 0.75,
      increase: "+14%",
      icon: <EmailIcon sx={iconStyle} />,
    },
    {
      title: "431,225",
      subtitle: "Sales Obtained",
      progress: 0.5,
      increase: "+21%",
      icon: <PointOfSaleIcon sx={iconStyle} />,
    },
    {
      title: "32,441",
      subtitle: "New Clients",
      progress: 0.3,
      increase: "+5%",
      icon: <PersonAddIcon sx={iconStyle} />,
    },
    {
      title: "1,325,134",
      subtitle: "Traffic Received",
      progress: 0.8,
      increase: "+43%",
      icon: <TrafficIcon sx={iconStyle} />,
    },
  ];

  return (
    <>
      {stats.map((stat) => (
        <StatBox
          key={stat.title}
          title={stat.title}
          subtitle={stat.subtitle}
          progress={stat.progress}
          increase={stat.increase}
          icon={stat.icon}
        />
      ))}
    </>
  );
};

export default RowOne;
