import React, { Fragment } from "react";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";

const MeetupDetails = () => {
  return (
    <MeetUpDetail
      image="https://imgs.search.brave.com/NtmEfPH0tfwV0IMfXhG3IXnhiF-KjIK9zWAo1BmRFI8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMy8w/NC8xMS8xOS80Ni9i/dWlsZGluZy0xMDI4/NDBfNjQwLmpwZw"
      title="xyz"
      address="xyz"
      description="xyz"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://imgs.search.brave.com/NtmEfPH0tfwV0IMfXhG3IXnhiF-KjIK9zWAo1BmRFI8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMy8w/NC8xMS8xOS80Ni9i/dWlsZGluZy0xMDI4/NDBfNjQwLmpwZw",
        id: meetupId,
        title: "xyz",
        address: "xyz",
        description: "xyz",
      },
    },
  };
}

export default MeetupDetails;
