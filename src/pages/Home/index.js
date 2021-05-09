import React, { useEffect, useRef } from "react";
import "./style.css";

const Home = () => {
  const refImgs = useRef({});

  useEffect(() => {
    window.addEventListener("scroll", moveImgScroll);
  }, []);

  const moveImgScroll = () => {
    const scroll = window.scrollY;

    refImgs.current["spiderman"].style.top = scroll * -0.7 + "px";
    refImgs.current["spiderman"].style.left = scroll * 1 + "px";
    refImgs.current["spiderman"].style.transform = `rotateZ(${
      scroll * 0.06
    }deg)`;

    refImgs.current["title"].style.top = scroll * -0.15 + "px";
  };

  return (
    <>
      <section>
        <img src="./img/cidade.jpg" alt="cidade" />
        <img
          src="./img/spider-man-1.png"
          alt="Spider-man"
          className="spider-man"
          ref={(e) => (refImgs.current["spiderman"] = e)}
        />

        <h1 ref={(e) => (refImgs.current["title"] = e)}>Spider-Man</h1>
      </section>

      <section></section>
    </>
  );
};

export default Home;
