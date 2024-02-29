
/**
 * TODO: generalize the functionality
 * 
 * @returns An array containing slices for the pie chart
 */
export function formatData(data) {
    const ratios = [];
    const totalProgression = data["Talia Ferris"]["total-progression"];

    const emptySegment = {
      "id": "Remain",
      "label": "Remain",
      "value": 120 - (17 * 3),
    }
    ratios.push(emptySegment);

    for (let courseType in totalProgression) {
      let course = courseType.replace(/-courses$/, "");
      course = course.charAt(0).toUpperCase() + course.slice(1);

      const newSegment = {
        "id": course,
        "label": course,
        "value": totalProgression[courseType] * 3,
      }
      ratios.push(newSegment);
    }

    // console.log(ratios);
    return ratios;
  }