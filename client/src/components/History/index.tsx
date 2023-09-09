import { useNavigate } from "react-router-dom";
import Button from "../Button";

type Props = {
  data: {
    id: string;
    title: string;
    category: string;
    url: string;
  };
};

function History({ data }: Props) {
  const { id, title, category, url } = data;
  const navigate = useNavigate();  
  
  return (
    <div className="border-2 p-3 mb-2 rounded flex justify-between items-center">
      <div className="space-y-4">
        <h1 className="text-2xl mb-2">{title}</h1>
        <span className="bg-blue-300 rounded-lg px-2 py-1">{category}</span>
        <p className="text-gray-500">{url}</p>
      </div>  
      <div>
        <Button onClick={()=>navigate(`/app/details/${id}`)}>View</Button>
      </div>
    </div>
  );
}

export default History;
