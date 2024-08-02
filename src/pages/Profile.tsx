import { useAtom } from "jotai";
import { Button, Switch } from "@material-tailwind/react";
import { tmdbSessionIdAtom } from "../states/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Account } from "../api/account";
import { useCallback, useMemo } from "react";
import { Authentication } from "../api/authentication";

function Profile() {
  const [, setSessionId] = useAtom(tmdbSessionIdAtom);
  const { data: accountDetails } = useQuery({
    queryKey: ["Account.getAccountDetails"],
    queryFn: () => Account.getAccountDetails(),
  });
  const profileImgUrl = useMemo(
    () =>
      accountDetails?.avatar.tmdb.avatar_path ??
      `https://api.dicebear.com/9.x/initials/svg?seed=${accountDetails?.username}`,
    [accountDetails],
  );
  const displayName = useMemo(() => {
    if (accountDetails?.name && accountDetails.name.trim() != "")
      return accountDetails?.name;
    else return accountDetails?.username;
  }, [accountDetails]);
  const logoutSession = useMutation({
    mutationFn: Authentication.deleteSession,
  });
  const logout = useCallback(() => {
    logoutSession.mutateAsync().then((res) => {
      if (res.success) return setSessionId(null);
    });
  }, [logoutSession, setSessionId]);

  return (
    <div
      id="profile"
      className="prose prose-invert mx-auto flex h-full w-full flex-col items-center gap-5"
    >
      <div className="flex flex-col gap-2">
        <div
          className="relative mt-8 aspect-square min-w-36 rounded-md bg-accent bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${profileImgUrl})`,
          }}
        >
          <i className="eva eva-plus-square absolute -bottom-6 -right-3 text-3xl opacity-70" />
        </div>

        <div className="rounded-md bg-accent p-2 pt-0">
          <p className="m-0 font-semibold">{displayName}</p>
          <figcaption className="m-0 text-xs">
            {accountDetails?.username}
          </figcaption>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-3 px-4 xl:px-6">
        <div className="flex w-full items-center justify-between rounded-lg bg-accent py-2">
          <i className="eva eva-globe-2 px-2 text-4xl" />
          <div className="flex flex-auto flex-col">
            <h4 className="m-0">Display Language</h4>
            <p className="m-0">
              Change the language of the text you see on Netflix across all
              devices.
            </p>
          </div>
          <i className="eva eva-arrow-ios-forward px-1 text-3xl" />
        </div>

        <div className="flex w-full items-center justify-between rounded-lg bg-accent py-2">
          <i className="eva eva-play-circle px-2 text-4xl" />
          <div className="flex flex-auto flex-col">
            <h4 className="m-0">Autoplay next episode</h4>
            <p className="m-0">On all devices</p>
          </div>
          <div className="mr-3">
            <Switch color="blue" defaultChecked crossOrigin={undefined} />
          </div>
        </div>
      </div>

      <Button
        color="black"
        className="flex items-center gap-1 rounded-md bg-black p-2 font-bold"
        onClick={logout}
        loading={logoutSession.isPending}
      >
        <i className="eva eva-log-out text-xl" />
        Logout
      </Button>
    </div>
  );
}

export default Profile;
