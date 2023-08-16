import { useEffect, useRef, useState } from "react";
import styles from "./homeTop.module.scss";
import homeImage from "./homeImg.jpg";
import homePc from "./homePc.jpg";
import slideInfo from "./slideInfo.json";

function HomeTop() {
  const [displayImage, setDisplayImage] = useState(slideInfo[0]);
  const [count, setCount] = useState(0);

  // To change the image
  function createSlide() {
    if (count != 4) {
      setCount(count + 1);

    } else {
      setCount(0);
    }
    setDisplayImage(slideInfo[count]);
    changeDotColor()
  }

  // createSlide function will be called every 3 seconds
  setTimeout(createSlide, 3000);

  const dots = useRef();

//   To change dots color which is under slides
  function changeDotColor() {
    for (let i = 0; i < 5; i++) {
      dots.current.children[i].classList.remove(styles.currentDot);
      dots.current.children[i].classList.add(styles.notCurrentDots);
    }
    dots.current.children[count].classList.add(styles.currentDot);
  }

  useEffect(()=>{
    changeDotColor()
    createSlide()
  },[])


  return (
    <>
      <div className={styles.homeTop}>
        {/*Image and title */}
        <img src={homeImage}></img>
        <div className={styles.title}>
          <h1>
            お客様の<span>DX戦略</span>を<br></br>成功へと導く<br></br>
            アルサーガパートナーズ
          </h1>
          <p>〜最高品質を最速で〜</p>
        </div>

        {/* Right side */}
        <section className={styles.homeRight}>
          <div className={styles.homeRightTop}>
            <img src={homePc}></img>
            <button>詳細を見る</button>
          </div>
          <div className={styles.homeRightButtom}>
            <article>
              <img src={displayImage["image"]}></img>
              <h3>{displayImage["title"]}</h3>
              <p>{displayImage["text"]}</p>
            </article>
          </div>
        </section>

        {/* Dots */}
        <section className={styles.dots} ref={dots}>
          <div ></div>
          <div ></div>
          <div ></div>
          <div ></div>
          <div ></div>
        </section>
      </div>

    </>
  );
}
export default HomeTop;
