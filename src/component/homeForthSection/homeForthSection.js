import styles from "./homeForthSection.module.scss";

function HomeForthSection() {
  return (
    <>
      <section>
        <section>
          <h2>OUR EXPERTISE</h2>
        </section>
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
        </section>
      </section>
    </>
  );
}
export default HomeForthSection;
