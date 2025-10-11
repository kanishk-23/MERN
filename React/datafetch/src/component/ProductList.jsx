import React from "react";
import useFetch from "./useFetch";

const ProductList = () => {
  const { data, loading, error } = useFetch(
    // "https://jsonplaceholder.typicode.com/users?delay=3000",
    // "https://jsonplaceholder.typicode.com/users",
    "https://api.escuelajs.co/api/v1/products/"
    // "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-700 loading">Loading</p>
      </div>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="product">
        {data.map((user) => (
          <div
            key={user.id}
            className="block items-center justify-center border rounded-lg p-4 shadow-md max-h-80 overflow-y-auto scrollbar-hide"
          >
            {/* <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.username}</p> */}

            <p>{user.title}</p>
            <img className="w-30" src={user.images[0]} alt={user.title} />

            {/* <p>{user.name}</p>
            <p>{user.title}</p>
            <p>{user.body}</p> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
