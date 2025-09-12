import React from "react";
import styles from "../styles/autoplaycarousel.module.css";
import CarouselItem from "./CarouselItem";
import { Helmet } from "react-helmet";

export default function AutoplayCarousel() {
  const cardDetails = {
    0: {
      imgUrl: "/images/client1.png",
      title: "Text 1",
    },
    1: {
      imgUrl: "/images/client2.png",
      title: "Text 2",
    },
    2: {
      imgUrl: "/images/client3.png",
      title: "Text 3",
    },
    3: {
      imgUrl: "/images/client4.png",
      title: "Text 4",
    },
    4: {
      imgUrl: "/images/client5.png",
      title: "Text 5",
    },
    5: {
      imgUrl: "/images/client6.png",
      title: "Text 6",
    },
    6: {
      imgUrl: "/images/client7.png",
      title: "Text 7",
    },
    7: {
      imgUrl: "/images/client8.png",
      title: "Text 8",
    },
    8: {
      imgUrl: "/images/client9.png",
      title: "Text 9",
    },
    9: {
      imgUrl: "/images/client10.png",
      title: "Text 10",
    },
    10: {
      imgUrl: "/images/client11.png",
      title: "Text 11",
    },
    11: {
      imgUrl: "/images/client12.png",
      title: "Text 12",
    },
    12: {
      imgUrl: "/images/client13.png",
      title: "Text 13",
    },
    13: {
      imgUrl: "/images/client14.png",
      title: "Text 14",
    },
    14: {
      imgUrl: "/images/client15.png",
      title: "Text 15",
    },
    15: {
      imgUrl: "/images/client16.png",
      title: "Text 16",
    },
    16: {
      imgUrl: "/images/client17.png",
      title: "Text 17",
    },
    17: {
      imgUrl: "/images/client18.png",
      title: "Text 18",
    },
  };

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginTop: "5%",
          marginBottom: "2%",
        }}
      >
        Our Clients
      </h2>
      <div
        className={styles["carousel-container"]}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
          marginBottom: "5%",
        }}
      >
        <div className={styles["carousel-track"]}>
          {Object.keys(cardDetails).map((detailKey) => (
            <CarouselItem
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
              key={detailKey}
            />
          ))}
        </div>
      </div>
    </>
  );
}
