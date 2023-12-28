
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
export default function MyCard(){


  return (
    <Card className="max-w-[340px]">
      <CardHeader shadow="lg" className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/images/tg.png" />
          <div className="flex flex-row gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
        <Button
          className={"bg-transparent text-foreground border-blue-200"}
          color="primary"
          radius="full"
          size="sm"
          variant={["bordered","solid"]}
        //   onPress={() => console.log('Button pressed')}
        >
            Follow
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
        </p>
        <span className="pt-2">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}