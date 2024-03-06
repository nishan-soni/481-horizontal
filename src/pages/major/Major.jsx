import RequirementsPage from "../../components/requirementspage";

const Major = () => {

  const data = {
    credits_completed: 12,
    credits_remaining: 4,
    reqtitle: "Major: Computer Science",
    reqs: [
      {
        name: "Logic Requirement",
        credits: 3,
        outof:3,
        completion: "complete",
        courses: [
          {
            course: "PHIL 279",
            sem: "Fall 2021",
            grade: "A",
            status: "complete",
          },
        ],
      },
      {
        name: "Ethics Requirement",
        completion: "in-complete",
        credits: 0,
        outof:3,
        courses: [{
          course: "PHIL 314",
          sem: "N/A",
          grade: "N/A",
          status: "in-complete",
        }],
      },
      {
        name: "9 Units of CPSC Courses at the 300 level or above.",
        credits: 9,
        outof: 9,
        completion: "in-complete",
        courses: [
          {
            course: "CPSC 329",
            sem: "Winter 2022",
            grade: "B-",
            status: "complete",
          },
          {
            course: "CPSC 331",
            sem: "Winter 2023",
            grade: "A-",
            status: "complete",
          },
          {
            course: "CPSC 359",
            sem: "Winter 2024",
            grade: "A+",
            status: "in-progress",
          },
        ],
      },
    ],
  };
  return (
    <>
      <RequirementsPage data={data} />
    </>
  );
};

export default Major;
