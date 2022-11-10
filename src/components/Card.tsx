import { Box } from "@mui/material";
import { Pages } from "../types/types";

interface ICardProps {
  iconUrl: string,
  cardLabel: string,
  cardContent: string,
  cardContainerStyle: object,
  iconStyle: object,
  cardLabelStyle: object,
  cardContentStyle: object,
  iconAlt: string,
  page?: string,
  contentContainerStyle?: object,
}

const Card = (props: ICardProps) => {
  const {
    iconUrl,
    cardLabel,
    cardContent,
    cardContainerStyle,
    iconStyle,
    cardLabelStyle,
    cardContentStyle,
    iconAlt,
    page,
    contentContainerStyle,
  } = props;
  return (
    page !== Pages.WHY_US ?
    <Box sx={cardContainerStyle}>
      <img src={process.env.PUBLIC_URL + iconUrl} alt={iconAlt} style={iconStyle}></img>
      <Box sx={contentContainerStyle}>
        <span style={cardLabelStyle}>{cardLabel}</span>
        <p style={cardContentStyle}>{cardContent}</p>
      </Box>
    </Box> 
    :
    <Box sx={cardContainerStyle}>
      <img src={process.env.PUBLIC_URL + iconUrl} alt={iconAlt} style={iconStyle}></img>
      <span style={cardLabelStyle}>{cardLabel}</span>
      <p style={cardContentStyle}>{cardContent}</p>
    </Box>
  );
};

export default Card;