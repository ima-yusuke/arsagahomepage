import styles from "./homeForthSection.module.scss";
import homeForthImg from "./homeForthSection.jpg";
import "font-awesome/css/font-awesome.min.css";

function HomeForthSection() {
  return (
    <>
      <section className={styles.parentSection}>
        <h2 className={styles.backH2}>OUR EXPERTISE</h2>
        <section className={styles.section}>
          <article>
            <h2>
              OUR EXPERTISE<br></br>
              <span>ソリューション</span>
            </h2>
            <p>
              DXを活用した幅広い戦略コンサルティングとIT開発により、お客様のビジネスを成功へと導きます
            </p>
          </article>
          <article className={styles.imgAndIcons}>
            <img src={homeForthImg}></img>
            <aside>
              <aside>
                <div>
                  <i className="fa fa-solid fa-calculator"></i>
                  <p>
                    DXコンサル<br></br>ティング
                  </p>
                </div>
                <div>
                  <i className="fa fa-solid fa-clipboard"></i>
                  <p>
                    IT・<br></br>システム開発
                  </p>
                </div>
                <div>
                  <i className="fa fa-solid fa-folder"></i>
                  <p>ウェブ制作</p>
                </div>
                <div>
                  <i className="fa fa-solid fa-globe"></i>
                  <p>アプリ開発</p>
                </div>
                <div>
                  <i className="fa fa-solid fa-calculator"></i>
                  <p>
                    UX/UI戦略・<br></br>デザイン
                  </p>
                </div>
                <div>
                  <i className="fa fa-solid fa-clipboard"></i>
                  <p>QA・テスト</p>
                </div>
                <div>
                  <i className="fa fa-solid fa-folder"></i>
                  <p>
                    Web<br></br>マーケティング
                  </p>
                </div>
                <div>
                  <i className="fa fa-solid fa-globe"></i>
                  <p>
                    カスタマー<br></br>サービス
                  </p>
                </div>
              </aside>
              <div className={styles.button4}>
                <div className={styles.eff4}></div>
                <a href="#">詳しく見る →</a>
              </div>
            </aside>
          </article>
        </section>
      </section>
    </>
  );
}
export default HomeForthSection;
