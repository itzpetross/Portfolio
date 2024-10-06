import axios from "axios";

export async function getProjects(){
    try{
        const res = await axios.get("/api/portfolio/projects",{
            method: "GET",
            headers:{
                "x-access-token": process.env.NEXT_PUBLIC_API_TOKEN
            }
        });

        const data = res.data.data;
        return data;
    }catch(e){
        console.log(e);
    }
}