import puppeteer from 'puppeteer';
import fs from 'fs';

/**
  * execute script within Calendar page to get each of the course titles and their
  * assocated hrefs
 */
async function scrapeCalendarData(page, baseCalendarPageUrl) {
  // Navigate the page to a URL
  await page.goto(baseCalendarPageUrl + "/course-by-faculty.html");

  const courseHrefs = await page.evaluate(() => {
    // select all p elements within spans with class 'generic-body'
    const courseLinks = Array.from(document.querySelectorAll('.generic-body p a'));
    const courseList = [];

    courseLinks.forEach((link) => {
      courseList.push({
        title: link.textContent.trim(), // get the text content of the link; remove spaces
        href: link.getAttribute('href') // get the href attribute of the link
      });
    });
    return courseList;
  });

  return courseHrefs;
}

/**
 * 
 * @param {*} page 
 * @param {*} baseCalendarPageUrl 
 * @param {*} calendarData 
 */
async function scrapeCourses(page, baseCalendarPageUrl, calendarData) {
  const programData = { "courses": {} };

  for (let i = 0; i < calendarData.length; i++) {
  // for (let i = 0; i < 1; i++) {
    console.log(baseCalendarPageUrl + '/' + calendarData[i].href);
    await page.goto(baseCalendarPageUrl + '/' + calendarData[i].href)

    const courseData = await page.evaluate(() => {
      const courseData = {};

      const trElements = document.querySelectorAll('table[cellpadding="2"] > tbody > tr'); // select all elements in this HTML hierachy

      const courseAliasElement = document.querySelector('.page-title'); // select the course title
      const courseName = courseAliasElement.textContent.trim().split(' ');
      const courseAlias = courseName[courseName.length - 1] // trim it to only include the alias

      trElements.forEach((tr, index) => { // for each tr in the html

        const courseInfoTr = tr.nextElementSibling; // get the next sibling to the tr element
        if (courseInfoTr) {
          const courseDescriptionElement = courseInfoTr.querySelector('.course-desc'); // select the course description label
          const coursePrereqElement = courseInfoTr.querySelector('.course-prereq'); // select the course prereq label
          const courseHoursElement = courseInfoTr.querySelector('.course-hours'); // select the course hours label

          const cnCourseElmnt = tr.querySelector('.course-code[id*="cnCourse"]');
          const cnCodeElmnt = tr.querySelector('.course-code[id*="cnCode"]');
          const cnTitleElmnt = tr.querySelector('.course-code[id*="cnTitle"]');

          if (cnCourseElmnt && cnCodeElmnt && courseAlias) { // if these 3 things are defined
            const cnCourse = cnCourseElmnt.textContent.trim();
            const cnCode = cnCodeElmnt.textContent.trim();
            const cnTitle = cnTitleElmnt.textContent.trim();
            const cnDesc = courseDescriptionElement.textContent.trim();

            const dirtyUnits = courseHoursElement.textContent.trim().split(" ");
            const cnUnits = dirtyUnits[0] + " " + dirtyUnits[1].replace(";", "");

            const cnPreq = coursePrereqElement.textContent.trim()


            courseData[courseAlias + " " + cnCode] = {
              "title": courseAlias,
              "id": cnCode,
              "fullTitle": cnCourse,
              "overview": cnTitle,
              "description": cnDesc,
              "preq": cnPreq,
              "units": cnUnits,
              "status": "unenrolled",
              "grade": "N/A",
            };
          }
        }
      });

      return courseData;
    });

    Object.assign(programData.courses, courseData);
  }

  return programData;
}




(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const baseCalendarPageUrl = 'https://www.ucalgary.ca/pubs/calendar/staging/archives/2023';

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  const calendarData = [
    {
      "title": "ACSC",
      "href": "actuarial-science.html"
    },
    {
      "title": "ASTR",
      "href": "astronomy.html"
    },
    {
      "title": "ASPH",
      "href": "astrophysics.html"
    },
    {
      "title": "BCEM",
      "href": "biochemistry.html"
    },
    {
      "title": "BIOL",
      "href": "biology.html"
    },
    {
      "title": "BIST",
      "href": "biostatistics.html"
    },
    {
      "title": "CMMB",
      "href": "cellular-molecular-and-microbial-biology.html"
    },
    {
      "title": "CHEM",
      "href": "chemistry.html"
    },
    {
      "title": "CMDA",
      "href": "computational-media-design.html"
    },
    {
      "title": "CPSC",
      "href": "computer-science.html"
    },
    {
      "title": "DATA",
      "href": "data-science.html"
    },
  ]

  // const calendarData = await scrapeCalendarData(page, baseCalendarPageUrl);
  // console.log(calendarData);
  const CourseData = await scrapeCourses(page, baseCalendarPageUrl, calendarData);
  console.log(courseData);

  // Write courseData to a JSON file
  fs.writeFile('./courseData.json', JSON.stringify(courseData, null, 2), err => {
    if (err) {
      console.error('Error writing JSON file:', err);
    } else {
      console.log('courseData has been saved to courseData.json');
    }
  });


  await browser.close();
})();
