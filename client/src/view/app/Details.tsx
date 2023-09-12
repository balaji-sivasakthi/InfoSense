import { useParams } from 'react-router-dom';
import AppLayout from '../../layouts/AppLayout';
import ArticleDetails from '../../components/Article';
import { useEffect, useState } from 'react';
import ApiFactory from '../../api/factory';
import { History } from '../../types/history';

type Props = {};

function Details({}: Props) {
    const { id } = useParams();
    const [data, setData] = useState<History>();
    const getDetails = async (id: string) => {
        return await ApiFactory.create(ApiFactory.history)?.getHistoryById(id);
    };

    useEffect(() => {
        getDetails(id!).then((result) => {
            setData(result);
            console.log(result);
        });
    }, [id]);

    return (
        <AppLayout>
            {data ? <ArticleDetails info={data} /> : <p>Loading...</p>}
        </AppLayout>
    );
}

export default Details;
