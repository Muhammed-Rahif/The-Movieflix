type Props = {
  title: string;
};
function CardsList({ title }: Props) {
  return (
    <div className="prose prose-invert max-w-none">
      <h3 className="mx-4 mb-1 font-medium xl:mx-6">{title}</h3>
      <div className="flex gap-3 overflow-y-hidden overflow-x-scroll px-4 xl:px-6">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="aspect-3/4 min-w-28 cursor-pointer overflow-clip rounded-xl border-2 border-transparent bg-cover bg-center bg-no-repeat duration-200 hover:border-primary active:border-primary"
            style={{
              backgroundImage: `url('https://picsum.photos/300/200?id=${i}')`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default CardsList;
