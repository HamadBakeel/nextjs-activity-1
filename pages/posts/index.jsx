import Navbar from "@/components/components/Navbar.jsx ";
import Link from "next/link";

export default function Posts({posts}){

    return(
        <>
            <Navbar/>
            <h1>Posts page</h1>
            {posts.map(post => <p key={post.id}>
                {post.title} <Link href={"posts/"+post.id}>Read more...</Link>
            </p>)}

        </>
    )
}
export async function getStaticProps(){
    const posts = await fetch('https://dummyjson.com/posts').then(res => res.json())
    // console.log(posts)
    return{
        props:{
            posts: posts.posts
        }
    }
}