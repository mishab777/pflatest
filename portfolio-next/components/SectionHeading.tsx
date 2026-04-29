type Props = {
  eyebrow: string;
  title: string;
};

export default function SectionHeading({ eyebrow, title }: Props) {
  return (
    <div className="text-center">
      <p className="text-white/80 text-sm md:text-base">{eyebrow}</p>
      <h1 className="text-white text-3xl md:text-4xl font-semibold mt-1">
        {title}
      </h1>
    </div>
  );
}
