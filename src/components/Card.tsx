import { Box } from "@mui/material";

interface ICardProps {
  iconUrl: string,
  cardLabel: string,
  cardContent: string,
  cardContainerStyle: object,
  iconStyle: object,
  cardLabelStyle: object,
  cardContentStyle: object,
  iconAlt: string,
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
  } = props;
  return (
    <Box sx={cardContainerStyle}>
      <img src={process.env.PUBLIC_URL + iconUrl} alt={iconAlt} style={iconStyle}></img>
      <span style={cardLabelStyle}>{cardLabel}</span>
      <p style={cardContentStyle}>{cardContent}</p>
    </Box>
  );
};

export default Card;