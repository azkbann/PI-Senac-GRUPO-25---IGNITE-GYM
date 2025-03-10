import { Heading } from "@components/Heading";
import { ExerciseDTO } from "@dtos/ExerciseDTO";
import { Entypo } from "@expo/vector-icons";
import { api } from "@services/api";
import { HStack, Icon, Image, Text, VStack } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  data: ExerciseDTO;
};

export function ExerciseCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        alignItems="center"
        bg="gray.500"
        mb={3}
        p={2}
        pr={4}
        rounded="md"
      >
        <Image
          source={{
            uri: `${api.defaults.baseURL}/exercise/thumb/${data.thumb}`,
          }}
          alt="Imagem do treino"
          mr={4}
          h={16}
          w={16}
          resizeMode="cover"
          rounded="md"
        />

        <VStack flex={1} mr={4}>
          <Heading fontSize="lg" color="white">
            {data.name}
          </Heading>
          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            {data.series} séries x {data.repetitions} repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
}
