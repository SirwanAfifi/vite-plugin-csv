import { loadCSV } from "../src/csv";

describe("csv loader tests", () => {
  it("parses CSV", () => {
    const csv = `id,location_id,organization_id,service_id,name,title,email,department
    1,1,,,Susan Houston,Director of Older Adult Services,,
    2,1,,,Christina Gonzalez,Center Director,,`;

    expect(loadCSV(csv)).toMatchObject([
      {
        id: "    1",
        location_id: "1",
        organization_id: "",
        service_id: "",
        name: "Susan Houston",
        title: "Director of Older Adult Services",
        email: "",
        department: "",
      },
      {
        id: "    2",
        location_id: "1",
        organization_id: "",
        service_id: "",
        name: "Christina Gonzalez",
        title: "Center Director",
        email: "",
        department: "",
      },
    ]);
  });
});
