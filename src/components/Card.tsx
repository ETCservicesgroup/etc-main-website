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
  setVisiblePage?: Function,
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
    setVisiblePage,
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
            <Box component='ul' sx={cardContentStyle}>
              {cardContent}
            </Box>
            <Box sx={buttonWrapperStyle}>
              <Button 
                variant='contained'
                sx={buttonStyle}
                onClick={(e) => {
                if(setVisiblePage){
                  setVisiblePage(Pages.CONTACT_US);
                  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }
              }}>
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
            <Typography component='span' sx={cardLabelStyle}>{cardLabel}</Typography>
            <Typography component='p' sx={cardContentStyle}>{cardContent}</Typography>
          </Box>
        );
  }
};

export default Card;