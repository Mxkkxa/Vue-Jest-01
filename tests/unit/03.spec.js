// ✅ spyOn
// ✅ wrapper.vm


import { mount } from "@vue/test-utils";

const Login = {
  template: `
      <div>
        <p>{{ message }}</p>
        <button @click="login">Giriş yap</button>
      </div>
    `,
  mounted() {
    this.message = "Giriş yapınız";
  },
  data() {
    return { message: "" };
  },
  methods: {
    login() {
      this.message = "Merhaba kullanıcı";
    },
  },
};

test("increments login value on click", async () => {
  const spy = jest.spyOn(Login.methods, "login");
  const wrapper = mount(Login);
  const button = wrapper.find("button");

  expect(wrapper.vm.message).toBe("Giriş yapınız");

  await button.trigger("click");

  expect(spy).toBeCalled();

  expect(wrapper.vm.message).toBe("Merhaba kullanıcı");
});