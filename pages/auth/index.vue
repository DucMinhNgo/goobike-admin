<template>
  <div class="lg:flex">
    <div class="lg:w-1/2 xl:max-w-screen-sm">
      <div
        class="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12"
      >
        <div class="cursor-pointer flex items-center">
          <div>
            <svg
              class="w-10 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 225 225"
              style="enable-background: new 0 0 225 225"
              xml:space="preserve"
            >
              <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <g>
                  <path
                    id="Layer0_0_1_STROKES"
                    class="st0"
                    d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div
            class="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold"
          >
            GooBike
          </div>
        </div>
      </div>
      <div
        class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl"
      >
        <h2
          class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold"
        >
          Đăng nhập
        </h2>
        <div class="mt-12">
          <a-form
            :model="formState"
            :layout="`vertical`"
            name="basic"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
          >
            <a-form-item
              label="Email"
              name="email"
              :rules="[{ required: true, message: 'Email là bắt buộc!' }]"
            >
              <a-input
                size="large"
                v-model:value="formState.email"
                placeholder="Nhập email"
              />
            </a-form-item>

            <a-form-item
              label="Mật khẩu"
              name="password"
              class="text-[16px]"
              :rules="[{ required: true, message: 'Mật khẩu là bắt buộc!' }]"
            >
              <a-input-password
                size="large"
                v-model:value="formState.password"
                placeholder="Nhập mật khẩu"
              />
            </a-form-item>

            <a-form-item noStyle>
              <a-button
                class="w-full"
                type="primary"
                size="large"
                html-type="submit"
              >
                Đăng nhập
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
    <LoginBackground />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

definePageMeta({
  layout: "empty",
});

interface FormState {
  email: string;
  password: string;
}

const formState = reactive<FormState>({
  email: "",
  password: "",
});

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
