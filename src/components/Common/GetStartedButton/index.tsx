import Link from "next/link";
import { LinkTo } from "./styles";

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="https://wa.me/51966870897"
      target="_blank"
    >
      Contáctanos
    </LinkTo>
  );
};

export default GetStartedButton;
