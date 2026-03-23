import NextImage, { type ImageProps } from "next/image";
import { withBasePath } from "@/lib/base-path";

function resolveSrc(src: ImageProps["src"]) {
  if (typeof src !== "string") {
    return src;
  }

  return withBasePath(src);
}

export default function Image(props: ImageProps) {
  return <NextImage {...props} src={resolveSrc(props.src)} />;
}
