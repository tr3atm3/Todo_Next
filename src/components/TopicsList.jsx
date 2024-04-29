import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Topics");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

async function TopicsList() {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((t) => (
        <div
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
          key={t._id}
        >
          <div className="flex gap-4">
            <h2 className="font-bold text-2xl">{t.title}</h2>
          </div>
          <div className="flex gap-2">
            <RemoveBtn />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default TopicsList;
