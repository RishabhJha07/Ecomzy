import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

function Home() {
  const url ="https://fakestoreapi.com/products";
  const [loading,setLoading]= useState(false);
  const [posts,setPosts]=useState([]);
  async function fetchProductData(){
    setLoading(true);
    try{
      const res =await fetch(url);
      const data=await res.json();
      setPosts(data);
    }
    catch(error){
      console.log("error aa gaya")
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[]);

  return (
    <div>
      {
        loading ? (<div className="w-full h-screen flex flex-col justify-center items-center"><Spinner/></div>):(posts.length>0 ? 
        (<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
          {
            posts.map((post)=>(
              <Product key={post.id} post={post}/>
            ))
          }
        </div>):
        (<div className='flex justify-center items-center'>No data Found</div>))
      }
    </div>
  )
}

export default Home