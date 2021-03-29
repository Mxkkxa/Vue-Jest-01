// ✅ propsData
// ✅ text

import { mount } from "@vue/test-utils";

// Bileşen
const MessageComponent = {
  template: "<p>Selam {{ msg }}</p>",
  props: ["msg"],
};

test("displays message", () => {
  const wrapper = mount(MessageComponent, {
    propsData: {
      msg: "millet",
    },
  });

  expect(wrapper.text()).toContain("Selam millet");
});
