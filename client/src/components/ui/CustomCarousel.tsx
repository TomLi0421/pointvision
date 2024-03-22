import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

function CustomCarousel(props: any) {
  return (
    <Carousel NextIcon={<ArrowForwardIos />} PrevIcon={<ArrowBackIos />}>
      {props.images.map((image: any, index: number) => (
        <Paper
          key={index}
          className="min-h-72 flex items-center h-full md:h-[28rem]"
          elevation={0}
        >
          <img
            className="object-contain h-full w-full"
            src={`https://d2j3uzrexrokpc.cloudfront.net/${props.type}/${image}`}
            alt={props.name}
          />
        </Paper>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
