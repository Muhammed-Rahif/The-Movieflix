import { Button, Card, CardBody } from "@material-tailwind/react";

export default function HeaderCard() {
  return (
    <Card
      style={{
        backgroundImage: `url('https://picsum.photos/800/600?random${new Date().getTime()}')`,
      }}
      className="relative h-full max-w-none items-center justify-end rounded-none bg-secondary bg-cover bg-center bg-no-repeat text-center"
    >
      <CardBody className="prose prose-invert relative z-10 flex flex-col items-center !text-white">
        <img
          src="https://image.tmdb.org/t/p/original/48X8UAZv2i8Dsx3OJDvgdYiKcrt.png"
          className="m-0 h-12"
        />
        <p>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </p>
        <Button size="sm" className="flex items-center gap-2">
          <i className="eva eva-play-circle text-xl" /> Play
        </Button>
      </CardBody>

      <div className="pointer-events-none absolute bottom-0 z-0 h-full w-full bg-gradient-to-b from-transparent to-black/75"></div>
    </Card>
  );
}
