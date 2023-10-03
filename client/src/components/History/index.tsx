import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';
import { truncate } from '../../utils';

type Props = {
    data: {
        id: string;
        title: string;
        category: string;
        news_url: string;
    };
};

function History({ data }: Props) {
    const { id, title, category, news_url } = data;
    const navigate = useNavigate();

    return (
        <div className="border-2 p-3 mb-2 rounded flex justify-between items-center hover:cursor-pointer hover:border-blue-600">
            <div className="space-y-4">
                <h1 className="text-2xl mb-2">{truncate(title, 70)}</h1>
                <span className="bg-blue-300 rounded-lg px-2 py-1">
                    {category}
                </span>
                <p className="text-gray-500">
                    <Link to={news_url}>{truncate(news_url,90)}</Link>
                </p>
            </div>
            <div>
                <Button onClick={() => navigate(`/app/details/${id}`)}>
                    View
                </Button>
            </div>
        </div>
    );
}

export default History;
