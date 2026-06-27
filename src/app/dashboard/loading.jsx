import { Skeleton } from "@heroui/react";

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR SKELETON */}
      <header
        className="
        h-20
        bg-white
        border-b
        flex
        items-center
        justify-between
        px-6
        md:px-10
        "
      >
        {/* Left nav links */}
        <div className="flex items-center gap-8">
          <Skeleton
            className="
            w-20
            h-5
            rounded
            "
          />

          <Skeleton
            className="
            w-32
            h-5
            rounded
            "
          />
        </div>

        {/* Right profile */}

        <div className="flex items-center gap-5">
          <Skeleton
            className="
            w-10
            h-10
            rounded-full
            "
          />

          <Skeleton
            className="
            w-28
            h-10
            rounded-xl
            "
          />
        </div>
      </header>

      {/* CHILDREN CONTENT SKELETON */}

      <main
        className="
        p-6
        md:p-8
        space-y-8
        "
      >
        {/* Hero Section */}

        <Skeleton
          className="
          w-full
          h-72
          rounded-3xl
          "
        />

        {/* Analytics Cards */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-5
          "
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="
              bg-white
              border
              rounded-3xl
              p-6
              space-y-5
              "
            >
              <Skeleton
                className="
                w-14
                h-14
                rounded-2xl
                "
              />

              <Skeleton
                className="
                w-24
                h-8
                rounded
                "
              />

              <Skeleton
                className="
                w-36
                h-4
                rounded
                "
              />
            </div>
          ))}
        </div>

        {/* Chart Skeleton */}

        <div
          className="
          grid
          md:grid-cols-2
          gap-6
          "
        >
          <div
            className="
            bg-white
            border
            rounded-3xl
            p-6
            "
          >
            <Skeleton
              className="
              w-40
              h-5
              rounded
              mb-5
              "
            />

            <Skeleton
              className="
              w-full
              h-64
              rounded-2xl
              "
            />
          </div>

          <div
            className="
            bg-white
            border
            rounded-3xl
            p-6
            "
          >
            <Skeleton
              className="
              w-40
              h-5
              rounded
              mb-5
              "
            />

            <Skeleton
              className="
              w-full
              h-64
              rounded-2xl
              "
            />
          </div>
        </div>
      </main>
    </div>
  );
}
