import { Button, Input } from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";
import LogoText from "../components/LogoText";

type LoginInputs = {
  username: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data);

  return (
    <div
      id="login"
      className="mx-auto flex h-full w-full max-w-sm flex-col items-center justify-evenly"
    >
      <div className="self-start">
        <LogoText />
        <p className="mt-2">Get inside.</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        <Input
          size="lg"
          color="white"
          type="text"
          className="grow"
          label="Username"
          icon={<i className="eva eva-person text-xl opacity-70" />}
          {...register("username", { required: true })}
          error={Boolean(errors.username)}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />

        <Input
          size="lg"
          color="white"
          type="password"
          className="grow"
          label="Password"
          icon={<i className="eva eva-lock text-xl opacity-70" />}
          {...register("password", { required: true })}
          error={Boolean(errors.password)}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />

        <figcaption>
          <i className="eva eva-info mr-1 h-4 w-4" />
          Same username and password of your TMDB account. If you don't have a
          TMDB account, please create one{" "}
          <a href="https://www.themoviedb.org/signup">from here</a> and then try
          to login here.
        </figcaption>

        <Button
          type="submit"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Login
        </Button>
      </form>

      <div className="not-prose p-4 text-center">
        <a href="https://www.themoviedb.org/" target="_blank">
          <p className="mb-2">Powered by</p>
          <img
            className="w-44"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
            alt="Powered by The Movie DB"
          />
        </a>
      </div>
    </div>
  );
}
