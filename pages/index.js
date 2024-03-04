import { Fragment } from "react";
import Link from "next/link";


const Home = () => {
  return (
    <Fragment>
      <h1 className="bold">HomePage</h1>
      <ul>
        <li className="decoration-inherit">
          <Link href="/news/NextJs">Next JS is Great FrameWork</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
};
export default Home;
