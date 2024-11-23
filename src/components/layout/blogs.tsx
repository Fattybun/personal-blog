import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Badge } from "../ui/badge";
import fetchAllPosts from "@/api/posts";
import { formatDate } from "@/helpers/date-format";
import Link from "next/link";

const Blogs = async () => {
  const posts = await fetchAllPosts();

  if (!Array.isArray(posts)) {
    return <div>No posts found</div>;
  }

  return (
    <div className="h-screen p-10">
      <Breadcrumb>
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
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-3 gap-8 py-12">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={`blog/${post.ID}`}
            className="flex flex-col gap-4 rounded-lg cursor-pointer relative"
          >
            <div className="flex gap-2 absolute top-0 m-3">
              {Object.values(post.tags).map((tag, index) => (
                <Badge key={tag.ID || index} className="bg-zinc-800 font-bold">
                  {tag.name.toUpperCase()}
                </Badge>
              ))}
            </div>

            <Image
              alt="miscommunicate"
              src={post.featured_image}
              width={1920}
              height={1080}
              priority
              className="w-full object-cover h-60 rounded-md "
            />

            <sub className="text-gray-400">
              {formatDate(post.date, "DD MMM YYYY")}
            </sub>

            <h6 className="font-bold text-xl">{post.title}</h6>

            <span
              className="line-clamp-3 text-justify"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
