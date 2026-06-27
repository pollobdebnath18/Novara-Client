import { Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <div className="p-6">
      {/* Header Skeleton */}
      <div className="mb-8 space-y-3">
        <Skeleton
          className="
          h-10
          w-72
          rounded-xl
          "
        />

        <Skeleton
          className="
          h-4
          w-96
          rounded-lg
          "
        />

        <div className="flex gap-4 mt-4">
          <Skeleton
            className="
            h-4
            w-32
            rounded-lg
            "
          />

          <Skeleton
            className="
            h-4
            w-24
            rounded-lg
            "
          />

          <Skeleton
            className="
            h-4
            w-28
            rounded-lg
            "
          />
        </div>
      </div>

      {/* Search Filter Sort Skeleton */}

      <div
        className="
        flex
        flex-wrap
        gap-4
        mb-8
        "
      >
        <Skeleton
          className="
          h-11
          w-full
          lg:w-96
          rounded-2xl
          "
        />

        <Skeleton
          className="
          h-11
          w-36
          rounded-2xl
          "
        />

        <Skeleton
          className="
          h-11
          w-36
          rounded-2xl
          "
        />
      </div>

      {/* Book Grid Skeleton */}

      <div
        className="
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-5
        "
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="
              rounded-2xl
              border
              bg-white
              overflow-hidden
              shadow-sm
              "
          >
            {/* Cover */}
            <Skeleton
              className="
                h-56
                w-full
                rounded-none
                "
            />

            <div className="p-4 space-y-3">
              {/* Title */}
              <Skeleton
                className="
                  h-5
                  w-4/5
                  rounded-lg
                  "
              />

              {/* Writer */}
              <Skeleton
                className="
                  h-4
                  w-2/5
                  rounded-lg
                  "
              />

              {/* Description */}
              <Skeleton
                className="
                  h-3
                  w-full
                  rounded-lg
                  "
              />

              <Skeleton
                className="
                  h-3
                  w-3/4
                  rounded-lg
                  "
              />

              {/* Price + button */}

              <div
                className="
                  flex
                  justify-between
                  items-center
                  pt-3
                  "
              >
                <Skeleton
                  className="
                    h-6
                    w-20
                    rounded-lg
                    "
                />

                <Skeleton
                  className="
                    h-9
                    w-24
                    rounded-xl
                    "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
