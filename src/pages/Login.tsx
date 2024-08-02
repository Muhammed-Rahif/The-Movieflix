/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, Button, Input } from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";
import LogoText from "../components/LogoText";
import { Authentication, LoginUserData } from "../api/authentication";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { useAtom } from "jotai";
import { tmdbSessionIdAtom } from "../states/auth";

type LoginInputs = {
  username: string;
  password: string;
};
const getRequestTokenKey = "Authentication.getRequestToken";

export default function Login() {
  const queryClient = useQueryClient();
  const [, setSessionId] = useAtom(tmdbSessionIdAtom);
  const requestToken = useQuery({
    queryKey: [getRequestTokenKey],
    queryFn: Authentication.getRequestToken,
    refetchInterval: 1000 * 60 * 60, // 1 hour
    staleTime: 1000 * 60 * 60, // 1 hour
  });
  const login = useMutation({
    mutationFn: Authentication.loginUser,
  });
  const createSession = useMutation({
    mutationFn: Authentication.createSession,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = async ({
    password,
    username,
  }) => {
    const data: LoginUserData = {
      password,
      username,
      request_token: requestToken.data!.request_token,
    };
    const loginData = await login.mutateAsync(data);
    const session = await createSession.mutateAsync(loginData.request_token);

    if (session.success) setSessionId(session.session_id);
    await queryClient.invalidateQueries({ queryKey: [getRequestTokenKey] });
  };
  const resetErrors = useCallback(() => {
    login.reset();
    createSession.reset();
  }, [createSession, login]);

  return (
    <div
      id="login"
      className="mx-auto flex h-screen w-full max-w-sm flex-col items-center justify-evenly p-4"
    >
      <div className="self-start">
        <LogoText />
        <p className="mt-2">Get inside.</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        <Alert
          open={login.isError || createSession.isError}
          onClose={resetErrors}
          variant="outlined"
          color="red"
          className="overflow-hidden duration-300"
          animate={{
            mount: { maxHeight: "12rem" },
            unmount: { maxHeight: "0rem" },
          }}
        >
          <figcaption className="m-0">
            {(login.error as any)?.response.data.status_message ||
              (createSession.error as any)?.response.data.status_message}
          </figcaption>
        </Alert>

        <Input
          size="lg"
          color="white"
          type="text"
          className="grow"
          label="Username"
          icon={<i className="eva eva-person text-xl opacity-70" />}
          {...register("username", { required: true })}
          error={Boolean(errors.username)}
          autoComplete="off"
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
        />

        <figcaption>
          <i className="eva eva-info mr-1 h-4 w-4" />
          Same username and password of your TMDB account. If you don't have a
          TMDB account, please create one{" "}
          <a href="https://www.themoviedb.org/signup" target="_blank">
            from here
          </a>{" "}
          and then try to login here.
        </figcaption>

        <Button
          type="submit"
          loading={
            createSession.isPending || login.isPending || requestToken.isPending
          }
          fullWidth
          className="flex items-center justify-center"
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
