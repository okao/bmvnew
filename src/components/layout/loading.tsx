import { Card, Skeleton, Button } from '@nextui-org/react';

const numbers = Array.from({ length: 12 }, (_, i) => i + 1);

export default function Loading() {
  return (
    <div>
      <div className="p-3 grid grid-cols-1 gap-4 w-screen justify-center">
        <Card className="space-y-6 p-4" radius="lg">
          <Skeleton isLoaded={false} className="rounded-lg">
            <div className="h-3 rounded-lg bg-secondary"></div>
          </Skeleton>
          <div className="space-y-16">
            <Skeleton isLoaded={false} className="rounded-lg">
              <div className="h-16 w-full rounded-lg bg-secondary"></div>
            </Skeleton>
          </div>
        </Card>
        <div className="mt-4">
          <Card
            className="space-y-12 p-4 flex items-center"
            radius="lg"
          >
            <Skeleton
              isLoaded={false}
              className="rounded-lg w-full md:w-1/2 lg:w-1/4"
            >
              <div className="h-8 rounded-lg bg-secondary "></div>
            </Skeleton>
          </Card>
        </div>
      </div>

      <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mt-12 w-screen justify-center">
        {numbers.map((number, key) => {
          return (
            <Card className="space-y-5 p-4" radius="lg" key={key}>
              <Skeleton isLoaded={false} className="rounded-lg">
                <div className="h-24 rounded-lg bg-secondary"></div>
              </Skeleton>
              <div className="space-y-3">
                <Skeleton
                  isLoaded={false}
                  className="w-3/5 rounded-lg"
                >
                  <div className="h-3 w-full rounded-lg bg-secondary"></div>
                </Skeleton>
                <Skeleton
                  isLoaded={false}
                  className="w-4/5 rounded-lg"
                >
                  <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
                </Skeleton>
                <Skeleton
                  isLoaded={false}
                  className="w-2/5 rounded-lg"
                >
                  <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
                </Skeleton>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
