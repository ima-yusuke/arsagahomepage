import ThirdComponent from "./thirdComponent";
import styles from "./homeThirdSection.module.scss";

let firstSection = [
  {
    title: "純国産",
    text: "コンサルから開発まで一貫して国内で行うことで、技術やノウハウが蓄積され、日本のDX人材の育成を促進",
  },
  {
    title: "業界経験豊かなコンサルタント",
    text: "各業界での経験があるコンサルタントが在籍",
  },
  {
    title: "幅広い技術スタック",
    text: "技術レイヤーに関わらず最新技術を常に取り入れた開発",
  },
];

let secondSection = [
  {
    title: "営業組織を持たない",
    text: "営業部隊を持たない事で適正価格にて提供",
  },
  {
    title: "ロイヤリティー不要",
    text: "独立系企業のため、親会社へのロイヤリティーが不要",
  },
  { title: "中間マージン不要", text: "下請けがないので、中間マージンが不要" },
];

let thirdSection = [
  {
    title: "from A to Z",
    text: "コンサルから開発・運用・保守までをシームレスに提供",
  },
  { title: "切り売り可能", text: "スポット対応や小規模案件の支援も柔軟に対応" },
  {
    title: "最速で提供",
    text: "オフショア・下請けしないからこそ効率的なデリバリーを実現",
  },
];

function HomeThirdSection() {
  return (
    <>
      <section className={styles.section}>
        <article>
        <h2>
          WHY ARSAGA<br></br>
          <span>アルサーガパートナーズが選ばれる理由</span>
        </h2>
        <p>
          圧倒的な品質・適正コスト・スピードで、お客様のDX戦略をバックアップします!
        </p>
        </article>
        <ThirdComponent datas={firstSection} title={"Quality"}></ThirdComponent>
        <ThirdComponent datas={secondSection} title={"Cost"}></ThirdComponent>
        <ThirdComponent
          datas={thirdSection}
          title={"Delivery"}
        ></ThirdComponent>
      </section>
    </>
  );
}
export default HomeThirdSection;
