import RequirementsPage from "../../components/requirementspage";
const Concentration = () => {
  const data = {
    credits_completed: 9,
    credits_remaining: 6,
    reqtitle: "Concentration: Game Development",
    reqs: [
      {
        name: "3 units from Physics 211, 221 or 227",
        credits: 3,
        outof: 3,
        completion: "complete",
        courses: [
          {
            course: "Physics 221",
            sem: "Fall 2021",
            grade: "A",
            status: "complete",
          },
        ],
      },
      {
        name: "3 units from Computer Science 433, 531 or 535",
        completion: "complete",
        credits: 3,
        outof: 3,
        courses: [
          {
            course: "CPSC 433",
            sem: "Winter 2022",
            grade: "B-",
            status: "complete",
          },
          {
            course: "CPSC 531",
            sem: "Winter 2024",
            grade: "N/A",
            status: "in-progress",
          },
        ],
      },
      {
        name: "6 units Computer Science 453 and 585",
        credits: 3,
        outof: 6,
        completion: "in-complete",
        courses: [
          {
            course: "CPSC 453",
            sem: "Winter 2023",
            grade: "C+",
            status: "complete",
          },
          {
            course: "CPSC 585",
            sem: "N/A",
            grade: "N/A",
            status: "in-complete",
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

export default Concentration;
