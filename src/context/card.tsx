import { TCardAttributeValue, TCardTypeValue } from "@/types/card";
import html2canvas from "html2canvas";
import {
  ChangeEvent,
  createContext,
  ReactNode,
  RefObject,
  useRef,
  useState,
} from "react";

type TCardContext = {
  cardType: TCardTypeValue;
  handleChangeCardType: (value: TCardTypeValue) => void;
  cardName: string;
  handleChangeCardName: (e: ChangeEvent<HTMLInputElement>) => void;
  cardRef: RefObject<HTMLDivElement | null>;
  handleDownload: () => void;
  handleImageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  image: string | null;
  cardAttribute: TCardAttributeValue | "trap" | "spell";
  handleChangeCardAttribute: (value: TCardAttributeValue) => void;
};

export const CardContext = createContext<TCardContext>({} as TCardContext);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [cardType, setCardType] = useState<TCardTypeValue>("normal");
  const [cardName, setCardName] = useState<string>("");
  const [cardAttribute, setCardAttribute] = useState<
    TCardAttributeValue | "trap" | "spell"
  >("dark");
  const [image, setImage] = useState<string | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;

    const canvas = await html2canvas(cardRef.current);
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "meu-card.png";
    link.click();
  };

  const handleSetDefaultCardAttribute = (value: TCardTypeValue) => {
    if (value === "trap") {
      handleChangeCardAttribute("trap");
    }

    if (value === "spell") {
      handleChangeCardAttribute("spell");
    }

    if (value !== "spell" && value !== "trap") {
      handleChangeCardAttribute("dark");
    }
  };

  const handleChangeCardType = (value: TCardTypeValue) => {
    handleSetDefaultCardAttribute(value);

    setCardType(value);
  };

  const handleChangeCardName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCardName(value);
  };

  const handleChangeCardAttribute = (
    value: TCardAttributeValue | "trap" | "spell"
  ) => {
    setCardAttribute(value);
  };

  return (
    <CardContext.Provider
      value={{
        cardType,
        handleChangeCardType,
        cardName,
        handleChangeCardName,
        cardRef,
        handleDownload,
        handleImageChange,
        image,
        cardAttribute,
        handleChangeCardAttribute,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
