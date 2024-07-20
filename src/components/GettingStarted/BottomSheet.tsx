export default function BottomSheet() {
  return (
    <div className="absolute bottom-0 left-0 grid w-full place-content-center p-3">
      <div className="prose w-full min-w-0 rounded-3xl bg-accent p-6 text-center md:max-w-md">
        <h2>
          Bring <span className="text-red-500">Free</span> streaming to <br />
          Your Devices
        </h2>

        <p className="mt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          id.
        </p>

        <button className="btn btn-primary w-full">Get Started</button>
      </div>
    </div>
  );
}
