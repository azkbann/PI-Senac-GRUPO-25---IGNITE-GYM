import { Heading } from "@components/Heading";
import { HistoryDTO } from "@dtos/HistoryDTO";
import { HStack, Text, VStack } from "native-base";

type Props = {
  data: HistoryDTO;
};

export function HistoryCard({ data }: Props) {
  return (
    <HStack alignItems="center" bg="gray.600" mb={3} px={5} py={4} rounded="md">
      <VStack flex={1} mr={5}>
        <Heading
          color="white"
          fontSize="md"
          textTransform="capitalize"
          numberOfLines={1}
        >
          {data.group}
        </Heading>
        <Text color="gray.100" fontSize="lg" numberOfLines={1}>
          {data.name}
        </Text>
      </VStack>
      <Text color="gray.300" fontSize="md">
        {data.hour}
      </Text>
    </HStack>
  );
}
