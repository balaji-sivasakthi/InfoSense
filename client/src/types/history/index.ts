export type History = {
    id: string;
    title: string;
    short_description: string;
    content: string;
    tags: string[];
    category: string;
    news_url: string;
};

export interface LoadingState {
    loading: boolean;
}

export interface HistoryState {
    data: History[];
    loading: 'pending' | 'succeeded' | 'failed';
}
