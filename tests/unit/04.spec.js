// ✅ attributes
// ✅ classes
// ✅ emitted
// ✅ exists
// ✅ get
// ✅ text

import { mount } from "@vue/test-utils";
// Component
const CustomTextField = {
  template: `
<div id='paragraph' class='intro'>
    <p>Selam {{ msg }}</p>
    <span>geliştiriciler</span>
</div>
`,
  computed: {
    firstName: {
      get() {
        return this.value;
      },
      set(value) {
        this.emitFirstName(value);
      },
    },
  },
  props: ["msg"],
  methods: {
    emitFirstName(value) {
      return this.$emit("input", value);
    },
  },
};

describe("CustomTextField", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(CustomTextField);
  });
  it("checks wrapper exists", () => {
    expect(wrapper.exists()).toBeTruthy(); // ✅ exists
  });

  it("checks wrapper id", () => {
    expect(wrapper.attributes().id).toBe("paragraph"); // ✅ attributes
  });

  it("checks wrapper classes", () => {
    expect(wrapper.classes()).toContain("intro"); // ✅ classes
  });

  test("it emits expected data", () => {
    wrapper.vm.emitFirstName("selam"); // Emit data
    expect(wrapper.emitted().input[0]).toEqual(["selam"]); // ✅ emitted // Data is emitted with expected value
  });

  test("checks span text", () => {
    // expect(wrapper.find("span"));
    const spanEl = wrapper.get("span"); // ⚠️
    expect(spanEl.text()).toBe("geliştiriciler");
  });
});
