import { Heading as NativeBaseHeading, IHeadingProps } from "native-base";

type Props = IHeadingProps;

export function Heading({ ...rest }: Props) {
  return <NativeBaseHeading fontFamily="heading" {...rest} />;
}
