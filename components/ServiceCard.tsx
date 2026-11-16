interface ServiceCardProps {
  title: string;
  items: readonly string[];
}


export default function ServiceCard({
  title,
  items,
}: ServiceCardProps) {

  return (

    <div
      className="
      rounded-2xl
      border
      border-slate-200
      bg-white
      p-6
      shadow-sm
      transition
      hover:-translate-y-1
      hover:shadow-lg
      "
    >


      <h3
        className="
        text-xl
        font-bold
        font-heading
        text-electric
        "
      >

        {title}

      </h3>



      <ul className="mt-5 space-y-3">


        {items.map((item)=>(

          <li
            key={item}
            className="
            flex
            items-start
            gap-3
            text-slate-600
            "
          >

            <span
              className="
              mt-2
              h-2
              w-2
              rounded-full
              bg-electric
              "
            />

            <span>
              {item}
            </span>


          </li>

        ))}


      </ul>


    </div>

  );

}