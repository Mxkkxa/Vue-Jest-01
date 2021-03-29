// ✅ setChecked
// ✅ setData
// x setMethods
// ✅ setProps
// ✅ setSelected
// ✅ setValue

import { mount } from "@vue/test-utils";
// Component
const Lesson06 = {
  template: `
<div>
    <input type='radio' value='test' v-model="radioData">
    <select name="markalar">
        <option value="natgeo">Nat Geo</option>
        <option value="puma">Puma</option>
    </select>
    <input type="text" v-model="textInputData">
</div>
`,
  props: ["testProp"],
  data() {
    return {
      radioData: "",
      textInputData: "",
    };
  },
};

describe("Lesson06", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Lesson06);
  });

  test("setChecked", async () => {
    const input = wrapper.find('input[type="radio"]');
    await input.setChecked(true);
    expect(input.element.checked).toBeTruthy();
  });

  test("setData", () => {
    wrapper.setData({ radioData: "setData Test" });
    expect(wrapper.vm.radioData).toBe("setData Test");
  });

  test("setProps", async () => {
    await wrapper.setProps({ testProp: "123" });
    expect(wrapper.vm.testProp).toBe("123");
  });

  test("setSelected", async () => {
    const options = wrapper.find("select").findAll("option");

    await options.at(1).setSelected();

    expect(wrapper.find("option:checked").element.value).toBe("puma");
  });

  test("setValue", async () => {
    const textInput = wrapper.find('input[type="text"]');

    await textInput.setValue("some data");

    expect(textInput.element.value).toBe("some data");
  });
});
