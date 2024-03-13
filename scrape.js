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
    console.log(baseCalendarPageUrl + '/' + calendarData[i].href);
    await page.goto(baseCalendarPageUrl + '/' + calendarData[i].href)

    const courseData = await page.evaluate(() => {
      const courseData = {};

      const trElements = document.querySelectorAll('table[cellpadding="2"] > tbody > tr');
      const courseAliasElement = document.querySelector('.page-title');
      const courseName = courseAliasElement.textContent.trim().split(' ');
      const courseAlias = courseName[courseName.length - 1]

      trElements.forEach((tr, index) => {
        const cnCourseElmnt = tr.querySelector('.course-code[id*="cnCourse"]');
        const cnCodeElmnt = tr.querySelector('.course-code[id*="cnCode"]');
        const cnTitleElmnt = tr.querySelector('.course-code[id*="cnTitle"]');
        const cnDescElmnt = tr.querySelector('.course-desc');
        const cnUnitsElmnt = tr.querySelector('.course-hours');
        const cnPreqElmnt = tr.querySelector('.course-prereq');

        if (cnCourseElmnt && cnCodeElmnt) {
          const cnCourse = cnCourseElmnt.textContent.trim();
          const cnCode = cnCodeElmnt.textContent.trim();
          const cnTitle = cnTitleElmnt.textContent.trim();
          const cnDesc = cnDescElmnt ? cnDescElmnt.textContent.trim() : 'N/A';
          const cnUnits = cnUnitsElmnt ? cnUnitsElmnt.textContent.trim() : 'N/A';
          const cnPreq = cnPreqElmnt ? cnPreqElmnt.textContent.trim() : 'N/A';

          courseData[courseAlias + " " + cnCode] = {
            "title": courseAlias,
            "id": cnCode,
            "fullTitle": cnTitle,
            "description": cnDesc,
            "preq": cnPreq,
            "units": cnUnits
          };
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

  // const calendarData = [
  //   { title: 'ARCH', href: 'architecture.html' },
  //   { title: 'APLA', href: 'architecture-planning-and-landscape.html' }
  // ]

  const calendarData = await scrapeCalendarData(page, baseCalendarPageUrl);
  console.log(calendarData);
  const courseData = await scrapeCourses(page, baseCalendarPageUrl, calendarData);
  console.log(courseData);

  // Write courseData to a JSON file
  fs.writeFile('courseData.json', JSON.stringify(courseData, null, 2), err => {
    if (err) {
      console.error('Error writing JSON file:', err);
    } else {
      console.log('courseData has been saved to courseData.json');
    }
  });


  await browser.close();
})();
