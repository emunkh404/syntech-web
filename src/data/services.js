import {
  PeopleFill,
  ClipboardData,
  CalculatorFill,
} from "react-bootstrap-icons";
import styles from "../components/custom-components/featured/Featured.module.css";

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  {
    key: "crm",
    title: "CRM",
    description: "Manage customer relationships efficiently.",
    icon: <PeopleFill size={50} className={styles.icon} />,
  },
  {
    key: "project",
    title: "Project",
    description: "Streamline your project management processes.",
    icon: <ClipboardData size={50} className={styles.icon} />,
  },
  {
    key: "accounting",
    title: "Accounting",
    description: "Simplify financial tasks and reporting.",
    icon: <CalculatorFill size={50} className={styles.icon} />,
  },
];
