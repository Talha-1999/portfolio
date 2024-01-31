import { Spin } from "antd";
import styles from "@/app/(pages)/home/home.module.css";

export default function Loading() {
  return <Spin spinning={true} className={styles.spinner} />;
}
