import { Box, Button, Typography } from "@mui/material";
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
          <Box component='img' src={process.env.PUBLIC_URL + iconUrl} alt={iconAlt} sx={iconStyle}></Box>
            <Box sx={contentContainerStyle}>
              <Typography component='span' sx={cardLabelStyle}>{cardLabel}</Typography>
              <Typography component='p' sx={cardContentStyle}>{cardContent}</Typography>
            </Box>
        </Box>
      );
    case Pages.WHY_US:
      return (
        <Box sx={cardContainerStyle}>
          <Box component='img' src={process.env.PUBLIC_URL + iconUrl} alt={iconAlt} sx={iconStyle}></Box>
            <Box sx={contentContainerStyle}>
              <Typography component='span' sx={cardLabelStyle}>{cardLabel}</Typography>
              <Typography component='p' sx={cardContentStyle}>{cardContent}</Typography>
            </Box>
        </Box>
      );
      case Pages.SERVICES:
        return (
          <Box sx={cardContainerStyle}>
            <Typography component='span' sx={cardLabelStyle}>{cardLabel}</Typography>
            <ul style={cardContentStyle}>
              {cardContent}
            </ul>
            <Box sx={buttonWrapperStyle}>
              <Button variant='contained' sx={buttonStyle}>
                <Typography component='span' sx={buttonLabelStyle}>
                  {buttonLabel}
                </Typography>
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