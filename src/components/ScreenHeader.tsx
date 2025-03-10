import { Heading } from "@components/Heading";
import { Center } from "native-base";

type Props = {
  title: string;
};

export function ScreenHeader({ title }: Props) {
  return (
    <Center bg="gray.600" pt={16} pb={6}>
      <Heading fontSize="xl" color="gray.100">
        {title}
      </Heading>
    </Center>
  );
}
