// ✅ find
// ✅ text
// ✅ trigger

import { mount } from "@vue/test-utils";

const Counter = {
  template: `
      <div>
        <button @click="count++">Arttır</button>
        <p>Sayaç: {{ count }}</p>
      </div>
    `,
  data() {
    return { count: 0 };
  },
};

test("increments counter value on click", async () => {
  const wrapper = mount(Counter);
  const button = wrapper.find("button");
  const text = wrapper.find("p");

  expect(text.text()).toContain("Sayaç: 0");

  await button.trigger("click");

  expect(text.text()).toContain("Sayaç: 1");
});