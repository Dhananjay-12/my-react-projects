import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from "./Footer";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>The list of cities</p>

      <Footer />
    </div>
  );
}
