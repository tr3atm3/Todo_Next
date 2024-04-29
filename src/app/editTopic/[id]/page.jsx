import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
export default async function EdiTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title } = topic;
  return <EditTopicForm id={id} title={title} />;
}
