import { Coffee } from "@/services/Coffee";
import * as Contentful from "@/services/contentful";
import contentfulResponse from "./contentful-fixture";

describe("Coffee service", () => {
  beforeEach(() => {
    jest
      .spyOn(Contentful, "getEntries")
      .mockReturnValue(Promise.resolve(contentfulResponse));
    jest
      .spyOn(Contentful, "toHtml")
      .mockReturnValue("<strong>some html</strong>");
  });

  it("fetches from Contentful", async () => {
    await Coffee.get();
    expect(Contentful.getEntries).toHaveBeenCalled();
  });

  it("transforms the data", async () => {
    const coffees = await Coffee.get();

    expect(coffees[0].country).toEqual("Jamaica");
    expect(coffees[0].description).toEqual("<strong>some html</strong>");
    expect(coffees[0].name).toEqual("Blue Mountain");
    expect(coffees[0].rating).toEqual(3);
    expect(coffees[0].photo).toEqual(
      "https://contentful-url/path/to/blue-mountain.jpg"
    );
    expect(coffees[1].country).toEqual("Ethiopia");
    expect(coffees[1].description).toEqual("<strong>some html</strong>");
    expect(coffees[1].name).toEqual("Buna");
    expect(coffees[1].rating).toEqual(4);
    expect(coffees[1].photo).toEqual("https://contentful-url/path/to/buna.jpg");
  });
});
