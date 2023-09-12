import { useState } from 'react';
import Button from '../Button';
import ApiFactory from '../../api/factory';
import { useDispatch } from 'react-redux';
import { getAllHistory } from '../../redux/history/historiesSlice';
import { AppDispatch } from '../../redux';
import { changeLoadingState } from '../../redux/loader/loaderSlice';

type Props = {};

function SearchBar({}: Props) {
    const [news_url, setUrl] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const handleOnPredict = async () => {
        let url_pattern =
            '(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})';
        let regex = new RegExp(url_pattern);
        if (!news_url.match(regex)) {
            alert('Invaild Url');
            return;
        }
        dispatch(changeLoadingState(true));
        await ApiFactory.create(ApiFactory.history)?.addRequest(news_url);

        dispatch(getAllHistory());

        dispatch(changeLoadingState(false));
        setUrl('');
    };

    return (
        <div className="flex space-x-4">
            <input
                className="w-11/12 border-2 focus:outline-none p-2 rounded-lg"
                type="text"
                value={news_url}
                onChange={(event) => setUrl(event.target.value)}
                placeholder="Enter the Url"
            />
            <Button onClick={handleOnPredict} className="w-1/12">
                Predict
            </Button>
        </div>
    );
}

export default SearchBar;
