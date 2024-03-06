// https://medium.com/@rezahedi/how-to-build-table-of-contents-in-astro-and-sectionize-the-markdown-content-78bee84e6a7f
// github.com/rezahedi/rezahedi.dev/blob/main/src/components/TOC.astro
function buildHierarchy(headings: any) {
  const toc: any[] = [];
  const parentHeadings = new Map();

  if (!headings) return toc;

  headings.forEach((h: any) => {
    const heading = { ...h, subheadings: [] };
    parentHeadings.set(heading.depth, heading);
    // Change 2 to 1 if your markdown includes your <h1>
    if (heading.depth === 1) {
      toc.push(heading);
    } else {
      parentHeadings.get(heading.depth - 1).subheadings.push(heading);
    }
  });

  return toc;
}

export default buildHierarchy;
