import { Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <div className="p-6">
      <div
        className="
        rounded-3xl
        border
        bg-white
        shadow-sm
        p-6
        md:p-10
        "
      >
        <div
          className="
          grid
          md:grid-cols-2
          gap-10
          "
        >
          {/* Book Cover */}

          <div
            className="
            flex
            justify-center
            "
          >
            <Skeleton
              className="
              w-72
              h-[420px]
              rounded-2xl
              "
            />
          </div>

          {/* Details */}

          <div
            className="
            space-y-5
            "
          >
            {/* Title */}

            <Skeleton
              className="
              h-10
              w-4/5
              rounded-xl
              "
            />

            {/* Writer */}

            <Skeleton
              className="
              h-5
              w-48
              rounded-lg
              "
            />

            {/* Genre + Status */}

            <div
              className="
              flex
              gap-3
              "
            >
              <Skeleton
                className="
                h-8
                w-24
                rounded-full
                "
              />

              <Skeleton
                className="
                h-8
                w-28
                rounded-full
                "
              />
            </div>

            {/* Description */}

            <div className="space-y-3">
              <Skeleton
                className="
                h-4
                w-full
                rounded-lg
                "
              />

              <Skeleton
                className="
                h-4
                w-full
                rounded-lg
                "
              />

              <Skeleton
                className="
                h-4
                w-3/4
                rounded-lg
                "
              />
            </div>

            {/* Price */}

            <Skeleton
              className="
              h-10
              w-32
              rounded-xl
              "
            />

            {/* Button */}

            <Skeleton
              className="
              h-12
              w-48
              rounded-xl
              "
            />

            {/* Extra info */}

            <div
              className="
              grid
              grid-cols-2
              gap-4
              pt-5
              "
            >
              <Skeleton
                className="
                h-16
                rounded-xl
                "
              />

              <Skeleton
                className="
                h-16
                rounded-xl
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
