import Navbar from "@/components/components/Navbar.jsx ";

export default function Post({postDetails}){

    return(
        <>
            <Navbar/>
            <h1>Post details</h1>
            <h2>{postDetails.id} {postDetails.title}</h2>
            <p>{postDetails.body}</p>
        </>
    )
}

export async function getStaticPaths(){
    return{
        paths:[
            {params:{pid: '1'},},
            {params:{pid: '2'},},
            {params:{pid: '3'},},
        ],
        fallback : false
    }
}
export async function getStaticProps(context){
    const {params} = context
    const data = await fetch('https://dummyjson.com/posts/'+params.pid).then(res => res.json())
    // console.log(data)
    return{
        props:{
             postDetails: data
        }
    }
}