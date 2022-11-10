import { Box, Button } from "@mui/material";
import { ReactNode } from "react";
import { Pages } from "../types/types";

interface ICardProps {
  iconUrl?: string,
  cardLabel: string,
  cardContent: ReactNode,
  cardContainerStyle: object,
  iconStyle?: object,
  cardLabelStyle: object,
  cardContentStyle: object,
  iconAlt?: string,
  page: string,
  contentContainerStyle?: object,
  buttonWrapperStyle?: object,
  buttonStyle?: object,
  buttonLabelStyle?: object,
  buttonLabel?: string,
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
    buttonWrapperStyle,
    buttonStyle,
    buttonLabelStyle,
    buttonLabel,
  } = props;

  switch(page) {
    case Pages.HOW_IT_WORKS:
      return (
        <Box sx={cardContainerStyle}>
          <img src={process.env.PUBLIC_URL + iconUrl} alt={iconAlt} style={iconStyle}></img>
            <Box sx={contentContainerStyle}>
              <span style={cardLabelStyle}>{cardLabel}</span>
              <p style={cardContentStyle}>{cardContent}</p>
            </Box>
        </Box>
      );
    case Pages.WHY_US:
      return (
        <Box sx={cardContainerStyle}>
          <img src={process.env.PUBLIC_URL + iconUrl} alt={iconAlt} style={iconStyle}></img>
          <span style={cardLabelStyle}>{cardLabel}</span>
          <p style={cardContentStyle}>{cardContent}</p>
        </Box>
      );
      case Pages.SERVICES:
        return (
          <Box sx={cardContainerStyle}>
            <span style={cardLabelStyle}>{cardLabel}</span>
            <ul style={cardContentStyle}>
              {cardContent}
            </ul>
            <Box sx={buttonWrapperStyle}>
              <Button variant='contained' sx={buttonStyle}>
                <span style={buttonLabelStyle}>
                  {buttonLabel}
                </span>
              </Button>
            </Box>
          </Box>
        );
      default:
        return (
          <Box sx={cardContainerStyle}>
            <span style={cardLabelStyle}>{cardLabel}</span>
            <p style={cardContentStyle}>{cardContent}</p>
          </Box>
        );
  }
};

export default Card;