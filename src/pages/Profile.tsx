import { useSetAtom } from "jotai";
import {
  Button,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Switch,
} from "@material-tailwind/react";
import { tmdbSessionIdAtom } from "../states/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Account } from "../api/account";
import { useCallback, useMemo } from "react";
import { Authentication } from "../api/authentication";
import { Link } from "react-router-dom";

function Profile() {
  const setSessionId = useSetAtom(tmdbSessionIdAtom);
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

        <div className="min-h-10 rounded-md bg-accent p-2 pt-0">
          <p className="m-0 font-semibold">{displayName}</p>
          <figcaption className="m-0 text-xs">
            {accountDetails?.username}
          </figcaption>
        </div>
      </div>

      <List className="flex w-full flex-col items-center justify-center gap-3 px-4 xl:px-6">
        <ListItem
          ripple={false}
          className="flex w-full items-center justify-between rounded-lg"
        >
          <ListItemPrefix>
            <i className="eva eva-play-circle-outline text-3xl" />
          </ListItemPrefix>
          <div className="flex flex-auto flex-col">
            <h4 className="m-0">Autoplay</h4>
            <p className="m-0">
              Automatically play the video/trailer right after opening the
              details page.
            </p>
          </div>
          <div className="mr-3">
            <Switch color="blue" defaultChecked crossOrigin={undefined} />
          </div>
        </ListItem>

        <ListItem className="flex w-full items-center justify-between rounded-lg">
          <ListItemPrefix>
            <i className="eva eva-heart-outline text-3xl" />
          </ListItemPrefix>
          <div className="flex flex-auto flex-col">
            <h4 className="m-0">Favorites</h4>
            <p className="m-0">
              The movies and TV shows you loved will be saved here.
            </p>
          </div>
          <ListItemSuffix>
            <i className="eva eva-arrow-ios-forward px-1 text-3xl" />
          </ListItemSuffix>
        </ListItem>

        <ListItem className="flex w-full items-center justify-between rounded-lg">
          <ListItemPrefix>
            <i className="eva eva-bookmark-outline text-3xl" />
          </ListItemPrefix>
       
          <div className="flex flex-auto flex-col">
            <h4 className="m-0">Watchlist</h4>
            <p className="m-0">
              Add movies and TV shows to your watchlist to watch them later.
            </p>
          </div>
          
          <ListItemSuffix>
            <i className="eva eva-arrow-ios-forward px-1 text-3xl" />
          </ListItemSuffix>
        </ListItem>

        <ListItem className="flex w-full items-center justify-between rounded-lg">
          <ListItemPrefix>
            <i className="eva eva-star-outline text-3xl" />
          </ListItemPrefix>
          <div className="flex flex-auto flex-col">
            <h4 className="m-0">Ratings</h4>
            <p className="m-0">
              The movies and TV shows you rated will be shown here.
            </p>
          </div>
          <ListItemSuffix>
            <i className="eva eva-arrow-ios-forward px-1 text-3xl" />
          </ListItemSuffix>
        </ListItem>
      </List>

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
