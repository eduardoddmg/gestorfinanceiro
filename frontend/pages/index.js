import { increment, decrement, reset } from "../redux/counter";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/home.module.css";

export default function Home() {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={`${styles.container} + shadow-lg`}>
      <h1>Contador: {value}</h1>
      <div className="shadow-lg">
        <button
          className={`${styles.btn}`}
          onClick={() => dispatch(increment())}
        >
          aumentar
        </button>
        <button className={styles.btn} onClick={() => dispatch(decrement())}>
          diminuir
        </button>
        <button className={styles.btn} onClick={() => dispatch(reset({nome: 'dudu', idade: 12}))}>
          resetar
        </button>
      </div>
    </div>
  );
}
