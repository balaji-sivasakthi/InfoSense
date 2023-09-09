import React from "react";

type Props = {
  info: {
    id: string;
    title: string;
    summary: string;
    category: string;
    content: string;
    tags: string[];
  };
};

function ArticleDetails({ info }: Props) {
  console.log(info);

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl">Title</h1>
        <p>{info?.title}</p>
      </div>
      <div>
        <h1 className="text-2xl mb-3">Category</h1>
        <span className="bg-blue-500 rounded-lg m-1 p-2 text-white">
          {info.category}
        </span>
      </div>
      <div>
        <h1 className="text-2xl mb-3">Tags</h1>
        {info.tags.map((item) => (
          <span className="bg-gray-300 m-1 p-2 rounded-lg">{item}</span>
        ))}
      </div>
      <div>
        <h1 className="text-2xl">Summary</h1>
        <p>{info?.summary}</p>
      </div>
      <div>
        <span className="text-2xl">Content</span>
        <p>{info?.content}</p>
      </div>
    </div>
  );
}

export default ArticleDetails;
