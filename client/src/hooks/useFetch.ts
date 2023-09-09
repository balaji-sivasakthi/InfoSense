type ArticleReponse = {
    data: [];
    err : boolean;
}
const useFetch = async (url:string):Promise<ArticleReponse> => {
    try {
        const response = await fetch(`${import.meta.env.BASE_URL}/${url}`)
        return await response.json();
    } catch (error) {
        return {data:[], err:true}   
    }          
}

export default useFetch;