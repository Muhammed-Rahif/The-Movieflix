import avatarImg from "../assets/profileAvatar.jpg";
import { Button } from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";
function Profile() {
  return (
    <div className="flex h-full w-full flex-col items-center sm:flex-row">
      {/* edit profile */}
      <div className="flex w-3/4 flex-col items-center md:w-1/2 xl:w-1/2">
        <div className="relative">
          <img src={avatarImg} className="w-28 rounded-md" alt="" />
          <span className="absolute -right-3 bottom-3">
            <i className="eva eva-plus-square text-3xl" />
          </span>
        </div>
        <div className="w-full rounded-sm bg-slate-800 p-1">
          <p className="m-0">Frank</p>
        </div>
      </div>
      {/* settings */}
      <div className="mt-7 flex w-full flex-col items-center justify-center sm:mx-8">
        <div className="flex w-full items-center justify-between rounded-lg bg-slate-800 py-2">
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
        <div className="mt-3 flex w-full items-center justify-between rounded-lg bg-slate-800 py-2">
          <i className="eva eva-play-circle px-2 text-4xl" />
          <div className="flex flex-auto flex-col">
            <h4 className="m-0">Autoplay next episode</h4>
            <p className="m-0">On all devices</p>
          </div>
          <div className="mr-3">
            <Switch color="blue" defaultChecked />
          </div>
        </div>
      </div>
      {/* delete profile */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 transform">
        <Button className="flex items-center gap-1 rounded-md bg-black p-2 font-bold">
          <i className="eva eva-trash-2 text-xl" />
          Delete Profile
        </Button>
      </div>
    </div>
  );
}

export default Profile;
