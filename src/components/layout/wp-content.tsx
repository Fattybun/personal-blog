"use client";

import React from "react";
import parse, {
  HTMLReactParserOptions,
  Element,
  domToReact,
  DOMNode,
} from "html-react-parser";
import Image from "next/image";

interface ContentRendererProps {
  content: string;
}

const ContentRenderer = ({ content }: ContentRendererProps) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (!(domNode instanceof Element)) {
        return;
      }

      // Handle WordPress blocks and elements
      switch (domNode.name) {
        // Headings
        case "h1":
          return (
            <h1 className="text-4xl font-bold my-6 text-primary">
              {domToReact(domNode.children as DOMNode[], options)}
            </h1>
          );
        case "h2":
          return (
            <h2 className="text-3xl font-bold my-5 text-primary">
              {domToReact(domNode.children as DOMNode[], options)}
            </h2>
          );
        case "h3":
          return (
            <h3 className="text-2xl font-bold my-4 text-primary">
              {domToReact(domNode.children as DOMNode[], options)}
            </h3>
          );
        case "h4":
          return (
            <h4 className="text-xl font-bold my-3 text-primary">
              {domToReact(domNode.children as DOMNode[], options)}
            </h4>
          );

        // Paragraphs
        case "p":
          return (
            <p className="my-4 leading-relaxed">
              {domToReact(domNode.children as DOMNode[], options)}
            </p>
          );

        // Lists
        case "ul":
          return (
            <ul className="list-disc list-inside my-4 space-y-2">
              {domToReact(domNode.children as DOMNode[], options)}
            </ul>
          );
        case "ol":
          return (
            <ol className="list-decimal list-inside my-4 space-y-2">
              {domToReact(domNode.children as DOMNode[], options)}
            </ol>
          );
        case "li":
          return (
            <li className="ml-4">
              {domToReact(domNode.children as DOMNode[], options)}
            </li>
          );

        // Blockquote
        case "blockquote":
          return (
            <blockquote className="border-l-4 border-primary pl-4 my-4 italic ">
              {domToReact(domNode.children as DOMNode[], options)}
            </blockquote>
          );

        // Code blocks
        case "pre":
          return (
            <pre className="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto">
              {domToReact(domNode.children as DOMNode[], options)}
            </pre>
          );
        case "code":
          return (
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">
              {domToReact(domNode.children as DOMNode[], options)}
            </code>
          );

        // Links
        case "a":
          return (
            <a
              href={domNode.attribs.href}
              className="text-primary hover:underline"
              target={
                domNode.attribs.href?.startsWith("http") ? "_blank" : undefined
              }
              rel={
                domNode.attribs.href?.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {domToReact(domNode.children as DOMNode[], options)}
            </a>
          );

        // Images
        case "img":
          return (
            <div className="my-6">
              <Image
                src={domNode.attribs.src}
                alt={domNode.attribs.alt || ""}
                // width={domNode.attribs.width}
                // height={domNode.attribs.height}
                className="rounded-lg max-w-full h-auto"
                loading="lazy"
              />
              {domNode.attribs.alt && (
                <p className="text-sm mt-2 text-center">
                  {domNode.attribs.alt}
                </p>
              )}
            </div>
          );

        // WordPress specific blocks
        case "figure":
          const figureClass = domNode.attribs?.class;
          if (figureClass?.includes("wp-block-image")) {
            return (
              <figure className="my-6">
                {domToReact(domNode.children as DOMNode[], options)}
              </figure>
            );
          }
          break;

        // Tables
        case "table":
          return (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                {domToReact(domNode.children as DOMNode[], options)}
              </table>
            </div>
          );
        case "th":
          return (
            <th className="border border-gray-300 px-4 py-2 bg-gray-100">
              {domToReact(domNode.children as DOMNode[], options)}
            </th>
          );
        case "td":
          return (
            <td className="border border-gray-300 px-4 py-2">
              {domToReact(domNode.children as DOMNode[], options)}
            </td>
          );
      }
    },
  };

  return (
    <article className="prose prose-lg max-w-none">
      {parse(content, options)}
    </article>
  );
};

export default ContentRenderer;
