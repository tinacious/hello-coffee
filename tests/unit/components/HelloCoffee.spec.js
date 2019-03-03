import { shallowMount } from "@vue/test-utils";
import HelloCoffee from "@/components/HelloCoffee.vue";
import { Coffee } from "@/services/Coffee";

describe("HelloCoffee.vue", () => {
  let wrapper, colombiana, kenyan;

  const initComponent = async () => {
    wrapper = await shallowMount(HelloCoffee);

    colombiana = wrapper.findAll(".coffees__entry").at(0);
    kenyan = wrapper.findAll(".coffees__entry").at(1);
  };

  beforeEach(() => {
    const mockResponse = [
      {
        photo: "http://path/to/img/colombiana.png",
        name: "Las Palmas",
        country: "Colombia",
        roaster: "San Sebastian",
        rating: 5,
        tastingNotes: "Lemongrass, sugarcane, juicy",
        description: "Que <strong>sabroso</strong>"
      },
      {
        photo: "http://path/to/img/kenyan.png",
        name: "Kiamugumo",
        roaster: "Pilot",
        country: "Kenya",
        rating: 4,
        tastingNotes: "grapefruit, floral, juicy",
        description: "Delicious!"
      }
    ];

    jest.spyOn(Coffee, "get").mockReturnValue(Promise.resolve(mockResponse));
  });

  it("gets coffee", async () => {
    await initComponent();

    expect(Coffee.get).toHaveBeenCalled();
  });

  it("shows the tasting notes", async () => {
    await initComponent();

    expect(colombiana.find("h2").text()).toEqual("Las Palmas");
    expect(kenyan.find("h2").text()).toEqual("Kiamugumo");
  });

  it("shows the country name and flag", async () => {
    await initComponent();

    expect(colombiana.find(".coffees__country").text()).toEqual("🇨🇴 Colombia");
    expect(kenyan.find(".coffees__country").text()).toEqual("🇰🇪 Kenya");
  });

  it("shows the roaster", async () => {
    await initComponent();

    expect(colombiana.text()).toContain("🔥San Sebastian");
    expect(kenyan.text()).toContain("🔥Pilot");
  });

  it("shows the tasting notes", async () => {
    await initComponent();

    expect(colombiana.find(".coffees__tasting-notes").text()).toEqual(
      "Lemongrass, sugarcane, juicy"
    );
    expect(kenyan.find(".coffees__tasting-notes").text()).toEqual(
      "grapefruit, floral, juicy"
    );
  });

  it("shows the review description", async () => {
    await initComponent();

    // Renders the HTML
    expect(colombiana.find(".coffees__description").text()).toEqual(
      "Que sabroso"
    );
    expect(colombiana.find(".coffees__description").html()).toEqual(
      '<div class="coffees__description">Que <strong>sabroso</strong></div>'
    );
    expect(kenyan.find(".coffees__description").text()).toEqual("Delicious!");
  });

  it("shows the rating", async () => {
    await initComponent();

    expect(colombiana.find(".coffees__rating").text()).toEqual(
      "⭐️⭐️⭐️⭐️⭐️"
    );
    expect(kenyan.find(".coffees__rating").text()).toEqual("⭐️⭐️⭐️⭐️");
  });

  it("shows the photo", async () => {
    await initComponent();

    expect(colombiana.find(".coffees__image").attributes("src")).toEqual(
      "http://path/to/img/colombiana.png"
    );
    expect(kenyan.find(".coffees__image").attributes("src")).toEqual(
      "http://path/to/img/kenyan.png"
    );
  });
});
