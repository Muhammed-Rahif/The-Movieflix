import { useAtom } from "jotai";
import avatarImg from "../assets/profileAvatar.jpg";
import { Button, Switch } from "@material-tailwind/react";
import { tmdbSessionIdAtom } from "../states/auth";

function Profile() {
  const [, setSessionId] = useAtom(tmdbSessionIdAtom);

  return (
    <div
      id="profile"
      className="prose prose-invert mx-auto flex h-full w-full flex-col items-center gap-5"
    >
      <div className="flex flex-col gap-2">
        <div className="relative">
          <img src={avatarImg} className="mb-0 w-28 rounded-md" alt="" />
          <i className="eva eva-plus-square absolute -bottom-6 -right-3 text-3xl" />
        </div>

        <div className="rounded-md bg-accent p-2 pt-0">
          <p className="m-0 font-semibold">Frank</p>
          <figcaption className="m-0 text-xs">frank202</figcaption>
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
        onClick={() => setSessionId(null)}
      >
        <i className="eva eva-log-out text-xl" />
        Logout
      </Button>
    </div>
  );
}

export default Profile;
