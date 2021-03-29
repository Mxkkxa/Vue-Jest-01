// ✅ isVisible
// ✅ props
// ✅ trigger

import { mount } from "@vue/test-utils";
// Component
const Lesson05 = {
  template: `
<div id='paragraph' class='intro'>
    <span v-show="message!=''">{{ message }}</span>
    <button @click="setMessage"></button>
</div>
`,
  props: ["propMsg"],
  data() {
    return {
      message: "",
    };
  },
  methods: {
    setMessage() {
      this.message = this.propMsg;
    },
  },
};

describe("Lesson05", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Lesson05, {
      propsData: {
        propMsg: "Jest is fun",
      },
    });
  });

  it("checks visibility", async () => {
    const span = wrapper.get("span");
    const button = wrapper.get("button");
    expect(span.isVisible()).toBeFalsy(); // ✅ isVisible

    await button.trigger("click"); // ✅ trigger
    expect(span.isVisible()).toBeTruthy();

    expect(wrapper.props("propMsg")).toBe("Jest is fun"); // ✅ props
  });
});
