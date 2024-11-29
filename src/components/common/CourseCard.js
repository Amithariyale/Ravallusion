import { Like, Views } from "@/lib/svg_icons";
import Image from "next/image";

const CourseCard = ({ course }) => {
  const { title, description, views, likes, imageUrl } = course;

  return (
    <div className="p-3 flex flex-col items-start gap-2 bg-[var(--card)] text-white rounded-2xl  sm:w-full ">
      <Image
        src={imageUrl}
        alt={title}
        width={100}
        height={100}
        className="w-full h-40 object-cover rounded-2xl"
      />
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-400 text-xs">{description}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-xs ">
          <span className="flex items-center space-x-1">
            <Views />
            <span>{views}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Like />
            <span>{likes}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
