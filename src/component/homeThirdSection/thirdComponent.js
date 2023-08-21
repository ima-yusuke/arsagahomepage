import styles from "./homeThirdSection.module.scss";

function ThirdComponent({ datas, title }) {
  
  return (
    <>
      <section className={styles.compoSection}>
        <h3>{title}</h3>
        <article>
          {datas.map((data) => {
            return(
            <aside className={styles.aside}>
              <h4>{data.title}</h4>
              <p>{data.text}</p>
            </aside>);
          })}
        </article>
      </section>
    </>
  );
}
export default ThirdComponent;
