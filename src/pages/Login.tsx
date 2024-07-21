import { useState } from "react";
import { Button, Input, Typography } from "@material-tailwind/react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // Handle the login logic here
  };

  return (
    <div
      id="login"
      className="mx-auto flex h-full w-full max-w-sm flex-col items-center justify-evenly"
    >
      <div className="self-start">
        <h1 className="mb-0 text-primary">Movieflix</h1>
        <p className="mt-2">Get inside.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
        <Input
          size="lg"
          color="white"
          type="text"
          className="grow"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          icon={<i className="eva eva-person h-4 w-4 opacity-70" />}
        />
        <div>
          <Input
            size="lg"
            color="white"
            type="password"
            className="grow"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<i className="eva eva-lock h-4 w-4 opacity-70" />}
          />
          <figcaption>
            <i className="eva eva-info mr-1 h-4 w-4" />
            Use at least 8 characters, one uppercase, one lowercase and one
            number.
          </figcaption>
        </div>

        <Button type="submit">Login</Button>
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
