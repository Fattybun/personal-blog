// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "../ui/breadcrumb";
// import fetchPost from "@/api/post_detail";

// type BlogProps = {
//   blog: string;
// };

const BlogDetail = async () => {
  // const post = await fetchPost(blog as unknown as number);

  // if (!post) {
  //   return <div>No posts found</div>;
  // }

  return (
    <div className="h-screen p-10">
      {/* <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="hover:text-primary">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-primary">Blog</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-primary">{post.ID}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    <h2 className="font-bold text-4xl">{post.title}</h2>
    <section
      dangerouslySetInnerHTML={{ __html: post.content }}
      className="leading-loose"
    /> */}
    </div>
  );
};

export default BlogDetail;
