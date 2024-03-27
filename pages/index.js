import MeetupList from "../components/meetups/MeetupList";

const Dummy_MeetUp = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://imgs.search.brave.com/NtmEfPH0tfwV0IMfXhG3IXnhiF-KjIK9zWAo1BmRFI8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMy8w/NC8xMS8xOS80Ni9i/dWlsZGluZy0xMDI4/NDBfNjQwLmpwZw",
    address: "xyx",
    description: "xyz",
  },
];
const HomePage = (props) => {
  return (
    <div>
      <MeetupList meetups={props.meetups} />
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: Dummy_MeetUp,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: Dummy_MeetUp,
    },
    revalidate: 1,
  };
}

export default HomePage;
