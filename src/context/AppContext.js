import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";




// step1-createcontext
export const AppContext=createContext();

export default function AppContextProvider({children}){
    const[loading,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalpages,setTotalpages]=useState(null);


    //filling values


    async function fetchBlog(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

      try{
        const result= await fetch(url);
        const data= await result.json();
        setPosts(data.posts);
        setPage(data.page);
        setTotalpages(data.totalPages);


      }

      catch(error){
        console.log("Error in fetching data");
        setPage(1);
        setPosts([]);
        setTotalpages(null);

      }
      setLoading(false);

        

    }
    function changePageHandler(page){
        setPage(page);
        fetchBlog(page);

    }


    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalpages,
        setTotalpages,
        fetchBlog,
        changePageHandler
    };
    


    //step-2 apply provider
    return <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>;


}


