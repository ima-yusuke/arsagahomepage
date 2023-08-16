import styles from "./homeSecondSection.module.scss";
function HomeSecondSection() {
  return (
    <>
      <section className={styles.section}>
        <section className={styles.backColor}>
          <h2>社会課題に挑戦する純国産DXプロフェッショナル集団です</h2>
          <aside>
            <p>
              幅広い業界におけるDXの経験と知見を持った300名のコンサルタントとエンジニアが、
              <br></br>
              日本国内のITリテラシーの向上を後押しし、<br></br>
              お客様に寄り添うことでビジネスの成功をより確実なものへと導きます。
            </p>
            <p className={styles.p}>
              公共サービス、大規模新規事業、ライブ配信、不動産テック、<br></br>
              エンタメ、オンラインゲーム、AI搭載サービス、IoT 等
            </p>
          </aside>
          <article>
            <aside>
              <p>日鉄興和不動産</p>
              <p>三菱地所</p>
              <p>SHIONOGI</p>
              <p>ネクプロ</p>
              <p>1→10</p>
            </aside>
            <aside>
              <p>Sunshine City</p>
              <p>NTTぷらら</p>
              <p>v-cube</p>
              <p>みずほ証券</p>
              <p>株式会社ベネッセホールディングス</p>
            </aside>
            <aside>
              <p>softdeviceinc</p>
              <p>vonage</p>
              <p>sciseed</p>
              <p>wellroom</p>
              <p>ubiquitousai</p>
            </aside>
            <aside>
              <p>incgrow</p>
              <p>野村不動産ホールディングス</p>
              <p>MAGMAG</p>
            </aside>
          </article>
          <div className={styles.button4}>
            <div className={styles.eff4}></div>
            <a href="#">詳しく見る →</a>
          </div>
        </section>
      </section>
    </>
  );
}
export default HomeSecondSection;
