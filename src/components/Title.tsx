interface TitleProps {
    title: string;
    }

function Title({ title }: TitleProps) {
  return (
    <h1 className="uppercase text-3xl font-bold text-center mb-5">
        {title}
    </h1>
  )
}

export default Title
