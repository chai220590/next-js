import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function ArticleCard({ title, description, link, image }: any) {
  return (
    <div className="col-span-2 md:col-span-1">
      <Card className="py-4 shadow-none transition-transform transform hover:scale-105 cursor-pointer">
        <CardHeader className="pb-0 pt-2 items-start">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            width={"100%"}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <p className="text-tiny uppercase font-bold">{title}</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">{description}</h4>
        </CardBody>
      </Card>
    </div>
  );
}
