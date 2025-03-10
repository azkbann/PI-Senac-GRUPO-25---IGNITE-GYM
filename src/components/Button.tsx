import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type VariantType = "solid" | "outline";

type ButtonProps = IButtonProps & {
  title: string;
  variant?: VariantType;
};

export function Button({ title, variant = "solid", ...rest }: ButtonProps) {
  return (
    <ButtonNativeBase
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderColor={variant === "outline" ? "green.500" : "transparent"}
      borderWidth={1}
      w="full"
      h={14}
      rounded="sm"
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "green.500",
      }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "green.500" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
