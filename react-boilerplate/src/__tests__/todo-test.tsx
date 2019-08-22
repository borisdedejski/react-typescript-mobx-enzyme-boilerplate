import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";

Enzyme.configure({ adapter: new Adapter() });
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Test todos.tsx", () => {
  test("Each todo needs to have id number", () => {
    // https://airbnb.io/enzyme/docs/api/
  });
});
