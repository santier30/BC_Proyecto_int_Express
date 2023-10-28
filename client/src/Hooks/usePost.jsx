import { toast } from "react-toastify";

const usePost = (loading,suc,fail) => {
  const post = async (data, url) => {
    try {
      
      var id = toast.loading(loading);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        
        throw new Error(fail);
      }

      const responseData = await response.json();

      
      toast.update(id, { render: suc, type: "success", isLoading: false, autoClose: true });
      return responseData;
    } catch (error) {
      console.error(fail, error);

      
      toast.update(id, { render: fail, type: "error", isLoading: false, autoClose: true });
      throw error; 
    }
  };

  return post;
};

export default usePost;

