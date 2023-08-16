import { Outlet, Link } from "react-router-dom";
import styles from "./layout.module.scss";
import logo from "./logoTest.png";

function Layout() {
  return (
    <>
      <nav className={styles.nav}>
        <img src={logo} className={styles.logo}></img>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/" className={styles.link}>
              ABOUT US
            </Link>
            <Link to="/" className={styles.link}>
              会社情報
            </Link>
            <ul className={styles.sub}>
              <aside>
                <li>ABOUT US</li>
                <li>会社情報</li>
              </aside>
              <aside>
                <li>会社情報TOP</li>
                <li>役員紹介</li>
                <li>IR情報</li>
                <li>プレスルーム</li>
                <li>経営理念</li>
                <li>社会課題への取り組み</li>
              </aside>
            </ul>
          </li>
          <li className={styles.li}>
            <Link to="/test2" className={styles.link}>
              OUR EXPERTISE
            </Link>
            <Link to="/test2" className={styles.link}>
              ソリューション
            </Link>
            <ul className={styles.sub}>
              <aside>
                <li>OUR EXPERTISE</li>
                <li>ソリューション</li>
              </aside>
              <aside>
                <li>ソリューションTOP</li>
                <li>コンサルティング</li>
                <li>IT開発</li>
                <li>UX/UI</li>
                <li>QA・テスト</li>
                <li>Webマーケティング</li>
                <li>カスタマーサービス ⿻</li>
                <li>ソリューションプロセス</li>
                <li>ARSAGA INSIGHT ENGINE powered by GPT SaaS ⿻</li>
                <li>ARSAGA INSIGHT ENGINE powered by GPT Enterprise ⿻</li>
                <li>資本業務提携支援サービス「シリーズN」⿻</li>
                <li>人材紹介業向け管理サービス「FalconDB」⿻</li>
                <li>ライブ動画配信ソリューション ⿻</li>
              </aside>
            </ul>
          </li>
          <li className={styles.li}>
            <Link to="/test2" className={styles.link}>
              OUR WORKS
            </Link>
            <Link to="/test2" className={styles.link}>
              事例・実績
            </Link>
            <ul className={styles.sub}>
              <aside>
                <li> OUR WORKS</li>
                <li> 事例・実績</li>
              </aside>
              <aside>
                <li>事例・実績TOP</li>
              </aside>
            </ul>
          </li>
          <li className={styles.li}>
            <Link to="/test2" className={styles.link}>
              OUR NEWS
            </Link>
            <Link to="/test2" className={styles.link}>
              ニュース
            </Link>
            <ul className={styles.sub}>
              <aside>
                <li> OUR NEWS</li>
                <li> ニュース</li>
              </aside>
              <aside>
                <li>ニュースTOP</li>
                <li>DX用語辞典</li>
              </aside>
            </ul>
          </li>
          <li className={styles.li}>
            <Link to="/test2" className={styles.link}>
              WORK AT ARSAGA
            </Link>
            <Link to="/test2" className={styles.link}>
              採用情報
            </Link>
            <ul className={styles.sub}>
              <aside>
                <li> WORK AT ARSAGA</li>
                <li> 採用情報</li>
              </aside>
              <aside>
                <li>採用情報TOP</li>
              </aside>
            </ul>
          </li>
          <li className={styles.li}>
            <Link to="/test2" className={styles.link}>
              CONTACT US
            </Link>
            <Link to="/test2" className={styles.link}>
              {" "}
              お問い合わせ
            </Link>
          </li>
          <li className={styles.li}>
            <p>JP</p>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
export default Layout;
