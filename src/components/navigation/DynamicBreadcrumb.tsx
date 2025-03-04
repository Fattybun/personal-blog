"use client";

import { useMemo } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

type BreadcrumbItemData = {
  label: string;
  href: string;
  isCurrentPage?: boolean;
};

type DynamicBreadcrumbProps = {
  homeLabel?: string;
  // customLabels and currentPageLabel can be implemented if needed
  items?: Array<{
    label: string;
    href: string;
  }>;
};

const DynamicBreadcrumb = ({
  homeLabel = "Home",
  items = [],
}: DynamicBreadcrumbProps) => {
  const breadcrumbItems = useMemo(() => {
    // Start with home
    const defaultItems: BreadcrumbItemData[] = [{ label: homeLabel, href: "/" }];

    // Add custom items
    items.forEach((item, index) => {
      defaultItems.push({
        ...item,
        isCurrentPage: index === items.length - 1,
      });
    });

    return defaultItems;
  }, [homeLabel, items]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <div key={item.href} className="flex items-center">
            <BreadcrumbItem>
              {item.isCurrentPage ? (
                <BreadcrumbPage className="text-primary">
                  {item.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href} className="hover:text-primary">
                  {item.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;