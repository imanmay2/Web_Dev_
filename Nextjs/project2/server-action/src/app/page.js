
import styles from './page.module.css';
import handleSubmit from './action/form';
export default function Home() {
  return (
    <div>
      <form action={handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input className={styles.input}  name="name" type="text" id="name" />
        </div>

        <div>
          <label htmlFor="add">Address : </label>
          <input className={styles.input} name="add" type="text" id="add" />
        </div>

        <div>
          <button>Submit</button>
        </div>

      </form>
    </div>
  );
}
