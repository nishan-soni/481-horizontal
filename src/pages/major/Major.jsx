import RequirementsPage from "../../components/requirementspage";

const Major = () => {
  const data = {
    credits_completed: 21,
    credits_remaining: 16,
    reqtitle: "Major in Computer Science",
    reqs: [
      {
        name: "Logic Requirement",
        credits: 3,
        outof: 3,
        completion: "complete",
        courses: [
          {
            course: "PHIL 279",
            sem: "Fall 2021",
            grade: "A",
            status: "complete",
            reqsSatisfied: true,
          },
        ],
      },
      {
        name: "21 units from Computer Science 251, 331, 351, 355, 413, 449 and 457",
        credits: 9,
        outof: 21,
        completion: "in-complete",
        courses: [
          {
            course: "CPSC 251",
            sem: "Winter 2022",
            grade: "B-",
            status: "complete",
            credits: 3,
            reqsSatisfied: true,
          },
          {
            course: "CPSC 331",
            sem: "Winter 2023",
            grade: "A-",
            status: "complete",
            credits: 3,
            reqsSatisfied: true,
          },
          {
            course: "CPSC 351",
            sem: "Winter 2024",
            grade: "A+",
            status: "in-progress",
            credits: 3,
            reqsSatisfied: true,
          },
          {
            course: "CPSC 355",
            sem: "Fall 2023",
            grade: "A+",
            status: "complete",
            credits: 3,
            reqsSatisfied: true,
          },
          {
            course: "CPSC 413",
            sem: "Winter 2024",
            grade: "N/A",
            status: "in-progress",
            credits: 3,
            reqsSatisfied: true,
          },
          {
            course: "CPSC 457",
            sem: "Winter 2024",
            grade: "N/A",
            status: "in-progress",
            credits: 3,
            reqsSatisfied: true,
          },
        ],
      },
      {
        name: "Ethics Requirement",
        completion: "in-complete",
        credits: 0,
        outof: 3,
        courses: [
          {
            course: "PHIL 314",
            sem: "N/A",
            grade: "N/A",
            status: "in-complete",
            credits: 3,
            reqsSatisfied: true,
          },
        ],
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
            credits: 3,
            reqsSatisfied: true,
          },
          {
            course: "CPSC 331",
            sem: "Winter 2023",
            grade: "A-",
            status: "complete",
            credits: 3,
            reqsSatisfied: true,
          },
          {
            course: "CPSC 359",
            sem: "Winter 2024",
            grade: "A+",
            status: "in-progress",
            credits: 3,
            reqsSatisfied: true,
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
