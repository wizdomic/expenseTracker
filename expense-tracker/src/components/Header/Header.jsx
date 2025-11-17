import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <img
        src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_1_1200x1200/public/field_blog_entry_images/2024-03/money%20decision%20photo.jpg?itok=hDA3p5YI"
        alt=""
        className={styles.img}
      />

      <h1 className={styles.title}>Expense Tracker</h1>
    </div>
  );
}
