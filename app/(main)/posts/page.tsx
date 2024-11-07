import BackButton from "@/components/BackButton";
import PostPagination from "@/components/post/PostPagination";
import PostsTable from "@/components/post/PostsTable";

const PostsPage = () => {
    return ( <>

    <BackButton text="Go Back" link="/"/>
    <PostsTable />
    <PostPagination />

    </>);
}
 
export default PostsPage;